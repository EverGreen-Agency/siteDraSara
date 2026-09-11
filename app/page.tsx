import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {ArticleCard, ButtonLink, Container, CTASection, Eyebrow, Heading, ImageFrame, LocalClinicBlock, ProcedureCarousel, ProfessionalCard, SEOJsonLd, Section} from "@/components/design-system";
import {getArticles, getContentEntry, getProfessionals, getSiteSettings} from "@/lib/sanity/repository";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContentEntry("home");
  if (!page || page.contentType !== "page") return {};
  return {title: page.seo.title, description: page.seo.description, alternates: {canonical: page.seo.canonical ?? "/"}};
}

export default async function HomePage() {
  const [home, professionals, settings, articles] = await Promise.all([getContentEntry("home"), getProfessionals(), getSiteSettings(), getArticles()]);
  if (!home || home.contentType !== "page") notFound();
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: settings.legalName,
    url: settings.siteUrl,
    telephone: settings.phone,
    image: `${settings.siteUrl}/images/real/sara/sara-home-hero-17.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: settings.streetAddress ?? "Rodovia Armando Calil Bulos, 6201, salas 217 e 218",
      addressLocality: "Florianópolis",
      addressRegion: "SC",
      postalCode: "88058-001",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -27.4373,
      longitude: -48.3998,
    },
    priceRange: "$$",
    areaServed: ["Ingleses", "Norte da Ilha", "Florianópolis"],
  };

  return (
    <>
      <SEOJsonLd data={[localBusiness]} />
      <section className="border-b border-[var(--color-border)] bg-[var(--color-pink)] pb-12 pt-7">
        <Container className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Eyebrow>{home.eyebrow}</Eyebrow>
            <Heading as="h1" className="max-w-xl">{home.title}</Heading>
            <p className="mt-8 max-w-xl text-xl leading-9 text-[var(--color-muted)]">{home.description}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contato" event="appointment_cta_click" location="home_hero">Agende uma avaliação</ButtonLink>
              <ButtonLink href="#tratamentos" variant="secondary" event="treatment_view" location="home_hero">Conheça os tratamentos</ButtonLink>
            </div>
            <div className="mt-12 flex items-center gap-5 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-muted)]">
              <span className="font-title text-2xl text-[var(--color-primary)]">01</span>
              <span>Ingleses · Norte da Ilha · Florianópolis</span>
            </div>
          </div>
          <div className="relative lg:pl-8">
            <div className="absolute -left-5 top-10 hidden h-[72%] w-px bg-[var(--color-border)] lg:block" />
            <ImageFrame src={home.image ?? "/images/real/sara/sara-home-hero-17.webp"} alt={home.imageAlt ?? "Dra. Sara Michelon em retrato profissional no consultório"} fill priority sizes="(max-width: 1024px) 100vw, 46vw" className="aspect-[471/630] max-h-[760px] min-h-[520px]" />
            <div className="absolute bottom-0 left-0 bg-white px-5 py-4 text-xs uppercase tracking-[0.16em] text-[var(--color-mauve)] lg:left-8">Dra. Sara Michelon</div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div><Eyebrow>Duas áreas, um só planejamento</Eyebrow><Heading>O cuidado começa por entender o caso</Heading></div>
            <div className="grid gap-px bg-[var(--color-border)] sm:grid-cols-2">
              <article className="bg-white p-7 sm:p-9"><span className="text-xs tracking-[0.2em] text-[var(--color-mauve)]">01</span><h3 className="mt-10 font-title text-3xl text-[var(--color-primary)]">Odontologia</h3><p className="mt-5 leading-7 text-[var(--color-muted)]">Prevenção, estética do sorriso, reabilitação, cirurgia e ortodontia organizadas conforme cada necessidade.</p><ButtonLink href="/odontologia" variant="secondary" event="treatment_view" location="home_areas">Conhecer odontologia</ButtonLink></article>
              <article className="bg-[var(--color-primary)] p-7 text-white sm:p-9"><span className="text-xs tracking-[0.2em] text-white/55">02</span><h3 className="mt-10 font-title text-3xl">Estética Orofacial</h3><p className="mt-5 leading-7 text-white/70">Avaliação facial e indicação individual com naturalidade e atenção ao conjunto da face.</p><ButtonLink href="/estetica-orofacial" variant="light" event="treatment_view" location="home_areas">Conhecer estética</ButtonLink></article>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-surface)]">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ImageFrame
              src="/images/real/tecnologia/planning-digital-scan.webp"
              alt="Dra. Sara Michelon durante planejamento odontológico digital"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="min-h-[520px]"
            />
            <div className="lg:px-10">
              <Eyebrow>Método de planejamento</Eyebrow>
              <Heading>Planejamento antes da escolha do procedimento</Heading>
              <p className="mt-7 text-lg leading-8 text-[var(--color-muted)]">
                A clínica trabalha em uma sequência clara: avaliação, diagnóstico, indicação, tratamento e acompanhamento. O diagnóstico estabelece prioridades, limites e sequência — a indicação é construída com base no caso real, não em uma lista pré-definida de procedimentos.
              </p>
              <ol className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 text-sm font-semibold text-[var(--color-primary)] sm:grid-cols-3">
                {["Avaliação", "Diagnóstico", "Indicação", "Tratamento", "Acompanhamento"].map((item, index) => (
                  <li key={item} className="border-t border-[var(--color-border)] pt-3">
                    <span className="mr-2 text-[var(--color-mauve)]">0{index + 1}</span>{item}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </Section>

      <ProcedureCarousel
        id="tratamentos"
        title="CONHEÇA OUTROS PROCEDIMENTOS"
        eyebrow="Tratamentos Prioritários"
      />

      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <ImageFrame src="/images/real/sara/sara-autoridade-2025.webp" alt="Dra. Sara Michelon em retrato profissional de autoridade" fill sizes="(max-width: 1024px) 100vw, 42vw" className="min-h-[600px]" />
          <div className="lg:px-10"><Eyebrow>Dra. Sara Michelon</Eyebrow><Heading>Uma visão integrada de odontologia e estética</Heading><p className="mt-7 text-lg leading-8 text-[var(--color-muted)]">A atuação parte da avaliação completa para conectar saúde, função e estética de forma individual.</p><div className="mt-9"><ButtonLink href="/dra-sara-michelon" variant="secondary" event="appointment_cta_click" location="home_authority">Conheça a Dra. Sara</ButtonLink></div></div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-pink)]">
        <Container><div className="max-w-2xl"><Eyebrow>Equipe</Eyebrow><Heading>Profissionais conectados ao mesmo planejamento</Heading></div><div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{professionals.map((professional) => <ProfessionalCard key={professional.name} {...professional} />)}</div><div className="mt-12"><ButtonLink href="/equipe" variant="secondary">Conheça a equipe</ButtonLink></div></Container>
      </Section>

      <Section>
        <Container><div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"><div><Eyebrow>A clínica</Eyebrow><Heading>Estrutura real para avaliar, planejar e acompanhar</Heading><p className="mt-7 max-w-xl text-lg leading-8 text-[var(--color-muted)]">Ambientes fotografados na própria clínica apoiam uma experiência humana e organizada, nos Ingleses.</p><div className="mt-9"><ButtonLink href="/clinica" variant="secondary">Conheça a clínica</ButtonLink></div></div><ImageFrame src="/images/real/clinica/clinic-operatory-main.webp" alt="Consultório odontológico da clínica da Dra. Sara Michelon" fill sizes="(max-width: 1024px) 100vw, 50vw" className="min-h-[540px]" /></div></Container>
      </Section>

      <Section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <Container><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><Eyebrow>Conteúdos</Eyebrow><Heading>Informação clínica para decisões mais conscientes</Heading><div className="mt-8"><ButtonLink href="/conteudos" variant="secondary">Ver conteúdos</ButtonLink></div></div><div>{articles.map((article) => <ArticleCard key={article.slug} category={article.categories[0] ?? "Conteúdo"} title={article.title} description={article.excerpt} href={article.path} meta={`Por ${article.author.name}`} />)}</div></div></Container>
      </Section>

      <Section><Container><LocalClinicBlock /></Container></Section>
      <CTASection />
    </>
  );
}
