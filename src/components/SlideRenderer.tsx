import { motion } from "framer-motion";
import bgEpic from "@/assets/bg-epic.jpg";
import slideBgClosing from "@/assets/slide-bg-closing.jpg";
import slideBgComic from "@/assets/slide-bg-comic.jpg";
import discShark from "@/assets/disc-shark.jpg";
import discDolphin from "@/assets/disc-dolphin.jpg";
import discEagle from "@/assets/disc-eagle.jpg";
import discWolf from "@/assets/disc-wolf.jpg";
import marvelIronMan from "@/assets/marvel-ironman-3d.jpg";
import marvelDeadpool from "@/assets/marvel-deadpool-3d.jpg";
import marvelHulk from "@/assets/marvel-hulk-3d.jpg";
import marvelCaptain from "@/assets/marvel-captain-3d.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5 } }),
};

const popIn = {
  hidden: { opacity: 0, scale: 0.4, rotate: -8 },
  visible: (i: number) => ({ opacity: 1, scale: 1, rotate: 0, transition: { delay: i * 0.1, duration: 0.5, type: "spring" as const, stiffness: 180 } }),
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.15, duration: 0.7 } }),
};

const colorMap: Record<string, { border: string; text: string; bg: string; glow: string; gradient: string }> = {
  red: { border: "border-slide-red", text: "text-slide-red", bg: "bg-slide-red/20", glow: "shadow-[0_0_60px_-10px_hsl(0,75%,55%,0.5)]", gradient: "from-slide-red/30 to-transparent" },
  yellow: { border: "border-slide-yellow", text: "text-slide-yellow", bg: "bg-slide-yellow/20", glow: "shadow-[0_0_60px_-10px_hsl(45,100%,55%,0.5)]", gradient: "from-slide-yellow/30 to-transparent" },
  blue: { border: "border-slide-blue", text: "text-slide-blue", bg: "bg-slide-blue/20", glow: "shadow-[0_0_60px_-10px_hsl(210,85%,55%,0.5)]", gradient: "from-slide-blue/30 to-transparent" },
  green: { border: "border-slide-green", text: "text-slide-green", bg: "bg-slide-green/20", glow: "shadow-[0_0_60px_-10px_hsl(150,65%,42%,0.5)]", gradient: "from-slide-green/30 to-transparent" },
  purple: { border: "border-slide-purple", text: "text-slide-purple", bg: "bg-slide-purple/20", glow: "shadow-[0_0_60px_-10px_hsl(270,65%,58%,0.5)]", gradient: "from-slide-purple/30 to-transparent" },
  orange: { border: "border-slide-orange", text: "text-slide-orange", bg: "bg-slide-orange/20", glow: "shadow-[0_0_60px_-10px_hsl(25,95%,55%,0.5)]", gradient: "from-slide-orange/30 to-transparent" },
};

export const SlideRenderer = ({ slide }: { slide: any; index: number }) => {
  switch (slide.type) {
    case "cover": return <CoverSlide slide={slide} />;
    case "content": return <ContentSlide slide={slide} />;
    case "animals-showcase": return <AnimalsShowcaseSlide slide={slide} />;
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

/* ==================== COVER ==================== */
const CoverSlide = ({ slide }: { slide: any }) => (
  <div className="h-full flex items-center justify-center relative overflow-hidden">
    <img src={bgEpic} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-background/30" />
    <div className="relative z-10 text-center max-w-4xl px-8">
      <motion.div initial={{ opacity: 0, scale: 0.7, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.2, type: "spring" }}>
        <div className="w-24 h-1.5 bg-gradient-gold mx-auto mb-10 rounded-full shadow-gold" />
        <h1 className="font-elegant text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground mb-8 italic drop-shadow-[0_4px_30px_rgba(200,160,60,0.3)]">
          {slide.title}
        </h1>
        <p className="text-xl text-primary font-sans drop-shadow-lg">— {slide.subtitle}</p>
        <div className="w-24 h-1.5 bg-gradient-gold mx-auto mt-10 rounded-full shadow-gold" />
      </motion.div>
    </div>
  </div>
);

/* ==================== CONTENT ==================== */
const ContentSlide = ({ slide }: { slide: any }) => (
  <div className="h-full flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
    <div className="relative z-10 max-w-4xl w-full">
      <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
        className="font-display text-5xl md:text-7xl text-gradient-gold mb-4 drop-shadow-[0_2px_20px_rgba(200,160,60,0.2)]">
        {slide.title}
      </motion.h2>
      {slide.subtitle && (
        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-xl text-muted-foreground font-sans mb-8">{slide.subtitle}</motion.p>
      )}
      {slide.bullets && (
        <div className="space-y-4 mb-6">
          {slide.bullets.map((b: string, i: number) => (
            <motion.div key={i} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-start gap-4 text-foreground/90 font-sans text-xl bg-card/40 backdrop-blur-sm rounded-xl p-4 border border-border/30">
              <span className="text-primary text-2xl mt-0.5">⚡</span>
              <span>{b}</span>
            </motion.div>
          ))}
        </div>
      )}
      {slide.subBullets && (
        <div className="space-y-2 mb-6 pl-6">
          {slide.subBullets.map((b: string, i: number) => (
            <motion.div key={i} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-center gap-3 text-foreground/70 font-sans text-lg">
              <span className="text-accent">💫</span>{b}
            </motion.div>
          ))}
        </div>
      )}
      {slide.footer && (
        <motion.div custom={7} variants={fadeUp} initial="hidden" animate="visible"
          className="text-primary font-sans text-lg whitespace-pre-line mt-6 bg-primary/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 shadow-gold">
          {slide.footer}
        </motion.div>
      )}
    </div>
  </div>
);

/* ==================== ANIMALS SHOWCASE ==================== */
const AnimalsShowcaseSlide = ({ slide }: { slide: any }) => {
  const animals = [
    { name: "Tubarão", letter: "D", image: discShark, color: "red" },
    { name: "Golfinho", letter: "I", image: discDolphin, color: "yellow" },
    { name: "Águia", letter: "C", image: discEagle, color: "purple" },
    { name: "Lobo", letter: "S", image: discWolf, color: "blue" },
  ];

  const temperaments = [
    { name: "Colérico", color: "red", emoji: "🔥", image: marvelIronMan },
    { name: "Sanguíneo", color: "orange", emoji: "☀️", image: marvelDeadpool },
    { name: "Fleumático", color: "blue", emoji: "🧊", image: marvelCaptain },
    { name: "Melancólico", color: "green", emoji: "🌧️", image: marvelHulk },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="relative z-10 w-full max-w-6xl">
        <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
          className="font-display text-4xl md:text-5xl text-gradient-gold mb-1 text-center">
          {slide.title}
        </motion.h2>
        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-muted-foreground font-sans text-center mb-6 text-base">{slide.subtitle}</motion.p>

        {/* DISC Animals */}
        <motion.p custom={1.5} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xl text-primary text-center mb-3 uppercase tracking-widest">🐾 Perfis DISC</motion.p>
        <div className="grid grid-cols-4 gap-3 md:gap-4 mb-6">
          {animals.map((a, i) => {
            const c = colorMap[a.color];
            return (
              <motion.div key={a.name} custom={i + 2} variants={zoomIn} initial="hidden" animate="visible"
                className={`rounded-2xl overflow-hidden border-2 ${c.border} ${c.glow} group cursor-pointer`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={a.image} alt={a.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${c.gradient}`} />
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                    <p className={`font-display text-2xl ${c.text} drop-shadow-lg`}>{a.letter}</p>
                    <p className="font-sans text-xs text-foreground font-bold drop-shadow-lg">{a.name}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Temperaments */}
        <motion.p custom={6} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-xl text-primary text-center mb-3 uppercase tracking-widest">🦸 Temperamentos</motion.p>
        <div className="grid grid-cols-4 gap-3 md:gap-4">
          {temperaments.map((t, i) => {
            const c = colorMap[t.color];
            return (
              <motion.div key={t.name} custom={i + 7} variants={zoomIn} initial="hidden" animate="visible"
                className={`rounded-2xl overflow-hidden border-2 ${c.border} ${c.glow} group cursor-pointer`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={t.image} alt={t.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent`} />
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                    <p className={`font-display text-lg ${c.text} drop-shadow-lg`}>{t.emoji} {t.name}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ==================== DISC ==================== */
const DiscSlide = ({ slide }: { slide: any }) => {
  const profiles = [
    { label: "D", name: "Dominância", sub: "Executores", traits: ["Focado", "Direto", "Competitivo"], color: "red", image: discShark, animal: "Tubarão", pos: "EXTROVERTIDO" },
    { label: "I", name: "Influência", sub: "Comunicadores", traits: ["Persuasivo", "Comunicativo", "Espontâneo"], color: "yellow", image: discDolphin, animal: "Golfinho", pos: "EXTROVERTIDO" },
    { label: "C", name: "Conformidade", sub: "Analistas", traits: ["Cauteloso", "Lógico", "Organizado"], color: "purple", image: discEagle, animal: "Águia", pos: "INTROVERTIDO" },
    { label: "S", name: "Estabilidade", sub: "Planejadores", traits: ["Seguro", "Confiável", "Conservador"], color: "blue", image: discWolf, animal: "Lobo", pos: "INTROVERTIDO" },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slide-red/5 via-transparent to-slide-blue/5" />
      <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
        className="relative z-10 font-display text-4xl md:text-6xl text-gradient-gold mb-2">
        {slide.title}
      </motion.h2>
      <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="relative z-10 flex gap-8 mb-6 text-xs text-muted-foreground font-sans uppercase tracking-[0.3em]">
        <span>⬆ Extrovertidos</span><span>⬇ Introvertidos</span>
      </motion.div>
      <div className="relative z-10 grid grid-cols-2 gap-4 max-w-4xl w-full">
        {profiles.map((p, i) => {
          const c = colorMap[p.color];
          return (
            <motion.div key={p.label} custom={i + 2} variants={zoomIn} initial="hidden" animate="visible"
              className={`rounded-2xl border-2 ${c.border} bg-card/80 backdrop-blur-sm overflow-hidden ${c.glow} group hover:scale-[1.02] transition-transform`}>
              <div className="flex items-center gap-4 p-4">
                <div className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${c.border} shrink-0 ${c.glow}`}>
                  <img src={p.image} alt={p.animal} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-display ${c.text}`}>{p.label}</span>
                    <span className="text-foreground font-display text-xl">{p.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground font-sans uppercase tracking-wider">{p.sub} • {p.animal}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {p.traits.map(t => (
                      <span key={t} className={`text-[11px] px-2 py-0.5 rounded-full ${c.bg} font-sans font-medium`}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

/* ==================== PROFILE (DISC) ==================== */
const ProfileSlide = ({ slide }: { slide: any }) => {
  const c = colorMap[slide.color] || colorMap.yellow;
  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden">
      {/* Giant background animal image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden">
        <img src={slide.animalImage} alt={slide.animal} className="w-full h-full object-cover opacity-40" />
        <div className={`absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent`} />
      </div>
      <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 items-center p-8 md:p-16">
        <div>
          <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-sans mb-1">{slide.label}</motion.p>
          <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
            className={`font-display text-5xl md:text-7xl ${c.text} mb-2 drop-shadow-[0_4px_30px_hsl(var(--slide-${slide.color})/0.4)]`}>
            {slide.title}
          </motion.h2>
          <motion.p custom={0.5} variants={fadeUp} initial="hidden" animate="visible"
            className={`font-display text-2xl ${c.text}/60 mb-4`}>🐾 {slide.animal}</motion.p>
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className={`border-l-4 ${c.border} pl-6 my-5 ${c.bg} rounded-r-2xl py-4 pr-4 backdrop-blur-sm`}>
            <p className="text-foreground/90 text-lg font-sans leading-relaxed">{slide.description}</p>
          </motion.div>
          {slide.detail && (
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
              className="text-muted-foreground font-sans mb-5">{slide.detail}</motion.p>
          )}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-3">
            {slide.traits?.map((t: string, i: number) => (
              <motion.span key={t} custom={i + 3} variants={popIn} initial="hidden" animate="visible"
                className={`px-5 py-2.5 rounded-xl text-base font-sans font-bold ${c.bg} border-2 ${c.border} ${c.glow}`}>
                {t}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <motion.div custom={2} variants={zoomIn} initial="hidden" animate="visible" className="hidden md:flex justify-center">
          <div className={`rounded-3xl overflow-hidden border-3 ${c.border} ${c.glow}`}>
            <img src={slide.animalImage} alt={slide.animal} className="w-72 h-72 object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ==================== MARVEL PROFILE ==================== */
const MarvelProfileSlide = ({ slide }: { slide: any }) => {
  const c = colorMap[slide.color] || colorMap.yellow;
  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden">
      {/* Giant Marvel background */}
      <div className="absolute right-0 top-0 bottom-0 w-2/3 overflow-hidden">
        <img src={slide.marvelImage} alt={slide.marvelChar} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
        <div className={`absolute inset-0 bg-gradient-to-t ${c.gradient} opacity-50`} />
      </div>
      <div className="relative z-10 max-w-3xl w-full p-8 md:p-16">
        {slide.section && (
          <motion.span custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-sans mb-1 block">{slide.section}</motion.span>
        )}
        <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
          className={`font-display text-5xl md:text-8xl ${c.text} mb-4 drop-shadow-[0_4px_40px_hsl(var(--slide-${slide.color})/0.5)]`}>
          {slide.title}
        </motion.h2>
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className={`border-l-4 ${c.border} pl-5 mb-6 ${c.bg} rounded-r-2xl py-4 pr-4 backdrop-blur-md`}>
          <p className="text-foreground/90 font-sans leading-relaxed text-lg">{slide.description}</p>
        </motion.div>
        <motion.div custom={2} variants={popIn} initial="hidden" animate="visible"
          className={`bg-card/80 backdrop-blur-md border-2 ${c.border} rounded-2xl p-5 ${c.glow}`}>
          <p className={`font-display text-2xl ${c.text} mb-2`}>🦸 {slide.marvelChar}</p>
          <p className="text-foreground/80 font-sans">{slide.marvelWhy}</p>
        </motion.div>
      </div>
    </div>
  );
};

/* ==================== CHARACTERISTICS ==================== */
const CharacteristicsSlide = ({ slide }: { slide: any }) => {
  const c = colorMap[slide.color] || colorMap.yellow;
  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden">
      {/* Background Marvel character */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 overflow-hidden">
        <img src={slide.marvelImage} alt={slide.marvelChar} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-transparent" />
      </div>
      <div className="relative z-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 items-center p-8 md:p-12">
        <motion.div custom={0} variants={zoomIn} initial="hidden" animate="visible" className="flex flex-col items-center gap-3">
          <div className={`rounded-3xl overflow-hidden border-3 ${c.border} ${c.glow} w-44 h-44`}>
            <img src={slide.marvelImage} alt={slide.marvelChar} className="w-full h-full object-cover object-top" />
          </div>
          <p className={`font-display text-lg ${c.text} text-center`}>{slide.marvelChar}</p>
        </motion.div>
        <div>
          <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
            className={`font-display text-3xl md:text-5xl ${c.text} mb-6`}>
            {slide.title}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {slide.traits.map((t: string, i: number) => (
              <motion.div key={t} custom={i + 1} variants={popIn} initial="hidden" animate="visible"
                className={`flex items-center gap-3 px-5 py-4 rounded-2xl ${c.bg} border-2 ${c.border}/40 font-sans text-base text-foreground/90 backdrop-blur-sm hover:scale-[1.02] transition-transform ${c.glow}`}>
                <span className={`w-4 h-4 rounded-full bg-gradient-to-br ${c.gradient.replace("to-transparent", "to-background")} ${c.border} border-2 shrink-0`} />
                <span className="font-medium">{t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==================== TEMPERAMENTS OVERVIEW ==================== */
const TemperamentsOverviewSlide = () => {
  const temps = [
    { name: "Colérico", color: "red", char: "Homem de Ferro", image: marvelIronMan, keyword: "Explosivo & Líder" },
    { name: "Sanguíneo", color: "orange", char: "Deadpool", image: marvelDeadpool, keyword: "Alegre & Otimista" },
    { name: "Melancólico", color: "green", char: "Hulk", image: marvelHulk, keyword: "Profundo & Sensível" },
    { name: "Fleumático", color: "blue", char: "Capitão América", image: marvelCaptain, keyword: "Calmo & Paciente" },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slide-red/5 via-transparent to-slide-blue/5" />
      <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
        className="relative z-10 font-display text-4xl md:text-6xl text-gradient-gold mb-8">
        Os 4 Temperamentos 🦸
      </motion.h2>
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full">
        {temps.map((t, i) => {
          const c = colorMap[t.color];
          return (
            <motion.div key={t.name} custom={i + 1} variants={zoomIn} initial="hidden" animate="visible"
              className={`rounded-2xl border-2 ${c.border} bg-card/80 backdrop-blur-sm overflow-hidden ${c.glow} hover:scale-105 transition-transform group`}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={t.image} alt={t.char} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent`} />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <p className={`font-display text-2xl ${c.text} drop-shadow-lg`}>{t.name}</p>
                  <p className="text-xs text-foreground/80 font-sans font-bold drop-shadow-lg">{t.char}</p>
                  <p className="text-xs text-foreground/60 font-sans italic mt-1">{t.keyword}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

/* ==================== QUALITIES & DEFECTS ==================== */
const QualitiesDefectsSlide = () => {
  const data = [
    { temp: "Sanguíneo", color: "orange", qualities: ["Comunicativo", "Destacado", "Entusiasta", "Afável", "Simpático", "Sociável"], defects: ["Volúvel", "Impulsivo", "Exagerado", "Indisciplinado", "Egocêntrico", "Barulhento"] },
    { temp: "Colérico", color: "red", qualities: ["Enérgico", "Resoluto", "Independente", "Prático", "Decidido", "Líder"], defects: ["Iracundo", "Sarcástico", "Impaciente", "Intolerante", "Insensível", "Vaidoso"] },
    { temp: "Melancólico", color: "green", qualities: ["Minucioso", "Sensível", "Idealista", "Leal", "Dedicado", "Criativo"], defects: ["Inflexível", "Crítico", "Pessimista", "Anti-social", "Vingativo", "Amuado"] },
    { temp: "Fleumático", color: "blue", qualities: ["Calmo", "Tranquilo", "Eficiente", "Conservador", "Prático", "Bem-humorado"], defects: ["Desmotivado", "Temeroso", "Indeciso", "Desconfiado", "Introvertido", "Pretencioso"] },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-6 md:p-10">
      <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
        className="font-display text-4xl md:text-6xl text-gradient-gold mb-6">
        Qualidades & Defeitos
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl w-full">
        {data.map((d, i) => {
          const c = colorMap[d.color];
          return (
            <motion.div key={d.temp} custom={i + 1} variants={fadeUp} initial="hidden" animate="visible"
              className={`rounded-2xl border-2 ${c.border}/50 bg-card/80 backdrop-blur-sm p-4 ${c.glow}`}>
              <p className={`font-display text-xl ${c.text} mb-3 text-center`}>{d.temp}</p>
              <div className="mb-3">
                <p className="text-[10px] uppercase tracking-widest text-slide-green font-sans mb-2 text-center font-bold">✅ Qualidades</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {d.qualities.map(q => <span key={q} className="text-[11px] px-2 py-1 rounded-lg bg-slide-green/15 text-foreground/90 font-sans border border-slide-green/20">{q}</span>)}
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slide-red font-sans mb-2 text-center font-bold">❌ Defeitos</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {d.defects.map(q => <span key={q} className="text-[11px] px-2 py-1 rounded-lg bg-slide-red/15 text-foreground/90 font-sans border border-slide-red/20">{q}</span>)}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

/* ==================== COMPARISON ==================== */
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
      <div className="max-w-4xl w-full">
        <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
          className="font-display text-4xl md:text-6xl text-gradient-gold mb-2">
          ⚖ Principais Diferenças
        </motion.h2>
        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-xl text-muted-foreground font-sans mb-8">Temperamento vs. Comportamento</motion.p>
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="rounded-2xl border-2 border-border/50 overflow-hidden backdrop-blur-sm shadow-gold">
          <div className="grid grid-cols-2">
            <div className="bg-slide-red/15 px-6 py-4 font-display text-2xl text-slide-red border-b-2 border-border/30">🌱 Temperamento</div>
            <div className="bg-slide-blue/15 px-6 py-4 font-display text-2xl text-slide-blue border-b-2 border-border/30">🍎 Comportamento</div>
          </div>
          {rows.map(([t, c], i) => (
            <motion.div key={i} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
              className="grid grid-cols-2 border-b border-border/20 last:border-b-0 hover:bg-card/50 transition-colors">
              <div className="px-6 py-4 text-foreground/90 font-sans">{t}</div>
              <div className="px-6 py-4 text-foreground/90 font-sans">{c}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div custom={8} variants={popIn} initial="hidden" animate="visible"
          className="mt-8 text-center bg-primary/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary/30 shadow-gold">
          <p className="font-display text-3xl text-primary">👉 Resumo Fácil:</p>
          <p className="text-xl text-foreground/80 font-sans mt-2">
            Temperamento é a raiz 🌱 — Comportamento é o fruto 🍎
          </p>
        </motion.div>
      </div>
    </div>
  );
};

/* ==================== QUOTE ==================== */
const QuoteSlide = ({ slide }: { slide: any }) => (
  <div className="h-full flex items-center justify-center relative overflow-hidden">
    <img src={slideBgClosing} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
    <div className="absolute inset-0 bg-background/70" />
    <div className="relative z-10 text-center max-w-4xl px-8">
      <motion.div initial={{ opacity: 0, scale: 0.8, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1 }}>
        <div className="w-24 h-1.5 bg-gradient-gold mx-auto mb-10 rounded-full shadow-gold" />
        <h2 className="font-elegant text-4xl md:text-6xl font-bold text-foreground leading-tight mb-8 italic drop-shadow-[0_4px_30px_rgba(200,160,60,0.3)]">
          "{slide.title}"
        </h2>
        <p className="text-xl text-primary font-sans">— {slide.subtitle} ✨</p>
        <div className="w-24 h-1.5 bg-gradient-gold mx-auto mt-10 rounded-full shadow-gold" />
      </motion.div>
    </div>
  </div>
);

/* ==================== LINKS ==================== */
const LinksSlide = ({ slide }: { slide: any }) => (
  <div className="h-full flex items-center justify-center p-8 md:p-16 relative overflow-hidden">
    <img src={slideBgComic} alt="" className="absolute inset-0 w-full h-full object-cover opacity-8" />
    <div className="absolute inset-0 bg-background/90" />
    <div className="relative z-10 max-w-2xl w-full">
      <motion.h2 custom={0} variants={popIn} initial="hidden" animate="visible"
        className="font-display text-4xl md:text-6xl text-gradient-gold mb-10">
        🔗 {slide.title}
      </motion.h2>
      <div className="space-y-4">
        {slide.links.map((link: { label: string; url: string }, i: number) => (
          <motion.a key={i} custom={i + 1} variants={fadeUp} initial="hidden" animate="visible"
            href={link.url} target="_blank" rel="noopener noreferrer"
            className="block p-5 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-primary/60 hover:shadow-gold transition-all font-sans group">
            <span className="text-foreground group-hover:text-primary transition-colors font-bold text-lg">🚀 {link.label}</span>
            <span className="block text-xs text-muted-foreground mt-1 truncate">{link.url}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </div>
);
