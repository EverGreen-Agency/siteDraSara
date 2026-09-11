import {ButtonLink, Container, Eyebrow, Heading, ImageFrame, LocalClinicBlock, Section} from "@/components/design-system";
import Link from "next/link";
import type {ContentSection} from "@/lib/content/types";

export function RichTextRenderer({paragraphs}: {paragraphs: string[]}) {
  return <div className="grid gap-5 text-lg leading-8 text-[var(--color-muted)]">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>;
}

export function ContentSectionRenderer({sections}: {sections: ContentSection[]}) {
  return sections.map((section, sectionIndex) => {
    if (section._type === "richText") {
      return <Section key={section._key}><Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><Eyebrow>0{sectionIndex + 1}</Eyebrow>{section.heading && <Heading>{section.heading}</Heading>}</div><RichTextRenderer paragraphs={section.body} /></Container></Section>;
    }
    if (section._type === "imageText") {
      const image = <ImageFrame src={section.image} alt={section.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="min-h-[460px]" />;
      const text = <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16"><Eyebrow>Diagnóstico e indicação</Eyebrow><Heading>{section.heading}</Heading><div className="mt-7"><RichTextRenderer paragraphs={section.body} /></div></div>;
      return <Section key={section._key} className="bg-[var(--color-pink)]"><Container><div className="grid overflow-hidden bg-white lg:grid-cols-2">{section.imagePosition === "right" ? <>{text}{image}</> : <>{image}{text}</>}</div></Container></Section>;
    }
    if (section._type === "steps") {
      return <Section key={section._key}><Container><div className="max-w-2xl"><Eyebrow>Etapas</Eyebrow><Heading>{section.heading}</Heading></div><ol className="mt-14 grid gap-px bg-[var(--color-border)] md:grid-cols-2 lg:grid-cols-4">{section.items.map((item, index) => <li key={item.title} className="bg-white p-7"><span className="text-xs tracking-[0.2em] text-[var(--color-mauve)]">0{index + 1}</span><h3 className="mt-8 font-title text-2xl text-[var(--color-primary)]">{item.title}</h3><p className="mt-4 leading-7 text-[var(--color-muted)]">{item.text}</p></li>)}</ol></Container></Section>;
    }
    if (section._type === "cardGrid") {
      const count = section.items.length;
      const gridLayout =
        count === 1
          ? "max-w-xl"
          : count === 2
          ? "grid-cols-1 md:grid-cols-2"
          : count === 3
          ? "grid-cols-1 md:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";

      return (
        <Section key={section._key}>
          <Container>
            <Heading>{section.heading}</Heading>
            <div className={`mt-12 grid gap-6 ${gridLayout}`}>
              {section.items.map((item) => {
                const content = (
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <h3 className="font-title text-2xl text-[var(--color-primary)]">{item.title}</h3>
                      <p className="mt-4 leading-7 text-[var(--color-muted)]">{item.text}</p>
                    </div>
                    {item.href && (
                      <span className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
                        Conhecer <span aria-hidden="true">→</span>
                      </span>
                    )}
                  </div>
                );
                const className =
                  "block h-full border border-[var(--color-border)] bg-white p-7 transition-colors hover:border-[var(--color-primary)]";
                return item.href ? (
                  <Link key={item.title} href={item.href} className={className}>
                    {content}
                  </Link>
                ) : (
                  <article key={item.title} className={className}>
                    {content}
                  </article>
                );
              })}
            </div>
          </Container>
        </Section>
      );
    }
    if (section._type === "comparison") {
      return <Section key={section._key} className="bg-[var(--color-surface)]"><Container><Eyebrow>Comparação clínica</Eyebrow><Heading>{section.heading}</Heading><div className="mt-12 grid gap-6 md:grid-cols-2">{section.columns.map((column) => <article key={column.title} className="border-t-2 border-[var(--color-primary)] bg-white p-7 sm:p-9"><h3 className="font-title text-2xl text-[var(--color-primary)]">{column.title}</h3><ul className="mt-6 grid gap-3 text-[var(--color-muted)]">{column.items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="text-[var(--color-mauve)]">—</span>{item}</li>)}</ul></article>)}</div><p className="mt-7 max-w-3xl text-sm leading-6 text-[var(--color-muted)]">A comparação orienta a conversa, mas não substitui o diagnóstico. A indicação depende das condições e dos objetivos de cada caso.</p></Container></Section>;
    }
    if (section._type === "quote") {
      return <Section key={section._key} className="bg-[var(--color-primary)] text-white"><Container><blockquote className="max-w-4xl font-title text-3xl leading-snug sm:text-4xl">“{section.quote}”{section.attribution && <footer className="mt-6 font-sans text-sm text-white/65">{section.attribution}</footer>}</blockquote></Container></Section>;
    }
    if (section._type === "cta") {
      return <Section key={section._key}><Container className="border-y border-[var(--color-border)] py-12"><Heading>{section.heading}</Heading><p className="mt-5 max-w-2xl leading-7 text-[var(--color-muted)]">{section.text}</p><div className="mt-8"><ButtonLink href={section.href}>{section.label}</ButtonLink></div></Container></Section>;
    }
    if (section._type === "localBlock") {
      return <Section key={section._key}><Container><LocalClinicBlock heading={section.heading} /></Container></Section>;
    }
    return null;
  });
}
