import Image, {type ImageProps} from "next/image";
import Link from "next/link";
import type {ReactNode} from "react";
import type {Professional} from "@/lib/content/types";

function classes(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function Container({children, className}: {children: ReactNode; className?: string}) {
  return <div className={classes("mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10", className)}>{children}</div>;
}

export function Section({children, className, id}: {children: ReactNode; className?: string; id?: string}) {
  return <section id={id} className={classes("py-20 sm:py-24 lg:py-30", className)}>{children}</section>;
}

export function Eyebrow({children, light = false}: {children: ReactNode; light?: boolean}) {
  return <p className={classes("mb-5 text-xs font-semibold uppercase tracking-[0.24em]", light ? "text-white/70" : "text-[var(--color-mauve)]")}>{children}</p>;
}

export function Heading({as: Tag = "h2", children, className}: {as?: "h1" | "h2" | "h3"; children: ReactNode; className?: string}) {
  return <Tag className={classes("font-title text-balance leading-[1.08] tracking-[-0.02em] text-[var(--color-primary)]", Tag === "h1" ? "text-4xl sm:text-5xl lg:text-[4.5rem]" : Tag === "h2" ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl", className)}>{children}</Tag>;
}

export function ButtonLink({href, children, variant = "primary", event = "appointment_cta_click", location}: {href: string; children: ReactNode; variant?: "primary" | "secondary" | "light"; event?: string; location?: string}) {
  return (
    <Link
      href={href}
      data-track-event={event}
      data-track-location={location}
      className={classes(
        "inline-flex min-h-12 items-center justify-center border px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]",
        variant === "primary" && "border-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",
        variant === "secondary" && "border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-surface)]",
        variant === "light" && "border-white bg-white text-[var(--color-primary)] hover:bg-[var(--color-pink)]",
      )}
    >
      {children}
      <span aria-hidden="true" className="ml-3">↗</span>
    </Link>
  );
}

export function ImageFrame({className, alt, ...props}: ImageProps & {className?: string}) {
  return (
    <div className={classes("relative overflow-hidden bg-[var(--color-surface)]", className)}>
      <Image {...props} alt={alt} className="object-cover" />
    </div>
  );
}

export function Breadcrumbs({items, light = false}: {items: {label: string; href?: string}[]; light?: boolean}) {
  return (
    <nav aria-label="Navegação estrutural" className={`mb-8 text-sm ${light ? "text-white/65" : "text-[var(--color-muted)]"}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            {item.href ? <Link className="underline-offset-4 hover:underline" href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function TreatmentCard({index, title, description, href}: {index: string; title: string; description: string; href?: string}) {
  const content = (
    <>
      <span className="text-xs tracking-[0.2em] text-[var(--color-mauve)]">{index}</span>
      <h3 className="mt-10 font-title text-2xl text-[var(--color-primary)]">{title}</h3>
      <p className="mt-4 leading-7 text-[var(--color-muted)]">{description}</p>
      {href && <span className="mt-8 inline-block text-sm font-semibold text-[var(--color-primary)]">Conhecer tratamento <span aria-hidden="true">→</span></span>}
    </>
  );

  const className = "group block border-t border-[var(--color-border)] py-8 transition-colors hover:border-[var(--color-primary)]";
  return href ? <Link href={href} className={className}>{content}</Link> : <article className={className}>{content}</article>;
}

export function ProfessionalCard({name, role, image, profileHref}: {name: string; role: string; image?: string; profileHref?: string}) {
  const content = (
    <>
      {image ? <ImageFrame src={image} alt={`Retrato profissional de ${name}`} fill sizes="(max-width: 768px) 100vw, 25vw" className="aspect-[4/5]" /> : <div className="aspect-[4/5] bg-[var(--color-surface-strong)]" aria-hidden="true" />}
      <h3 className="mt-5 font-title text-2xl text-[var(--color-primary)]">{name}</h3>
      <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{role}</p>
      {profileHref && <span className="mt-4 inline-block text-sm font-semibold text-[var(--color-primary)]">Conhecer perfil <span aria-hidden="true">→</span></span>}
    </>
  );
  return profileHref ? <Link href={profileHref} className="group block">{content}</Link> : <article>{content}</article>;
}

export function ArticleCard({category, title, description, href, meta}: {category: string; title: string; description: string; href?: string; meta?: string}) {
  const content = (
    <>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-mauve)]">{category}</span>
      <h3 className="mt-4 font-title text-2xl text-[var(--color-primary)]">{title}</h3>
      <p className="mt-3 leading-7 text-[var(--color-muted)]">{description}</p>
      {meta && <p className="mt-5 text-xs text-[var(--color-muted)]">{meta}</p>}
      {href && <span className="mt-6 inline-block text-sm font-semibold text-[var(--color-primary)]">Ler conteúdo <span aria-hidden="true">→</span></span>}
    </>
  );
  const className = "block border-t border-[var(--color-border)] py-7 transition-colors hover:border-[var(--color-primary)]";
  return href ? <Link href={href} className={className}>{content}</Link> : <article className={className}>{content}</article>;
}

export function ProfessionalBlock({professional}: {professional: Professional}) {
  return (
    <Section className="bg-[var(--color-surface)]">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.42fr_0.58fr]">
        {professional.image ? <ImageFrame src={professional.image} alt={`Retrato profissional de ${professional.name}`} fill sizes="(max-width: 1024px) 100vw, 40vw" className="aspect-[4/5] max-h-[620px]" /> : <div className="min-h-72 bg-[var(--color-surface-strong)]" aria-hidden="true" />}
        <div className="lg:px-10">
          <Eyebrow>Profissional responsável</Eyebrow>
          <Heading>{professional.name}</Heading>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-mauve)]">{professional.role}</p>
          {professional.summary && <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">{professional.summary}</p>}
          {professional.profileHref && <div className="mt-8"><ButtonLink href={professional.profileHref} variant="secondary" event="professional_profile_click" location="treatment_professional">Conhecer perfil</ButtonLink></div>}
        </div>
      </Container>
    </Section>
  );
}

export function FAQ({items}: {items: {question: string; answer: string}[]}) {
  return (
    <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
      {items.map((item) => (
        <details key={item.question} className="group py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-title text-xl text-[var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]">
            {item.question}
            <span aria-hidden="true" className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="max-w-3xl pt-4 leading-7 text-[var(--color-muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function CTASection({heading = "Seu tratamento começa por uma avaliação completa", text = "Converse com a equipe para organizar o diagnóstico, a indicação e os próximos passos."}: {heading?: string; text?: string}) {
  return (
    <Section className="bg-[var(--color-primary)] text-white">
      <Container className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl">
          <Eyebrow light>Planejamento individual</Eyebrow>
          <Heading className="text-white">{heading}</Heading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{text}</p>
        </div>
        <ButtonLink href="/contato" variant="light" location="cta_section">Agendar uma avaliação</ButtonLink>
      </Container>
    </Section>
  );
}

export function LocalClinicBlock({heading = "Clínica nos Ingleses, Norte da Ilha"}: {heading?: string}) {
  return (
    <div className="grid overflow-hidden bg-[var(--color-surface-strong)] lg:grid-cols-2">
      <ImageFrame src="/images/clinica-entrada.webp" alt="Entrada da clínica da Dra. Sara Michelon nos Ingleses" fill sizes="(max-width: 1024px) 100vw, 50vw" className="min-h-[360px]" />
      <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
        <Eyebrow>Localização</Eyebrow>
        <Heading as="h3">{heading}</Heading>
        <p className="mt-6 max-w-lg leading-7 text-[var(--color-muted)]">Atendimento odontológico nos Ingleses, Norte da Ilha de Florianópolis, com avaliação, planejamento e acompanhamento individual.</p>
        <div className="mt-8"><ButtonLink href="/contato" variant="secondary" event="directions_click" location="local_block">Ver contato e localização</ButtonLink></div>
      </div>
    </div>
  );
}

export function Gallery({images}: {images: {src: string; alt: string}[]}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image, index) => (
        <ImageFrame key={image.src} src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className={classes("aspect-[4/5]", index === 0 && "sm:col-span-2 sm:aspect-[8/5]")} />
      ))}
    </div>
  );
}

export function SEOJsonLd({data}: {data: Record<string, unknown> | Record<string, unknown>[]}) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: json}} />;
}
