import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {Breadcrumbs, ButtonLink, Container, CTASection, Eyebrow, Heading, ImageFrame, ProfessionalCard, Section} from "@/components/design-system";
import {getContentEntry, getProfessionals} from "@/lib/sanity/repository";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContentEntry("equipe");
  if (!page || page.contentType !== "page") return {};
  return {title: page.seo.title, description: page.seo.description, alternates: {canonical: page.seo.canonical ?? "/equipe"}};
}

export default async function EquipePage() {
  const [page, professionals] = await Promise.all([getContentEntry("equipe"), getProfessionals()]);
  if (!page || page.contentType !== "page") notFound();

  return (
    <>
      {/* 1. Hero Institucional com Art Direction */}
      <section className="relative overflow-hidden bg-[var(--color-pink)]">
        <picture className="absolute inset-0 block h-full w-full pointer-events-none">
          <source
            media="(max-width: 767px)"
            srcSet="/images/real/equipe/hero-equipe-mobile.webp"
            width={941}
            height={1672}
          />
          <img
            src="/images/real/equipe/hero-equipe-desktop.webp"
            alt="Equipe odontológica da clínica da Dra. Sara Michelon em atendimento e escaneamento digital"
            width={1672}
            height={941}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-top md:object-right lg:object-center"
          />
        </picture>

        {/* Scrim overlay suave para contraste e legibilidade impecáveis */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[var(--color-pink)] via-[var(--color-pink)]/80 via-50% to-transparent to-85% md:hidden"
        />
        <div
          aria-hidden="true"
          className="hidden md:block absolute inset-0 pointer-events-none bg-gradient-to-r from-[var(--color-pink)]/90 via-[var(--color-pink)]/50 to-transparent lg:from-[var(--color-pink)]/85 lg:via-[var(--color-pink)]/30 lg:w-[62%]"
        />

        <Container className="relative z-10">
          <div className="flex flex-col justify-end min-h-[560px] pt-[72vw] pb-8 sm:min-h-[600px] sm:pt-[54vw] sm:pb-10 md:min-h-[500px] md:pt-14 md:pb-12 lg:min-h-[580px] lg:justify-center lg:py-16">
            <div className="max-w-xl md:max-w-lg lg:max-w-[54%]">
              <Breadcrumbs
                hideCurrentOnMobile
                className="mb-3 sm:mb-6"
                items={[
                  {label: "Início", href: "/"},
                  {label: "Equipe"},
                ]}
              />
              <p className="mb-2 sm:mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-mauve)]">
                {page.eyebrow}
              </p>
              <h1 className="font-title text-balance text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12] tracking-[-0.02em] text-[var(--color-primary)]">
                {page.title}
              </h1>
              <p className="mt-3 sm:mt-5 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-[var(--color-muted)]">
                {page.description}
              </p>
              <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="#profissionais" variant="primary">
                  Conhecer os especialistas ↓
                </ButtonLink>
                <ButtonLink href="/contato" variant="secondary">
                  Agendar uma avaliação
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Foto Oficial da Equipe */}
      <Section className="py-8 sm:py-10">
        <Container>
          <ImageFrame
            src={page.image ?? "/images/real/equipe/team-main.webp"}
            alt={page.imageAlt ?? "Equipe da clínica da Dra. Sara Michelon"}
            fill
            sizes="100vw"
            className="min-h-[440px] sm:min-h-[520px] lg:min-h-[620px]"
          />
        </Container>
      </Section>

      {/* 3. Grade de Especialistas */}
      <Section id="profissionais" className="bg-[var(--color-surface)]">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Profissionais</Eyebrow>
            <Heading as="h2">Uma equipe, diferentes áreas de cuidado</Heading>
            <p className="mt-6 leading-7 text-[var(--color-muted)]">
              A integração entre as áreas ajuda a organizar prioridades e responsabilidades dentro do planejamento clínico.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {professionals.map((professional) => (
              <ProfessionalCard key={professional.name} {...professional} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection heading="Vamos avaliar o seu caso como um conjunto" />
    </>
  );
}

