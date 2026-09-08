import {fallbackArticles, fallbackLandingPages, fallbackPages, fallbackProfessionals, fallbackSiteSettings, fallbackTreatments} from "../lib/content/fallback.ts";

type Expected = {path: string; title: string; description: string; canonical: string; index: boolean};
const baseUrl = (process.argv[2] ?? process.env.QA_BASE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const expected: Expected[] = [
  {path: "/", ...fallbackPages.home.seo, canonical: fallbackPages.home.seo.canonical ?? "/", index: fallbackPages.home.seo.index !== false},
  ...Object.values(fallbackPages).filter((page) => page.slug !== "home").map((page) => ({path: `/${page.slug}`, title: page.seo.title, description: page.seo.description, canonical: page.seo.canonical ?? `/${page.slug}`, index: page.seo.index !== false})),
  ...Object.values(fallbackTreatments).map((item) => ({path: `/${item.slug}`, title: item.seo.title, description: item.seo.description, canonical: item.seo.canonical ?? `/${item.slug}`, index: item.seo.index !== false})),
  ...Object.values(fallbackArticles).map((item) => ({path: item.path, title: item.seo.title, description: item.seo.description, canonical: item.seo.canonical ?? item.path, index: item.seo.index !== false})),
  ...Object.values(fallbackLandingPages).map((item) => ({path: `/${item.slug}`, title: item.seo.title, description: item.seo.description, canonical: item.seo.canonical ?? `/${item.slug}`, index: item.seo.index !== false})),
  ...fallbackProfessionals.filter((item) => item.profileHref?.startsWith("/equipe/") && item.seo).map((item) => ({path: item.profileHref!, title: item.seo!.title, description: item.seo!.description, canonical: item.seo!.canonical ?? item.profileHref!, index: item.seo!.index !== false})),
];

const failures: string[] = [];
const linked = new Set<string>(["/"]);
const normalize = (href: string) => {
  try {
    const url = new URL(href, baseUrl);
    if (url.origin !== new URL(baseUrl).origin) return null;
    return url.pathname.replace(/\/$/, "") || "/";
  } catch { return null; }
};
const match = (html: string, pattern: RegExp) => html.match(pattern)?.[1]?.trim() ?? "";
const decode = (value: string) => value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

async function read(path: string, redirect: RequestRedirect = "follow") {
  return fetch(`${baseUrl}${path}`, {redirect, headers: {"user-agent": "phase-3-content-qa"}});
}

for (const page of expected) {
  if (page.title.length > 65) failures.push(`${page.path}: title com ${page.title.length} caracteres`);
  if (page.description.length > 160) failures.push(`${page.path}: meta description com ${page.description.length} caracteres`);
  const response = await read(page.path);
  if (response.status !== 200) { failures.push(`${page.path}: status ${response.status}, esperado 200`); continue; }
  const html = await response.text();
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  if (h1Count !== 1) failures.push(`${page.path}: ${h1Count} H1, esperado 1`);
  const title = decode(match(html, /<title>([\s\S]*?)<\/title>/i));
  const description = decode(match(html, /<meta\s+name="description"\s+content="([^"]*)"/i) || match(html, /<meta\s+content="([^"]*)"\s+name="description"/i));
  const canonical = decode(match(html, /<link\s+rel="canonical"\s+href="([^"]*)"/i) || match(html, /<link\s+href="([^"]*)"\s+rel="canonical"/i));
  const robots = decode(match(html, /<meta\s+name="robots"\s+content="([^"]*)"/i) || match(html, /<meta\s+content="([^"]*)"\s+name="robots"/i));
  if (title !== page.title) failures.push(`${page.path}: title divergente (${title})`);
  if (description !== page.description) failures.push(`${page.path}: meta description divergente`);
  const expectedCanonical = new URL(page.canonical, fallbackSiteSettings.siteUrl).href;
  if (canonical.replace(/\/$/, "") !== expectedCanonical.replace(/\/$/, "")) failures.push(`${page.path}: canonical ${canonical || "ausente"}, esperado ${expectedCanonical}`);
  if (page.index && /noindex/i.test(robots)) failures.push(`${page.path}: deveria permitir indexação`);
  if (!page.index && !/noindex/i.test(robots)) failures.push(`${page.path}: deveria conter noindex`);
  const visibleText = html.replace(/<script\b[\s\S]*?<\/script>/gi, " ").replace(/<style\b[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
  if (/\b(placeholder|aguarda(?:m|ndo)?|em validação|a confirmar)\b/i.test(visibleText)) failures.push(`${page.path}: contém placeholder editorial visível`);
  for (const image of html.matchAll(/<img\b([^>]*)>/gi)) if (!/\balt="[^"]+"/i.test(image[1])) failures.push(`${page.path}: imagem sem alt descritivo`);
  for (const anchor of html.matchAll(/<a\b[^>]*href="([^"]+)"/gi)) {
    const target = normalize(decode(anchor[1]));
    if (target) linked.add(target);
  }
}

for (const path of linked) {
  if (path.startsWith("/_next") || path.startsWith("/studio") || path === "/favicon.ico") continue;
  const response = await read(path);
  if (response.status >= 400) failures.push(`link interno quebrado: ${path} (${response.status})`);
}
for (const page of expected.filter((item) => item.index && item.path !== "/")) if (!linked.has(page.path)) failures.push(`${page.path}: página indexável órfã`);

const forbidden = ["/404", "/contorno-equilibrio-facial", "/pagina-inexistente-phase-3", ...Object.values(fallbackArticles).filter((item) => item.path.startsWith("/conteudos/")).map((item) => `/${item.slug}`)];
for (const path of forbidden) {
  const response = await read(path);
  if (response.status !== 404) failures.push(`${path}: status ${response.status}, esperado 404`);
}

if (failures.length) {
  console.error(`QA falhou com ${failures.length} ocorrência(s):\n- ${failures.join("\n- ")}`);
  process.exitCode = 1;
} else {
  const indexable = expected.filter((item) => item.index).length;
  console.log(`QA aprovado: ${expected.length} rotas válidas (${indexable} indexáveis), ${linked.size} destinos internos e ${forbidden.length} rotas 404 verificadas.`);
}
