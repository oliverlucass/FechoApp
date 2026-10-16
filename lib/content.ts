export const categories = [
  ["Montagem de móveis", "Montagem e desmontagem de móveis prontos"],
  ["Entregas", "Entregas urgentes e serviços de courier"],
  ["Jardinagem e paisagismo", "Cobertura, capina e organização"],
  ["Pintura", "Pintura de paredes internas e externas"],
  ["Faz-tudo", "Ajuda com a manutenção da casa"],
  ["Negócios e administração", "Ajuda com contabilidade e imposto de renda"],
  ["Marketing e design", "Ajuda com site"],
  ["Outra coisa", "Instalação de quadros e pinturas"],
  ["Mudanças", "Embalagem, proteção, transporte e mais!"],
  ["Limpeza residencial", "Limpar, passar pano e organizar a casa"],
] as const;

export const homeJobs = [
  ["ENTREGA", "Buscar e entregar uma geladeira média", "$100", "/tarefas/geladeira-media"],
  ["ENTREGA", "Busca e entrega de colchão king", "$85", "/tarefas/colchao-king"],
  ["ENTREGA", "Entrega de sofá", "$95", "/tarefas/entrega-de-sofa"],
  ["LIMPEZA", "Limpeza de fim de contrato", "$450", "/tarefas/limpeza-fim-de-contrato"],
  ["MUDANÇAS", "Mudança HOJE", "$60", "/tarefas/mudanca-hoje"],
  ["MUDANÇAS", "Mudança urgente", "$506", "/tarefas/mudanca-urgente"],
  ["MUDANÇAS", "Ajuda para mudar de casa", "$450", "/tarefas/ajuda-mudanca"],
  ["MUDANÇAS", "Mudança a 1 km na mesma rua", "$500", "/tarefas/mudanca-1km"],
] as const;

export const homeTabs = [
  "Mudança",
  "Manutenção da casa",
  "Abrindo um negócio",
  "Festas",
  "Algo diferente",
];

export const menuColumns = [
  ["Contadores", "Administração", "Ajustes", "Eletrodomésticos", "Montagem", "Eletricistas automotivos", "Confeiteiros", "Barbeiros"],
  ["Esteticistas", "Serviço de bicicleta", "Alvenaria", "Construção", "Negócios", "Estética automotiva", "Marcenaria", "Cuidado de gatos"],
  ["Limpeza", "Computadores e TI", "Concretagem", "Decks", "Entrega", "Design", "Cuidado de cães", "Eletricistas"],
  ["Faz-tudo", "Aquecimento e refrigeração", "Automação residencial", "Paisagismo", "Pintura", "Encanamento", "Mudanças", "Ver tudo"],
];

export const howSteps = [
  ["Descreva o que você precisa", "Seja simples e claro para atrair os melhores Fechadores."],
  ["Defina seu orçamento", "Você pode ajustar depois e conversar com os Fechadores."],
  ["Receba orçamentos. Escolha o Fechador mais adequado.", "Confira perfis, avaliações, taxa de conclusão e comentários."],
];

export const cleaningChecks = [
  "Limpeza profunda da cozinha",
  "Esfrega do banheiro",
  "Limpeza de paredes e rodapés",
  "Pisos aspirados e passados",
  "Pó em todas as superfícies",
  "… ou qualquer outra coisa",
];

export const cleaningPoints = [
  "Até 50% mais barato que franquias",
  "Nenhum trabalho é grande ou pequeno demais",
  "Cobertura de seguro grátis",
  "Pagamentos seguros sem dinheiro vivo",
  "No mesmo dia ou no dia seguinte, sem custo extra",
];

export const giftDesigns = [
  "Vale-presente",
  "Feliz aniversário",
  "Obrigado",
  "Só porque sim",
  "Parabéns",
  "Relaxe",
  "Pensando em você",
  "FechoApp",
];

export const giftAmounts = ["$25", "$50", "$100", "$150", "$200", "$500", "$1,000"];

export const serviceStats = [
  ["Mudanças", "7.610 trabalhos publicados"],
  ["Remoção de entulho", "5.928 trabalhos publicados"],
  ["Limpeza", "4.770 trabalhos publicados"],
  ["Jardinagem", "3.287 trabalhos publicados"],
] as const;

export const sydneyStats = [
  ["Mudanças", "527 trabalhos publicados"],
  ["Limpeza", "325 trabalhos publicados"],
  ["Remoção de entulho", "244 trabalhos publicados"],
  ["Faz-tudo", "129 trabalhos publicados"],
] as const;

export const jobStats = [
  ["Mudanças", "7.316 trabalhos publicados"],
  ["Remoção de entulho", "5.732 trabalhos publicados"],
  ["Limpeza", "4.606 trabalhos publicados"],
  ["Faz-tudo", "2.638 trabalhos publicados"],
] as const;

export type BrowseTask = {
  slug: string;
  title: string;
  meta: string;
  price: string;
  offers: string;
  details: string;
};

export const browseTasks: BrowseTask[] = [
  {
    slug: "suporte-online",
    title: "Procuro ajuda com tarefas básicas de suporte online",
    meta: "Remoto · Antes de qua., 21 de out.",
    price: "$1,000",
    offers: "Aberta",
    details: "Tarefas básicas de suporte online, feitas à distância, antes de quarta-feira, 21 de outubro.",
  },
  {
    slug: "livros-betty-neel",
    title: "Ajuda para vender um lote de livros da Betty Neel",
    meta: "Remoto · Flexível",
    price: "$30",
    offers: "Aberta",
    details: "Preciso de ajuda para vender um lote de livros da Betty Neel. O prazo é flexível e o trabalho é remoto.",
  },
  {
    slug: "conferir-mapa",
    title: "Conferir um lugar no Google Maps",
    meta: "Remoto · Flexível",
    price: "$25",
    offers: "Aberta · 3 propostas",
    details: "Conferir um lugar no Google Maps. Trabalho remoto, com prazo flexível.",
  },
  {
    slug: "trabalho-no-patio",
    title: "Trabalho no pátio",
    meta: "Oakton VA 22124, EUA · Flexível",
    price: "$300",
    offers: "Aberta · 1 proposta",
    details: "Trabalho no pátio em Oakton VA 22124, EUA. O prazo é flexível.",
  },
  {
    slug: "corte-de-grama",
    title: "Corte de grama",
    meta: "Alexandria VA 22312, EUA · Hoje",
    price: "$400",
    offers: "Aberta · 1 proposta",
    details: "Corte de grama em Alexandria VA 22312, EUA. Preciso para hoje.",
  },
];

export const railTasks: BrowseTask[] = [
  {
    slug: "consultoria-de-interiores",
    title: "Consultoria de design de interiores (obra nova)",
    meta: "Remoto · Flexível",
    price: "$500",
    offers: "Aberta · 1 proposta",
    details: "Consultoria de design de interiores para uma obra nova. Remoto, com prazo flexível.",
  },
  {
    slug: "contabilidade",
    title: "Contabilidade",
    meta: "Remoto · Flexível",
    price: "$100",
    offers: "Aberta · 8 propostas",
    details: "Trabalho de contabilidade remoto, com prazo flexível.",
  },
  {
    slug: "traducao-naati",
    title: "Tradução NAATI",
    meta: "Remoto · Hoje",
    price: "$60",
    offers: "Aberta",
    details: "Tradução NAATI remota, para hoje.",
  },
];

export const leaseTask = {
  slug: "limpeza-fim-de-contrato",
  title: "Limpeza de fim de contrato",
  meta: "Kensington VIC, Austrália",
  price: "$450",
  offers: "Aberta · 1 proposta",
  phone: "Townhouse pequena de dois quartos. Carpetes com limpeza a vapor. Só a parte interna.",
  details:
    "Olá, temos uma townhouse pequena de dois quartos em Kensington que precisa de limpeza de fim de contrato. Também precisamos de limpeza a vapor nos carpetes dos dois quartos e da escada. Só a parte interna. Não precisa da área externa.",
};

export const featuredJobs = [
  { slug: "geladeira-media", title: "Buscar e entregar uma geladeira média", meta: "Entrega · Flexível", price: "$100", offers: "Aberta", details: "Buscar e entregar uma geladeira de tamanho médio." },
  { slug: "colchao-king", title: "Busca e entrega de colchão king", meta: "Entrega · Flexível", price: "$85", offers: "Aberta", details: "Buscar e entregar um colchão king." },
  { slug: "entrega-de-sofa", title: "Entrega de sofá", meta: "Entrega · Flexível", price: "$95", offers: "Aberta", details: "Entrega de um sofá." },
  { slug: "mudanca-hoje", title: "Mudança HOJE", meta: "Mudanças · Hoje", price: "$60", offers: "Aberta", details: "Preciso de uma mudança para hoje." },
  { slug: "mudanca-urgente", title: "Mudança urgente", meta: "Mudanças · Hoje", price: "$506", offers: "Aberta", details: "Mudança urgente." },
  { slug: "ajuda-mudanca", title: "Ajuda para mudar de casa", meta: "Mudanças · Flexível", price: "$450", offers: "Aberta", details: "Ajuda para mudar de casa." },
  { slug: "mudanca-1km", title: "Mudança a 1 km na mesma rua", meta: "Mudanças · Flexível", price: "$500", offers: "Aberta", details: "Mudança de cerca de 1 km na mesma rua." },
];

export function findTask(slug: string) {
  if (slug === leaseTask.slug) return { kind: "lease" as const, task: leaseTask };
  const browse = browseTasks.find((task) => task.slug === slug);
  if (browse) return { kind: "browse" as const, task: browse };
  const rail = railTasks.find((task) => task.slug === slug);
  if (rail) return { kind: "rail" as const, task: rail };
  const featured = featuredJobs.find((task) => task.slug === slug);
  if (featured) return { kind: "featured" as const, task: featured };
  return null;
}

export type Tasker = {
  slug: string;
  name: string;
  rating: string;
  reviews: string;
  place: string;
  body: string;
};

export const taskers: Tasker[] = [
  { slug: "patrick-h", name: "Patrick H.", rating: "5,0", reviews: "670", place: "Ryde NSW 2112", body: "Instalação e desmontagem de trampolins Springfree" },
  { slug: "stefan-b", name: "Stefan B.", rating: "5,0", reviews: "841", place: "Heidelberg Heights VIC", body: "Trabalho fantástico, muito bem feito" },
  { slug: "john-l", name: "John L.", rating: "5,0", reviews: "756", place: "Elanora QLD", body: "Ótimo serviço! Eficiente, simpático e prestativo" },
  { slug: "joshua-k", name: "Joshua K.", rating: "5,0", reviews: "722", place: "Durack QLD", body: "TV e eletrodomésticos, móveis" },
  { slug: "philip-t", name: "Philip T.", rating: "5,0", reviews: "677", place: "Bridgeman Downs QLD", body: "PC, vídeo e áudio" },
  { slug: "clint-h", name: "Clint H.", rating: "5,0", reviews: "575", place: "Marrickville NSW", body: "Móveis prontos, jardinagem, design gráfico" },
];

export const katiReviews = [
  ["Rob D.", "Serviço absolutamente impecável. Muito obrigado", "Limpeza de fim de contrato"],
  ["Domenica G.", "Uma ótima equipe e um prazer de trabalhar junto", "Aspirar, passar pano e tirar pó da casa inteira e da varanda"],
  ["Chelle B.", "Kati e a mãe dela fizeram um ótimo trabalho na minha limpeza de fim de contrato.", "Limpeza de fim de contrato"],
];

export const cities = [
  ["sydney", "Sydney", "/sydney"],
  ["melbourne", "Melbourne", "/locais/melbourne"],
  ["brisbane", "Brisbane", "/locais/brisbane"],
  ["perth", "Perth", "/locais/perth"],
  ["adelaide", "Adelaide", "/locais/adelaide"],
  ["canberra", "Canberra", "/locais/canberra"],
] as const;

export const footerColumns: Array<[string, Array<[string, string]>]> = [
  [
    "Descubra",
    [
      ["Como funciona", "/como-funciona"],
      ["FechoApp para empresas", "/empresas"],
      ["Ganhe dinheiro", "/ganhar"],
      ["Calculadora de renda extra", "/calculadora"],
      ["Buscar trabalhos", "/trabalhos"],
      ["Vales-presente", "/vale-presente"],
    ],
  ],
  [
    "Empresa",
    [
      ["Sobre nós", "/sobre"],
      ["Carreiras", "/carreiras"],
      ["Diretrizes da comunidade", "/diretrizes"],
      ["Princípios do Fechador", "/principios"],
      ["Termos", "/termos"],
      ["Privacidade", "/privacidade"],
    ],
  ],
  [
    "Quem já usa",
    [
      ["Publicar uma tarefa", "/publicar"],
      ["Ver tarefas", "/tarefas"],
      ["Encontrar Fechadores", "/fechadores"],
      ["Entrar", "/entrar"],
      ["Central de ajuda", "/ajuda"],
    ],
  ],
  [
    "Categorias populares",
    [
      ["Faz-tudo", "/categorias"],
      ["Limpeza", "/limpeza"],
      ["Entrega", "/categorias"],
      ["Mudanças", "/categorias"],
      ["Jardinagem", "/categorias"],
      ["Todos os serviços", "/servicos"],
    ],
  ],
  [
    "Locais populares",
    cities.map(([, name, href]) => [name, href] as [string, string]),
  ],
];

export const earningSkills = [
  ["limpeza", "Limpeza", 120],
  ["entrega", "Entrega", 90],
  ["mudancas", "Mudanças", 200],
  ["jardinagem", "Jardinagem", 80],
  ["faz-tudo", "Faz-tudo", 100],
  ["montagem", "Montagem", 70],
  ["pintura", "Pintura", 150],
  ["design", "Design", 110],
] as const;

export const postSteps = ["Título e data", "Local", "Detalhes", "Orçamento"];
