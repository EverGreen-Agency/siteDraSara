import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {ContentSectionRenderer} from "@/components/content-section-renderer";
import {Breadcrumbs, ButtonLink, Container, CTASection, Eyebrow, Gallery, Heading, ImageFrame, LocalClinicBlock, Section} from "@/components/design-system";
import {getContentEntry} from "@/lib/sanity/repository";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContentEntry("clinica");
  if (!page || page.contentType !== "page") return {};
  return {title: page.seo.title, description: page.seo.description, alternates: {canonical: page.seo.canonical ?? "/clinica"}};
}

export default async function ClinicaPage() {
  const page = await getContentEntry("clinica");
  if (!page || page.contentType !== "page") notFound();
  return <>
    <Section className="bg-[var(--color-pink)]"><Container><Breadcrumbs items={[{label: "Início", href: "/"}, {label: "A clínica"}]} /><div className="grid items-end gap-10 lg:grid-cols-[1fr_0.75fr]"><div><Eyebrow>{page.eyebrow}</Eyebrow><Heading as="h1">{page.title}</Heading></div><p className="text-lg leading-8 text-[var(--color-muted)]">{page.description}</p></div></Container></Section>
    <Section><Container className="grid items-center gap-12 lg:grid-cols-2"><ImageFrame src={page.image ?? "/images/clinica-consultorio.webp"} alt={page.imageAlt ?? "Consultório da clínica da Dra. Sara Michelon"} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="min-h-[600px]" /><div className="lg:px-10"><Eyebrow>O espaço</Eyebrow><Heading>Ambientes pensados para o cuidado clínico</Heading><p className="mt-7 text-lg leading-8 text-[var(--color-muted)]">A experiência começa no acolhimento e segue por todas as etapas do atendimento. As imagens desta página pertencem ao acervo real da clínica.</p><p className="mt-5 leading-7 text-[var(--color-muted)]">Cada recurso disponível participa do planejamento conforme a necessidade do caso.</p><div className="mt-9"><ButtonLink href="/contato">Agendar uma avaliação</ButtonLink></div></div></Container></Section>
    {page.sections && <ContentSectionRenderer sections={page.sections} />}
    <Section><Container><div className="max-w-2xl"><Eyebrow>Galeria real</Eyebrow><Heading>Conheça alguns ambientes da clínica</Heading></div><div className="mt-12"><Gallery images={[{src: "/images/clinica-consultorio.webp", alt: "Consultório odontológico da clínica"}, {src: "/images/clinica-consultorio-2.webp", alt: "Outro ambiente clínico da Dra. Sara Michelon"}, {src: "/images/clinica-recepcao.webp", alt: "Recepção da clínica"}, {src: "/images/clinica-entrada.webp", alt: "Entrada da clínica nos Ingleses"}]} /></div></Container></Section>
    <Section><Container><LocalClinicBlock /></Container></Section>
    <CTASection heading="Conheça a clínica em uma avaliação" />
  </>;
}
