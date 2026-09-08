import Image from "next/image";
import Link from "next/link";
import type {ReactNode} from "react";
import {ButtonLink, Container} from "@/components/design-system";
import {fallbackNavigation} from "@/lib/content/fallback";
import {getSiteSettings} from "@/lib/sanity/repository";

const focusClass = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]";

function DesktopNav() {
  return (
    <nav aria-label="Navegação principal" className="hidden xl:block">
      <ul className="flex items-center gap-5">
        {fallbackNavigation.map((item) => (
          <li key={item.href} className="relative">
            {item.groups ? (
              <details className="group">
                <summary className={`${focusClass} flex cursor-pointer list-none items-center gap-2 py-7 text-sm text-[var(--color-primary)] hover:text-[var(--color-mauve)]`}>
                  {item.label}<span aria-hidden="true" className="text-xs transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <div className="absolute left-1/2 top-[4.75rem] w-[min(900px,calc(100vw-3rem))] -translate-x-1/2 border border-[var(--color-border)] bg-white p-8 shadow-[0_24px_70px_rgba(63,39,56,0.14)]">
                  <div className={`grid gap-8 ${item.groups.length > 1 ? "grid-cols-[1.1fr_repeat(4,minmax(0,1fr))]" : "grid-cols-2"}`}>
                    <div>
                      <p className="font-title text-2xl text-[var(--color-primary)]">{item.label}</p>
                      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">Escolha uma área ou veja a visão completa dos tratamentos.</p>
                      <Link href={item.href} className={`${focusClass} mt-6 inline-block text-sm font-semibold text-[var(--color-primary)] underline underline-offset-4`}>Ver todos</Link>
                    </div>
                    {item.groups.map((group) => (
                      <div key={group.label}>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-mauve)]">{group.label}</p>
                        <ul className="mt-4 grid gap-3">
                          {group.items.map((child) => <li key={child.href}><Link href={child.href} className={`${focusClass} text-sm leading-5 text-[var(--color-primary)] hover:underline`}>{child.label}</Link></li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            ) : <Link className={`${focusClass} py-7 text-sm text-[var(--color-primary)] hover:text-[var(--color-mauve)] hover:underline`} href={item.href}>{item.label}</Link>}
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileNav() {
  return (
    <ul className="grid gap-1">
      {fallbackNavigation.map((item) => (
        <li key={item.href}>
          {item.groups ? (
            <details>
              <summary className={`${focusClass} flex min-h-12 cursor-pointer list-none items-center justify-between py-3 text-lg text-[var(--color-primary)]`}>{item.label}<span aria-hidden="true">+</span></summary>
              <div className="border-l border-[var(--color-border)] pb-4 pl-4">
                <Link href={item.href} className="block py-2 text-sm font-semibold text-[var(--color-primary)] underline underline-offset-4">Ver visão geral</Link>
                {item.groups.flatMap((group) => group.items).map((child) => <Link key={child.href} href={child.href} className="block py-2 text-sm text-[var(--color-muted)]">{child.label}</Link>)}
              </div>
            </details>
          ) : <Link className={`${focusClass} block py-3 text-lg text-[var(--color-primary)]`} href={item.href}>{item.label}</Link>}
        </li>
      ))}
    </ul>
  );
}

async function Header() {
  const settings = await getSiteSettings();
  return (
    <header className="site-header sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/95 backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between gap-5">
        <Link href="/" aria-label={`${settings.clinicName} — página inicial`} className={`${focusClass} shrink-0`}><Image src="/images/logo-dra-sara.webp" alt={settings.clinicName} width={142} height={80} priority className="h-14 w-auto object-contain" /></Link>
        <DesktopNav />
        <div className="hidden sm:block"><ButtonLink href="/contato" location="header">Agendar avaliação</ButtonLink></div>
        <details className="group relative xl:hidden">
          <summary className={`${focusClass} flex min-h-11 cursor-pointer list-none items-center gap-3 border border-[var(--color-border)] px-4 text-sm font-semibold text-[var(--color-primary)]`}>Menu <span aria-hidden="true" className="text-lg">≡</span></summary>
          <div className="fixed inset-x-0 top-20 max-h-[calc(100svh-5rem)] overflow-y-auto border-b border-[var(--color-border)] bg-white p-5 shadow-[0_18px_40px_rgba(63,39,56,0.08)] sm:absolute sm:left-auto sm:right-0 sm:top-14 sm:w-96"><MobileNav /><div className="mt-5 sm:hidden"><ButtonLink href="/contato" location="mobile_navigation">Agendar avaliação</ButtonLink></div></div>
        </details>
      </Container>
    </header>
  );
}

async function Footer() {
  const settings = await getSiteSettings();
  return (
    <footer className="site-footer bg-[var(--color-ink)] py-16 text-white">
      <Container>
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.2fr_1fr_1fr]">
          <div><Image src="/images/logo-dra-sara.webp" alt={settings.clinicName} width={151} height={85} className="h-16 w-auto brightness-0 invert" /><p className="mt-5 max-w-sm leading-7 text-white/65">Odontologia e estética com planejamento individual nos Ingleses, Norte da Ilha de Florianópolis.</p></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Navegação</p><ul className="mt-5 grid gap-3 text-sm text-white/75">{fallbackNavigation.slice(0, 6).map((item) => <li key={item.href}><Link className="hover:text-white hover:underline" href={item.href}>{item.label}</Link></li>)}</ul></div>
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">Clínica</p><p className="mt-5 text-sm leading-7 text-white/75">{settings.locality}<br />{settings.region}</p><Link href="/contato" className="mt-4 inline-block text-sm font-semibold underline underline-offset-4">Contato e localização</Link></div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {settings.clinicName}. Todos os direitos reservados.</p><div className="flex flex-wrap gap-4"><Link href="/politica-de-privacidade" className="hover:text-white">Privacidade</Link><Link href="/politica-de-cookies" className="hover:text-white">Cookies</Link><span>Conteúdo informativo. A indicação depende de avaliação clínica.</span></div></div>
      </Container>
    </footer>
  );
}

export async function SiteShell({children}: {children: ReactNode}) {
  return <><Header /><main>{children}</main><Footer /></>;
}
