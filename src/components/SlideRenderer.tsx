import { motion } from "framer-motion";
import slideBgDark from "@/assets/slide-bg-dark.jpg";
import slideBgClosing from "@/assets/slide-bg-closing.jpg";
import slideBgComic from "@/assets/slide-bg-comic.jpg";
import marvelIronMan from "@/assets/marvel-iron-man.jpg";
import marvelSpiderman from "@/assets/marvel-spiderman.jpg";
import marvelHulk from "@/assets/marvel-hulk.jpg";
import marvelCaptain from "@/assets/marvel-captain.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.45 },
  }),
};

const popIn = {
  hidden: { opacity: 0, scale: 0.5, rotate: -5 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { delay: i * 0.1, duration: 0.5, type: "spring" as const, stiffness: 200 },
  }),
};

const colorMap: Record<string, { border: string; text: string; bg: string; glow: string }> = {
  red: { border: "border-slide-red", text: "text-slide-red", bg: "bg-slide-red/15", glow: "shadow-[0_0_30px_-5px_hsl(0,75%,55%,0.3)]" },
  yellow: { border: "border-slide-yellow", text: "text-slide-yellow", bg: "bg-slide-yellow/15", glow: "shadow-[0_0_30px_-5px_hsl(45,100%,55%,0.3)]" },
  blue: { border: "border-slide-blue", text: "text-slide-blue", bg: "bg-slide-blue/15", glow: "shadow-[0_0_30px_-5px_hsl(210,85%,55%,0.3)]" },
  green: { border: "border-slide-green", text: "text-slide-green", bg: "bg-slide-green/15", glow: "shadow-[0_0_30px_-5px_hsl(150,65%,42%,0.3)]" },
  purple: { border: "border-slide-purple", text: "text-slide-purple", bg: "bg-slide-purple/15", glow: "shadow-[0_0_30px_-5px_hsl(270,65%,58%,0.3)]" },
  orange: { border: "border-slide-orange", text: "text-slide-orange", bg: "bg-slide-orange/15", glow: "shadow-[0_0_30px_-5px_hsl(25,95%,55%,0.3)]" },
};

interface SlideProps {
  slide: any;
  index: number;
}

export const SlideRenderer = ({ slide, index }: SlideProps) => {
  switch (slide.type) {
    case "cover": return <CoverSlide slide={slide} />;
    case "content": return <ContentSlide slide={slide} />;
    case "disc": return <DiscSlide slide={slide} />;
    case "profile": return <ProfileSlide slide={slide} />;
    case "marvel-profile": return <MarvelProfileSlide slide={slide} />;
    case "characteristics": return <CharacteristicsSlide slide={slide} />;
    case "temperaments-overview": return <TemperamentsOverviewSlide />;
    case "qualities-defects": return <QualitiesDefectsSlide />;
    case "comparison": return <ComparisonSlide />;
    case "quote": return <QuoteSlide slide={slide} />;
    case "links": return <LinksSlide slide={slide} />;
    default: return null;
  }
};

const CoverSlide = ({ slide }: { slide: any }) => (
  <div className="h-full flex items-center justify-center relative overflow-hidden">
    <img src={slideBgDark} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50" />
    <div className="absolute inset-0 bg-background/50" />
    <div className="relative z-10 text-center max-w-3xl px-8">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8 rounded-full" />
        <h1 className="font-elegant text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6 italic">
          {slide.title}
        </h1>
        <p className="text-lg text-primary font-sans">— {slide.subtitle}</p>
        <div className="w-20 h-1 bg-gradient-gold mx-auto mt-8 rounded-full" />
      </motion.div>
    </div>
  </div>
);

const ContentSlide = ({ slide }: { slide: any }) => (
  <div className="h-full flex items-center justify-center p-8 md:p-16">
    <div className="max-w-4xl w-full">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="font-display text-4xl md:text-6xl text-gradient-gold mb-3">
        {slide.title}
      </motion.h2>
      {slide.subtitle && (
        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg text-muted-foreground font-sans mb-8">
          {slide.subtitle}
        </motion.p>
      )}
      {slide.bullets && (
        <motion.ul custom={2} variants={fadeUp} initial="hidden" animate="visible" className="space-y-3 mb-6">
          {slide.bullets.map((b: string, i: number) => (
            <motion.li key={i} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-start gap-3 text-foreground/90 font-sans text-lg">
              <span className="text-primary text-xl mt-0.5">⚡</span>
              {b}
            </motion.li>
          ))}
        </motion.ul>
      )}
      {slide.subBullets && (
        <motion.ul custom={3} variants={fadeUp} initial="hidden" animate="visible" className="space-y-2 mb-6 pl-6">
          {slide.subBullets.map((b: string, i: number) => (
            <motion.li key={i} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-start gap-3 text-foreground/70 font-sans">
              <span className="text-accent text-sm mt-1">💫</span>
              {b}
            </motion.li>
          ))}
        </motion.ul>
      )}
      {slide.footer && (
        <motion.p custom={6} variants={fadeUp} initial="hidden" animate="visible"
          className="text-primary font-sans text-base whitespace-pre-line mt-4 bg-card/50 rounded-xl p-4 border border-border/50">
          {slide.footer}
        </motion.p>
      )}
      {slide.image && (
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="mt-8 flex justify-center">
          <img src={slide.image} alt={slide.title} className="max-h-[40vh] rounded-xl border-2 border-primary/30 shadow-gold" />
        </motion.div>
      )}
    </div>
  </div>
);

const DiscSlide = ({ slide }: { slide: any }) => {
  const profiles = [
    { label: "D", name: "Dominância", sub: "Executores", traits: ["Focado", "Direto", "Competitivo"], color: "red", emoji: "🦅", pos: "EXTROVERTIDO" },
    { label: "I", name: "Influência", sub: "Comunicadores", traits: ["Persuasivo", "Comunicativo", "Espontâneo"], color: "yellow", emoji: "🐱", pos: "EXTROVERTIDO" },
    { label: "C", name: "Conformidade", sub: "Analistas", traits: ["Cauteloso", "Lógico", "Organizado"], color: "purple", emoji: "🐺", pos: "INTROVERTIDO" },
    { label: "S", name: "Estabilidade", sub: "Planejadores", traits: ["Seguro", "Confiável", "Conservador"], color: "blue", emoji: "🐬", pos: "INTROVERTIDO" },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-8 md:p-16">
      <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
        className="font-display text-4xl md:text-6xl text-gradient-gold mb-2">
        {slide.title}
      </motion.h2>
      <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-8 mb-8 text-xs text-muted-foreground font-sans uppercase tracking-widest">
        <span>⬆ Extrovertidos</span>
        <span>⬇ Introvertidos</span>
      </motion.div>
      <div className="grid grid-cols-2 gap-4 md:gap-5 max-w-3xl w-full">
        {profiles.map((p, i) => {
          const c = colorMap[p.color];
          return (
            <motion.div key={p.label} custom={i + 2} variants={popIn} initial="hidden" animate="visible"
              className={`rounded-2xl border-2 ${c.border} bg-card p-5 transition-all hover:scale-[1.03] ${c.glow}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{p.emoji}</span>
                <div>
                  <span className={`text-3xl font-display ${c.text}`}>{p.label}</span>
                  <span className="text-foreground font-display text-xl ml-2">{p.name}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-2 font-sans uppercase tracking-wider">{p.sub}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.traits.map((t) => (
                  <span key={t} className={`text-xs px-2.5 py-1 rounded-full ${c.bg} font-sans font-medium`}>{t}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const ProfileSlide = ({ slide }: { slide: any }) => {
  const c = colorMap[slide.color] || colorMap.yellow;
  return (
    <div className="h-full flex items-center justify-center p-8 md:p-16">
      <div className="max-w-4xl w-full">
        <motion.div custom={0} variants={popIn} initial="hidden" animate="visible" className="flex items-center gap-4 mb-2">
          <span className="text-5xl">{slide.emoji}</span>
          <div>
            {slide.label && <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans">{slide.label}</p>}
            <h2 className={`font-display text-4xl md:text-6xl ${c.text}`}>{slide.title}</h2>
          </div>
        </motion.div>
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className={`border-l-4 ${c.border} pl-6 my-6 ${c.bg} rounded-r-xl py-4 pr-4`}>
          <p className="text-foreground/90 text-lg font-sans leading-relaxed">{slide.description}</p>
        </motion.div>
        {slide.detail && (
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-muted-foreground font-sans mb-6 text-base">{slide.detail}</motion.p>
        )}
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-2">
          {slide.traits?.map((t: string, i: number) => (
            <motion.span key={t} custom={i + 3} variants={popIn} initial="hidden" animate="visible"
              className={`px-4 py-2 rounded-xl text-sm font-sans font-medium ${c.bg} border ${c.border}/30 comic-border`}>
              {t}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const MarvelProfileSlide = ({ slide }: { slide: any }) => {
  const c = colorMap[slide.color] || colorMap.yellow;
  return (
    <div className="h-full flex items-center justify-center p-8 md:p-16">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8 items-center">
        <div>
          {slide.section && (
            <motion.span custom={0} variants={fadeUp} initial="hidden" animate="visible"
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans mb-1 block">
              {slide.section}
            </motion.span>
          )}
          <motion.div custom={0} variants={popIn} initial="hidden" animate="visible" className="flex items-center gap-4 mb-5">
            <span className="text-4xl">{slide.emoji}</span>
            <h2 className={`font-display text-4xl md:text-6xl ${c.text}`}>{slide.title}</h2>
          </motion.div>
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className={`border-l-4 ${c.border} pl-5 mb-6 ${c.bg} rounded-r-xl py-3 pr-4`}>
            <p className="text-foreground/90 font-sans leading-relaxed">{slide.description}</p>
          </motion.div>
          <motion.div custom={2} variants={popIn} initial="hidden" animate="visible"
            className="bg-card border-2 border-primary/40 rounded-2xl p-4 comic-border">
            <p className="font-display text-xl text-primary mb-1">🦸 {slide.marvelChar}</p>
            <p className="text-foreground/80 font-sans text-sm">{slide.marvelWhy}</p>
          </motion.div>
        </div>
        <motion.div custom={3} variants={popIn} initial="hidden" animate="visible"
          className="flex justify-center">
          <div className={`rounded-2xl overflow-hidden border-3 ${c.border} comic-border ${c.glow}`}>
            <img src={slide.marvelImage} alt={slide.marvelChar} className="w-56 h-56 md:w-64 md:h-64 object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const CharacteristicsSlide = ({ slide }: { slide: any }) => {
  const c = colorMap[slide.color] || colorMap.yellow;
  return (
    <div className="h-full flex items-center justify-center p-8 md:p-16">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center">
        <motion.div custom={0} variants={popIn} initial="hidden" animate="visible" className="flex flex-col items-center gap-3">
          <div className={`rounded-2xl overflow-hidden border-2 ${c.border} comic-border`}>
            <img src={slide.marvelImage} alt={slide.marvelChar} className="w-40 h-40 object-cover" />
          </div>
          <p className="font-display text-sm text-primary text-center">{slide.marvelChar}</p>
        </motion.div>
        <div>
          <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className={`font-display text-3xl md:text-4xl ${c.text} mb-6`}>
            {slide.emoji} {slide.title}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {slide.traits.map((t: string, i: number) => (
              <motion.div key={t} custom={i + 1} variants={popIn} initial="hidden" animate="visible"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl ${c.bg} border ${c.border}/30 font-sans text-sm text-foreground/90`}>
                <span className={`w-3 h-3 rounded-full ${c.border} border-2 shrink-0`} />
                {t}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TemperamentsOverviewSlide = () => {
  const temps = [
    { name: "Colérico", emoji: "🔥", char: "Homem de Ferro", color: "red", image: marvelIronMan, keyword: "Explosivo & Líder" },
    { name: "Sanguíneo", emoji: "☀️", char: "Homem-Aranha", color: "orange", image: marvelSpiderman, keyword: "Alegre & Otimista" },
    { name: "Melancólico", emoji: "🌊", char: "Hulk", color: "purple", image: marvelHulk, keyword: "Profundo & Sensível" },
    { name: "Fleumático", emoji: "🌿", char: "Capitão América", color: "blue", image: marvelCaptain, keyword: "Calmo & Paciente" },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-8 md:p-12">
      <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
        className="font-display text-4xl md:text-6xl text-gradient-gold mb-8">
        Os 4 Temperamentos 🦸
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
        {temps.map((t, i) => {
          const c = colorMap[t.color];
          return (
            <motion.div key={t.name} custom={i + 1} variants={popIn} initial="hidden" animate="visible"
              className={`rounded-2xl border-2 ${c.border} bg-card p-4 text-center comic-border ${c.glow} hover:scale-105 transition-transform`}>
              <div className={`rounded-xl overflow-hidden mb-3 border ${c.border}/50 mx-auto w-28 h-28`}>
                <img src={t.image} alt={t.char} className="w-full h-full object-cover" />
              </div>
              <p className="text-2xl mb-1">{t.emoji}</p>
              <p className={`font-display text-xl ${c.text}`}>{t.name}</p>
              <p className="text-xs text-muted-foreground font-sans mt-1">{t.char}</p>
              <p className="text-xs text-foreground/70 font-sans mt-2 italic">{t.keyword}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const QualitiesDefectsSlide = () => {
  const data = [
    {
      temp: "Sanguíneo", color: "orange", emoji: "☀️",
      qualities: ["Comunicativo", "Destacado", "Entusiasta", "Afável", "Simpático", "Sociável"],
      defects: ["Volúvel", "Impulsivo", "Exagerado", "Indisciplinado", "Egocêntrico", "Barulhento"],
    },
    {
      temp: "Colérico", color: "red", emoji: "🔥",
      qualities: ["Enérgico", "Resoluto", "Independente", "Prático", "Decidido", "Líder"],
      defects: ["Iracundo", "Sarcástico", "Impaciente", "Intolerante", "Insensível", "Vaidoso"],
    },
    {
      temp: "Melancólico", color: "purple", emoji: "🌊",
      qualities: ["Munucioso", "Sensível", "Idealista", "Leal", "Dedicado", "Criativo"],
      defects: ["Inflexível", "Crítico", "Pessimista", "Anti-social", "Vingativo", "Amuado"],
    },
    {
      temp: "Fleumático", color: "blue", emoji: "🌿",
      qualities: ["Calmo", "Tranquilo", "Eficiente", "Conservador", "Prático", "Bem-humorado"],
      defects: ["Desmotivado", "Temeroso", "Indeciso", "Desconfiado", "Introvertido", "Pretencioso"],
    },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 md:p-12">
      <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
        className="font-display text-3xl md:text-5xl text-gradient-gold mb-6">
        Qualidades & Defeitos
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl w-full">
        {data.map((d, i) => {
          const c = colorMap[d.color];
          return (
            <motion.div key={d.temp} custom={i + 1} variants={fadeUp} initial="hidden" animate="visible"
              className={`rounded-xl border ${c.border}/50 bg-card p-3 text-center`}>
              <p className={`font-display text-lg ${c.text} mb-2`}>{d.emoji} {d.temp}</p>
              <div className="mb-2">
                <p className="text-[10px] uppercase tracking-widest text-slide-green font-sans mb-1">✅ Qualidades</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {d.qualities.map(q => (
                    <span key={q} className="text-[11px] px-1.5 py-0.5 rounded bg-slide-green/10 text-foreground/80 font-sans">{q}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slide-red font-sans mb-1">❌ Defeitos</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {d.defects.map(q => (
                    <span key={q} className="text-[11px] px-1.5 py-0.5 rounded bg-slide-red/10 text-foreground/80 font-sans">{q}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const ComparisonSlide = () => {
  const rows = [
    ["É inato (nascemos com ele)", "É aprendido/adaptado"],
    ["Mais emocional e interno", "Mais visível e externo"],
    ["Difícil de mudar completamente", "Pode mudar com prática"],
    ["Base da personalidade", "Forma de agir no ambiente"],
    ["Ex: impulsivo, calmo", "Ex: comunicativo, líder"],
  ];

  return (
    <div className="h-full flex items-center justify-center p-8 md:p-16">
      <div className="max-w-3xl w-full">
        <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
          className="font-display text-3xl md:text-5xl text-gradient-gold mb-2">
          ⚖ Principais Diferenças
        </motion.h2>
        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg text-muted-foreground font-sans mb-8">
          Temperamento vs. Comportamento
        </motion.p>
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="rounded-2xl border-2 border-border/50 overflow-hidden comic-border">
          <div className="grid grid-cols-2">
            <div className="bg-slide-red/15 px-6 py-3 text-sm font-display text-xl text-slide-red border-b border-border/30">🌱 Temperamento</div>
            <div className="bg-slide-blue/15 px-6 py-3 text-sm font-display text-xl text-slide-blue border-b border-border/30">🍎 Comportamento</div>
          </div>
          {rows.map(([t, c], i) => (
            <motion.div key={i} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
              className="grid grid-cols-2 border-b border-border/20 last:border-b-0">
              <div className="px-6 py-3 text-foreground/80 font-sans text-sm">{t}</div>
              <div className="px-6 py-3 text-foreground/80 font-sans text-sm">{c}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div custom={8} variants={popIn} initial="hidden" animate="visible"
          className="mt-8 text-center bg-card/50 rounded-2xl p-5 border border-primary/30">
          <p className="font-display text-2xl text-primary">👉 Resumo Fácil:</p>
          <p className="text-lg text-foreground/80 font-sans mt-2">
            Temperamento é a raiz 🌱 — Comportamento é o fruto 🍎
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const QuoteSlide = ({ slide }: { slide: any }) => (
  <div className="h-full flex items-center justify-center relative overflow-hidden">
    <img src={slideBgClosing} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" />
    <div className="absolute inset-0 bg-background/70" />
    <div className="relative z-10 text-center max-w-3xl px-8">
      <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
        <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8 rounded-full" />
        <h2 className="font-elegant text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6 italic">
          "{slide.title}"
        </h2>
        <p className="text-lg text-primary font-sans">— {slide.subtitle} ✨</p>
        <div className="w-20 h-1 bg-gradient-gold mx-auto mt-8 rounded-full" />
      </motion.div>
    </div>
  </div>
);

const LinksSlide = ({ slide }: { slide: any }) => (
  <div className="h-full flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
    <img src={slideBgComic} alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" />
    <div className="relative z-10 max-w-2xl w-full">
      <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
        className="font-display text-4xl md:text-6xl text-gradient-gold mb-10">
        🔗 {slide.title}
      </motion.h2>
      <div className="space-y-4">
        {slide.links.map((link: { label: string; url: string }, i: number) => (
          <motion.a key={i} custom={i + 1} variants={fadeUp} initial="hidden" animate="visible"
            href={link.url} target="_blank" rel="noopener noreferrer"
            className="block p-5 rounded-2xl bg-card border-2 border-border/50 hover:border-primary/60 hover:shadow-gold transition-all font-sans group comic-border">
            <span className="text-foreground group-hover:text-primary transition-colors font-medium text-lg">
              🚀 {link.label}
            </span>
            <span className="block text-xs text-muted-foreground mt-1 truncate">{link.url}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </div>
);
