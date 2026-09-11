import type {Article, ContentSection, InstitutionalPage, LandingPage, NavigationItem, Professional, SiteSettings, Treatment, TreatmentVariant} from "@/lib/content/types";

export const fallbackSiteSettings: SiteSettings = {
  clinicName: "Dra. Sara Michelon",
  legalName: "Dra. Sara Michelon — Odontologia e Estética",
  locality: "Ingleses, Florianópolis — SC",
  region: "Norte da Ilha",
  phone: "(48) 4104-2945",
  whatsapp: "(48) 98506-3001",
  email: "contato@odontoestetica.net",
  streetAddress: "Rodovia Armando Calil Bulos, 6201, salas 217 e 218 — Ingleses Saúde & Office, Ingleses",
  openingHours: ["Segunda a Sexta: 08:30 às 19:00"],
  geo: {latitude: -27.4373, longitude: -48.3998},
  socialLinks: [],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://odontoestetica.net",
  trackingIds: {
    ga4: process.env.NEXT_PUBLIC_GA4_ID ?? null,
    gtm: process.env.NEXT_PUBLIC_GTM_ID ?? null,
    googleAds: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? null,
  },
};

export const fallbackProfessionals: Professional[] = [
  {
    name: "Dra. Sara Michelon",
    slug: "dra-sara-michelon",
    role: "Odontologia e Estética Orofacial",
    image: "/images/real/sara/sara-card-profile-33.webp",
    summary: "Atuação orientada por avaliação individual, planejamento e integração entre saúde, função e estética.",
    profileHref: "/dra-sara-michelon",
  },
  {name: "Dra. Camila Cecchin", slug: "dra-camila-cecchin", role: "Implantodontia e Periodontia", image: "/images/dra-camila.webp", summary: "Atuação integrada ao planejamento de implantes, enxertos e saúde dos tecidos de suporte.", profileHref: "/equipe/dra-camila-cecchin", bio: ["Na equipe, sua atuação conecta saúde periodontal, disponibilidade óssea e planejamento protético para organizar as etapas da reabilitação."], seo: {title: "Dra. Camila Cecchin | Implantodontia e Periodontia", description: "Conheça a atuação clínica da Dra. Camila Cecchin em implantodontia e periodontia na equipe da Dra. Sara Michelon.", canonical: "/equipe/dra-camila-cecchin", index: true}},
  {name: "Dra. Maria Clara Paranhos Hoelscher", slug: "dra-maria-clara", role: "Endodontia", image: "/images/dra-maria-clara.webp", summary: "Atuação em diagnóstico e tratamento endodôntico, integrada à preservação e reabilitação dos dentes.", profileHref: "/equipe/dra-maria-clara", bio: ["Na equipe, sua atuação em endodontia participa do diagnóstico da dor e da preservação de dentes dentro do planejamento reabilitador."], seo: {title: "Dra. Maria Clara | Endodontia em Florianópolis", description: "Conheça a atuação clínica da Dra. Maria Clara em endodontia na equipe da Dra. Sara Michelon.", canonical: "/equipe/dra-maria-clara", index: true}},
  {name: "Dr. Ericson Pessanha", slug: "dr-ericson-pessanha", role: "Periodontia e Cirurgia Oral", image: "/images/dr-ericson.webp", summary: "Atuação em periodontia e cirurgia oral, com avaliação dos tecidos de suporte e das indicações cirúrgicas.", profileHref: "/equipe/dr-ericson-pessanha", bio: ["Na equipe, sua atuação conecta saúde dos tecidos de suporte e avaliação cirúrgica às demais etapas do planejamento odontológico."], seo: {title: "Dr. Ericson Pessanha | Periodontia e Cirurgia Oral", description: "Conheça a atuação clínica do Dr. Ericson Pessanha em periodontia e cirurgia oral na equipe da Dra. Sara Michelon.", canonical: "/equipe/dr-ericson-pessanha", index: true}},
];

const professionalBySlug = Object.fromEntries(fallbackProfessionals.map((professional) => [professional.slug, professional]));

export const fallbackNavigation: NavigationItem[] = [
  {label: "Início", href: "/"},
  {
    label: "Odontologia",
    href: "/odontologia",
    groups: [
      {label: "Estética do sorriso", items: [{label: "Facetas de resina", href: "/facetas-de-resina"}, {label: "Lentes e facetas de porcelana", href: "/lentes-de-contato-dental"}, {label: "Clareamento dental", href: "/clareamento-dental"}, {label: "Fechamento de diastemas", href: "/fechamento-de-diastemas"}]},
      {label: "Implantes e reabilitação", items: [{label: "Implantes dentários", href: "/implantes-dentarios"}, {label: "Prótese protocolo", href: "/protese-protocolo"}, {label: "Enxerto ósseo", href: "/enxerto-osseo-dentario"}, {label: "Próteses dentárias", href: "/proteses-dentarias"}, {label: "Inlays e onlays", href: "/inlays-onlays"}, {label: "Reabilitação oral", href: "/reabilitacao-oral"}]},
      {label: "Ortodontia", items: [{label: "Aparelhos e alinhadores", href: "/ortodontia"}, {label: "Invisalign", href: "/invisalign"}]},
      {label: "Saúde bucal e gengiva", items: [{label: "Manutenção odontológica", href: "/manutencao-odontologica"}, {label: "Limpeza dental", href: "/limpeza-dental"}, {label: "Periodontia", href: "/periodontia"}, {label: "Cirurgia gengival", href: "/cirurgia-gengival"}, {label: "Tratamento de canal", href: "/tratamento-de-canal"}, {label: "Extração de siso", href: "/extracao-de-siso"}, {label: "Bruxismo e DTM", href: "/bruxismo"}]},
    ],
  },
  {
    label: "Estética Orofacial",
    href: "/estetica-orofacial",
    groups: [{label: "Planejamento facial", items: [{label: "Harmonização facial", href: "/harmonizacao-facial"}, {label: "Preenchimento facial", href: "/preenchimento-facial"}, {label: "Preenchimento labial", href: "/preenchimento-labial"}, {label: "Botox e linhas de expressão", href: "/botox"}, {label: "Bioestimuladores de colágeno", href: "/bioestimuladores-de-colageno"}, {label: "Perfiloplastia", href: "/perfiloplastia"}, {label: "Bichectomia", href: "/bichectomia"}]}],
  },
  {label: "A clínica", href: "/clinica"},
  {label: "Equipe", href: "/equipe"},
  {label: "Conteúdos", href: "/conteudos"},
  {label: "Contato", href: "/contato"},
];

type TreatmentSeed = {
  slug: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  specialty: string;
  variant: TreatmentVariant;
  lead: keyof typeof professionalBySlug;
  focusHeading: string;
  overview: string;
  topics: {title: string; text: string; href?: string}[];
  faq: {question: string; answer: string}[];
  related: {title: string; href: string; description?: string}[];
  comparison?: {title: string; items: string[]}[];
  contentStatus?: "final" | "partial";
  source?: "docx-clinical" | "matrix-supported";
};

function createSections(seed: TreatmentSeed): ContentSection[] {
  const intro: ContentSection = {
    _key: `${seed.slug}-overview`,
    _type: "richText",
    heading: seed.focusHeading,
    body: [seed.overview, "A avaliação reúne as condições clínicas, os objetivos e os limites do caso antes de definir a indicação e a sequência do cuidado."],
  };
  const cards: ContentSection = {_key: `${seed.slug}-focus`, _type: "cardGrid", heading: seed.variant === "symptom-led" ? "O que merece avaliação" : "O que faz parte do planejamento", items: seed.topics};
  const steps: ContentSection = {
    _key: `${seed.slug}-steps`,
    _type: "steps",
    heading: seed.variant === "process" ? "Como o cuidado é organizado" : "Da avaliação ao acompanhamento",
    items: [
      {title: "Avaliação", text: "Histórico, necessidades e expectativas são considerados em conjunto."},
      {title: "Diagnóstico", text: "O exame define prioridades, relações clínicas e limites relevantes."},
      {title: "Indicação", text: "As possibilidades são discutidas de acordo com o caso, sem uma solução padronizada."},
      {title: "Acompanhamento", text: "Revisões e cuidados posteriores integram o planejamento."},
    ],
  };
  const comparison: ContentSection | null = seed.comparison ? {_key: `${seed.slug}-comparison`, _type: "comparison", heading: "Possibilidades que precisam ser diferenciadas", columns: seed.comparison} : null;
  const local: ContentSection = {_key: `${seed.slug}-local`, _type: "localBlock", heading: `${seed.title} nos Ingleses`};
  if (seed.variant === "symptom-led") return [cards, intro, steps, local];
  if (seed.variant === "hub") return [intro, cards, local];
  if (seed.variant === "image-led" && comparison) return [intro, comparison, cards, local];
  if (seed.variant === "editorial") return [intro, cards, local];
  return [intro, steps, cards, local];
}

function createTreatment(seed: TreatmentSeed): Treatment {
  const clinicalLead = professionalBySlug[seed.lead];
  return {
    contentType: "treatment",
    title: seed.title,
    slug: seed.slug,
    eyebrow: seed.specialty,
    shortDescription: seed.description,
    heroImage: undefined,
    heroImageAlt: undefined,
    specialty: seed.specialty,
    variant: seed.variant,
    clinicalLead,
    seo: {title: seed.seoTitle, description: seed.seoDescription, canonical: `/${seed.slug}`, index: true},
    sections: createSections(seed),
    faq: seed.faq,
    relatedTreatments: seed.related,
    aftercare: {body: ["Revisões, higiene e orientações específicas fazem parte da continuidade do tratamento."], href: "/manutencao-odontologica", label: "Conhecer a manutenção odontológica"},
    contentStatus: seed.contentStatus ?? "final",
    source: seed.source ?? "docx-clinical",
  };
}

const treatmentSeeds: TreatmentSeed[] = [
  {
    slug: "facetas-de-resina", title: "Facetas de Resina e Lentes em Resina", specialty: "Odontologia estética", variant: "image-led", lead: "dra-sara-michelon",
    description: "Mudanças no sorriso com uma abordagem conservadora, planejadas de acordo com dentes, mordida, gengiva e objetivos individuais.",
    seoTitle: "Facetas de Resina em Florianópolis | Dra. Sara Michelon", seoDescription: "Facetas de resina em Florianópolis com planejamento individual e abordagem conservadora. Entenda desgaste, manutenção, duração e diferenças para porcelana.",
    focusHeading: "Forma, proporção e cor precisam ser avaliadas em conjunto", overview: "As facetas em resina podem participar de mudanças de forma, proporção e pequenas diferenças de cor. O número de dentes e a extensão da intervenção dependem do diagnóstico.",
    topics: [{title: "Estrutura dental", text: "A condição de cada dente orienta a possibilidade de uma abordagem conservadora."}, {title: "Mordida e gengiva", text: "Função e saúde gengival influenciam indicação e manutenção."}, {title: "Manutenção", text: "Revisões e cuidados fazem parte da longevidade do tratamento."}],
    comparison: [{title: "Facetas de resina", items: ["Aplicação direta", "Planejamento individual", "Manutenção periódica"]}, {title: "Facetas de porcelana", items: ["Material cerâmico", "Etapa laboratorial", "Indicação conforme o caso"]}],
    faq: [{question: "Faceta de resina desgasta o dente?", answer: "A necessidade e a extensão de qualquer preparo dependem do caso. A avaliação define a abordagem possível com foco conservador."}, {question: "Facetas de resina podem manchar?", answer: "A resina pode sofrer alterações ao longo do tempo. Hábitos, cuidados e manutenção influenciam seu aspecto."}, {question: "Como decidir entre resina e porcelana?", answer: "A decisão considera estrutura dental, mordida, objetivo, manutenção e características de cada material."}],
    related: [{title: "Lentes e facetas de porcelana", href: "/lentes-de-contato-dental"}, {title: "Ortodontia", href: "/ortodontia"}, {title: "Periodontia", href: "/periodontia"}],
  },
  {
    slug: "lentes-de-contato-dental", title: "Lentes de Contato Dental e Facetas de Porcelana", specialty: "Odontologia estética", variant: "image-led", lead: "dra-sara-michelon",
    description: "Planejamento digital, mock-up e indicação individual para mudanças de forma, proporção e cor com cerâmica.",
    seoTitle: "Lentes de Contato Dental e Facetas de Porcelana | Florianópolis", seoDescription: "Lentes de contato dental e facetas de porcelana em Florianópolis. Veja como funciona o planejamento, mock-up, preparo, manutenção e indicações.",
    focusHeading: "O material é escolhido depois do diagnóstico", overview: "Lentes e facetas de porcelana fazem parte de um fluxo que pode envolver planejamento digital, mock-up e etapa laboratorial. Estrutura dental, mordida e objetivo orientam a indicação.",
    topics: [{title: "Planejamento e mock-up", text: "A proposta de forma e proporção pode ser discutida antes da execução."}, {title: "Preparo", text: "A necessidade de preparo não é igual para todos e depende das condições clínicas."}, {title: "Manutenção", text: "O acompanhamento observa dentes, gengiva, função e adaptação ao longo do tempo."}],
    comparison: [{title: "Resina", items: ["Aplicação direta", "Possibilidade de reparo", "Manutenção própria do material"]}, {title: "Porcelana", items: ["Fluxo laboratorial", "Material cerâmico", "Planejamento de preparo e adesão"]}],
    faq: [{question: "Lente de contato dental precisa de desgaste?", answer: "A necessidade de preparo depende da posição, volume e condição dos dentes e só pode ser definida após avaliação."}, {question: "Porcelana pode manchar?", answer: "O comportamento do material e das margens deve ser acompanhado junto da higiene e da saúde gengival."}, {question: "Resina ou porcelana?", answer: "A escolha considera objetivos, estrutura dental, mordida, manutenção e características dos materiais."}],
    related: [{title: "Facetas de resina", href: "/facetas-de-resina"}, {title: "Reabilitação oral", href: "/reabilitacao-oral"}, {title: "Ortodontia", href: "/ortodontia"}, {title: "Periodontia", href: "/periodontia"}],
  },
  {
    slug: "implantes-dentarios", title: "Implantes Dentários para substituir um ou mais dentes", specialty: "Implantodontia", variant: "process", lead: "dra-camila-cecchin",
    description: "O tratamento começa pelo planejamento da reabilitação: osso, mordida, dentes remanescentes e a prótese que será suportada pelo implante.",
    seoTitle: "Implantes Dentários em Florianópolis | Clínica nos Ingleses", seoDescription: "Implantes dentários em Florianópolis para substituir um ou mais dentes, com avaliação, tomografia, planejamento e acompanhamento da reabilitação.",
    focusHeading: "Planejar o dente que será reposto", overview: "O implante é parte de uma reabilitação que também considera a prótese, a disponibilidade óssea, a mordida e as estruturas próximas.",
    topics: [{title: "Um ou mais dentes", text: "A extensão da ausência dentária muda as possibilidades de reabilitação."}, {title: "Exames e osso", text: "A avaliação clínica define quais exames são necessários e se há condições para o plano proposto."}, {title: "Prótese e função", text: "A posição do implante é planejada de acordo com a reabilitação que ele deverá suportar."}],
    faq: [{question: "Preciso de enxerto para fazer implante?", answer: "Nem todos os casos precisam de enxerto. A avaliação e os exames definem a disponibilidade óssea e as alternativas."}, {question: "É possível colocar o dente no mesmo dia?", answer: "A possibilidade de carga imediata depende de critérios clínicos e não pode ser prevista sem diagnóstico."}, {question: "Vou ficar sem dente durante o tratamento?", answer: "As opções provisórias variam conforme a região, o planejamento e a condição clínica."}],
    related: [{title: "Prótese protocolo", href: "/protese-protocolo"}, {title: "Reabilitação oral", href: "/reabilitacao-oral"}, {title: "Periodontia", href: "/periodontia"}],
  },
  {
    slug: "protese-protocolo", title: "Prótese Protocolo: dentes fixos sobre implantes", specialty: "Implantodontia", variant: "process", lead: "dra-camila-cecchin",
    description: "Uma possibilidade de reabilitação fixa para pacientes que perderam todos ou quase todos os dentes de uma arcada.",
    seoTitle: "Prótese Protocolo em Florianópolis | Implantes Dentários", seoDescription: "Prótese protocolo em Florianópolis: entenda indicação, implantes, materiais, carga imediata, provisórios e manutenção da prótese fixa.",
    focusHeading: "Cirurgia e prótese pertencem ao mesmo plano", overview: "A prótese protocolo é planejada como uma reabilitação fixa sobre implantes. A indicação considera dentes remanescentes, suporte ósseo, função e manutenção futura.",
    topics: [{title: "Indicação", text: "Perdas extensas e a condição dos dentes remanescentes precisam ser avaliadas antes da decisão."}, {title: "Fase provisória", text: "A necessidade e o tipo de provisório dependem da sequência clínica."}, {title: "Manutenção", text: "Higiene, controle dos tecidos e revisões integram o tratamento."}],
    faq: [{question: "Implante e protocolo são iguais?", answer: "O implante é o componente inserido no osso. A prótese protocolo é a reabilitação fixa suportada por implantes."}, {question: "Quem ainda tem dentes pode fazer protocolo?", answer: "A preservação ou remoção de dentes exige diagnóstico individual; não é uma decisão automática."}, {question: "A carga imediata é sempre possível?", answer: "Não. Ela depende de critérios cirúrgicos, protéticos e funcionais avaliados no caso."}],
    related: [{title: "Implantes dentários", href: "/implantes-dentarios"}, {title: "Reabilitação oral", href: "/reabilitacao-oral"}, {title: "Periodontia", href: "/periodontia"}],
  },
  {
    slug: "periodontia", title: "Periodontia e Tratamento de Gengiva", specialty: "Periodontia", variant: "symptom-led", lead: "dr-ericson-pessanha",
    description: "Sangramento, inchaço, retração ou mobilidade podem indicar alterações que precisam de avaliação periodontal.",
    seoTitle: "Periodontia em Florianópolis | Especialista em Gengiva", seoDescription: "Periodontia e tratamento de gengiva em Florianópolis. Avaliação de gengivite, periodontite, sangramento, retração e saúde ao redor de implantes.",
    focusHeading: "Saúde da gengiva e dos tecidos de suporte", overview: "A avaliação periodontal observa gengiva, suporte dos dentes e tecidos ao redor de implantes. O diagnóstico diferencia alterações e organiza controle e manutenção.",
    topics: [{title: "Sangramento e inchaço", text: "Sinais persistentes merecem avaliação; a causa não deve ser presumida somente pela aparência."}, {title: "Retração gengival", text: "A exposição da raiz pode ter diferentes fatores e precisa ser examinada."}, {title: "Mobilidade ou alteração ao redor de implantes", text: "O suporte periodontal e peri-implantar faz parte da avaliação."}],
    faq: [{question: "Gengiva sangrando é normal?", answer: "Sangramento recorrente deve ser avaliado para identificar a causa e orientar o cuidado adequado."}, {question: "Gengivite e periodontite são iguais?", answer: "São condições diferentes e o exame periodontal ajuda a identificar a extensão do comprometimento."}, {question: "Periodontite tem tratamento?", answer: "O plano depende do estágio, dos fatores envolvidos e da resposta ao controle e à manutenção."}],
    related: [{title: "Cirurgia gengival", href: "/cirurgia-gengival"}, {title: "Implantes dentários", href: "/implantes-dentarios"}, {title: "Facetas de resina", href: "/facetas-de-resina"}],
  },
  {
    slug: "cirurgia-gengival", title: "Gengivoplastia e Cirurgia Gengival", specialty: "Periodontia", variant: "symptom-led", lead: "dr-ericson-pessanha",
    description: "Quando a proporção do sorriso envolve também a gengiva, o planejamento precisa avaliar dentes, tecido gengival e limites biológicos.",
    seoTitle: "Gengivoplastia e Cirurgia Gengival em Florianópolis", seoDescription: "Cirurgia gengival e gengivoplastia em Florianópolis para casos indicados de contorno gengival, sorriso gengival e retração, após avaliação periodontal.",
    focusHeading: "Contorno gengival exige diagnóstico periodontal", overview: "Gengivoplastia, aumento de coroa e abordagens para retração têm objetivos e indicações diferentes. O planejamento respeita tecido gengival, suporte e proporção dental.",
    topics: [{title: "Sorriso gengival", text: "A exposição da gengiva pode ter causas diferentes, e nem toda situação pede a mesma abordagem."}, {title: "Retração", text: "A posição gengival e a condição do tecido orientam as possibilidades."}, {title: "Antes de facetas", text: "Em alguns planejamentos estéticos, a saúde e o contorno gengival precisam ser definidos primeiro."}],
    faq: [{question: "Gengivoplastia aumenta o dente?", answer: "Ela altera o contorno visível da gengiva em casos indicados; o limite depende da anatomia e do suporte periodontal."}, {question: "Todo sorriso gengival precisa de cirurgia?", answer: "Não. A causa e as proporções devem ser avaliadas antes de definir uma abordagem."}, {question: "Quando o enxerto gengival é considerado?", answer: "A indicação depende do tipo de retração, do tecido disponível e dos objetivos clínicos."}],
    related: [{title: "Periodontia", href: "/periodontia"}, {title: "Facetas de resina", href: "/facetas-de-resina"}, {title: "Lentes e facetas de porcelana", href: "/lentes-de-contato-dental"}],
  },
  {
    slug: "ortodontia", title: "Ortodontia: aparelhos dentários e alinhadores transparentes", specialty: "Ortodontia", variant: "hub", lead: "dra-sara-michelon",
    description: "A escolha entre alinhadores, aparelho autoligado ou convencional começa pelo diagnóstico e pelas movimentações necessárias.",
    seoTitle: "Ortodontista em Florianópolis | Aparelhos e Alinhadores", seoDescription: "Ortodontia em Florianópolis com aparelhos fixos e alinhadores transparentes. Planejamento individual para crianças, adolescentes e adultos.",
    focusHeading: "O sistema vem depois do diagnóstico", overview: "A ortodontia planeja movimentações dentárias e acompanhamento. Idade, posição dos dentes, mordida e colaboração influenciam a escolha do sistema.",
    topics: [{title: "Alinhadores transparentes", text: "Uma alternativa removível que exige planejamento e colaboração.", href: "/invisalign"}, {title: "Aparelhos fixos", text: "Sistemas convencionais ou autoligados podem ser considerados conforme as movimentações necessárias."}, {title: "Antes de tratamentos estéticos", text: "O alinhamento pode fazer parte da sequência antes de facetas ou outras intervenções."}],
    faq: [{question: "Alinhador é sempre mais rápido?", answer: "O tempo depende das movimentações necessárias e da colaboração, não apenas do tipo de aparelho."}, {question: "Adulto pode usar aparelho?", answer: "A idade, por si só, não define a indicação; condições dentárias e periodontais precisam ser avaliadas."}, {question: "Quanto tempo dura o tratamento?", answer: "A duração varia conforme o diagnóstico, a complexidade e a resposta ao planejamento."}],
    related: [{title: "Invisalign", href: "/invisalign"}, {title: "Facetas de resina", href: "/facetas-de-resina"}, {title: "Reabilitação oral", href: "/reabilitacao-oral"}],
  },
  {
    slug: "invisalign", title: "Invisalign e Alinhadores Transparentes", specialty: "Ortodontia", variant: "process", lead: "dra-sara-michelon",
    description: "Tratamento ortodôntico discreto e removível, planejado digitalmente conforme as movimentações necessárias e a colaboração do paciente.",
    seoTitle: "Invisalign em Florianópolis | Alinhadores Transparentes", seoDescription: "Invisalign em Florianópolis e alinhadores transparentes. Saiba como funciona, indicação, tempo de uso e diferenças para aparelho fixo.",
    focusHeading: "Planejamento digital e participação do paciente", overview: "Alinhadores transparentes são dispositivos removíveis usados em uma sequência planejada. A indicação depende dos movimentos necessários e do compromisso com o uso.",
    topics: [{title: "Diagnóstico ortodôntico", text: "A avaliação define objetivos, movimentações e limites antes da simulação digital."}, {title: "Uso e colaboração", text: "A rotina de uso e as revisões influenciam a condução do tratamento."}, {title: "Contenção", text: "A fase de estabilidade após as movimentações também precisa ser planejada."}],
    faq: [{question: "Invisalign e alinhador são a mesma coisa?", answer: "Invisalign é uma marca de alinhadores transparentes; a indicação do sistema depende do planejamento."}, {question: "Quanto tempo o alinhador é usado por dia?", answer: "A orientação de uso é definida pelo profissional e precisa ser seguida para que a sequência planejada seja acompanhada."}, {question: "Alinhador substitui aparelho fixo em todos os casos?", answer: "Não. As possibilidades dependem das movimentações e das condições individuais."}],
    related: [{title: "Ortodontia", href: "/ortodontia"}, {title: "Facetas de resina", href: "/facetas-de-resina"}, {title: "Periodontia", href: "/periodontia"}],
  },
  {
    slug: "bruxismo", title: "Bruxismo, DTM e Dor Orofacial", specialty: "DTM e Dor Orofacial", variant: "symptom-led", lead: "dra-sara-michelon",
    description: "Dor na face, tensão na mandíbula, apertamento, estalos e desgaste dos dentes precisam de diagnóstico antes do tratamento.",
    seoTitle: "Tratamento do Bruxismo em Florianópolis | DTM e Dor Orofacial", seoDescription: "Avaliação de bruxismo, DTM e dor orofacial em Florianópolis. Entenda sintomas, placa estabilizadora, acompanhamento e quando buscar avaliação.",
    focusHeading: "Sintomas parecidos podem ter causas diferentes", overview: "Bruxismo, disfunções temporomandibulares e dor orofacial não são sinônimos. A avaliação organiza sinais, hábitos, função e histórico antes da terapia.",
    topics: [{title: "Apertamento ou ranger", text: "A percepção do hábito e os sinais nos dentes fazem parte da investigação."}, {title: "Dor ou tensão", text: "Face, têmporas e mandíbula podem exigir avaliação funcional e de outras possíveis causas."}, {title: "Estalos e limitação", text: "Ruídos isolados e sintomas associados precisam ser diferenciados no exame."}],
    faq: [{question: "Quais são os sintomas do bruxismo?", answer: "Apertamento, desgaste e desconforto podem aparecer, mas nenhum sinal isolado confirma o diagnóstico."}, {question: "Placa resolve o bruxismo?", answer: "A placa pode ter objetivos específicos em casos indicados, mas não substitui diagnóstico e acompanhamento."}, {question: "Estalo na mandíbula é DTM?", answer: "O estalo precisa ser relacionado a outros sinais e sintomas; somente a avaliação permite interpretar sua relevância."}],
    related: [{title: "Reabilitação oral", href: "/reabilitacao-oral"}, {title: "Facetas de resina", href: "/facetas-de-resina"}, {title: "Contato", href: "/contato"}],
  },
  {
    slug: "tratamento-de-canal", title: "Tratamento de Canal e Endodontia", specialty: "Endodontia", variant: "process", lead: "dra-maria-clara",
    description: "Quando a polpa do dente está inflamada ou infectada, o tratamento endodôntico busca controlar o problema e preservar o dente quando possível.",
    seoTitle: "Tratamento de Canal em Florianópolis | Endodontia", seoDescription: "Tratamento de canal em Florianópolis com avaliação, instrumentação moderna e planejamento da restauração do dente após a endodontia.",
    focusHeading: "Preservação do dente e planejamento restaurador", overview: "O tratamento de canal cuida da parte interna do dente em situações indicadas. Depois da endodontia, a restauração e a proteção da estrutura também precisam ser planejadas.",
    topics: [{title: "Dor e diagnóstico", text: "Nem toda dor dental exige canal; exame e testes ajudam a identificar a origem."}, {title: "Tratamento ou retratamento", text: "Condições anteriores e achados clínicos orientam a abordagem."}, {title: "Restauração posterior", text: "A estrutura remanescente define como o dente será restaurado depois."}],
    faq: [{question: "Tratamento de canal dói?", answer: "A experiência varia conforme a condição do dente. Controle do desconforto e acompanhamento fazem parte do atendimento."}, {question: "Todo dente com dor precisa de canal?", answer: "Não. A dor pode ter diferentes causas, e a indicação depende do diagnóstico."}, {question: "É preciso restaurar o dente depois?", answer: "A proteção e a restauração da estrutura são planejadas conforme o dente e a perda de tecido."}],
    related: [{title: "Reabilitação oral", href: "/reabilitacao-oral"}, {title: "Periodontia", href: "/periodontia"}, {title: "Ortodontia", href: "/ortodontia"}],
  },
  {
    slug: "reabilitacao-oral", title: "Reabilitação Oral: planejamento integrado do sorriso e da função", specialty: "Reabilitação Oral", variant: "hub", lead: "dra-sara-michelon",
    description: "Quando diferentes problemas aparecem ao mesmo tempo, o primeiro passo é organizar o diagnóstico e a sequência do tratamento.",
    seoTitle: "Reabilitação Oral em Florianópolis | Planejamento Integrado", seoDescription: "Reabilitação oral em Florianópolis para casos com dentes ausentes, desgastados, próteses antigas ou múltiplas necessidades. Planejamento integrado da clínica.",
    focusHeading: "Uma página de entrada para casos com várias necessidades", overview: "Reabilitação oral não é um único procedimento. Ela integra prioridades biológicas, função, dentes ausentes ou desgastados e a sequência entre diferentes áreas.",
    topics: [{title: "Implantes e protocolo", text: "Ausências dentárias podem exigir integração entre planejamento cirúrgico e protético.", href: "/implantes-dentarios"}, {title: "Gengiva e suporte", text: "A base periodontal precisa estar estável para sustentar outras etapas.", href: "/periodontia"}, {title: "Canal e restauração", text: "Dentes tratados endodonticamente precisam ser considerados na reconstrução.", href: "/tratamento-de-canal"}, {title: "Ortodontia", text: "Movimentações podem fazer parte da organização de espaço e mordida.", href: "/ortodontia"}, {title: "Facetas e lentes", text: "Forma, proporção e material são avaliados dentro do conjunto.", href: "/facetas-de-resina"}, {title: "Prótese protocolo", text: "Perdas extensas podem demandar uma reabilitação fixa sobre implantes.", href: "/protese-protocolo"}],
    faq: [{question: "Por onde começar quando há vários problemas?", answer: "O primeiro passo é reunir diagnóstico e prioridades para construir uma sequência coerente."}, {question: "Preciso fazer tudo de uma vez?", answer: "O plano pode ser organizado em fases conforme prioridades clínicas e condições individuais."}, {question: "Quanto tempo leva uma reabilitação?", answer: "O tempo depende do número de etapas, da resposta biológica e dos tratamentos envolvidos."}],
    related: [{title: "Implantes dentários", href: "/implantes-dentarios"}, {title: "Prótese protocolo", href: "/protese-protocolo"}, {title: "Periodontia", href: "/periodontia"}, {title: "Tratamento de canal", href: "/tratamento-de-canal"}],
  },
  {
    slug: "harmonizacao-facial", title: "Harmonização Facial: planejamento da face como um conjunto", specialty: "Estética Orofacial", variant: "hub", lead: "dra-sara-michelon",
    description: "A harmonização começa pela análise de proporções, movimento muscular, qualidade da pele, volumes e contornos.",
    seoTitle: "Harmonização Facial em Florianópolis | Planejamento Natural", seoDescription: "Harmonização facial em Florianópolis com avaliação individual e foco em naturalidade. Entenda planejamento, Full Face, preenchimentos e limites da abordagem.",
    focusHeading: "Análise facial antes da escolha do procedimento", overview: "Harmonização facial funciona como uma abordagem de planejamento. Proporções, movimento, pele, volumes e perfil são avaliados antes de considerar intervenções pontuais.",
    topics: [{title: "Preenchimento facial", text: "Suporte, volume e contornos são avaliados dentro da anatomia individual.", href: "/preenchimento-facial"}, {title: "Preenchimento labial", text: "Lábios são analisados em relação ao sorriso e ao perfil.", href: "/preenchimento-labial"}, {title: "Linhas de expressão", text: "Movimentação muscular orienta a avaliação da toxina botulínica.", href: "/botox"}, {title: "Qualidade da pele", text: "Firmeza e estímulo de colágeno integram outra frente do planejamento.", href: "/bioestimuladores-de-colageno"}, {title: "Perfiloplastia", text: "Nariz, lábios e mento são observados como relações do perfil.", href: "/perfiloplastia"}],
    faq: [{question: "O que é planejamento Full Face?", answer: "É a análise da face como um conjunto, sem significar que todas as áreas precisam de intervenção."}, {question: "Harmonização deixa o rosto maior?", answer: "O objetivo e os limites dependem da anatomia e da indicação; não existe uma proposta única para todas as pessoas."}, {question: "Quanto tempo dura?", answer: "A duração varia conforme o procedimento considerado, o organismo e o acompanhamento."}],
    related: [{title: "Preenchimento facial", href: "/preenchimento-facial"}, {title: "Preenchimento labial", href: "/preenchimento-labial"}, {title: "Botox", href: "/botox"}, {title: "Bioestimuladores", href: "/bioestimuladores-de-colageno"}],
  },
  {
    slug: "preenchimento-facial", title: "Preenchimento Facial com Ácido Hialurônico", specialty: "Estética Orofacial", variant: "editorial", lead: "dra-sara-michelon",
    description: "O preenchimento pode ser indicado para suporte, reposição de volume e definição de contornos, sempre considerando a face como um conjunto.",
    seoTitle: "Preenchimento Facial em Florianópolis | Ácido Hialurônico", seoDescription: "Preenchimento facial em Florianópolis com ácido hialurônico quando indicado. Conheça regiões, objetivos, duração e como funciona o planejamento.",
    focusHeading: "Suporte, volume e contorno têm objetivos diferentes", overview: "O preenchimento facial com ácido hialurônico pode ser considerado em regiões específicas depois da análise de anatomia, proporções e movimento.",
    topics: [{title: "Anatomia", text: "A avaliação identifica relações entre estruturas e possíveis limites."}, {title: "Objetivo", text: "Reposição de volume, suporte e definição não são a mesma demanda."}, {title: "Integração", text: "O contorno e o equilíbrio facial são discutidos dentro do conjunto, não como uma rota isolada."}],
    faq: [{question: "Quais regiões podem ser avaliadas?", answer: "As regiões dependem da queixa, da anatomia e do planejamento; uma lista não substitui a avaliação."}, {question: "Preenchimento deixa o rosto maior?", answer: "O resultado depende do objetivo, do plano e da quantidade indicada para a anatomia individual."}, {question: "Quanto dura?", answer: "A permanência varia conforme produto, região, organismo e acompanhamento."}],
    related: [{title: "Harmonização facial", href: "/harmonizacao-facial"}, {title: "Preenchimento labial", href: "/preenchimento-labial"}, {title: "Perfiloplastia", href: "/perfiloplastia"}, {title: "Avaliação estética facial", href: "/avaliacao-estetica-facial"}],
  },
  {
    slug: "preenchimento-labial", title: "Preenchimento Labial com planejamento individual", specialty: "Estética Orofacial", variant: "editorial", lead: "dra-sara-michelon",
    description: "O objetivo pode envolver contorno, proporção, projeção, definição ou reposição de volume — não apenas aumentar os lábios.",
    seoTitle: "Preenchimento Labial em Florianópolis | Dra. Sara Michelon", seoDescription: "Preenchimento labial em Florianópolis com planejamento individual. Entenda contorno, proporção, duração, técnica e relação dos lábios com o perfil facial.",
    focusHeading: "Lábios também fazem parte do sorriso e do perfil", overview: "O planejamento labial diferencia contorno, definição, projeção e reposição de volume. A relação com dentes, sorriso e perfil orienta a indicação.",
    topics: [{title: "Proporção", text: "A leitura considera os lábios entre si e sua relação com a face."}, {title: "Contorno e projeção", text: "Objetivos diferentes exigem conversas e planejamentos diferentes."}, {title: "Acompanhamento", text: "Evolução e cuidados posteriores fazem parte da condução."}],
    faq: [{question: "Preenchimento labial sempre dá muito volume?", answer: "Não. O objetivo pode ser contorno, proporção ou reposição, e deve ser definido individualmente."}, {question: "Como é feito o planejamento?", answer: "A avaliação observa anatomia, sorriso, perfil, objetivos e limites antes da indicação."}, {question: "Quanto dura?", answer: "A duração varia conforme produto, organismo, técnica e região tratada."}],
    related: [{title: "Preenchimento facial", href: "/preenchimento-facial"}, {title: "Perfiloplastia", href: "/perfiloplastia"}, {title: "Harmonização facial", href: "/harmonizacao-facial"}],
  },
  {
    slug: "botox", title: "Toxina Botulínica (Botox) para Linhas de Expressão", specialty: "Estética Orofacial", variant: "editorial", lead: "dra-sara-michelon",
    description: "A toxina botulínica atua temporariamente sobre músculos específicos e é planejada conforme anatomia e movimentação facial.",
    seoTitle: "Botox em Florianópolis | Toxina Botulínica e Linhas de Expressão", seoDescription: "Botox e toxina botulínica em Florianópolis para linhas de expressão, após avaliação individual da anatomia e movimentação facial. Saiba duração e cuidados.",
    focusHeading: "Movimentação facial orienta a avaliação", overview: "A toxina botulínica é considerada a partir da anatomia e do comportamento muscular. Linhas dinâmicas, objetivos e preservação da expressão entram no planejamento.",
    topics: [{title: "Rugas dinâmicas", text: "Linhas relacionadas ao movimento são diferenciadas de outras características da pele."}, {title: "Anatomia muscular", text: "A avaliação observa como cada face se movimenta."}, {title: "Efeito temporário", text: "A evolução e a necessidade de acompanhamento variam individualmente."}],
    faq: [{question: "Quando começa o efeito?", answer: "A evolução ocorre ao longo dos dias e deve ser acompanhada conforme a orientação profissional."}, {question: "Quais linhas podem ser avaliadas?", answer: "A indicação depende do movimento e da anatomia, não apenas da localização da linha."}, {question: "Quanto dura?", answer: "O efeito é temporário e varia entre pessoas e áreas avaliadas."}],
    related: [{title: "Harmonização facial", href: "/harmonizacao-facial"}, {title: "Bioestimuladores", href: "/bioestimuladores-de-colageno"}, {title: "Avaliação estética facial", href: "/avaliacao-estetica-facial"}],
  },
  {
    slug: "bioestimuladores-de-colageno", title: "Bioestimulador de Colágeno para o Rosto", specialty: "Estética Orofacial", variant: "editorial", lead: "dra-sara-michelon",
    description: "Quando o planejamento inclui qualidade e firmeza da pele, os bioestimuladores podem ser indicados para estimular colágeno de forma progressiva.",
    seoTitle: "Bioestimulador de Colágeno em Florianópolis | Dra. Sara", seoDescription: "Bioestimulador de colágeno em Florianópolis: entenda para que serve, quando aparece o efeito, número de sessões e como é definido o planejamento.",
    focusHeading: "Uma proposta progressiva para características da pele", overview: "Bioestimuladores podem fazer parte de um plano voltado à qualidade e firmeza da pele. Indicação, áreas e número de sessões dependem da avaliação.",
    topics: [{title: "Qualidade da pele", text: "A queixa e as características observadas orientam o objetivo do plano."}, {title: "Evolução progressiva", text: "A resposta não é imediata e varia entre pessoas."}, {title: "Sessões", text: "Quantidade e intervalo não devem ser definidos sem avaliação individual."}],
    faq: [{question: "Bioestimulador dá volume?", answer: "O objetivo principal e o comportamento dependem do produto e da indicação; isso deve ser esclarecido no planejamento."}, {question: "Quantas sessões são necessárias?", answer: "O número é individual e depende da avaliação, do produto e da resposta."}, {question: "Quando aparece o efeito?", answer: "A evolução tende a ser progressiva e é acompanhada ao longo do tempo."}],
    related: [{title: "Harmonização facial", href: "/harmonizacao-facial"}, {title: "Botox", href: "/botox"}, {title: "Avaliação estética facial", href: "/avaliacao-estetica-facial"}],
  },
  {
    slug: "perfiloplastia", title: "Perfiloplastia: equilíbrio entre nariz, lábios e mento", specialty: "Estética Orofacial", variant: "editorial", lead: "dra-sara-michelon",
    description: "A perfiloplastia avalia as relações do perfil e define se pequenas intervenções em pontos estratégicos podem melhorar proporções.",
    seoTitle: "Perfiloplastia em Florianópolis | Harmonização do Perfil", seoDescription: "Perfiloplastia em Florianópolis para avaliação da relação entre nariz, lábios e mento. Entenda como funciona, indicações e possibilidades não cirúrgicas.",
    focusHeading: "O perfil é uma relação entre estruturas", overview: "Perfiloplastia descreve a avaliação conjunta de nariz, lábios e mento. Possibilidades não cirúrgicas só são consideradas depois da análise anatômica e dos limites.",
    topics: [{title: "Nariz", text: "Forma e projeção são observadas em relação às demais estruturas."}, {title: "Lábios", text: "Posição e proporção interferem na leitura do perfil."}, {title: "Mento", text: "Projeção e contorno são avaliados no conjunto, sem objetivo padronizado."}],
    faq: [{question: "O que é perfiloplastia?", answer: "É o planejamento das relações do perfil, especialmente entre nariz, lábios e mento."}, {question: "É permanente?", answer: "As possibilidades não cirúrgicas costumam envolver efeitos temporários, variáveis conforme a indicação."}, {question: "Toda pessoa precisa tratar mais de uma área?", answer: "Não. A avaliação pode concluir que nenhuma ou apenas uma intervenção é adequada."}],
    related: [{title: "Harmonização facial", href: "/harmonizacao-facial"}, {title: "Preenchimento facial", href: "/preenchimento-facial"}, {title: "Preenchimento labial", href: "/preenchimento-labial"}],
  },
  {
    slug: "enxerto-osseo-dentario", title: "Enxerto Ósseo para Implante Dentário", specialty: "Implantodontia", variant: "process", lead: "dra-camila-cecchin",
    description: "Quando o volume ósseo não é suficiente para o plano de implante, o enxerto pode ser indicado para reconstruir suporte.",
    seoTitle: "Enxerto Ósseo para Implante em Florianópolis | Dra. Sara", seoDescription: "Enxerto ósseo para implante em Florianópolis: entenda quando pode ser indicado, exames, etapas, recuperação e relação com o implante dentário.",
    focusHeading: "O enxerto responde a uma necessidade do planejamento", overview: "A perda dentária e o tempo podem modificar o volume ósseo. Exame clínico e imagem ajudam a definir se há suporte suficiente, se o enxerto é necessário e em que momento ele deve ocorrer.",
    topics: [{title: "Volume e posição", text: "Não basta haver osso: volume, posição e relação com estruturas próximas orientam o plano."}, {title: "Momento cirúrgico", text: "Em alguns casos o enxerto pode ocorrer junto do implante; em outros, precisa antecedê-lo."}, {title: "Recuperação", text: "O tipo e a extensão do procedimento determinam cuidados e tempo de acompanhamento."}],
    faq: [{question: "Todo implante precisa de enxerto?", answer: "Não. A indicação depende da quantidade e qualidade óssea na região planejada."}, {question: "O enxerto pode ser feito junto com o implante?", answer: "Pode ser possível em casos selecionados; estabilidade, volume necessário e diagnóstico definem a sequência."}, {question: "Quanto tempo leva a integração?", answer: "O período varia conforme a técnica, a extensão e a resposta individual, e é definido no acompanhamento."}],
    related: [{title: "Implantes dentários", href: "/implantes-dentarios"}, {title: "Prótese protocolo", href: "/protese-protocolo"}, {title: "Periodontia", href: "/periodontia"}],
  },
  {
    slug: "extracao-de-siso", title: "Extração de Siso: avaliação e cirurgia quando indicada", specialty: "Cirurgia Oral", variant: "symptom-led", lead: "dr-ericson-pessanha",
    description: "A decisão de remover um siso depende de sintomas, posição, espaço, higiene e risco para estruturas próximas.",
    seoTitle: "Extração de Siso em Florianópolis | Avaliação e Cirurgia", seoDescription: "Extração de siso em Florianópolis com avaliação clínica e por imagem. Entenda indicações, cirurgia, recuperação e sinais que pedem atendimento.",
    focusHeading: "Nem todo siso precisa ser removido", overview: "Dor, inflamação recorrente, dificuldade de higiene, cárie ou risco ao dente vizinho podem levar à indicação. Quando não há doença ou risco relevante, acompanhamento também pode ser uma conduta.",
    topics: [{title: "Dor ou inflamação", text: "Sintomas recorrentes precisam ser examinados para identificar a origem e a urgência."}, {title: "Posição e estruturas próximas", text: "Exames de imagem ajudam a avaliar raízes, osso, nervos e o dente vizinho."}, {title: "Pós-operatório", text: "Repouso, higiene, alimentação e medicação seguem orientação individual."}],
    faq: [{question: "Todo siso precisa ser extraído?", answer: "Não. A indicação depende de doença, risco, posição, sintomas e possibilidade de acompanhamento."}, {question: "É necessário fazer exame de imagem?", answer: "O profissional define o exame adequado conforme a posição do dente e as estruturas que precisam ser avaliadas."}, {question: "Quanto tempo dura a recuperação?", answer: "A evolução varia com a complexidade e a resposta individual; as orientações são ajustadas ao procedimento."}],
    related: [{title: "Periodontia", href: "/periodontia"}, {title: "Tratamento de canal", href: "/tratamento-de-canal"}, {title: "Manutenção odontológica", href: "/manutencao-odontologica"}],
  },
  {
    slug: "manutencao-odontologica", title: "Manutenção e acompanhamento depois do tratamento", specialty: "Prevenção", variant: "hub", lead: "dra-sara-michelon",
    description: "Revisões periódicas ajudam a acompanhar dentes, gengiva, restaurações, próteses, implantes e hábitos ao longo do tempo.",
    seoTitle: "Manutenção e Acompanhamento Odontológico | Dra. Sara Michelon", seoDescription: "Manutenção odontológica nos Ingleses, Florianópolis, com acompanhamento de dentes, gengiva, restaurações, próteses, implantes e tratamentos estéticos.",
    focusHeading: "O acompanhamento faz parte do tratamento", overview: "A frequência de retorno não é igual para todos. Risco de cárie, condição periodontal, tipo de reabilitação, higiene e hábitos orientam o intervalo e os cuidados.",
    topics: [{title: "Saúde bucal", text: "Dentes, gengiva, higiene e sinais de alteração são revistos periodicamente."}, {title: "Trabalhos realizados", text: "Restaurações, facetas, próteses, implantes e contenções exigem controles próprios."}, {title: "Orientações", text: "A rotina de cuidado é ajustada quando a condição clínica ou os hábitos mudam."}],
    faq: [{question: "Com que frequência devo retornar?", answer: "O intervalo é individual e considera riscos, histórico, higiene e tratamentos realizados."}, {question: "Manutenção é somente limpeza?", answer: "Não. Ela inclui avaliação clínica, controle dos tratamentos, prevenção e limpeza quando indicada."}, {question: "Implantes também precisam de manutenção?", answer: "Sim. Tecidos ao redor dos implantes, higiene e componentes protéticos precisam de acompanhamento."}],
    related: [{title: "Limpeza dental", href: "/limpeza-dental"}, {title: "Periodontia", href: "/periodontia"}, {title: "Implantes dentários", href: "/implantes-dentarios"}],
  },
  {
    slug: "limpeza-dental", title: "Limpeza Dentária e Profilaxia", specialty: "Prevenção", variant: "process", lead: "dra-sara-michelon", contentStatus: "partial", source: "matrix-supported",
    description: "A profilaxia profissional integra a prevenção e é indicada conforme presença de placa, cálculo, manchas e condição gengival.",
    seoTitle: "Limpeza Dental em Florianópolis | Profilaxia nos Ingleses", seoDescription: "Limpeza dental e profilaxia nos Ingleses, Florianópolis. Entenda avaliação, remoção de placa e cálculo e cuidados de manutenção.",
    focusHeading: "Limpeza profissional começa pela avaliação", overview: "O atendimento diferencia placa, cálculo, manchas e alterações gengivais para escolher os recursos necessários. A limpeza não substitui o diagnóstico periodontal.",
    topics: [{title: "Placa e cálculo", text: "A localização e a quantidade orientam a abordagem profissional."}, {title: "Gengiva", text: "Sangramento e inflamação persistentes podem exigir avaliação periodontal."}, {title: "Rotina de higiene", text: "Orientações domiciliares são adaptadas às necessidades observadas."}],
    faq: [{question: "Limpeza dental e tratamento periodontal são iguais?", answer: "Não. O diagnóstico define quando a profilaxia preventiva é suficiente e quando há necessidade de tratamento periodontal."}, {question: "A limpeza clareia os dentes?", answer: "Ela pode remover manchas superficiais, mas não substitui o clareamento dental."}],
    related: [{title: "Manutenção odontológica", href: "/manutencao-odontologica"}, {title: "Periodontia", href: "/periodontia"}, {title: "Clareamento dental", href: "/clareamento-dental"}],
  },
  {
    slug: "proteses-dentarias", title: "Próteses Dentárias: opções fixas e removíveis conforme indicação", specialty: "Reabilitação Oral", variant: "hub", lead: "dra-sara-michelon", contentStatus: "partial", source: "matrix-supported",
    description: "Próteses podem repor dentes ou recuperar estruturas comprometidas; a escolha depende do suporte disponível, da função e do plano de manutenção.",
    seoTitle: "Próteses Dentárias em Florianópolis | Fixas e Removíveis", seoDescription: "Próteses dentárias fixas e removíveis em Florianópolis, com avaliação do suporte, mordida, estética, adaptação e manutenção.",
    focusHeading: "A prótese é definida pelo que precisa ser reabilitado", overview: "Número de dentes, condição dos dentes remanescentes, gengiva, osso, mordida e possibilidade de implantes mudam as alternativas. A indicação final depende dessa avaliação integrada.",
    topics: [{title: "Suporte dental", text: "Dentes remanescentes podem participar do plano quando apresentam condições adequadas."}, {title: "Suporte por implantes", text: "Implantes podem ampliar possibilidades fixas ou melhorar retenção conforme o caso."}, {title: "Opções removíveis", text: "São avaliadas por extensão, suporte, adaptação e manutenção."}],
    faq: [{question: "Qual é a melhor prótese?", answer: "Não existe uma opção universal. O diagnóstico, o suporte disponível e os objetivos definem as possibilidades."}, {question: "Prótese precisa de manutenção?", answer: "Sim. Higiene, tecidos de suporte, adaptação e componentes precisam ser acompanhados."}],
    related: [{title: "Reabilitação oral", href: "/reabilitacao-oral"}, {title: "Implantes dentários", href: "/implantes-dentarios"}, {title: "Prótese protocolo", href: "/protese-protocolo"}],
  },
  {
    slug: "clareamento-dental", title: "Clareamento Dental supervisionado", specialty: "Odontologia estética", variant: "editorial", lead: "dra-sara-michelon", contentStatus: "partial", source: "matrix-supported",
    description: "O clareamento é planejado depois de avaliar dentes, restaurações, gengiva, sensibilidade e a origem das alterações de cor.",
    seoTitle: "Clareamento Dental em Florianópolis | Avaliação Supervisionada", seoDescription: "Clareamento dental supervisionado em Florianópolis. Avaliação de cor, sensibilidade, restaurações e opções de tratamento conforme o caso.",
    focusHeading: "Cor, saúde e sensibilidade precisam ser avaliadas", overview: "O clareamento atua sobre dentes naturais e não modifica da mesma forma restaurações ou próteses. A avaliação identifica limitações e organiza a técnica e o acompanhamento.",
    topics: [{title: "Dentes naturais", text: "A resposta depende da condição e da origem da alteração de cor."}, {title: "Restaurações", text: "Materiais existentes podem exigir planejamento estético complementar."}, {title: "Sensibilidade", text: "Histórico e resposta durante o tratamento orientam ajustes."}],
    faq: [{question: "Clareamento muda a cor de restaurações?", answer: "Restaurações e próteses não respondem como dentes naturais e precisam ser consideradas no planejamento."}, {question: "Pode causar sensibilidade?", answer: "Sensibilidade pode ocorrer e deve ser acompanhada para ajustar técnica e frequência."}],
    related: [{title: "Facetas de resina", href: "/facetas-de-resina"}, {title: "Lentes de contato dental", href: "/lentes-de-contato-dental"}, {title: "Limpeza dental", href: "/limpeza-dental"}],
  },
  {
    slug: "inlays-onlays", title: "Inlays e Onlays: restaurações indiretas para recuperar dentes", specialty: "Dentística", variant: "process", lead: "dra-sara-michelon", contentStatus: "partial", source: "matrix-supported",
    description: "Restaurações indiretas podem ser consideradas quando a perda de estrutura exige reconstrução planejada fora da boca.",
    seoTitle: "Inlays e Onlays em Florianópolis | Restaurações Indiretas", seoDescription: "Inlays e onlays em Florianópolis: entenda quando restaurações indiretas podem ser indicadas para recuperar estrutura, forma e função dental.",
    focusHeading: "Preservar estrutura e recuperar função", overview: "Extensão da perda, resistência remanescente, mordida, material e possibilidade de adesão orientam a escolha entre restauração direta, indireta ou outra reabilitação.",
    topics: [{title: "Estrutura remanescente", text: "O exame avalia quanto do dente pode ser preservado e protegido."}, {title: "Indicação indireta", text: "A peça é produzida fora da boca e depois aderida ao dente preparado."}, {title: "Mordida", text: "Carga e contatos influenciam desenho, material e prognóstico."}],
    faq: [{question: "Inlay e onlay são coroas?", answer: "Não necessariamente. São restaurações indiretas com extensão definida pela estrutura que precisa ser recuperada."}, {question: "Qual material é utilizado?", answer: "A escolha depende do dente, da extensão, da mordida e do planejamento clínico."}],
    related: [{title: "Reabilitação oral", href: "/reabilitacao-oral"}, {title: "Tratamento de canal", href: "/tratamento-de-canal"}, {title: "Próteses dentárias", href: "/proteses-dentarias"}],
  },
  {
    slug: "fechamento-de-diastemas", title: "Fechamento de Diastema: opções para dentes separados", specialty: "Odontologia estética", variant: "image-led", lead: "dra-sara-michelon", contentStatus: "partial", source: "matrix-supported",
    description: "Espaços entre dentes podem ser tratados com ortodontia, resina ou cerâmica, conforme causa, proporções, mordida e saúde gengival.",
    seoTitle: "Fechamento de Diastema em Florianópolis | Opções de Tratamento", seoDescription: "Fechamento de diastema em Florianópolis: conheça opções com ortodontia, resina ou cerâmica e os critérios para planejar dentes separados.",
    focusHeading: "Primeiro é preciso entender a causa do espaço", overview: "Tamanho e posição dos dentes, freio labial, gengiva, mordida e estabilidade interferem na escolha. Fechar o espaço sem avaliar essas relações pode comprometer proporção ou manutenção.",
    topics: [{title: "Ortodontia", text: "Movimenta dentes e redistribui espaços quando essa é a indicação."}, {title: "Resina", text: "Pode modificar forma e proporção com abordagem direta em casos selecionados."}, {title: "Cerâmica", text: "Exige avaliação de estrutura, preparo, proporções e etapa laboratorial."}],
    faq: [{question: "Todo diastema precisa ser fechado?", answer: "Não. A decisão considera saúde, função, estabilidade e objetivos individuais."}, {question: "Resina ou aparelho?", answer: "A causa do espaço, a posição dos dentes e as proporções orientam a escolha."}],
    related: [{title: "Facetas de resina", href: "/facetas-de-resina"}, {title: "Ortodontia", href: "/ortodontia"}, {title: "Lentes de contato dental", href: "/lentes-de-contato-dental"}],
  },
  {
    slug: "bichectomia", title: "Bichectomia: indicação, limites e recuperação", specialty: "Cirurgia Oral", variant: "editorial", lead: "dr-ericson-pessanha", contentStatus: "partial", source: "matrix-supported",
    description: "A bichectomia exige avaliação anatômica, indicação criteriosa e discussão clara de limites, riscos e caráter permanente.",
    seoTitle: "Bichectomia em Florianópolis | Indicação e Recuperação", seoDescription: "Bichectomia em Florianópolis: avaliação de indicação, anatomia, limites, riscos e recuperação antes da decisão cirúrgica.",
    focusHeading: "Uma cirurgia não indicada apenas pela aparência", overview: "Volume facial, anatomia, envelhecimento esperado, saúde e objetivo precisam ser analisados. A retirada de tecido é permanente e a decisão exige avaliação clínica e consentimento informado.",
    topics: [{title: "Indicação", text: "A queixa precisa ser relacionada à anatomia e às alternativas possíveis."}, {title: "Limites e riscos", text: "Estruturas próximas e possíveis efeitos de longo prazo devem ser discutidos."}, {title: "Recuperação", text: "Cuidados, sinais de alerta e retornos são definidos pela equipe cirúrgica."}],
    faq: [{question: "O resultado é permanente?", answer: "A remoção do tecido é permanente, embora o rosto continue mudando com o tempo."}, {question: "Toda face arredondada tem indicação?", answer: "Não. Formato facial isolado não define indicação; anatomia, riscos e expectativas precisam ser avaliados."}],
    related: [{title: "Harmonização facial", href: "/harmonizacao-facial"}, {title: "Perfiloplastia", href: "/perfiloplastia"}, {title: "Avaliação estética facial", href: "/avaliacao-estetica-facial"}],
  },
];

export const fallbackTreatments = Object.fromEntries(treatmentSeeds.map((seed) => [seed.slug, createTreatment(seed)])) as Record<string, Treatment>;

export const fallbackPages: Record<string, InstitutionalPage> = {
  home: {contentType: "page", slug: "home", eyebrow: "Odontologia e Estética · Florianópolis", title: "Dentista nos Ingleses: odontologia e estética com planejamento individual", description: "Clínica odontológica nos Ingleses, Norte da Ilha de Florianópolis, com cuidado integrado e tratamentos definidos a partir de uma avaliação completa.", image: "/images/real/sara/sara-home-hero-17.webp", imageAlt: "Dra. Sara Michelon em retrato profissional no consultório", seo: {title: "Dentista nos Ingleses, Florianópolis | Dra. Sara Michelon", description: "Odontologia e estética nos Ingleses, Florianópolis. Conheça a clínica, equipe e tratamentos da Dra. Sara Michelon e agende sua avaliação.", canonical: "/", index: true}},
  clinica: {
    contentType: "page", slug: "clinica", eyebrow: "A clínica", title: "Uma clínica organizada para avaliar, planejar e acompanhar", description: "Ambientes reais nos Ingleses, Norte da Ilha, conectados a uma experiência de atendimento clara e individual.", image: "/images/real/clinica/clinic-operatory-main.webp", imageAlt: "Consultório odontológico da clínica da Dra. Sara Michelon", seo: {title: "Clínica Odontológica nos Ingleses | Dra. Sara Michelon", description: "Conheça os ambientes da clínica odontológica da Dra. Sara Michelon nos Ingleses, Florianópolis.", canonical: "/clinica", index: true},
    sections: [
      {
        _key: "clinic-pillars",
        _type: "cardGrid",
        heading: "Estrutura, Tecnologia e Biossegurança a Serviço do Seu Cuidado",
        items: [
          {title: "Estrutura & Conforto", text: "Ambientes privativos, climatizados e com acústica planejada na Torre Comercial do Ingleses Saúde & Office. Acessibilidade total e estacionamento rotativo."},
          {title: "Tecnologia & Precisão", text: "Integração de diagnóstico digital, escaneamento intraoral e tomografia computadorizada para intervenções minimamente invasivas."},
          {title: "Biossegurança Rigorosa", text: "Processos hospitalares de assepsia, esterilização monitorada em autoclave e rastreabilidade sanitária total para sua segurança."}
        ]
      }
    ],
  },
  equipe: {
    contentType: "page", slug: "equipe", eyebrow: "Equipe odontológica", title: "Especialistas conectados ao planejamento integrado", description: "Cada caso pode envolver diferentes necessidades. A equipe organiza essas relações em um plano único, com responsabilidades clínicas claras.", image: "/images/real/equipe/team-main.webp", imageAlt: "Equipe da clínica da Dra. Sara Michelon", seo: {title: "Equipe de Dentistas em Florianópolis | Dra. Sara Michelon", description: "Conheça a equipe odontológica da clínica da Dra. Sara Michelon nos Ingleses, Florianópolis.", canonical: "/equipe", index: true},
  },
  odontologia: {
    contentType: "page", slug: "odontologia", eyebrow: "Odontologia", title: "Tratamentos odontológicos nos Ingleses, Florianópolis", description: "Prevenção, estética do sorriso, reabilitação, cirurgia e ortodontia organizadas a partir de um planejamento integrado.", image: "/images/real/tecnologia/planning-digital-scan.webp", imageAlt: "Planejamento odontológico digital e escaneamento", seo: {title: "Odontologia nos Ingleses e Florianópolis | Dra. Sara Michelon", description: "Tratamentos odontológicos nos Ingleses, Florianópolis, organizados por necessidade e com planejamento individual.", canonical: "/odontologia", index: true},
    linkGroups: [
      {title: "Estética do sorriso", items: [{title: "Facetas de resina", href: "/facetas-de-resina", description: "Forma, proporção e cor com planejamento conservador."}, {title: "Lentes e facetas de porcelana", href: "/lentes-de-contato-dental", description: "Planejamento digital, mock-up e material cerâmico."}, {title: "Clareamento dental", href: "/clareamento-dental", description: "Avaliação supervisionada de cor, sensibilidade e restaurações."}, {title: "Fechamento de diastemas", href: "/fechamento-de-diastemas", description: "Ortodontia, resina ou cerâmica conforme a causa do espaço."}]},
      {title: "Implantes e reabilitação", items: [{title: "Implantes dentários", href: "/implantes-dentarios", description: "Reposição de um ou mais dentes dentro do plano protético."}, {title: "Prótese protocolo", href: "/protese-protocolo", description: "Reabilitação fixa sobre implantes para perdas extensas."}, {title: "Enxerto ósseo", href: "/enxerto-osseo-dentario", description: "Reconstrução de suporte quando indicada pelo planejamento."}, {title: "Próteses dentárias", href: "/proteses-dentarias", description: "Opções fixas e removíveis conforme o suporte disponível."}, {title: "Inlays e onlays", href: "/inlays-onlays", description: "Restaurações indiretas para recuperar estrutura e função."}, {title: "Reabilitação oral", href: "/reabilitacao-oral", description: "Integração de diferentes necessidades e etapas clínicas."}]},
      {title: "Ortodontia", items: [{title: "Aparelhos e alinhadores", href: "/ortodontia", description: "Movimentações definidas a partir do diagnóstico."}, {title: "Invisalign", href: "/invisalign", description: "Alinhadores transparentes com planejamento digital."}]},
      {title: "Saúde bucal, gengiva e dor", items: [{title: "Manutenção odontológica", href: "/manutencao-odontologica", description: "Revisões e prevenção depois do tratamento."}, {title: "Limpeza dental", href: "/limpeza-dental", description: "Profilaxia conforme placa, cálculo e condição gengival."}, {title: "Periodontia", href: "/periodontia", description: "Avaliação da gengiva e dos tecidos de suporte."}, {title: "Cirurgia gengival", href: "/cirurgia-gengival", description: "Contorno gengival e procedimentos periodontais indicados."}, {title: "Tratamento de canal", href: "/tratamento-de-canal", description: "Cuidado da parte interna do dente quando necessário."}, {title: "Extração de siso", href: "/extracao-de-siso", description: "Avaliação e cirurgia somente quando indicadas."}, {title: "Bruxismo e DTM", href: "/bruxismo", description: "Entrada por dor, tensão, apertamento e função."}]},
    ],
  },
  "estetica-orofacial": {
    contentType: "page", slug: "estetica-orofacial", eyebrow: "Estética Orofacial", title: "Estética Orofacial com planejamento individual em Florianópolis", description: "Naturalidade e análise facial antes da escolha do procedimento.", image: "/images/real/sara/sara-estetica-orofacial.webp", imageAlt: "Dra. Sara Michelon em avaliação facial", seo: {title: "Estética Orofacial em Florianópolis | Dra. Sara Michelon", description: "Estética orofacial em Florianópolis com análise de proporções, movimento, pele e contornos antes da indicação.", canonical: "/estetica-orofacial", index: true},
    linkGroups: [{title: "Planejamento da face", items: [{title: "Harmonização facial", href: "/harmonizacao-facial", description: "A face analisada como um conjunto."}, {title: "Preenchimento facial", href: "/preenchimento-facial", description: "Suporte, volume e contorno conforme anatomia."}, {title: "Preenchimento labial", href: "/preenchimento-labial", description: "Contorno, proporção e relação com o perfil."}, {title: "Botox e linhas de expressão", href: "/botox", description: "Movimentação muscular e avaliação individual."}, {title: "Bioestimuladores de colágeno", href: "/bioestimuladores-de-colageno", description: "Planejamento progressivo para características da pele."}, {title: "Perfiloplastia", href: "/perfiloplastia", description: "Relação entre nariz, lábios e mento."}, {title: "Bichectomia", href: "/bichectomia", description: "Indicação cirúrgica, limites e recuperação."}]}],
  },
  "dra-sara-michelon": {
    contentType: "page", slug: "dra-sara-michelon", eyebrow: "Dra. Sara Michelon", title: "Dra. Sara Michelon", description: "Odontologia e estética conduzidas com avaliação individual, planejamento e acompanhamento.", image: "/images/real/sara/sara-profile-2026.webp", imageAlt: "Retrato da Dra. Sara Michelon", seo: {title: "Dra. Sara Michelon | Odontologia e Estética em Florianópolis", description: "Conheça a abordagem clínica da Dra. Sara Michelon em odontologia e estética nos Ingleses, Florianópolis.", canonical: "/dra-sara-michelon", index: true},
    sections: [{_key: "sara-approach", _type: "richText", heading: "Uma visão integrada do caso", body: ["A atuação parte da avaliação para relacionar saúde, função e estética. O planejamento organiza prioridades e permite discutir alternativas antes da indicação."]}, {_key: "sara-areas", _type: "cardGrid", heading: "Áreas conectadas pela mesma abordagem", items: [{title: "Odontologia", text: "Prevenção, estética do sorriso e reabilitação organizadas por necessidade.", href: "/odontologia"}, {title: "Estética Orofacial", text: "Análise facial, naturalidade e indicação individual.", href: "/estetica-orofacial"}]}],
  },
  conteudos: {contentType: "page", slug: "conteudos", eyebrow: "Conteúdos e orientações", title: "Conteúdos sobre odontologia, prevenção e estética", description: "Respostas clínicas úteis escritas ou revisadas pela equipe e conectadas aos tratamentos relacionados.", image: "/images/real/clinica/clinic-operatory-main.webp", imageAlt: "Consultório da clínica da Dra. Sara Michelon", seo: {title: "Conteúdos sobre Odontologia e Estética | Dra. Sara Michelon", description: "Conteúdos sobre odontologia, prevenção e estética, com autoria e revisão clínica identificadas.", canonical: "/conteudos", index: true}},
  contato: {contentType: "page", slug: "contato", eyebrow: "Contato e localização", title: "Clínica Odontológica nos Ingleses, Florianópolis", description: "Atendimento com hora marcada no complexo Ingleses Saúde & Office. Conecte-se com nossa equipe via WhatsApp, telefone ou trace sua rota direta via Waze, Uber ou Google Maps.", image: "/images/real/clinica/clinic-reception-rear.webp", imageAlt: "Recepção da clínica da Dra. Sara Michelon nos Ingleses", seo: {title: "Contato e Localização | Dra. Sara Michelon — Ingleses", description: "Localização, rotas no Waze e Uber, telefone e WhatsApp da clínica odontológica da Dra. Sara Michelon nos Ingleses, Florianópolis.", canonical: "/contato", index: true}},
  "politica-de-privacidade": {contentType: "page", slug: "politica-de-privacidade", eyebrow: "Privacidade", title: "Política de Privacidade", description: "Esta política explica como dados enviados voluntariamente e dados técnicos do site são tratados.", seo: {title: "Política de Privacidade | Dra. Sara Michelon", description: "Política de privacidade do site da Dra. Sara Michelon.", canonical: "/politica-de-privacidade", index: false}, sections: [{_key: "privacy", _type: "richText", heading: "Tratamento responsável de dados", body: ["O site só deve coletar dados necessários para responder a solicitações, operar com segurança e, quando houver consentimento, medir o uso das páginas.", "Dados de contato não são vendidos. Solicitações sobre acesso, correção ou exclusão devem ser encaminhadas pelo canal oficial publicado no site.", "Ferramentas analíticas permanecem desativadas até que a pessoa visitante registre sua escolha no aviso de privacidade."]}]},
  "politica-de-cookies": {contentType: "page", slug: "politica-de-cookies", eyebrow: "Privacidade", title: "Política de Cookies", description: "Esta política descreve o uso de armazenamento essencial e, mediante consentimento, de medição de audiência.", seo: {title: "Política de Cookies | Dra. Sara Michelon", description: "Política de cookies e preferências de medição do site da Dra. Sara Michelon.", canonical: "/politica-de-cookies", index: false}, sections: [{_key: "cookies", _type: "richText", heading: "Preferências sob controle da pessoa visitante", body: ["O armazenamento estritamente necessário mantém escolhas de privacidade e funções básicas do site.", "Medição de audiência só é carregada depois de consentimento explícito e pode ser recusada sem impedir o acesso ao conteúdo.", "A preferência pode ser alterada apagando os dados locais do navegador e fazendo uma nova escolha."]}]},
  "odontopediatria-dentista-nos-ingleses-norte-da-ilha": {contentType: "page", slug: "odontopediatria-dentista-nos-ingleses-norte-da-ilha", eyebrow: "Conteúdo histórico", title: "Odontopediatria", description: "Informações gerais sobre cuidado odontológico infantil e a importância de avaliação individual em cada fase do desenvolvimento.", seo: {title: "Odontopediatria | Dra. Sara Michelon", description: "Informações gerais sobre acompanhamento odontológico infantil e prevenção em diferentes fases do desenvolvimento.", canonical: "/odontopediatria-dentista-nos-ingleses-norte-da-ilha", index: false}},
};

const sara = professionalBySlug["dra-sara-michelon"];

export const fallbackArticles: Record<string, Article> = {
  "como-escovar-os-dentes": {
    contentType: "article", slug: "como-escovar-os-dentes", path: "/como-escovar-os-dentes", title: "Como escovar os dentes corretamente", excerpt: "Técnicas de escovação precisam considerar idade, coordenação motora, gengiva e necessidades individuais.",
    seo: {title: "Como Escovar os Dentes Corretamente | Dra. Sara Michelon", description: "Conheça técnicas de escovação para crianças, adultos e pessoas com retração gengival, além de cuidados com fio dental e aparelhos.", canonical: "/como-escovar-os-dentes", index: true},
    author: sara, reviewer: sara, publishedAt: "2018-01-01", categories: ["Prevenção", "Saúde bucal"],
    sections: [
      {_key: "article-intro", _type: "richText", heading: "A técnica precisa respeitar cada pessoa", body: ["Existem diferentes técnicas para o controle da placa. Coordenação motora, idade e condições gengivais devem ser consideradas para adaptar os movimentos.", "Na consulta, mostrar como a escovação é feita ajuda o profissional a orientar ajustes adequados."]},
      {_key: "article-techniques", _type: "cardGrid", heading: "Técnicas descritas no conteúdo original", items: [{title: "Fones", text: "Indicada no material para crianças: movimentos circulares nas faces externas, internas e de mastigação."}, {title: "Bass modificada", text: "Descrita para adultos sem retração: cerdas em torno de 45 graus, movimentos vibratórios curtos e varredura suave."}, {title: "Stillman modificada", text: "Descrita para adultos com retração: posicionamento sem introduzir as cerdas no sulco e movimentos suaves de vibração e varredura."}]},
      {_key: "article-tips", _type: "richText", heading: "Cuidados que complementam a escovação", body: ["Use escova de cabeça compatível com a boca e cerdas macias ou extramacias. Evite força excessiva e alcance todas as superfícies com movimentos controlados.", "A higiene também inclui língua e espaços entre os dentes com fio ou fita dental. A troca da escova depende do desgaste das cerdas e das orientações recebidas."]},
      {_key: "article-braces", _type: "richText", heading: "Escovação durante o tratamento ortodôntico", body: ["Aparelhos podem aumentar a retenção de alimentos e exigem mais atenção à higiene. O tipo de aparelho e as necessidades individuais orientam os recursos auxiliares e a técnica."]},
    ],
    relatedTreatments: [{title: "Periodontia", href: "/periodontia", description: "Saúde da gengiva e dos tecidos de suporte."}, {title: "Ortodontia", href: "/ortodontia", description: "Cuidados durante o uso de aparelhos e alinhadores."}],
  },
  "faceta-de-resina-desgasta-o-dente": {
    contentType: "article", slug: "faceta-de-resina-desgasta-o-dente", path: "/conteudos/faceta-de-resina-desgasta-o-dente", title: "Faceta de resina desgasta o dente?", excerpt: "A necessidade de preparo depende da posição, forma, cor e condição de cada dente — não é uma regra do material.",
    seo: {title: "Faceta de Resina Desgasta o Dente? | Dra. Sara", description: "Entenda quando uma faceta de resina pode exigir preparo e por que estrutura dental, posição, mordida e objetivo precisam ser avaliados.", canonical: "/conteudos/faceta-de-resina-desgasta-o-dente", index: true}, author: sara, reviewer: sara, categories: ["Odontologia estética"],
    sections: [{_key: "resina-resposta", _type: "richText", heading: "O preparo não é automático", body: ["Faceta de resina descreve uma técnica restauradora, mas não determina sozinha se haverá desgaste. Dentes projetados, escurecidos, restaurados ou com alterações de forma podem pedir abordagens diferentes.", "O planejamento conservador busca preservar estrutura, respeitar a mordida e evitar volume excessivo. A decisão só pode ser tomada depois do exame."]}, {_key: "resina-criterios", _type: "cardGrid", heading: "O que muda a indicação", items: [{title: "Posição do dente", text: "Espaço disponível e alinhamento interferem no volume necessário."}, {title: "Estrutura e cor", text: "Condição do esmalte, restaurações e alteração de cor mudam o plano."}, {title: "Mordida", text: "Contatos e hábitos influenciam resistência e manutenção."}]}],
    relatedTreatments: [{title: "Facetas de resina", href: "/facetas-de-resina"}, {title: "Ortodontia", href: "/ortodontia"}],
  },
  "quando-e-necessario-enxerto-osseo-para-implante": {
    contentType: "article", slug: "quando-e-necessario-enxerto-osseo-para-implante", path: "/conteudos/quando-e-necessario-enxerto-osseo-para-implante", title: "Quando é necessário enxerto ósseo para implante?", excerpt: "O enxerto pode ser indicado quando o suporte disponível não permite posicionar o implante conforme o plano protético e anatômico.",
    seo: {title: "Quando é Necessário Enxerto Ósseo para Implante?", description: "Saiba como exames, volume ósseo, posição do implante e estruturas próximas entram na indicação de enxerto ósseo.", canonical: "/conteudos/quando-e-necessario-enxerto-osseo-para-implante", index: true}, author: fallbackProfessionals[1], reviewer: fallbackProfessionals[1], categories: ["Implantodontia"],
    sections: [{_key: "enxerto-criterio", _type: "richText", heading: "O implante é planejado a partir da futura prótese", body: ["O volume ósseo é analisado em relação à posição necessária para o implante e às estruturas anatômicas próximas. Por isso, a indicação não depende apenas de uma medida isolada.", "Exame clínico e imagem ajudam a definir se o enxerto é dispensável, simultâneo ao implante ou realizado em uma etapa anterior."]}, {_key: "enxerto-decisoes", _type: "cardGrid", heading: "Decisões do planejamento", items: [{title: "Sem enxerto", text: "Quando existe suporte compatível com o plano."}, {title: "Junto do implante", text: "Possível em situações selecionadas."}, {title: "Antes do implante", text: "Quando a reconstrução precisa cicatrizar previamente."}]}],
    relatedTreatments: [{title: "Enxerto ósseo dentário", href: "/enxerto-osseo-dentario"}, {title: "Implantes dentários", href: "/implantes-dentarios"}],
  },
  "gengiva-sangrando-e-normal": {
    contentType: "article", slug: "gengiva-sangrando-e-normal", path: "/conteudos/gengiva-sangrando-e-normal", title: "Gengiva sangrando é normal?", excerpt: "Sangramento recorrente merece avaliação: ele pode acompanhar inflamação, acúmulo de placa ou outras condições que precisam ser diferenciadas.",
    seo: {title: "Gengiva Sangrando é Normal? | Periodontia", description: "Entenda por que sangramento gengival recorrente merece avaliação e como higiene, inflamação e saúde periodontal são investigadas.", canonical: "/conteudos/gengiva-sangrando-e-normal", index: true}, author: fallbackProfessionals[3], reviewer: fallbackProfessionals[3], categories: ["Periodontia"],
    sections: [{_key: "gengiva-sinal", _type: "richText", heading: "Sangramento é um sinal, não um diagnóstico", body: ["A frequência, o local e a presença de inchaço, dor, retração ou mobilidade ajudam a entender o contexto. Interromper a higiene por medo de sangrar pode favorecer o acúmulo de placa.", "A avaliação periodontal identifica a origem, orienta a técnica de higiene e define se há necessidade de tratamento além da profilaxia."]}, {_key: "gengiva-alertas", _type: "cardGrid", heading: "O que observar", items: [{title: "Frequência", text: "Sangramento repetido ao escovar ou espontâneo pede atenção."}, {title: "Outros sinais", text: "Inchaço, retração, mau hálito persistente ou mobilidade devem ser relatados."}, {title: "Implantes", text: "Sangramento ao redor de implantes também precisa de avaliação."}]}],
    relatedTreatments: [{title: "Periodontia", href: "/periodontia"}, {title: "Limpeza dental", href: "/limpeza-dental"}],
  },
  "bruxismo-principais-sintomas": {
    contentType: "article", slug: "bruxismo-principais-sintomas", path: "/conteudos/bruxismo-principais-sintomas", title: "Bruxismo: principais sintomas e quando avaliar", excerpt: "Apertamento ou ranger dos dentes pode se relacionar a desgaste, fadiga muscular e desconforto, mas sintomas parecidos têm outras causas.",
    seo: {title: "Bruxismo: Principais Sintomas e Quando Avaliar", description: "Conheça sinais associados ao bruxismo e entenda por que desgaste, dor, tensão e sono precisam de avaliação individual.", canonical: "/conteudos/bruxismo-principais-sintomas", index: true}, author: sara, reviewer: sara, categories: ["DTM e Dor Orofacial"],
    sections: [{_key: "bruxismo-sintomas", _type: "richText", heading: "Os sinais precisam ser relacionados ao contexto", body: ["Desgaste dentário, fraturas, marcas na língua, fadiga muscular ou relato de ranger durante o sono podem participar da investigação. Nenhum sinal isolado confirma a causa.", "Dor na face ou na articulação, limitação de abertura e alterações do sono exigem avaliação mais ampla para diferenciar bruxismo, DTM e outras condições."]}, {_key: "bruxismo-conduta", _type: "cardGrid", heading: "A avaliação pode incluir", items: [{title: "Dentes e mordida", text: "Desgastes, trincas, restaurações e contatos são examinados."}, {title: "Músculos e articulações", text: "Dor, movimento e função são relacionados aos sintomas."}, {title: "Hábitos e sono", text: "Rotina, apertamento em vigília e qualidade do sono ajudam a orientar o cuidado."}]}],
    relatedTreatments: [{title: "Bruxismo, DTM e dor orofacial", href: "/bruxismo"}, {title: "Reabilitação oral", href: "/reabilitacao-oral"}],
  },
};

export const fallbackLandingPages: Record<string, LandingPage> = {
  "avaliacao-estetica-facial": {
    contentType: "landingPage", slug: "avaliacao-estetica-facial", eyebrow: "Avaliação e planejamento", title: "Avaliação estética facial personalizada", description: "Análise de proporções, movimento muscular, pele, volumes e contornos antes de qualquer indicação.", image: "/images/real/sara/sara-estetica-orofacial.webp", imageAlt: "Dra. Sara Michelon em avaliação estética facial", ctaLabel: "Agendar avaliação",
    seo: {title: "Avaliação Estética Facial em Florianópolis | Dra. Sara Michelon", description: "Avaliação estética facial em Florianópolis com análise individual, naturalidade e planejamento antes da indicação.", canonical: "/avaliacao-estetica-facial", index: false},
    sections: [{_key: "landing-how", _type: "steps", heading: "Como funciona a avaliação", items: [{title: "Escuta", text: "Objetivos, histórico e percepções são reunidos."}, {title: "Análise", text: "Proporções, movimento, pele e perfil são observados em conjunto."}, {title: "Plano", text: "Possibilidades e limites são discutidos sem uma indicação automática."}, {title: "Decisão", text: "Os próximos passos são definidos de forma individual."}]}, {_key: "landing-approach", _type: "imageText", heading: "Naturalidade como critério de planejamento", body: ["A avaliação não funciona como catálogo de procedimentos. Ela organiza o que faz sentido para a anatomia e os objetivos de cada pessoa."], image: "/images/real/sara/sara-autoridade-2025.webp", imageAlt: "Retrato profissional da Dra. Sara Michelon", imagePosition: "right"}, {_key: "landing-local", _type: "localBlock", heading: "Avaliação estética facial nos Ingleses"}],
    faq: [{question: "A avaliação já define um procedimento?", answer: "Não necessariamente. Ela pode indicar possibilidades, prioridades, limites ou mesmo que nenhuma intervenção seja adequada."}, {question: "O atendimento considera a face inteira?", answer: "A análise observa relações entre proporções, movimento, pele, volumes e perfil, mesmo quando a queixa é localizada."}],
  },
};

export const fallbackProfessionalPaths = fallbackProfessionals
  .filter((professional) => professional.profileHref?.startsWith("/equipe/"))
  .map((professional) => professional.profileHref!);

export const fallbackSitemapPaths = [
  "",
  ...Object.values(fallbackPages).filter((page) => page.slug !== "home" && page.seo.index !== false).map((page) => `/${page.slug}`),
  ...Object.keys(fallbackTreatments).map((slug) => `/${slug}`),
  ...Object.values(fallbackArticles).filter((article) => article.seo.index !== false).map((article) => article.path),
  ...fallbackProfessionalPaths,
].filter((path, index, paths) => paths.indexOf(path) === index);
