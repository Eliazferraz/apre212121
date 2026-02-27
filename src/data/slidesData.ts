import discAnimals from "@/assets/disc-animals.jpg";
import marvelIronMan from "@/assets/marvel-iron-man.jpg";
import marvelSpiderman from "@/assets/marvel-spiderman.jpg";
import marvelHulk from "@/assets/marvel-hulk.jpg";
import marvelCaptain from "@/assets/marvel-captain.jpg";

export const slidesData = [
  // 1 - Cover quote
  {
    id: 1,
    type: "cover" as const,
    title: "Até que o sol não brilha, acendamos uma vela na escuridão",
    subtitle: "Confúcio",
  },
  // 2 - Teste Comportamental intro
  {
    id: 2,
    type: "content" as const,
    title: "Teste Comportamental",
    subtitle: 'Testes comportamentais Mede "COMO" você age no dia a dia',
    bullets: [
      "Como você reage sob pressão?",
      "Como você toma decisões?",
      "Como se comunica?",
      "Como trabalha em equipe?",
      "Como lidera ou segue regras?",
    ],
    footer: "👉 Ou seja: ele olha seu comportamento visível.",
  },
  // 3 - Conhecendo Seu Time
  {
    id: 3,
    type: "content" as const,
    title: "Conhecendo Seu Time e a Si Mesmo",
    subtitle: "Ferramentas que ajudam a mapear o perfil de cada pessoa e até onde vai o seu limite",
    image: discAnimals,
  },
  // 4 - DISC quadrant
  {
    id: 4,
    type: "disc" as const,
    title: "Os 4 Perfis DISC",
  },
  // 5 - Dominância
  {
    id: 5,
    type: "profile" as const,
    title: "Dominância",
    color: "red",
    description: "Compreende as pessoas que são mais ligadas ao desafio, múltiplas funções e foco no resultado.",
    detail: "Executam suas funções de forma organizada, com rapidez e qualidade. Contudo, sendo bastante autossuficientes, o trabalho em grupo pode ser um empecilho.",
    traits: ["Focado", "Direto", "Competitivo"],
    emoji: "🦅",
    label: "Executores",
  },
  // 6 - Influência
  {
    id: 6,
    type: "profile" as const,
    title: "Influência",
    color: "yellow",
    description: "Esse perfil gosta de realizar as coisas junto; é sensível e voltado às pessoas; gosta de cultivar relacionamentos.",
    detail: "É um perfil essencialmente tradicionalista, pensa muito na equipe, em como contribuir e fazer a colaboração mútua; em ter um ambiente seguro e de harmonia.",
    traits: ["Persuasivo", "Comunicativo", "Espontâneo"],
    emoji: "🐱",
    label: "Comunicadores",
  },
  // 7 - Calculista / Conformidade
  {
    id: 7,
    type: "profile" as const,
    title: "Calculista",
    color: "purple",
    description: "É aquele que gosta de fazer diferente, tem muita criatividade, é intuitivo, tem foco no futuro, mas ao mesmo tempo é distraído e curioso.",
    detail: "Gosta de trabalhar de forma informal e casual e às vezes acaba tendo muita iniciativa e pouco acabativa.",
    traits: ["Cauteloso", "Lógico", "Organizado"],
    emoji: "🐺",
    label: "Analistas",
  },
  // 8 - Estabilidade
  {
    id: 8,
    type: "profile" as const,
    title: "Estabilidade",
    color: "blue",
    description: "Metódico, organizado, correto, detalhista e pontual. Há previsibilidade nas ações: ele planejará as coisas da forma certa.",
    detail: "É leal, seguro, gosta de seguir normas e não gosta de mudanças. Não gosta de correr riscos e faz tarefas onde pode ver o início, meio e fim.",
    traits: ["Seguro", "Confiável", "Conservador"],
    emoji: "🐬",
    label: "Planejadores",
  },
  // 9 - Temperamentos intro
  {
    id: 9,
    type: "content" as const,
    title: "Conhecendo Seu Time e a Si Mesmo",
    subtitle: "TEMPERAMENTOS",
    bullets: [
      "O teste de temperamento mede como você é por dentro, sua tendência natural.",
    ],
    subBullets: [
      "Você é naturalmente calmo ou impulsivo?",
      "Introvertido ou expansivo?",
      "Sensível ou racional?",
      "Constante ou mutável?",
    ],
    footer: "👉 Ele olha sua natureza emocional e biológica.\n💡 Pense assim: Temperamento = como você nasce.",
  },
  // 10 - Colérico desc
  {
    id: 10,
    type: "marvel-profile" as const,
    title: "Colérico",
    color: "red",
    section: "Temperamentos",
    description: "Pessoas com temperamento colérico são mais explosivas e agressivas do que as demais. São pessoas dominadoras, ambiciosas, determinadas, impulsivas, comandam e lideram e são bons planejadores. Em algumas situações são intolerantes, egocêntricos e impacientes.",
    marvelChar: "Tony Stark / Homem de Ferro",
    marvelWhy: "Impulsivo, líder nato, ambicioso e não aceita um 'não'. Toma decisões rápidas e quer tudo no seu ritmo! 💥",
    marvelImage: marvelIronMan,
    emoji: "🔥",
  },
  // 11 - Colérico características
  {
    id: 11,
    type: "characteristics" as const,
    title: "Características do Temperamento Colérico",
    color: "red",
    marvelChar: "Tony Stark / Homem de Ferro",
    marvelImage: marvelIronMan,
    traits: [
      "Busca por desafios",
      "Tendência a liderar",
      "Impaciência com lentidão ou indecisão",
      "Competitividade",
      "Foco em resultados",
      "Assertividade",
      "Dificuldade em lidar com a emoção alheia",
      "Rápida tomada de decisão",
    ],
    emoji: "⚡",
  },
  // 12 - Sanguíneo desc
  {
    id: 12,
    type: "marvel-profile" as const,
    title: "Sanguíneo",
    color: "orange",
    section: "Temperamentos",
    description: "A pessoa que tem o temperamento sanguíneo é caracterizada por ser mais extrovertida e otimista. São pessoas alegres, esperançosas, calorosas, amáveis e simpáticas. De modo geral são explosivas, instáveis emocionalmente, impulsivas e até egoístas.",
    marvelChar: "Spider-Man / Homem-Aranha",
    marvelWhy: "Alegre, comunicativo, cheio de energia e sempre fazendo piada — mesmo no meio da batalha! 🕸️",
    marvelImage: marvelSpiderman,
    emoji: "☀️",
  },
  // 13 - Sanguíneo características
  {
    id: 13,
    type: "characteristics" as const,
    title: "Características do Temperamento Sanguíneo",
    color: "orange",
    marvelChar: "Spider-Man / Homem-Aranha",
    marvelImage: marvelSpiderman,
    traits: [
      "Sociabilidade",
      "Animação",
      "Busca por novas experiências",
      "Otimismo",
      "Criatividade",
      "Adaptabilidade",
      "Comunicativos",
      "Falta de foco e concentração",
    ],
    emoji: "🎉",
  },
  // 14 - Melancólico desc
  {
    id: 14,
    type: "marvel-profile" as const,
    title: "Melancólico",
    color: "purple",
    section: "Temperamentos",
    description: "As pessoas com temperamento melancólico são profundas, sensíveis, nostálgicas e muito detalhistas. Costumam ser aquelas pessoas que preferem ficar caladas no seu canto, com dificuldade para demonstrar os seus sentimentos, desconfiados, mas muito leais e dedicados às pessoas que amam.",
    marvelChar: "Bruce Banner / Hulk",
    marvelWhy: "Profundo, sensível, introspectivo e perfeccionista. Guarda tudo dentro — até que não aguenta mais! 💚",
    marvelImage: marvelHulk,
    emoji: "🌊",
  },
  // 15 - Melancólico características
  {
    id: 15,
    type: "characteristics" as const,
    title: "Características do Temperamento Melancólico",
    color: "purple",
    marvelChar: "Bruce Banner / Hulk",
    marvelImage: marvelHulk,
    traits: [
      "Sensibilidade emocional",
      "Profundidade de pensamento",
      "Criatividade",
      "Introspecção",
      "Perfeccionismo",
      "Reserva",
      "Saudosismo",
      "Dificuldade de expressar emoções",
    ],
    emoji: "🎭",
  },
  // 16 - Fleumático desc
  {
    id: 16,
    type: "marvel-profile" as const,
    title: "Fleumático",
    color: "blue",
    section: "Temperamentos",
    description: "Tipos fleumáticos são introvertidos, extremamente calmos e pacientes. Fleumáticos são equilibrados, sendo bons ouvintes, inteligentes e fáceis de conviver. Bastante teimosos, podem ser desapegados e passivos, com uma tendência a resistir à mudança e a evitar conflitos.",
    marvelChar: "Capitão América",
    marvelWhy: "Calmo, paciente, leal e estável. Sempre mantém a compostura, ouve todos e evita conflitos desnecessários! 🛡️",
    marvelImage: marvelCaptain,
    emoji: "🌿",
  },
  // 17 - Fleumático características
  {
    id: 17,
    type: "characteristics" as const,
    title: "Características do Temperamento Fleumático",
    color: "blue",
    marvelChar: "Capitão América",
    marvelImage: marvelCaptain,
    traits: [
      "Calma",
      "Paciência",
      "Dificuldade em expressar suas emoções",
      "Habilidade de ouvir",
      "Aversão a conflitos",
      "Estabilidade emocional",
      "Comportamento deliberado",
      "Persistência",
    ],
    emoji: "🧊",
  },
  // 18 - 4 temperamentos overview
  {
    id: 18,
    type: "temperaments-overview" as const,
    title: "Os 4 Temperamentos",
  },
  // 19 - Qualidades e Defeitos
  {
    id: 19,
    type: "qualities-defects" as const,
    title: "Qualidades & Defeitos",
  },
  // 20 - Temperamento vs Comportamento
  {
    id: 20,
    type: "comparison" as const,
    title: "Principais Diferenças",
    subtitle: "Temperamento vs. Comportamento",
  },
  // 21 - Walt Disney quote
  {
    id: 21,
    type: "quote" as const,
    title: "A maneira de começar é parar de falar e começar a fazer",
    subtitle: "Walt Disney",
  },
  // 22 - Links
  {
    id: 22,
    type: "links" as const,
    title: "Links Úteis",
    links: [
      { label: "Teste temperamental", url: "https://educamais.com/teste-de-temperamento/" },
      { label: "Os 4 Temperamentos", url: "https://andrewsilva.com.br/os-4-tipos-de-temperamentos-colerico-melancolico-fleumatico-e-sanguineo/" },
      { label: "Teste DISC", url: "https://www.pactorh.com.br/teste-disc/disc/faca-agora-teste-disc/" },
      { label: "Resultado DISC", url: "https://www.pactorh.com.br/teste-disc/disc/" },
    ],
  },
];
