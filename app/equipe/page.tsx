import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {Breadcrumbs, Container, CTASection, Eyebrow, Heading, ImageFrame, ProfessionalCard, Section} from "@/components/design-system";
import {getContentEntry, getProfessionals} from "@/lib/sanity/repository";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getContentEntry("equipe");
  if (!page || page.contentType !== "page") return {};
  return {title: page.seo.title, description: page.seo.description, alternates: {canonical: page.seo.canonical ?? "/equipe"}};
}

export default async function EquipePage() {
  const [page, professionals] = await Promise.all([getContentEntry("equipe"), getProfessionals()]);
  if (!page || page.contentType !== "page") notFound();
  return <>
    <Section className="bg-[var(--color-pink)]"><Container><Breadcrumbs items={[{label: "Início", href: "/"}, {label: "Equipe"}]} /><div className="grid items-end gap-10 lg:grid-cols-[1fr_0.75fr]"><div><Eyebrow>{page.eyebrow}</Eyebrow><Heading as="h1">{page.title}</Heading></div><p className="text-lg leading-8 text-[var(--color-muted)]">{page.description}</p></div></Container></Section>
    <Section><Container><ImageFrame src={page.image ?? "/images/real/equipe/team-main.webp"} alt={page.imageAlt ?? "Equipe da clínica da Dra. Sara Michelon"} fill priority sizes="100vw" className="min-h-[620px]" /></Container></Section>
    <Section className="bg-[var(--color-surface)]"><Container><div className="max-w-2xl"><Eyebrow>Profissionais</Eyebrow><Heading>Uma equipe, diferentes áreas de cuidado</Heading><p className="mt-6 leading-7 text-[var(--color-muted)]">A integração entre as áreas ajuda a organizar prioridades e responsabilidades dentro do planejamento clínico.</p></div><div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{professionals.map((professional) => <ProfessionalCard key={professional.name} {...professional} />)}</div></Container></Section>
    <CTASection heading="Vamos avaliar o seu caso como um conjunto" />
  </>;
}
