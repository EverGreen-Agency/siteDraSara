import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {Breadcrumbs, ButtonLink, Container, CTASection, Eyebrow, Gallery, Heading, ImageFrame, Section} from "@/components/design-system";
import {VirtualTour} from "@/components/virtual-tour";
import {getContentEntry} from "@/lib/sanity/repository";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContentEntry("clinica");
  if (!page || page.contentType !== "page") return {};
  return {title: page.seo.title, description: page.seo.description, alternates: {canonical: page.seo.canonical ?? "/clinica"}};
}

export default async function ClinicaPage() {
  const page = await getContentEntry("clinica");

  if (!page || page.contentType !== "page") notFound();

  const wazeUrl = "https://waze.com/ul?ll=-27.4373,-48.3998&navigate=yes";
  const uberUrl = `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[latitude]=-27.4373&dropoff[longitude]=-48.3998&dropoff[nickname]=Dra.%20Sara%20Michelon%20(Ingleses%20Sa%C3%BAde%20%26%20Office)&dropoff[formatted_address]=${encodeURIComponent("Rodovia Armando Calil Bulos, 6201, Salas 217-218, Ingleses, Florianópolis - SC")}`;
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=-27.4373,-48.3998";

  return (
    <>
      {/* 1. Hero Institucional */}
      <Section className="bg-[var(--color-pink)] pb-6 pt-5">
        <Container>
          <Breadcrumbs items={[{label: "Início", href: "/"}, {label: "A clínica"}]} />
          <div className="mt-4 grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Eyebrow>{page.eyebrow}</Eyebrow>
              <Heading as="h1">{page.title}</Heading>
            </div>
            <p className="text-lg leading-8 text-[var(--color-muted)]">
              {page.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* 2. Destaque de Estrutura */}
      <Section className="py-8 sm:py-10">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <ImageFrame
            src={page.image ?? "/images/clinica-consultorio.webp"}
            alt={page.imageAlt ?? "Consultório da clínica da Dra. Sara Michelon"}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="min-h-[520px]"
          />
          <div className="lg:px-10">
            <Eyebrow>O espaço</Eyebrow>
            <Heading>Ambientes pensados para o cuidado clínico</Heading>
            <p className="mt-7 text-lg leading-8 text-[var(--color-muted)]">
              A experiência começa no acolhimento e segue por todas as etapas do atendimento. As imagens desta página pertencem ao acervo real da clínica, nos Ingleses.
            </p>
            <p className="mt-5 leading-7 text-[var(--color-muted)]">
              Cada recurso disponível participa do planejamento conforme a necessidade do caso, integrando ergonomia, biossegurança rigorosa e diagnóstico digital.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href="#tour-virtual" variant="primary">
                Fazer Tour Virtual pela Clínica ↓
              </ButtonLink>
              <ButtonLink href="/contato" variant="secondary">
                Agendar uma avaliação
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. O TOUR VIRTUAL GUIADO POR AMBIENTES (Interativo, Mobile-First com Hotspots) */}
      <VirtualTour />

      {/* 4. PILARES CLÍNICOS DA MATRIZ: ESTRUTURA, TECNOLOGIA & BIOSSEGURANÇA */}
      <Section className="bg-[var(--color-primary)] py-12 text-white sm:py-16">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow light>Pilares de Atendimento</Eyebrow>
            <Heading as="h2" className="text-white">
              Estrutura, Tecnologia e Biossegurança a Serviço do Seu Cuidado
            </Heading>
            <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
              Nosso espaço foi desenhado para unir rigor técnico e tranquilidade. Cada detalhe das salas 217 e 218 reflete o compromisso com a sua saúde e bem-estar.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Pilar 1: Estrutura */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:shadow-xl">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                </div>
                <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Pilar 01</span>
                <h3 className="mt-2 font-title text-2xl text-white">Estrutura & Conforto</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Ambientes privativos, climatizados e com acústica planejada na Torre Comercial do Ingleses Saúde & Office. Acessibilidade total com elevadores e estacionamento rotativo.
                </p>
              </div>
              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="text-xs font-medium text-white/60">Privacidade, ergonomia e acolhimento</span>
              </div>
            </div>

            {/* Pilar 2: Tecnologia */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:shadow-xl">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 01-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Pilar 02</span>
                <h3 className="mt-2 font-title text-2xl text-white">Tecnologia & Precisão</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Integração de diagnóstico digital, escaneamento intraoral e tomografia computadorizada. Planejamento 3D para intervenções minimamente invasivas e resultados previsíveis.
                </p>
              </div>
              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="text-xs font-medium text-white/60">Diagnóstico digital e conservador</span>
              </div>
            </div>

            {/* Pilar 3: Biossegurança */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10 hover:shadow-xl">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-colors group-hover:bg-[var(--color-accent)] group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Pilar 03</span>
                <h3 className="mt-2 font-title text-2xl text-white">Biossegurança Rigorosa</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Processos hospitalares de assepsia e esterilização monitorada em autoclave. Barreiras de proteção individuais, materiais descartáveis e rastreabilidade sanitária total.
                </p>
              </div>
              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="text-xs font-medium text-white/60">Controle sanitário em nível hospitalar</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Galeria de Ambientes */}
      <Section className="py-8 sm:py-10">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Galeria real</Eyebrow>
            <Heading>Conheça alguns ambientes da clínica</Heading>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              Fotografias reais das salas 217 e 218 no complexo comercial Ingleses Saúde & Office.
            </p>
          </div>
          <div className="mt-10">
            <Gallery
              images={[
                {src: "/images/clinica-consultorio.webp", alt: "Consultório odontológico da clínica"},
                {src: "/images/clinica-consultorio-2.webp", alt: "Outro ambiente clínico da Dra. Sara Michelon"},
                {src: "/images/clinica-recepcao.webp", alt: "Recepção da clínica"},
                {src: "/images/clinica-entrada.webp", alt: "Entrada da clínica nos Ingleses"},
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* 5. LOCALIZAÇÃO, MAPA & HUB DE MOBILIDADE NA PÁGINA DA CLÍNICA */}
      <Section className="border-t border-[var(--color-border)] bg-[var(--color-surface-strong)] py-8 sm:py-10">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Localização & Acesso</Eyebrow>
              <Heading as="h2">Como Chegar ao Nosso Espaço</Heading>
              <p className="mt-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
                Situada no complexo empresarial <strong>Ingleses Saúde & Office</strong>, na Rodovia Armando Calil Bulos, 6201 (SC-403). Fácil acesso para quem está nos Ingleses, Canasvieiras, Jurerê e demais regiões do Norte da Ilha.
              </p>

              {/* Informações Práticas de Chegada */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-surface)] text-[var(--color-primary)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                  </div>
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold text-[var(--color-ink)]">Salas 217 e 218 · Torre Comercial (2º Andar)</p>
                    <p className="text-[var(--color-muted)]">Rodovia Armando Calil Bulos, 6201 — Ingleses, Florianópolis — SC</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-white p-4 shadow-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-surface)] text-[var(--color-primary)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V14.25m11.25-6.75h4.125" />
                    </svg>
                  </div>
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold text-[var(--color-ink)]">Estacionamento & Acessibilidade</p>
                    <p className="text-[var(--color-muted)]">Vagas rotativas convenientes no complexo e elevadores para cadeirantes.</p>
                  </div>
                </div>
              </div>

              {/* Botões de Mobilidade em 1 Clique */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)]">
                  Iniciar Rota com 1 Toque:
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href={wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track-event="directions_click"
                    data-track-location="clinica_waze"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#33ccff]/40 bg-white px-4 py-2.5 text-xs font-bold text-[#0088b8] shadow-sm transition-all hover:bg-[#33ccff]/10 hover:shadow"
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.1 11.6c-.1-1.3-.6-2.5-1.4-3.5-1.3-1.6-3.2-2.6-5.4-2.6-2.6 0-4.8 1.4-5.9 3.5-.6 1.1-.9 2.4-.8 3.7 0 .4.1.8.2 1.2l-1.9 1.9c-.3.3-.4.8-.2 1.2.2.4.6.6 1 .6h.6c.4 1.1 1.2 2 2.2 2.6.9.5 1.9.8 3 .8 1.4 0 2.7-.4 3.8-1.2l1.6.9c.2.1.4.2.6.2.3 0 .5-.1.7-.3.4-.4.4-1 .1-1.4l-1.1-1.6c.9-1.2 1.5-2.8 1.5-4.4 0-.4 0-.7-.1-1.1zm-8.8 1.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm5.5 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
                    </svg>
                    <span>Waze</span>
                  </a>
                  <a
                    href={uberUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track-event="directions_click"
                    data-track-location="clinica_uber"
                    className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-neutral-800 hover:shadow"
                  >
                    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6.59l3.71 3.71-1.42 1.42L11 15.41V7z" />
                    </svg>
                    <span>Uber (Destino Pronto)</span>
                  </a>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track-event="directions_click"
                    data-track-location="clinica_google_maps"
                    className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-white px-4 py-2.5 text-xs font-bold text-emerald-800 shadow-sm transition-all hover:bg-emerald-50 hover:shadow"
                  >
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                    </svg>
                    <span>Google Maps</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa Interativo Integrado */}
            <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-xs font-semibold text-[var(--color-ink)]">
                <span>Ingleses Saúde & Office — Salas 217 e 218</span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--color-primary)] hover:underline hover:text-[var(--color-primary-dark)]"
                >
                  <span>Abrir no Maps</span>
                  <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
              <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] min-h-[320px]">
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
          </div>
        </Container>
      </Section>

      <CTASection heading="Conheça a clínica em uma avaliação" />
    </>
  );
}

