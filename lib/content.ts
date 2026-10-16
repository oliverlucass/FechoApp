export type TaskStatus = "aberta" | "atribuida" | "concluida";

export type Proposal = {
  name: string;
  amount: string;
  note: string;
};

export type Task = {
  slug: string;
  title: string;
  meta: string;
  location: string;
  when: string;
  time: string;
  price: string;
  offers: string;
  offerCount: number;
  proposals: Proposal[];
  photos: string[];
  status: TaskStatus;
  poster: string;
  posterName: string;
  clientName: string;
  assigneeName?: string;
  assigneeSlug?: string;
  details: string;
  phone?: string;
  category: string;
  lng: number;
  lat: number;
};

const statusLabel: Record<TaskStatus, string> = {
  aberta: "Aberta",
  atribuida: "Atribuída",
  concluida: "Concluída",
};

function offersLine(status: TaskStatus, count: number) {
  if (count === 0) return statusLabel[status];
  const noun = count === 1 ? "proposta" : "propostas";
  return `${statusLabel[status]} · ${count} ${noun}`;
}

const proposalPool: Array<[string, string]> = [
  ["Rafael F.", "Levo as ferramentas e consigo ir no período combinado."],
  ["Camila S.", "Já fiz um serviço parecido neste bairro."],
  ["Bruno L.", "Posso começar assim que a data for confirmada."],
  ["Ana P.", "O valor inclui o deslocamento."],
  ["Paulo G.", "Disponível nesta semana, sem custo extra de material básico."],
  ["Helena M.", "Consigo encaixar no horário pedido."],
  ["Diego G.", "Combino o pagamento antes de começar."],
  ["Lívia N.", "Tenho experiência com esse tipo de tarefa."],
];

const photosByCategory: Record<string, string[]> = {
  Limpeza: ["/ilustracoes/limpeza.svg", "/ilustracoes/faz-tudo.svg"],
  Montagem: ["/ilustracoes/montagem.svg", "/ilustracoes/faz-tudo.svg"],
  Pintura: ["/ilustracoes/pintura.svg", "/ilustracoes/faz-tudo.svg"],
  Entrega: ["/ilustracoes/entrega.svg", "/ilustracoes/mudanca.svg"],
  Mudanças: ["/ilustracoes/mudanca.svg", "/ilustracoes/entrega.svg"],
  Jardinagem: ["/ilustracoes/jardim.svg", "/ilustracoes/faz-tudo.svg"],
  Negócios: ["/ilustracoes/negocios.svg", "/ilustracoes/design.svg"],
  Design: ["/ilustracoes/design.svg", "/ilustracoes/negocios.svg"],
  "Faz-tudo": ["/ilustracoes/faz-tudo.svg", "/ilustracoes/montagem.svg"],
};

function proposalAmount(price: string, index: number) {
  const value = Number(price.replace(/[^\d]/g, ""));
  if (!Number.isFinite(value) || value === 0) return price;
  return `R$ ${Math.max(40, value - index * 15).toLocaleString("pt-BR")}`;
}

function proposalsFor(price: string, count: number, clientName: string): Proposal[] {
  const people = proposalPool.filter(([name]) => name !== clientName);
  return Array.from({ length: count }, (_, index) => {
    const [name, note] = people[index % people.length];
    return { name, amount: proposalAmount(price, index), note };
  });
}

function task(
  input: Omit<Task, "meta" | "offers" | "proposals" | "photos"> & { meta?: string },
): Task {
  return {
    ...input,
    meta: input.meta ?? `${input.location} · ${input.when}`,
    offers: offersLine(input.status, input.offerCount),
    proposals: proposalsFor(input.price, input.offerCount, input.clientName),
    photos: photosByCategory[input.category] ?? ["/ilustracoes/faz-tudo.svg", "/ilustracoes/limpeza.svg"],
  };
}

export const tasks: Task[] = [
  task({
    slug: "chuveiro",
    title: "Trocar resistência do chuveiro",
    location: "Pinheiros, São Paulo",
    when: "Antes de sex., 23 out.",
    time: "Manhã",
    price: "R$ 120",
    offerCount: 3,
    status: "aberta",
    poster: "MA",
    posterName: "Marina A.",
    clientName: "Marina A.",
    details: "O chuveiro parou de esquentar. Preciso trocar a resistência em um banheiro em Pinheiros. O aparelho já está no lugar.",
    category: "Faz-tudo",
    lng: -46.691,
    lat: -23.567,
  }),
  task({
    slug: "guarda-roupa",
    title: "Montar guarda-roupa 6 portas",
    location: "Moema, São Paulo",
    when: "Hoje",
    time: "Tarde",
    price: "R$ 250",
    offerCount: 8,
    status: "atribuida",
    poster: "RF",
    posterName: "Rafael F.",
    clientName: "Helena M.",
    assigneeName: "Rafael F.",
    assigneeSlug: "rafael-f",
    details: "Guarda-roupa de seis portas, ainda na caixa, no quarto de um apartamento em Moema. Ferramentas básicas ajudam.",
    category: "Montagem",
    lng: -46.662,
    lat: -23.601,
  }),
  task({
    slug: "faxina-pos-mudanca",
    title: "Faxina pós-mudança, 2 quartos",
    location: "Tijuca, Rio de Janeiro",
    when: "Flexível",
    time: "",
    price: "R$ 300",
    offerCount: 1,
    status: "concluida",
    poster: "CS",
    posterName: "Camila S.",
    clientName: "Camila S.",
    details: "Apartamento de dois quartos na Tijuca depois de uma mudança. Limpeza interna, sem área externa.",
    category: "Limpeza",
    lng: -43.237,
    lat: -22.925,
  }),
  task({
    slug: "pintar-sala",
    title: "Pintar sala e corredor",
    location: "Savassi, Belo Horizonte",
    when: "Antes de seg., 2 nov.",
    time: "Dia inteiro",
    price: "R$ 900",
    offerCount: 5,
    status: "aberta",
    poster: "BL",
    posterName: "Bruno L.",
    clientName: "Bruno L.",
    details: "Pintura da sala e do corredor em um apartamento na Savassi. A tinta já foi escolhida.",
    category: "Pintura",
    lng: -43.937,
    lat: -19.938,
  }),
  task({
    slug: "geladeira-media",
    title: "Buscar e entregar uma geladeira média",
    location: "Vila Mariana, São Paulo",
    when: "Flexível",
    time: "Tarde",
    price: "R$ 180",
    offerCount: 2,
    status: "aberta",
    poster: "AP",
    posterName: "Ana P.",
    clientName: "Ana P.",
    details: "Buscar uma geladeira média na Vila Mariana e entregar no mesmo bairro. Há elevador.",
    category: "Entrega",
    lng: -46.638,
    lat: -23.589,
  }),
  task({
    slug: "colchao-king",
    title: "Busca e entrega de colchão king",
    location: "Batel, Curitiba",
    when: "Flexível",
    time: "Manhã",
    price: "R$ 150",
    offerCount: 1,
    status: "aberta",
    poster: "LS",
    posterName: "Lucas S.",
    clientName: "Lucas S.",
    details: "Retirar um colchão king e entregar em outro apartamento no Batel.",
    category: "Entrega",
    lng: -49.287,
    lat: -25.442,
  }),
  task({
    slug: "entrega-de-sofa",
    title: "Entrega de sofá",
    location: "Botafogo, Rio de Janeiro",
    when: "Flexível",
    time: "Tarde",
    price: "R$ 160",
    offerCount: 0,
    status: "aberta",
    poster: "JC",
    posterName: "João C.",
    clientName: "João C.",
    details: "Levar um sofá de dois lugares de uma loja em Botafogo até um apartamento no mesmo bairro.",
    category: "Entrega",
    lng: -43.186,
    lat: -22.951,
  }),
  task({
    slug: "limpeza-fim-de-contrato",
    title: "Limpeza de fim de contrato",
    location: "Consolação, São Paulo",
    when: "seg., 21 de fev.",
    time: "Manhã, meio-dia, tarde",
    price: "R$ 450",
    offerCount: 1,
    status: "atribuida",
    poster: "HM",
    posterName: "Helena M.",
    clientName: "Helena M.",
    assigneeName: "Marina A.",
    assigneeSlug: "marina-a",
    details:
      "Apartamento pequeno de dois quartos na Consolação, só a parte interna. Inclui limpeza dos pisos dos dois quartos e da escada. Não precisa da área externa.",
    phone: "Apartamento pequeno de dois quartos. Limpeza dos pisos. Só a parte interna.",
    category: "Limpeza",
    lng: -46.662,
    lat: -23.553,
  }),
  task({
    slug: "mudanca-hoje",
    title: "Mudança hoje",
    location: "Perdizes, São Paulo",
    when: "Hoje",
    time: "Manhã",
    price: "R$ 280",
    offerCount: 4,
    status: "aberta",
    poster: "TR",
    posterName: "Tiago R.",
    clientName: "Tiago R.",
    details: "Mudança de um kitnet em Perdizes para outro prédio na mesma região. Preciso para hoje.",
    category: "Mudanças",
    lng: -46.678,
    lat: -23.537,
  }),
  task({
    slug: "mudanca-urgente",
    title: "Mudança urgente",
    location: "Copacabana, Rio de Janeiro",
    when: "Hoje",
    time: "Tarde",
    price: "R$ 520",
    offerCount: 2,
    status: "aberta",
    poster: "FS",
    posterName: "Fernanda S.",
    clientName: "Fernanda S.",
    details: "Mudança urgente de um apartamento de um quarto em Copacabana. Há poucos móveis.",
    category: "Mudanças",
    lng: -43.186,
    lat: -22.971,
  }),
  task({
    slug: "ajuda-mudanca",
    title: "Ajuda para mudar de casa",
    location: "Centro, Curitiba",
    when: "Flexível",
    time: "Dia inteiro",
    price: "R$ 400",
    offerCount: 3,
    status: "aberta",
    poster: "PG",
    posterName: "Paulo G.",
    clientName: "Paulo G.",
    details: "Ajuda para carregar caixas e móveis desmontados em uma mudança no centro de Curitiba.",
    category: "Mudanças",
    lng: -49.273,
    lat: -25.429,
  }),
  task({
    slug: "mudanca-1km",
    title: "Mudança a 1 km na mesma rua",
    location: "Perdizes, São Paulo",
    when: "Flexível",
    time: "Manhã",
    price: "R$ 350",
    offerCount: 1,
    status: "aberta",
    poster: "TR",
    posterName: "Tiago R.",
    clientName: "Tiago R.",
    details: "Mudança curta, cerca de 1 km na mesma rua em Perdizes.",
    category: "Mudanças",
    lng: -46.682,
    lat: -23.532,
  }),
  task({
    slug: "suporte-online",
    title: "Ajuda com tarefas básicas de suporte online",
    location: "Remoto",
    when: "Antes de qua., 21 de out.",
    time: "Horário comercial",
    price: "R$ 200",
    offerCount: 0,
    status: "aberta",
    poster: "AL",
    posterName: "Aline L.",
    clientName: "Aline L.",
    details: "Responder mensagens e organizar uma planilha simples. Trabalho remoto, antes de quarta-feira, 21 de outubro.",
    category: "Negócios",
    lng: -46.633,
    lat: -23.55,
  }),
  task({
    slug: "livros-usados",
    title: "Ajuda para vender um lote de livros usados",
    location: "Remoto",
    when: "Flexível",
    time: "",
    price: "R$ 80",
    offerCount: 0,
    status: "aberta",
    poster: "AL",
    posterName: "Aline L.",
    clientName: "Aline L.",
    details: "Organizar anúncios de um lote de livros usados. O prazo é flexível e o trabalho é remoto.",
    category: "Negócios",
    lng: -46.64,
    lat: -23.555,
  }),
  task({
    slug: "conferir-mapa",
    title: "Conferir um lugar no mapa",
    location: "Remoto",
    when: "Flexível",
    time: "",
    price: "R$ 40",
    offerCount: 3,
    status: "aberta",
    poster: "AL",
    posterName: "Aline L.",
    clientName: "Aline L.",
    details: "Conferir se o endereço de uma loja em São Paulo está certo no mapa. Trabalho remoto.",
    category: "Negócios",
    lng: -46.655,
    lat: -23.561,
  }),
  task({
    slug: "trabalho-no-patio",
    title: "Trabalho no pátio",
    location: "Pinheiros, São Paulo",
    when: "Flexível",
    time: "Manhã",
    price: "R$ 300",
    offerCount: 1,
    status: "aberta",
    poster: "MA",
    posterName: "Marina A.",
    clientName: "Marina A.",
    details: "Organizar o pátio de uma casa em Pinheiros: varrer, recolher folhas e alinhar os vasos.",
    category: "Jardinagem",
    lng: -46.699,
    lat: -23.562,
  }),
  task({
    slug: "corte-de-grama",
    title: "Corte de grama",
    location: "Cambuí, Campinas",
    when: "Hoje",
    time: "Manhã",
    price: "R$ 120",
    offerCount: 1,
    status: "aberta",
    poster: "BL",
    posterName: "Bruno L.",
    clientName: "Bruno L.",
    details: "Cortar a grama de um quintal no Cambuí. Preciso para hoje.",
    category: "Jardinagem",
    lng: -47.063,
    lat: -22.899,
  }),
  task({
    slug: "consultoria-de-interiores",
    title: "Consultoria de design de interiores",
    location: "Remoto",
    when: "Flexível",
    time: "Tarde",
    price: "R$ 500",
    offerCount: 1,
    status: "aberta",
    poster: "CS",
    posterName: "Camila S.",
    clientName: "Camila S.",
    details: "Uma conversa remota para definir o layout de um apartamento novo.",
    category: "Design",
    lng: -46.633,
    lat: -23.548,
  }),
  task({
    slug: "contabilidade",
    title: "Contabilidade",
    location: "Remoto",
    when: "Flexível",
    time: "Horário comercial",
    price: "R$ 250",
    offerCount: 8,
    status: "aberta",
    poster: "PG",
    posterName: "Paulo G.",
    clientName: "Paulo G.",
    details: "Organizar notas e uma planilha simples de um mês. Trabalho remoto.",
    category: "Negócios",
    lng: -46.633,
    lat: -23.552,
  }),
  task({
    slug: "traducao-juramentada",
    title: "Tradução juramentada",
    location: "Remoto",
    when: "Hoje",
    time: "Hoje",
    price: "R$ 180",
    offerCount: 0,
    status: "aberta",
    poster: "AL",
    posterName: "Aline L.",
    clientName: "Aline L.",
    details: "Tradução juramentada de um documento curto, para hoje, feita à distância.",
    category: "Negócios",
    lng: -46.633,
    lat: -23.546,
  }),
];

export const browseTasks = tasks.filter((item) =>
  [
    "chuveiro",
    "guarda-roupa",
    "faxina-pos-mudanca",
    "pintar-sala",
    "geladeira-media",
    "suporte-online",
    "livros-usados",
    "trabalho-no-patio",
    "corte-de-grama",
  ].includes(item.slug),
);

export const railTasks = tasks.filter((item) =>
  ["consultoria-de-interiores", "contabilidade", "traducao-juramentada", "chuveiro", "pintar-sala"].includes(item.slug),
);

export const leaseTask = tasks.find((item) => item.slug === "limpeza-fim-de-contrato")!;

export const featuredJobs = tasks.filter((item) =>
  [
    "geladeira-media",
    "colchao-king",
    "entrega-de-sofa",
    "mudanca-hoje",
    "mudanca-urgente",
    "ajuda-mudanca",
    "mudanca-1km",
  ].includes(item.slug),
);

export function findTask(slug: string) {
  const found = tasks.find((item) => item.slug === slug);
  if (!found) return null;
  if (found.slug === leaseTask.slug) return { kind: "lease" as const, task: found };
  if (railTasks.some((item) => item.slug === slug)) return { kind: "rail" as const, task: found };
  if (browseTasks.some((item) => item.slug === slug)) return { kind: "browse" as const, task: found };
  return { kind: "featured" as const, task: found };
}

export const categories = [
  ["Montagem de móveis", "Montagem e desmontagem de móveis prontos"],
  ["Entregas", "Entregas no mesmo dia e coletas"],
  ["Jardinagem e paisagismo", "Corte, capina e organização"],
  ["Pintura", "Pintura de paredes internas e externas"],
  ["Faz-tudo", "Ajuda com a manutenção da casa"],
  ["Negócios e administração", "Ajuda com planilhas e rotinas do dia a dia"],
  ["Marketing e design", "Ajuda com site e peças simples"],
  ["Outra coisa", "Instalação de quadros e pequenos reparos"],
  ["Mudanças", "Embalagem, proteção, transporte e mais"],
  ["Limpeza residencial", "Limpar, passar pano e organizar a casa"],
] as const;

export const homeJobs = [
  ["ENTREGA", "Buscar e entregar uma geladeira média", "R$ 180", "/tarefas/geladeira-media"],
  ["ENTREGA", "Busca e entrega de colchão king", "R$ 150", "/tarefas/colchao-king"],
  ["ENTREGA", "Entrega de sofá", "R$ 160", "/tarefas/entrega-de-sofa"],
  ["LIMPEZA", "Limpeza de fim de contrato", "R$ 450", "/tarefas/limpeza-fim-de-contrato"],
  ["MUDANÇAS", "Mudança hoje", "R$ 280", "/tarefas/mudanca-hoje"],
  ["MUDANÇAS", "Mudança urgente", "R$ 520", "/tarefas/mudanca-urgente"],
  ["MUDANÇAS", "Ajuda para mudar de casa", "R$ 400", "/tarefas/ajuda-mudanca"],
  ["MUDANÇAS", "Mudança a 1 km na mesma rua", "R$ 350", "/tarefas/mudanca-1km"],
] as const;

export const homeTabs = ["Mudança", "Manutenção da casa", "Abrindo um negócio", "Festas", "Algo diferente"];

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
  "Orçamento combinado antes de começar",
  "Nenhum trabalho é grande ou pequeno demais",
  "Pagamento combinado direto com o Fechador",
  "Sem dinheiro vivo se vocês preferirem",
  "No mesmo dia ou no dia seguinte, quando houver agenda",
];

export const giftDesigns = [
  "Vale-presente",
  "Feliz aniversário",
  "Obrigado",
  "Só porque sim",
  "Parabéns",
  "Relaxe",
  "Pensando em você",
  "Fechô",
];

export const giftAmounts = ["R$ 50", "R$ 100", "R$ 150", "R$ 200", "R$ 300", "R$ 500", "R$ 1.000"];

export const serviceStats = [
  ["Mudanças", "Transporte e ajuda para carregar"],
  ["Remoção de entulho", "Retirada de volumes e descarte"],
  ["Limpeza", "Casas, apartamentos e fim de contrato"],
  ["Jardinagem", "Corte, vasos e organização"],
] as const;

export const jobStats = [
  ["Mudanças", "Transporte e ajuda para carregar"],
  ["Remoção de entulho", "Retirada de volumes e descarte"],
  ["Limpeza", "Casas, apartamentos e fim de contrato"],
  ["Faz-tudo", "Pequenos reparos em casa"],
] as const;

export const browsePlace = "50 km São Paulo SP";

export type Tasker = {
  slug: string;
  name: string;
  rating: string;
  reviews: string;
  place: string;
  body: string;
};

export const taskers: Tasker[] = [
  { slug: "marina-a", name: "Marina A.", rating: "4,9", reviews: "97", place: "Pinheiros, São Paulo", body: "Limpeza residencial e organização depois de mudança." },
  { slug: "rafael-f", name: "Rafael F.", rating: "5,0", reviews: "64", place: "Moema, São Paulo", body: "Montagem de móveis prontos e pequenos reparos." },
  { slug: "camila-s", name: "Camila S.", rating: "5,0", reviews: "41", place: "Tijuca, Rio de Janeiro", body: "Faxina e organização de apartamentos." },
  { slug: "bruno-l", name: "Bruno L.", rating: "4,8", reviews: "33", place: "Savassi, Belo Horizonte", body: "Pintura interna e ajuda com jardinagem." },
  { slug: "ana-p", name: "Ana P.", rating: "5,0", reviews: "28", place: "Vila Mariana, São Paulo", body: "Entregas e coletas no mesmo dia." },
  { slug: "paulo-g", name: "Paulo G.", rating: "4,9", reviews: "22", place: "Centro, Curitiba", body: "Mudanças e planilhas simples." },
];

export const sampleReviews = [
  ["Roberta D.", "Serviço caprichado e no horário combinado.", "Limpeza de fim de contrato"],
  ["Diego G.", "Equipe cuidadosa. Foi fácil combinar os detalhes.", "Limpeza da casa e da varanda"],
  ["Cecília B.", "A limpeza de fim de contrato ficou pronta no mesmo dia.", "Limpeza de fim de contrato"],
];

export const cities = [
  ["sao-paulo", "São Paulo", "/locais/sao-paulo"],
  ["rio-de-janeiro", "Rio de Janeiro", "/locais/rio-de-janeiro"],
  ["belo-horizonte", "Belo Horizonte", "/locais/belo-horizonte"],
  ["curitiba", "Curitiba", "/locais/curitiba"],
  ["porto-alegre", "Porto Alegre", "/locais/porto-alegre"],
  ["brasilia", "Brasília", "/locais/brasilia"],
  ["salvador", "Salvador", "/locais/salvador"],
  ["recife", "Recife", "/locais/recife"],
] as const;

export const legalLine = "Fechô";

export const footerColumns: Array<[string, Array<[string, string]>]> = [
  [
    "Descubra",
    [
      ["Como funciona", "/como-funciona"],
      ["Fechô para empresas", "/empresas"],
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
  ["Locais populares", cities.map(([, name, href]) => [name, href] as [string, string])],
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
