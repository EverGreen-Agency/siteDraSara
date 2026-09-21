import Image from "next/image";
import Link from "next/link";
import type {ReactNode} from "react";
import {Container} from "@/components/design-system";
import {SiteHeader} from "@/components/site-header";
import {fallbackNavigation} from "@/lib/content/fallback";
import {getSiteSettings} from "@/lib/sanity/repository";

async function Header() {
  const settings = await getSiteSettings();
  return <SiteHeader settings={settings} />;
}

async function Footer() {
  const settings = await getSiteSettings();
  return (
    <footer className="site-footer bg-[var(--color-ink)] py-6 text-white sm:py-7">
      <Container>
        <div className="grid gap-6 border-b border-white/10 pb-5 sm:gap-8 sm:pb-6 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image src="/images/logo-dra-sara.webp" alt={settings.clinicName} width={151} height={85} className="h-9 w-auto brightness-0 invert" />
            <p className="mt-2.5 max-w-sm text-xs leading-5 text-white/60 sm:text-sm sm:leading-6">Odontologia e estética com planejamento individual nos Ingleses, Norte da Ilha de Florianópolis.</p>
            <p className="mt-2 text-xs text-white/80"><span className="font-semibold text-white">Responsável Técnica:</span> Dra. Sara Michelon · CRO-SC 10632</p>
            <p className="mt-0.5 text-xs text-white/60">Registro EPAO 1697 SC</p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-xs">Navegação</p>
            <ul className="mt-2.5 grid gap-1.5 text-xs text-white/75 sm:text-sm">
              {fallbackNavigation.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link className="transition-colors hover:text-white hover:underline" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-xs">Clínica & Contato</p>
            <p className="mt-2.5 text-xs leading-5 text-white/75 sm:text-sm sm:leading-6">
              {settings.streetAddress ? (
                <>
                  {settings.streetAddress}<br />
                  {settings.locality}
                </>
              ) : (
                <>
                  {settings.locality}<br />
                  {settings.region}
                </>
              )}
            </p>
            <div className="mt-2 flex flex-col gap-0.5 text-xs text-white/75 sm:text-sm">
              {settings.whatsapp && (
                <a
                  href={`https://wa.me/55${settings.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="whatsapp_click"
                  data-track-location="footer"
                  className="transition-colors hover:text-white hover:underline"
                >
                  Recepção / WhatsApp: {settings.whatsapp}
                </a>
              )}
              {settings.phone && settings.phone !== settings.whatsapp && (
                <a
                  href={`tel:+55${settings.phone.replace(/\D/g, "")}`}
                  data-track-event="phone_click"
                  data-track-location="footer"
                  className="transition-colors hover:text-white hover:underline"
                >
                  Telefone: {settings.phone}
                </a>
              )}
              {settings.commercialPhone && (
                <a
                  href={`https://wa.me/55${settings.commercialPhone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="commercial_click"
                  data-track-location="footer"
                  className="mt-0.5 text-[11px] text-white/50 transition-colors hover:text-white/80 hover:underline"
                >
                  Comercial (suporte): {settings.commercialPhone}
                </a>
              )}
            </div>
            <Link href="/contato" className="group mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold underline underline-offset-4 transition-colors hover:text-[var(--color-gold-light)] sm:text-sm">
              <span>Ver rotas, mapa e contato</span>
              <svg className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-3.5 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
            <p>© {new Date().getFullYear()} {settings.clinicName}. Todos os direitos reservados.</p>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <p className="text-white/60">Responsável Técnica: Dra. Sara Michelon · CRO-SC 10632 · Registro EPAO 1697 SC</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/politica-de-privacidade" className="hover:text-white">Privacidade</Link>
            <Link href="/politica-de-cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export async function SiteShell({children}: {children: ReactNode}) {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-clip">{children}</main>
      <Footer />
    </>
  );
}
