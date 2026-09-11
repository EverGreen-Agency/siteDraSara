"use client";

import {useState, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import {Container, Heading, Section} from "@/components/design-system";

export interface JourneyStep {
  id: string;
  stepNumber: string;
  timelineLabel: string;
  phaseBadge: string;
  roomName: string;
  subtitle: string;
  narrative: string;
  image: string;
  imageAlt: string;
  pillTag: string;
  features: {
    label: string;
    detail: string;
  }[];
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "chegada",
    stepNumber: "01",
    timelineLabel: "A Chegada",
    phaseBadge: "PASSO 01 DE 04 · CHEGADA & ACESSO",
    roomName: "Acesso Reservado na Sala 218",
    subtitle: "Complexo Ingleses Saúde & Office · 2º Andar",
    narrative:
      "Sua experiência começa com discrição e praticidade. O complexo comercial oferece vagas rotativas de estacionamento no local e elevadores diretos ao segundo andar, proporcionando comodidade e acessibilidade total para todos os pacientes.",
    image: "/images/real/clinica/clinic-reception-rear.webp",
    imageAlt: "Recepção e acesso privativo da clínica Dra. Sara Michelon na Sala 218",
    pillTag: "Acesso & Comodidade",
    features: [
      {label: "Torre Comercial", detail: "2º Andar, salas privativas 217 e 218"},
      {label: "Acesso Controlado", detail: "Porta privativa para segurança e silêncio"},
      {label: "Hora Marcada", detail: "Atendimento pontual sem salas de espera cheias"},
    ],
  },
  {
    id: "acolhimento",
    stepNumber: "02",
    timelineLabel: "O Acolhimento",
    phaseBadge: "PASSO 02 DE 04 · LOUNGE & BOAS-VINDAS",
    roomName: "Lounge Sereno & Café de Boas-Vindas",
    subtitle: "Um espaço pensado para desacelerar e relaxar",
    narrative:
      "Antes da sua consulta, seja recebido em um ambiente tranquilo, com climatização suave, iluminação indireta e poltronas ergonômicas. Uma recepção humanizada com café especial, chás e água fresca para você se sentir em casa.",
    image: "/images/real/clinica/clinic-coffee-lounge.webp",
    imageAlt: "Cantinho do café e lounge acolhedor da clínica da Dra. Sara",
    pillTag: "Conforto & Bem-Estar",
    features: [
      {label: "Espaço do Café", detail: "Café gourmet, chás selecionados e água fresca"},
      {label: "Climatização Agradável", detail: "Ambiente sereno com música suave e conforto térmico"},
      {label: "Recepção Individual", detail: "Equipe dedicada para orientar seu atendimento"},
    ],
  },
  {
    id: "cuidado",
    stepNumber: "03",
    timelineLabel: "O Cuidado Clínico",
    phaseBadge: "PASSO 03 DE 04 · O ATENDIMENTO",
    roomName: "Consultório Odontológico Integrado",
    subtitle: "Tecnologia cirúrgica e biossegurança estrita",
    narrative:
      "O espaço onde a saúde e a função do sorriso são conduzidas com excelência. Equipado com cadeira odontológica anatômica de padrão internacional, iluminação cirúrgica LED sem sombras e rigorosos protocolos contínuos de assepsia e autoclave.",
    image: "/images/real/clinica/clinic-operatory-main.webp",
    imageAlt: "Consultório odontológico moderno com cadeira ergonômica da clínica da Dra. Sara Michelon",
    pillTag: "Ergonomia & Biossegurança",
    features: [
      {label: "Cadeira Ergonômica", detail: "Múltiplos ajustes anatômicos para máximo relaxamento"},
      {label: "Biossegurança Hospitalar", detail: "Ciclos rigorosos de autoclave e esterilização"},
      {label: "Iluminação Focada LED", detail: "Luz de alta fidelidade sem sombras para precisão"},
    ],
  },
  {
    id: "planejamento",
    stepNumber: "04",
    timelineLabel: "A Previsibilidade",
    phaseBadge: "PASSO 04 DE 04 · O PLANEJAMENTO",
    roomName: "Estúdio de Planejamento Digital 3D",
    subtitle: "Diagnóstico e simulação do sorriso na tela grande",
    narrative:
      "Aqui o diagnóstico e a estética se unem com precisão científica. Fotografias de alta resolução e exames tomográficos são analisados pela Dra. Sara Michelon junto com o paciente, garantindo clareza total sobre o plano de cuidado antes do início.",
    image: "/images/real/tecnologia/planning-digital-scan.webp",
    imageAlt: "Dra. Sara Michelon durante o planejamento digital do sorriso",
    pillTag: "Previsibilidade & Sorriso",
    features: [
      {label: "Mock-up Digital 3D", detail: "Simulação do formato dos dentes antes da intervenção"},
      {label: "Análise da Dra. Sara", detail: "Duas décadas de prática clínica e olhar estético apurado"},
      {label: "Decisão Transparente", detail: "O paciente compreende cada etapa e participa da escolha"},
    ],
  },
];

export function VirtualTour() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const currentStep = JOURNEY_STEPS[currentStepIndex];
  const isLastStep = currentStepIndex === JOURNEY_STEPS.length - 1;

  const goToStep = (index: number) => {
    if (index === currentStepIndex || isAnimating) return;
    setIsAnimating(true);
    setCurrentStepIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleNext = () => {
    if (currentStepIndex < JOURNEY_STEPS.length - 1) {
      goToStep(currentStepIndex + 1);
    } else {
      goToStep(0); // looping suave
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      goToStep(currentStepIndex - 1);
    } else {
      goToStep(JOURNEY_STEPS.length - 1);
    }
  };

  // Suporte a gestos touch (swipe suave no mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  const whatsappMessage = encodeURIComponent(
    "Olá! Conheci a estrutura da clínica pelo site e gostaria de agendar uma avaliação com a Dra. Sara Michelon."
  );

  return (
    <Section className="overflow-hidden bg-[var(--color-surface)] py-8 sm:py-10" id="tour-virtual">
      <Container>
        {/* 1. Header Editorial */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)]/15 bg-white/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-[var(--color-primary)] shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-gold)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-gold)]" />
            </span>
            A Experiência do Paciente
          </div>
          <Heading as="h2" className="mt-4">
            A Sua Jornada Dentro da Clínica
          </Heading>
          <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            Acompanhe o caminho de uma visita real: desde o desembarque privativo no 2º andar até o planejamento digital do seu sorriso com a Dra. Sara Michelon.
          </p>
        </div>

        {/* 2. LINHA DO TEMPO CONTÍNUA (TIMELINE DOURADA) */}
        <div className="mt-10 sm:mt-14">
          <div className="relative mx-auto max-w-4xl px-4">
            {/* Linha de Base */}
            <div className="absolute left-8 right-8 top-1/2 h-0.5 -translate-y-1/2 bg-[var(--color-border)] sm:left-12 sm:right-12" />

            {/* Linha Preenchida com Gradiente Dourado */}
            <div
              className="absolute left-8 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-gold)] transition-all duration-500 ease-out sm:left-12"
              style={{
                width: `${(currentStepIndex / (JOURNEY_STEPS.length - 1)) * 88}%`,
              }}
            />

            {/* Os 4 Nós da Timeline */}
            <div className="relative flex items-center justify-between">
              {JOURNEY_STEPS.map((step, idx) => {
                const isActive = idx === currentStepIndex;
                const isPassed = idx < currentStepIndex;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => goToStep(idx)}
                    aria-label={`Ir para etapa ${step.stepNumber}: ${step.timelineLabel}`}
                    className="group relative flex flex-col items-center focus:outline-none"
                  >
                    {/* Indicador Circular */}
                    <div
                      className={`relative flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 sm:h-12 sm:w-12 sm:text-sm ${
                        isActive
                          ? "scale-110 border-2 border-white bg-[var(--color-primary)] text-white shadow-xl ring-4 ring-[var(--color-gold)]/40"
                          : isPassed
                          ? "border-2 border-[var(--color-primary)] bg-white text-[var(--color-primary)]"
                          : "border border-[var(--color-border)] bg-white text-[var(--color-muted)] hover:border-[var(--color-primary)]/50"
                      }`}
                    >
                      {isPassed ? (
                        <svg className="h-4 w-4 text-[var(--color-primary)]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        step.stepNumber
                      )}
                    </div>

                    {/* Rótulo da Etapa */}
                    <span
                      className={`mt-2 hidden text-xs font-semibold transition-colors duration-200 sm:block ${
                        isActive
                          ? "text-[var(--color-primary)] font-bold"
                          : "text-[var(--color-muted)] group-hover:text-[var(--color-ink)]"
                      }`}
                    >
                      {step.timelineLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. O PALCO CINEMATOGRÁFICO: Foto 100% Limpa + Card Glassmorphism Responsivo */}
        <div
          className="relative mt-8 overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white shadow-2xl sm:mt-12 lg:bg-neutral-900"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* A Fotografia 100% Limpa (Sem Pinos ou Interferências) */}
          <div className="relative aspect-[4/3] w-full min-h-[260px] sm:aspect-[16/10] sm:min-h-[380px] lg:aspect-[21/10] lg:min-h-[500px]">
            <Image
              key={currentStep.id}
              src={currentStep.image}
              alt={currentStep.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 85vw"
              className="object-cover transition-opacity duration-500 ease-in-out"
            />

            {/* Gradiente sutil nas bordas para profundidade */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 lg:bg-gradient-to-r lg:from-black/75 lg:via-black/30 lg:to-transparent" />

            {/* Badge de Dica de Deslize no Topo */}
            <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white shadow-md backdrop-blur-md sm:left-4 sm:top-4 sm:px-3.5 sm:py-1.5 sm:text-xs">
              <svg className="h-3.5 w-3.5 text-[var(--color-gold)] animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
              <span>Deslize para navegar</span>
            </div>

            {/* Contador da Etapa */}
            <div className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white shadow-md backdrop-blur-md sm:right-4 sm:top-4 sm:px-3.5 sm:py-1.5">
              {currentStep.stepNumber} / 04
            </div>

            {/* Setas de Navegação Flutuantes nas Laterais da Foto */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Etapa anterior"
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-black/80 active:scale-95 sm:left-4 sm:h-12 sm:w-12"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Próxima etapa"
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-black/80 active:scale-95 sm:right-4 sm:h-12 sm:w-12"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* O CARD RESPONSIVO: Abaixo da foto em mobile e sobreposto (glassmorphism) em desktop */}
          <div className="relative z-20 p-5 sm:p-7 lg:absolute lg:bottom-8 lg:left-8 lg:max-w-xl lg:p-0">
            <div className="rounded-2xl border border-[var(--color-border)] bg-white/95 p-5 shadow-lg backdrop-blur-xl sm:rounded-3xl sm:p-7 lg:border-white/40 lg:bg-white/90 lg:shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
              {/* Header do Card */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[var(--color-primary)]/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--color-primary)]">
                  {currentStep.phaseBadge}
                </span>
                <span className="rounded-full border border-neutral-300/80 bg-white/80 px-2.5 py-0.5 text-[11px] font-semibold text-neutral-700">
                  {currentStep.pillTag}
                </span>
              </div>

              {/* Título & Subtítulo */}
              <h3 className="mt-3 font-title text-xl font-bold text-[var(--color-ink)] sm:text-2xl">
                {currentStep.roomName}
              </h3>
              <p className="text-xs font-semibold text-[var(--color-primary)] sm:text-sm">
                {currentStep.subtitle}
              </p>

              {/* Texto da Narrativa */}
              <p className="mt-3 text-xs leading-5 text-[var(--color-muted)] sm:text-sm sm:leading-6">
                {currentStep.narrative}
              </p>

              {/* Grid de Diferenciais */}
              <div className="mt-4 grid gap-2 sm:grid-cols-3">
                {currentStep.features.map((feat) => (
                  <div
                    key={feat.label}
                    className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-2.5 shadow-sm transition-all lg:border-white/60 lg:bg-white/75"
                  >
                    <div className="flex items-center gap-1.5 text-emerald-700">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-bold text-[var(--color-ink)]">{feat.label}</span>
                    </div>
                    <p className="mt-1 text-[11px] leading-4 text-[var(--color-muted)]">{feat.detail}</p>
                  </div>
                ))}
              </div>

              {/* Ações de Navegação e Conversão */}
              <div className="mt-5 flex flex-col gap-3 border-t border-neutral-200/80 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex min-h-[44px] items-center justify-center gap-1 rounded-xl border border-neutral-300 bg-white/90 px-3.5 py-2 text-xs font-semibold text-neutral-800 shadow-sm transition-all hover:bg-white active:scale-95"
                  >
                    ← Voltar
                  </button>

                  {!isLastStep ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[var(--color-primary)] px-4 py-2 text-xs font-semibold text-white shadow-md transition-all hover:bg-[var(--color-primary-dark)] active:scale-95"
                    >
                      <span>Próximo Passo</span>
                      <span>→</span>
                    </button>
                  ) : (
                    <a
                      href={`https://wa.me/5548985063001?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-xl bg-[#25D366] px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:bg-[#20ba5a] active:scale-95"
                    >
                      <span>Agendar no WhatsApp</span>
                      <span>→</span>
                    </a>
                  )}
                </div>

                <Link
                  href="/contato"
                  className="text-center text-xs font-semibold text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-primary-dark)] sm:text-right"
                >
                  Ver localização & rotas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
