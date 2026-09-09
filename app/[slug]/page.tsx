import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {ContactView} from "@/components/contact-view";
import {ContentSectionRenderer} from "@/components/content-section-renderer";
import {ArticleCard, Breadcrumbs, ButtonLink, Container, CTASection, Eyebrow, FAQ, Heading, ImageFrame, LocalClinicBlock, ProcedureCarousel, ProfessionalBlock, SEOJsonLd, Section, TreatmentCard} from "@/components/design-system";
import type {Article, InstitutionalPage, LandingPage, Treatment} from "@/lib/content/types";
import {getArticles, getContentEntry, getSiteSettings, getStaticSlugs} from "@/lib/sanity/repository";

type PageProps = {params: Promise<{slug: string}>};

export function generateStaticParams() {
  return getStaticSlugs().map((slug) => ({slug}));
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {slug} = await params;
  const entry = await getContentEntry(slug);
  if (!entry) return {};
  const images = entry.seo.ogImage ? [entry.seo.ogImage] : [];
  return {
    title: entry.seo.title,
    description: entry.seo.description,
    alternates: {canonical: entry.seo.canonical ?? `/${slug}`},
    robots: entry.seo.index === false ? {index: false, follow: true} : {index: true, follow: true},
    openGraph: {type: entry.contentType === "article" ? "article" : "website", title: entry.seo.title, description: entry.seo.description, images},
    twitter: {title: entry.seo.title, description: entry.seo.description, images},
  };
}

function breadcrumbJsonLd(siteUrl: string, items: {name: string; path: string}[]) {
  return {"@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({"@type": "ListItem", position: index + 1, name: item.name, item: `${siteUrl}${item.path}`}))};
}

async function TreatmentPage({treatment}: {treatment: Treatment}) {
  const settings = await getSiteSettings();
  const isFacialCare = treatment.specialty === "Estética Orofacial" || treatment.slug === "bichectomia";
  const hubHref = isFacialCare ? "/estetica-orofacial" : "/odontologia";
  const hubLabel = isFacialCare ? "Estética Orofacial" : "Odontologia";
  const showImage = treatment.variant !== "symptom-led" && Boolean(treatment.heroImage);
  const darkHero = treatment.variant === "hub";
  const breadcrumbData = breadcrumbJsonLd(settings.siteUrl, [{name: "Início", path: "/"}, {name: hubLabel, path: hubHref}, {name: treatment.title, path: `/${treatment.slug}`}]);
  const webpageData = {"@context": "https://schema.org", "@type": "WebPage", name: treatment.title, description: treatment.shortDescription, url: `${settings.siteUrl}/${treatment.slug}`, isPartOf: {"@type": "WebSite", name: settings.clinicName, url: settings.siteUrl}};
  const faqData = treatment.faq.length ? {"@context": "https://schema.org", "@type": "FAQPage", mainEntity: treatment.faq.map((item) => ({"@type": "Question", name: item.question, acceptedAnswer: {"@type": "Answer", text: item.answer}}))} : null;

  return (
    <>
      <SEOJsonLd data={faqData ? [breadcrumbData, webpageData, faqData] : [breadcrumbData, webpageData]} />
      <div data-page-event="treatment_view" data-treatment={treatment.slug} data-specialty={treatment.specialty} data-content-type="treatment" />
      <section className={`overflow-hidden ${darkHero ? "bg-[var(--color-primary)] text-white" : treatment.variant === "symptom-led" ? "bg-[var(--color-surface-strong)]" : "bg-[var(--color-pink)]"}`}>
        <Container className="py-6 sm:py-8">
          <Breadcrumbs light={darkHero} items={[{label: "Início", href: "/"}, {label: hubLabel, href: hubHref}, {label: treatment.title}]} />
          <div className={`grid items-center gap-12 ${showImage ? "lg:grid-cols-[1.08fr_0.92fr]" : "lg:grid-cols-[0.72fr_0.28fr]"}`}>
            <div className="py-4">
              <Eyebrow light={darkHero}>{treatment.eyebrow}</Eyebrow>
              <Heading as="h1" className={darkHero ? "text-white" : undefined}>{treatment.title}</Heading>
              <p className={`mt-7 max-w-2xl text-lg leading-8 ${darkHero ? "text-white/75" : "text-[var(--color-muted)]"}`}>{treatment.shortDescription}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row"><ButtonLink href="/contato" variant={darkHero ? "light" : "primary"} location="treatment_hero">Agendar uma avaliação</ButtonLink><ButtonLink href="#conteudo" variant={darkHero ? "light" : "secondary"} event="treatment_view" location="treatment_hero">Entender o tratamento</ButtonLink></div>
            </div>
            {showImage ? <ImageFrame src={treatment.heroImage!} alt={treatment.heroImageAlt ?? treatment.title} fill priority sizes="(max-width: 1024px) 100vw, 46vw" className="aspect-[4/5] min-h-[520px]" /> : <div className="hidden border-l border-[var(--color-border)] pl-8 lg:block"><span className="font-title text-8xl text-[var(--color-mauve)]/30">01</span><p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">Sintomas precisam ser relacionados ao histórico e ao exame clínico.</p></div>}
          </div>
        </Container>
      </section>
      <div id="conteudo"><ContentSectionRenderer sections={treatment.sections} /></div>
      {treatment.aftercare && <Section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]"><Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><div><Eyebrow>Continuidade do cuidado</Eyebrow><Heading>Acompanhamento e manutenção</Heading></div><div>{treatment.aftercare.body.map((paragraph) => <p key={paragraph} className="mb-4 max-w-2xl leading-7 text-[var(--color-muted)]">{paragraph}</p>)}{treatment.aftercare.href && treatment.aftercare.label && <ButtonLink href={treatment.aftercare.href} variant="secondary" event="treatment_view" location="aftercare">{treatment.aftercare.label}</ButtonLink>}</div></Container></Section>}
      {treatment.clinicalLead && <ProfessionalBlock professional={treatment.clinicalLead} />}
      {treatment.faq.length > 0 && <Section className="bg-[var(--color-pink)]"><Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><Eyebrow>Perguntas frequentes</Eyebrow><Heading>O que costuma gerar dúvida</Heading></div><FAQ items={treatment.faq} /></Container></Section>}
      <ProcedureCarousel
        title="CONHEÇA OUTROS PROCEDIMENTOS"
        eyebrow="Tratamentos Prioritários"
        currentSlug={treatment.slug}
      />
      <CTASection heading="A melhor indicação começa por compreender o seu caso" />
    </>
  );
}

async function InstitutionalPageView({page}: {page: InstitutionalPage}) {
  const settings = await getSiteSettings();
  const isContact = page.slug === "contato";

  if (isContact) {
    const contactBusinessData = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      name: settings.legalName,
      url: `${settings.siteUrl}/contato`,
      telephone: settings.phone,
      image: `${settings.siteUrl}/images/clinica-entrada.webp`,
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
        latitude: settings.geo?.latitude ?? -27.4373,
        longitude: settings.geo?.longitude ?? -48.3998,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "19:00",
        },
      ],
      hasMap: "https://maps.google.com/maps?q=-27.4373,-48.3998",
    };

    return (
      <>
        <SEOJsonLd
          data={[
            breadcrumbJsonLd(settings.siteUrl, [
              {name: "Início", path: "/"},
              {name: page.title, path: `/${page.slug}`},
            ]),
            contactBusinessData,
          ]}
        />
        <ContactView settings={settings} page={page} />
      </>
    );
  }

  const articles = page.slug === "conteudos" ? await getArticles() : [];
  const isLegacy = page.slug.startsWith("odontopediatria");
  return (
    <>
      <SEOJsonLd data={breadcrumbJsonLd(settings.siteUrl, [{name: "Início", path: "/"}, {name: page.title, path: `/${page.slug}`}])} />
      <Section className="bg-[var(--color-pink)]"><Container><Breadcrumbs items={[{label: "Início", href: "/"}, {label: page.eyebrow}]} /><div className="grid items-end gap-10 lg:grid-cols-[1fr_0.75fr]"><div><Eyebrow>{page.eyebrow}</Eyebrow><Heading as="h1">{page.title}</Heading></div><p className="text-lg leading-8 text-[var(--color-muted)]">{page.description}</p></div></Container></Section>
      {page.image && <Section><Container className="grid items-center gap-12 lg:grid-cols-2"><ImageFrame src={page.image} alt={page.imageAlt ?? page.title} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="min-h-[520px]" /><div className="lg:px-10"><Eyebrow>Planejamento individual</Eyebrow><Heading>Avaliação, diagnóstico e indicação</Heading><p className="mt-7 text-lg leading-8 text-[var(--color-muted)]">A avaliação organiza necessidades, esclarece alternativas e ajuda a definir uma sequência de cuidado individual.</p><div className="mt-9"><ButtonLink href="/contato">Agendar uma avaliação</ButtonLink></div></div></Container></Section>}
      {page.linkGroups?.map((group) => <Section key={group.title} className="border-t border-[var(--color-border)]"><Container><Heading>{group.title}</Heading><div className="mt-12 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">{group.items.map((item, index) => <TreatmentCard key={item.href} index={String(index + 1).padStart(2, "0")} title={item.title} description={item.description} href={item.href} />)}</div></Container></Section>)}
      {page.sections && <ContentSectionRenderer sections={page.sections} />}
      {articles.length > 0 && <Section><Container><div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]"><div><Eyebrow>Publicações</Eyebrow><Heading>Orientações disponíveis</Heading></div><div>{articles.map((article) => <ArticleCard key={article.slug} category={article.categories[0] ?? "Conteúdo"} title={article.title} description={article.excerpt} href={article.path} meta={`Por ${article.author.name}`} />)}</div></div></Container></Section>}
      {!isLegacy && !isContact && <CTASection />}
    </>
  );
}

async function ArticlePage({article}: {article: Article}) {
  const settings = await getSiteSettings();
  const articleData = {"@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.excerpt, url: `${settings.siteUrl}${article.path}`, datePublished: article.publishedAt, dateModified: article.updatedAt ?? article.publishedAt, author: {"@type": "Person", name: article.author.name}, publisher: {"@type": "Organization", name: settings.clinicName}};
  return (
    <>
      <SEOJsonLd data={[breadcrumbJsonLd(settings.siteUrl, [{name: "Início", path: "/"}, {name: "Conteúdos", path: "/conteudos"}, {name: article.title, path: article.path}]), articleData]} />
      <article>
        <Section className="bg-[var(--color-surface)]"><Container className="max-w-[960px]"><Breadcrumbs items={[{label: "Início", href: "/"}, {label: "Conteúdos", href: "/conteudos"}, {label: article.title}]} /><Eyebrow>{article.categories.join(" · ")}</Eyebrow><Heading as="h1">{article.title}</Heading><p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--color-muted)]">{article.excerpt}</p><div className="mt-9 flex flex-wrap gap-x-8 gap-y-2 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-muted)]"><span>Autoria: <strong className="text-[var(--color-primary)]">{article.author.name}</strong></span>{article.reviewer && <span>Revisão clínica: <strong className="text-[var(--color-primary)]">{article.reviewer.name}</strong></span>}</div></Container></Section>
        <div className="article-content"><ContentSectionRenderer sections={article.sections} /></div>
      </article>
      {article.relatedTreatments.length > 0 && <Section className="bg-[var(--color-pink)]"><Container><Eyebrow>Relacionados</Eyebrow><Heading>Continue por temas conectados</Heading><div className="mt-10 grid gap-x-10 sm:grid-cols-2">{article.relatedTreatments.map((item, index) => <TreatmentCard key={item.href} index={`0${index + 1}`} title={item.title} description={item.description ?? "Conheça esta área clínica."} href={item.href} />)}</div></Container></Section>}
      <CTASection heading="Orientação individual começa pela avaliação" />
    </>
  );
}

function LandingPageView({page}: {page: LandingPage}) {
  return (
    <div data-landing-layout>
      <section className="overflow-hidden bg-[var(--color-primary)] text-white"><Container className="grid items-center gap-10 py-8 sm:py-10 lg:grid-cols-[1fr_0.82fr]"><div><Eyebrow light>{page.eyebrow}</Eyebrow><Heading as="h1" className="text-white">{page.title}</Heading><p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">{page.description}</p><div className="mt-9"><ButtonLink href="/contato" variant="light" location="landing_hero">{page.ctaLabel}</ButtonLink></div><p className="mt-8 max-w-xl text-sm leading-6 text-white/55">A indicação depende de avaliação individual e pode incluir a decisão de não realizar um procedimento.</p></div>{page.image && <ImageFrame src={page.image} alt={page.imageAlt ?? page.title} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="aspect-[4/5] min-h-[520px]" />}</Container></section>
      <ContentSectionRenderer sections={page.sections} />
      <Section className="bg-[var(--color-pink)]"><Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><Eyebrow>Dúvidas</Eyebrow><Heading>Antes de agendar</Heading></div><FAQ items={page.faq} /></Container></Section>
      <CTASection heading="Planejamento estético começa por uma avaliação completa" />
    </div>
  );
}

export default async function DynamicPage({params}: PageProps) {
  const {slug} = await params;
  const entry = await getContentEntry(slug);
  if (!entry) notFound();
  if (entry.contentType === "treatment") return <TreatmentPage treatment={entry} />;
  if (entry.contentType === "article") {
    if (entry.path !== `/${slug}`) notFound();
    return <ArticlePage article={entry} />;
  }
  if (entry.contentType === "landingPage") return <LandingPageView page={entry} />;
  return <InstitutionalPageView page={entry} />;
}
