"use client";

import {useState} from "react";
import Image from "next/image";
import type {InstitutionalPage, SiteSettings} from "@/lib/content/types";
import {Breadcrumbs, Container, Eyebrow, Heading, Section} from "@/components/design-system";

interface ContactViewProps {
  settings: SiteSettings;
  page: InstitutionalPage;
}

export function ContactView({settings}: ContactViewProps) {
  const [copied, setCopied] = useState(false);

  const addressForClipboard = "Rodovia Armando Calil Bulos, 6201, Salas 217 e 218, Ingleses do Rio Vermelho, Florianópolis - SC, 88058-001 (Ingleses Saúde & Office)";

  const handleCopyAddress = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(addressForClipboard);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = addressForClipboard;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // silenciosamente mantém o estado
    }
  };

  // Links universais de navegação
  const wazeUrl = "https://waze.com/ul?ll=-27.4373,-48.3998&navigate=yes";
  const uberUrl = `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=-27.4373&dropoff[longitude]=-48.3998&dropoff[nickname]=Dra.%20Sara%20Michelon%20(Ingleses%20Sa%C3%BAde%20%26%20Office)&dropoff[formatted_address]=${encodeURIComponent("Rodovia Armando Calil Bulos, 6201, Salas 217-218, Ingleses, Florianópolis - SC")}`;
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=-27.4373,-48.3998";
  const appleMapsUrl = "https://maps.apple.com/?daddr=-27.4373,-48.3998&dirflg=d";

  const rawPhone = settings.phone?.replace(/\D/g, "") ?? "4841042945";
  const rawWhatsApp = settings.whatsapp?.replace(/\D/g, "") ?? "48985063001";
  const whatsappUrl = `https://wa.me/55${rawWhatsApp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma avaliação com a Dra. Sara Michelon nos Ingleses.")}`;

  return (
    <div className="contact-experience">
      {/* 1. Hero & Introdução */}
      <Section className="bg-[var(--color-pink)] pb-6 pt-5">
        <Container>
          <Breadcrumbs items={[{label: "Início", href: "/"}, {label: "Contato e Localização"}]} />
          <div className="mt-4 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/15 bg-white/80 px-3.5 py-1 text-xs font-semibold tracking-wide text-[var(--color-primary)] shadow-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Atendimento com Hora Marcada · Ingleses Saúde & Office
              </div>
              <Heading as="h1" className="mt-4">
                Contato, Localização & Rotas
              </Heading>
            </div>
            <div>
              <p className="text-lg leading-8 text-[var(--color-muted)]">
                Localizada no Norte da Ilha de Florianópolis, no complexo empresarial <strong>Ingleses Saúde & Office</strong>. Uma clínica moderna e acolhedora, com estacionamento privativo e acesso descomplicado.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Canais Diretos de Atendimento (Cards em Grid) */}
      <Section className="py-8 sm:py-10">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card WhatsApp */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-[0_10px_35px_rgba(63,39,56,0.05)] transition-all hover:border-[var(--color-primary)]/30 hover:shadow-lg">
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-emerald-500/10 blur-xl pointer-events-none" />
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.01 4.54-3.68 8.23-8.2 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.13.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
                  </svg>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-emerald-700">Canal Principal</p>
                <h3 className="mt-1 font-title text-2xl text-[var(--color-ink)]">WhatsApp</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  Canal mais ágil para esclarecer dúvidas, confirmar horários e organizar sua primeira avaliação.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="whatsapp_click"
                  data-track-location="contact_card"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#20ba5a] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.01 4.54-3.68 8.23-8.2 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.13.17 1.74 2.65 4.21 3.72.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
                  </svg>
                  <span>{settings.whatsapp ?? "(48) 98506-3001"}</span>
                </a>
              </div>
            </div>

            {/* Card Telefone Fixo */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-[0_10px_35px_rgba(63,39,56,0.05)] transition-all hover:border-[var(--color-primary)]/30 hover:shadow-lg">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-primary)]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">Recepção</p>
                <h3 className="mt-1 font-title text-2xl text-[var(--color-ink)]">Telefone Clínico</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  Para contato direto com a equipe e informações administrativas sobre seu plano de atendimento.
                </p>
              </div>
              <div className="mt-6">
                <a
                  href={`tel:+55${rawPhone}`}
                  data-track-event="phone_click"
                  data-track-location="contact_card"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition-all hover:border-[var(--color-primary)] hover:bg-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <span>{settings.phone ?? "(48) 4104-2945"}</span>
                </a>
              </div>
            </div>

            {/* Card Endereço & Copiar */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-7 shadow-[0_10px_35px_rgba(63,39,56,0.05)] transition-all hover:border-[var(--color-primary)]/30 hover:shadow-lg">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-primary)]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">Endereço Oficial</p>
                <h3 className="mt-1 font-title text-2xl text-[var(--color-ink)]">Ingleses Saúde & Office</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  Rodovia Armando Calil Bulos, 6201<br />
                  <strong>Salas 217 e 218</strong> · Torre Comercial (2º Andar)<br />
                  Ingleses do Rio Vermelho, Florianópolis — SC
                </p>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-3.5 text-sm font-semibold transition-all ${
                    copied
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                      : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-white"
                  }`}
                >
                  {copied ? (
                    <>
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Endereço copiado!</span>
                    </>
                  ) : (
                    <>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                      </svg>
                      <span>Copiar Endereço Completo</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. O HUB DE MOBILIDADE ("Waze / Uber / Google Maps / Apple Maps") */}
      <Section className="border-y border-[var(--color-border)] bg-[var(--color-surface)] py-8 sm:py-10">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Rotas com 1 Toque</Eyebrow>
            <Heading as="h2">Como Chegar à Clínica</Heading>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
              Escolha seu aplicativo de mobilidade preferido. Ao clicar, a rota até as salas 217/218 no complexo <em>Ingleses Saúde & Office</em> já é iniciada automaticamente.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. Botão Waze */}
            <a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="directions_click"
              data-track-location="waze"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#33ccff]/60 hover:shadow-xl hover:shadow-[#33ccff]/10"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[#33ccff]/10 blur-xl transition-all group-hover:bg-[#33ccff]/25" />
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#33ccff]/15 text-[#0099cc] transition-transform duration-300 group-hover:scale-110">
                    {/* Waze Icon */}
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.1 11.6c-.1-1.3-.6-2.5-1.4-3.5-1.3-1.6-3.2-2.6-5.4-2.6-2.6 0-4.8 1.4-5.9 3.5-.6 1.1-.9 2.4-.8 3.7 0 .4.1.8.2 1.2l-1.9 1.9c-.3.3-.4.8-.2 1.2.2.4.6.6 1 .6h.6c.4 1.1 1.2 2 2.2 2.6.9.5 1.9.8 3 .8 1.4 0 2.7-.4 3.8-1.2l1.6.9c.2.1.4.2.6.2.3 0 .5-.1.7-.3.4-.4.4-1 .1-1.4l-1.1-1.6c.9-1.2 1.5-2.8 1.5-4.4 0-.4 0-.7-.1-1.1zm-8.8 1.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm5.5 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-[#33ccff]/10 px-2.5 py-0.5 text-xs font-semibold text-[#0088b8]">
                    GPS Ativo
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-[var(--color-ink)]">Waze</h3>
                <p className="mt-1 text-xs text-[var(--color-muted)]">
                  Evite congestionamentos no Norte da Ilha com rotas inteligentes e alertas em tempo real.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0099cc] transition-colors group-hover:text-[#0077a3]">
                <span>Navegar via Waze</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </a>

            {/* 2. Botão Uber */}
            <a
              href={uberUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="directions_click"
              data-track-location="uber"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-[#000000] p-6 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-900 hover:shadow-2xl hover:shadow-black/20"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/10 blur-xl transition-all group-hover:bg-white/20" />
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white transition-transform duration-300 group-hover:scale-110">
                    {/* Uber Icon */}
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6.59l3.71 3.71-1.42 1.42L11 15.41V7z" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold text-white">
                    Sem Digitar
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">Uber</h3>
                <p className="mt-1 text-xs text-white/70">
                  Abre o aplicativo com destino pré-preenchido nas salas 217/218 do Ingleses Saúde & Office.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white transition-colors">
                <span>Pedir viagem de Uber</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </a>

            {/* 3. Botão Google Maps */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="directions_click"
              data-track-location="google_maps"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-emerald-500/10 blur-xl transition-all group-hover:bg-emerald-500/25" />
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                    {/* Google Maps Icon */}
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                    Rotas & Horários
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-[var(--color-ink)]">Google Maps</h3>
                <p className="mt-1 text-xs text-[var(--color-muted)]">
                  Consulte rotas de carro, transporte público ou caminhada com a precisão do Google Maps.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors group-hover:text-emerald-700">
                <span>Abrir Google Maps</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </a>

            {/* 4. Botão Apple Maps */}
            <a
              href={appleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="directions_click"
              data-track-location="apple_maps"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary)]/40 hover:shadow-xl hover:shadow-[var(--color-primary)]/10"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-[var(--color-primary)]/10 blur-xl transition-all group-hover:bg-[var(--color-primary)]/20" />
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-surface)] text-[var(--color-primary)] transition-transform duration-300 group-hover:scale-110">
                    {/* Compass Icon */}
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01" />
                    </svg>
                  </div>
                  <span className="rounded-full bg-[var(--color-surface-strong)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-primary)]">
                    iOS / CarPlay
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-[var(--color-ink)]">Apple Maps</h3>
                <p className="mt-1 text-xs text-[var(--color-muted)]">
                  Navegação nativa integrada para usuários de iPhone, iPad e painéis compatíveis com Apple CarPlay.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-colors">
                <span>Navegar com Apple</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </a>
          </div>
        </Container>
      </Section>

      {/* 4. MAPA INTERATIVO RESPONSIVO */}
      <Section className="py-8 sm:py-10">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-2xl">
            {/* Header bar do mapa */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--color-ink)]">Ingleses Saúde & Office — Rod. Armando Calil Bulos, 6201</p>
                  <p className="text-xs text-[var(--color-muted)]">Salas 217 e 218 · Ingleses do Rio Vermelho, Florianópolis — SC</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="directions_click"
                  data-track-location="map_header"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-border)] bg-white px-3.5 py-2 text-xs font-semibold text-[var(--color-primary)] shadow-sm transition-colors hover:border-[var(--color-primary)] hover:bg-[var(--color-surface)]"
                >
                  <span>Expandir no Google Maps</span>
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Iframe Interativo */}
            <div className="relative aspect-[16/11] w-full sm:aspect-[16/8] lg:aspect-[21/9] min-h-[380px] lg:min-h-[460px]">
              <iframe
                title="Localização da Clínica Dra. Sara Michelon nos Ingleses"
                src="https://maps.google.com/maps?q=-27.4373,-48.3998&hl=pt-BR&z=16&output=embed"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. ESTRUTURA DO EDIFÍCIO, COMODIDADES & RECONHECIMENTO VISUAL */}
      <Section className="border-t border-[var(--color-border)] bg-[var(--color-surface-strong)] py-6 sm:py-8 lg:py-8">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            <div>
              <Eyebrow>Conforto & Facilidade</Eyebrow>
              <Heading as="h2">Estrutura Pronta para Receber Você</Heading>
              <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                Projetamos cada detalhe para que sua visita seja tranquila, segura e pontual. Desde o estacionamento até o acesso aos consultórios, você conta com comodidade integral.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface)] text-[var(--color-primary)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V14.25m11.25-6.75h4.125" />
                    </svg>
                  </div>
                  <h4 className="mt-3 font-bold text-[var(--color-ink)]">Estacionamento</h4>
                  <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                    Vagas rotativas disponíveis no complexo empresarial para sua conveniência e segurança.
                  </p>
                </div>

                <div className="rounded-xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface)] text-[var(--color-primary)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.765z" />
                    </svg>
                  </div>
                  <h4 className="mt-3 font-bold text-[var(--color-ink)]">Acessibilidade Total</h4>
                  <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                    Elevadores modernos e rampas de acesso com conformidade para pessoas com mobilidade reduzida.
                  </p>
                </div>

                <div className="rounded-xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface)] text-[var(--color-primary)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                  </div>
                  <h4 className="mt-3 font-bold text-[var(--color-ink)]">2º Andar · Salas 217 e 218</h4>
                  <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                    Ambiente privativo e climatizado na Torre Comercial do Ingleses Saúde & Office.
                  </p>
                </div>

                <div className="rounded-xl border border-[var(--color-border)] bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-surface)] text-[var(--color-primary)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="mt-3 font-bold text-[var(--color-ink)]">Atendimento Exclusivo</h4>
                  <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                    Segunda a Sexta das 08:30 às 19:00. Atendimentos com hora marcada para pontualidade.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagens de Reconhecimento do Prédio e CTA */}
            <div className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-neutral-100 shadow-md">
                  <Image
                    src="/images/clinica-entrada.webp"
                    alt="Fachada e entrada do complexo Ingleses Saúde & Office"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Edifício Comercial</p>
                    <p className="text-sm font-bold">Ingleses Saúde & Office</p>
                  </div>
                </div>

                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-neutral-100 shadow-md">
                  <Image
                    src="/images/clinica-consultorio.webp"
                    alt="Consultório da clínica odontológica da Dra. Sara Michelon"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Ambiente Clínico</p>
                    <p className="text-sm font-bold">Salas 217 e 218</p>
                  </div>
                </div>
              </div>

              {/* Botão posicionado abaixo das imagens */}
              <div className="flex flex-col sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="whatsapp_click"
                  data-track-location="amenities_cta"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[var(--color-primary-dark)] hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/40 active:scale-[0.99]"
                >
                  <span>Agendar Consulta pelo WhatsApp</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
