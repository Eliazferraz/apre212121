import discShark from "@/assets/disc-shark.jpg";
import discDolphin from "@/assets/disc-dolphin.jpg";
import discEagle from "@/assets/disc-eagle.jpg";
import discWolf from "@/assets/disc-wolf.jpg";
import marvelIronMan from "@/assets/marvel-ironman-3d.jpg";
import marvelDeadpool from "@/assets/marvel-deadpool-3d.jpg";
import marvelHulk from "@/assets/marvel-hulk-3d.jpg";
import marvelCaptain from "@/assets/marvel-captain-3d.jpg";

export const discProfiles = {
  D: { animal: "Tubarão", image: discShark, color: "red" },
  I: { animal: "Águia", image: discEagle, color: "yellow" },
  C: { animal: "Golfinho", image: discDolphin, color: "purple" },
  S: { animal: "Lobo", image: discWolf, color: "blue" },
};

export const marvelChars = {
  colerico: { name: "Tony Stark / Homem de Ferro", image: marvelIronMan },
  sanguineo: { name: "Deadpool / Wade Wilson", image: marvelDeadpool },
  melancolico: { name: "Bruce Banner / Hulk", image: marvelHulk },
  fleumatico: { name: "Capitão América", image: marvelCaptain },
};

export const slidesData = [
  // 1 - Cover
  {
    id: 1, type: "cover" as const,
    title: "Até que o sol não brilha, acendamos uma vela na escuridão",
    subtitle: "Confúcio",
  },
  // 2 - Teste Comportamental
  {
    id: 2, type: "content" as const,
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
    id: 3, type: "animals-showcase" as const,
    title: "Conhecendo Seu Time e a Si Mesmo",
    subtitle: "Ferramentas que ajudam a mapear o perfil de cada pessoa e até onde vai o seu limite",
  },
  // 4 - DISC quadrant
  { id: 4, type: "disc" as const, title: "Os 4 Perfis DISC" },
  // 5 - Dominância (Tubarão)
  {
    id: 5, type: "profile" as const,
    title: "Dominância", color: "red", animal: "Tubarão", animalImage: discShark,
    description: "Compreende as pessoas que são mais ligadas ao desafio, múltiplas funções e foco no resultado.",
    detail: "Executam suas funções de forma organizada, com rapidez e qualidade. Contudo, sendo bastante autossuficientes, o trabalho em grupo pode ser um empecilho.",
    traits: ["Focado", "Direto", "Competitivo"], label: "Executores",
  },
  // 6 - Influência (Golfinho)
  {
    id: 6, type: "profile" as const,
    title: "Influência", color: "yellow", animal: "Golfinho", animalImage: discDolphin,
    description: "Esse perfil gosta de realizar as coisas junto; é sensível e voltado às pessoas; gosta de cultivar relacionamentos.",
    detail: "É um perfil essencialmente tradicionalista, pensa muito na equipe, em como contribuir e fazer a colaboração mútua; em ter um ambiente seguro e de harmonia.",
    traits: ["Persuasivo", "Comunicativo", "Espontâneo"], label: "Comunicadores",
  },
  // 7 - Conformidade (Águia)
  {
    id: 7, type: "profile" as const,
    title: "Calculista", color: "purple", animal: "Águia", animalImage: discEagle,
    description: "É aquele que gosta de fazer diferente, tem muita criatividade, é intuitivo, tem foco no futuro, mas ao mesmo tempo é distraído e curioso.",
    detail: "Gosta de trabalhar de forma informal e casual e às vezes acaba tendo muita iniciativa e pouco acabativa.",
    traits: ["Cauteloso", "Lógico", "Organizado"], label: "Analistas",
  },
  // 8 - Estabilidade (Lobo)
  {
    id: 8, type: "profile" as const,
    title: "Estabilidade", color: "blue", animal: "Lobo", animalImage: discWolf,
    description: "Metódico, organizado, correto, detalhista e pontual. Há previsibilidade nas ações: ele planejará as coisas da forma certa.",
    detail: "É leal, seguro, gosta de seguir normas e não gosta de mudanças. Não gosta de correr riscos e faz tarefas onde pode ver o início, meio e fim.",
    traits: ["Seguro", "Confiável", "Conservador"], label: "Planejadores",
  },
  // 9 - Temperamentos intro
  {
    id: 9, type: "content" as const,
    title: "Conhecendo Seu Time e a Si Mesmo",
    subtitle: "TEMPERAMENTOS",
    bullets: ["O teste de temperamento mede como você é por dentro, sua tendência natural."],
    subBullets: ["Você é naturalmente calmo ou impulsivo?", "Introvertido ou expansivo?", "Sensível ou racional?", "Constante ou mutável?"],
    footer: "👉 Ele olha sua natureza emocional e biológica.\n💡 Pense assim: Temperamento = como você nasce.",
  },
  // 10 - Colérico
  {
    id: 10, type: "marvel-profile" as const,
    title: "Colérico", color: "red", section: "Temperamentos",
    description: "Pessoas com temperamento colérico são mais explosivas e agressivas do que as demais. São pessoas dominadoras, ambiciosas, determinadas, impulsivas, comandam e lideram e são bons planejadores. Em algumas situações são intolerantes, egocêntricos e impacientes.",
    marvelChar: marvelChars.colerico.name, marvelImage: marvelChars.colerico.image,
    marvelWhy: "Impulsivo, líder nato, ambicioso e não aceita um 'não'. Toma decisões rápidas e quer tudo no seu ritmo! 💥",
  },
  // 11 - Colérico características
  {
    id: 11, type: "characteristics" as const,
    title: "Características do Temperamento Colérico", color: "red",
    marvelChar: marvelChars.colerico.name, marvelImage: marvelChars.colerico.image,
    traits: ["Busca por desafios", "Tendência a liderar", "Impaciência com lentidão ou indecisão", "Competitividade", "Foco em resultados", "Assertividade", "Dificuldade em lidar com a emoção alheia", "Rápida tomada de decisão"],
  },
  // 12 - Sanguíneo
  {
    id: 12, type: "marvel-profile" as const,
    title: "Sanguíneo", color: "orange", section: "Temperamentos",
    description: "A pessoa que tem o temperamento sanguíneo é caracterizada por ser mais extrovertida e otimista. São pessoas alegres, esperançosas, calorosas, amáveis e simpáticas. De modo geral são explosivas, instáveis emocionalmente, impulsivas e até egoístas.",
    marvelChar: marvelChars.sanguineo.name, marvelImage: marvelChars.sanguineo.image,
    marvelWhy: "Alegre, comunicativo, cheio de energia e sempre fazendo piada — mesmo no meio da batalha! Não para de falar nunca! 💀🔴",
  },
  // 13 - Sanguíneo características
  {
    id: 13, type: "characteristics" as const,
    title: "Características do Temperamento Sanguíneo", color: "orange",
    marvelChar: marvelChars.sanguineo.name, marvelImage: marvelChars.sanguineo.image,
    traits: ["Sociabilidade", "Animação", "Busca por novas experiências", "Otimismo", "Criatividade", "Adaptabilidade", "Comunicativos", "Falta de foco e concentração"],
  },
  // 14 - Melancólico
  {
    id: 14, type: "marvel-profile" as const,
    title: "Melancólico", color: "green", section: "Temperamentos",
    description: "As pessoas com temperamento melancólico são profundas, sensíveis, nostálgicas e muito detalhistas. Costumam ser aquelas pessoas que preferem ficar caladas no seu canto, com dificuldade para demonstrar os seus sentimentos, desconfiados, mas muito leais e dedicados às pessoas que amam.",
    marvelChar: marvelChars.melancolico.name, marvelImage: marvelChars.melancolico.image,
    marvelWhy: "Profundo, sensível, introspectivo e perfeccionista. Guarda tudo dentro — até que não aguenta mais! 💚",
  },
  // 15 - Melancólico características
  {
    id: 15, type: "characteristics" as const,
    title: "Características do Temperamento Melancólico", color: "green",
    marvelChar: marvelChars.melancolico.name, marvelImage: marvelChars.melancolico.image,
    traits: ["Sensibilidade emocional", "Profundidade de pensamento", "Criatividade", "Introspecção", "Perfeccionismo", "Reserva", "Saudosismo", "Dificuldade de expressar emoções"],
  },
  // 16 - Fleumático
  {
    id: 16, type: "marvel-profile" as const,
    title: "Fleumático", color: "blue", section: "Temperamentos",
    description: "Tipos fleumáticos são introvertidos, extremamente calmos e pacientes. Fleumáticos são equilibrados, sendo bons ouvintes, inteligentes e fáceis de conviver. Bastante teimosos, podem ser desapegados e passivos, com uma tendência a resistir à mudança e a evitar conflitos.",
    marvelChar: marvelChars.fleumatico.name, marvelImage: marvelChars.fleumatico.image,
    marvelWhy: "Calmo, paciente, leal e estável. Sempre mantém a compostura, ouve todos e evita conflitos desnecessários! 🛡️",
  },
  // 17 - Fleumático características
  {
    id: 17, type: "characteristics" as const,
    title: "Características do Temperamento Fleumático", color: "blue",
    marvelChar: marvelChars.fleumatico.name, marvelImage: marvelChars.fleumatico.image,
    traits: ["Calma", "Paciência", "Dificuldade em expressar suas emoções", "Habilidade de ouvir", "Aversão a conflitos", "Estabilidade emocional", "Comportamento deliberado", "Persistência"],
  },
  // 18 - 4 temperamentos overview
  { id: 18, type: "temperaments-overview" as const, title: "Os 4 Temperamentos" },
  // 19 - Qualidades e Defeitos
  { id: 19, type: "qualities-defects" as const, title: "Qualidades & Defeitos" },
  // 20 - Comparison
  { id: 20, type: "comparison" as const, title: "Principais Diferenças", subtitle: "Temperamento vs. Comportamento" },
  // 21 - Walt Disney
  { id: 21, type: "quote" as const, title: "A maneira de começar é parar de falar e começar a fazer", subtitle: "Walt Disney" },
  // 22 - Links
  {
    id: 22, type: "links" as const, title: "Links Úteis",
    links: [
      { label: "Teste temperamental", url: "https://educamais.com/teste-de-temperamento/" },
      { label: "Os 4 Temperamentos", url: "https://andrewsilva.com.br/os-4-tipos-de-temperamentos-colerico-melancolico-fleumatico-e-sanguineo/" },
      { label: "Teste DISC", url: "https://www.pactorh.com.br/teste-disc/disc/faca-agora-teste-disc/" },
      { label: "Resultado DISC", url: "https://www.pactorh.com.br/teste-disc/disc/" },
    ],
  },
  // 23 - Video
  {
    id: 23, type: "video" as const,
    title: "Vídeo",
    subtitle: "Assista ao conteúdo complementar",
  },
];
