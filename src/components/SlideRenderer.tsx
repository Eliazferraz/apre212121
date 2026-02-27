import { motion } from "framer-motion";
import slideBgDark from "@/assets/slide-bg-dark.jpg";
import slideBgClosing from "@/assets/slide-bg-closing.jpg";

interface SlideProps {
  slide: any;
  index: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const colorMap: Record<string, string> = {
  red: "border-slide-red text-slide-red",
  yellow: "border-slide-yellow text-slide-yellow",
  blue: "border-slide-blue text-slide-blue",
  green: "border-slide-green text-slide-green",
  purple: "border-slide-purple text-slide-purple",
};

const bgColorMap: Record<string, string> = {
  red: "bg-slide-red/10",
  yellow: "bg-slide-yellow/10",
  blue: "bg-slide-blue/10",
  green: "bg-slide-green/10",
  purple: "bg-slide-purple/10",
};

export const SlideRenderer = ({ slide, index }: SlideProps) => {
  if (slide.type === "cover") return <CoverSlide slide={slide} />;
  if (slide.type === "content") return <ContentSlide slide={slide} />;
  if (slide.type === "disc") return <DiscSlide slide={slide} />;
  if (slide.type === "profile") return <ProfileSlide slide={slide} />;
  if (slide.type === "comparison") return <ComparisonSlide />;
  if (slide.type === "quote") return <QuoteSlide slide={slide} />;
  if (slide.type === "links") return <LinksSlide slide={slide} />;
  return null;
};

const CoverSlide = ({ slide }: { slide: any }) => (
  <div className="h-full flex items-center justify-center relative overflow-hidden">
    <img src={slideBgDark} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
    <div className="absolute inset-0 bg-background/40" />
    <div className="relative z-10 text-center max-w-3xl px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-16 h-0.5 bg-gradient-gold mx-auto mb-8" />
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
          {slide.title}
        </h1>
        <p className="text-lg text-primary font-sans italic">— {slide.subtitle}</p>
        <div className="w-16 h-0.5 bg-gradient-gold mx-auto mt-8" />
      </motion.div>
    </div>
  </div>
);

const ContentSlide = ({ slide }: { slide: any }) => (
  <div className="h-full flex items-center justify-center p-8 md:p-16">
    <div className="max-w-4xl w-full">
      <motion.h2
        custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-4"
      >
        {slide.title}
      </motion.h2>
      {slide.subtitle && (
        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg text-muted-foreground mb-8 font-sans"
        >
          {slide.subtitle}
        </motion.p>
      )}
      {slide.bullets && (
        <motion.ul custom={2} variants={fadeUp} initial="hidden" animate="visible" className="space-y-3 mb-6">
          {slide.bullets.map((b: string, i: number) => (
            <motion.li key={i} custom={i + 2} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-start gap-3 text-foreground/90 font-sans text-lg"
            >
              <span className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0" />
              {b}
            </motion.li>
          ))}
        </motion.ul>
      )}
      {slide.subBullets && (
        <motion.ul custom={3} variants={fadeUp} initial="hidden" animate="visible" className="space-y-2 mb-6 pl-6">
          {slide.subBullets.map((b: string, i: number) => (
            <motion.li key={i} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-start gap-3 text-foreground/70 font-sans"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
              {b}
            </motion.li>
          ))}
        </motion.ul>
      )}
      {slide.footer && (
        <motion.p custom={6} variants={fadeUp} initial="hidden" animate="visible"
          className="text-primary font-sans text-base whitespace-pre-line mt-4"
        >
          {slide.footer}
        </motion.p>
      )}
      {slide.image && (
        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-8 flex justify-center"
        >
          <img src={slide.image} alt={slide.title} className="max-h-[40vh] rounded-xl border border-border/50 shadow-gold" />
        </motion.div>
      )}
    </div>
  </div>
);

const DiscSlide = ({ slide }: { slide: any }) => {
  const profiles = [
    { label: "D", name: "Dominância", sub: "Executores", traits: ["Focado", "Direto", "Competitivo"], color: "red", emoji: "🦅" },
    { label: "I", name: "Influência", sub: "Comunicadores", traits: ["Persuasivo", "Comunicativo", "Espontâneo"], color: "yellow", emoji: "🐱" },
    { label: "C", name: "Conformidade", sub: "Analistas", traits: ["Cauteloso", "Lógico", "Organizado"], color: "purple", emoji: "🐺" },
    { label: "S", name: "Estabilidade", sub: "Planejadores", traits: ["Seguro", "Confiável", "Conservador"], color: "blue", emoji: "🐬" },
  ];

  return (
    <div className="h-full flex flex-col items-center justify-center p-8 md:p-16">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-3"
      >
        {slide.title}
      </motion.h2>
      <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
        className="flex items-center gap-6 mb-10 text-sm text-muted-foreground font-sans"
      >
        <span>EXTROVERTIDOS ↑</span>
        <span>INTROVERTIDOS ↓</span>
      </motion.div>
      <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-3xl w-full">
        {profiles.map((p, i) => (
          <motion.div
            key={p.label}
            custom={i + 2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className={`rounded-xl border-2 ${colorMap[p.color]} bg-card p-5 md:p-6 transition-all hover:scale-[1.02]`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{p.emoji}</span>
              <div>
                <span className={`text-2xl font-bold font-display ${colorMap[p.color].split(" ")[1]}`}>{p.label}</span>
                <span className="text-foreground font-display text-lg ml-2">{p.name}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mb-2 font-sans uppercase tracking-wider">{p.sub}</p>
            <div className="flex flex-wrap gap-1.5">
              {p.traits.map((t) => (
                <span key={t} className={`text-xs px-2 py-0.5 rounded-full ${bgColorMap[p.color]} font-sans`}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ProfileSlide = ({ slide }: { slide: any }) => {
  const color = slide.color || "yellow";
  return (
    <div className="h-full flex items-center justify-center p-8 md:p-16">
      <div className="max-w-4xl w-full">
        {slide.section && (
          <motion.span custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans mb-2 block"
          >
            {slide.section}
          </motion.span>
        )}
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-5xl">{slide.emoji}</span>
          <h2 className={`font-display text-4xl md:text-5xl font-bold ${colorMap[color]?.split(" ")[1] || "text-foreground"}`}>
            {slide.title}
          </h2>
        </motion.div>
        <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className={`border-l-4 ${colorMap[color]?.split(" ")[0] || "border-primary"} pl-6 mb-6`}
        >
          <p className="text-foreground/90 text-lg font-sans leading-relaxed">{slide.description}</p>
        </motion.div>
        {slide.detail && (
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-muted-foreground font-sans mb-8 text-base"
          >
            {slide.detail}
          </motion.p>
        )}
        {slide.traits && (
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-wrap gap-2"
          >
            {slide.traits.map((t: string, i: number) => (
              <motion.span
                key={t}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className={`px-3 py-1.5 rounded-lg text-sm font-sans ${bgColorMap[color]} border ${colorMap[color]?.split(" ")[0] || "border-primary"}/30`}
              >
                {t}
              </motion.span>
            ))}
          </motion.div>
        )}
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
        <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-2"
        >
          ⚖ Principais Diferenças
        </motion.h2>
        <motion.p custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg text-muted-foreground font-sans mb-8"
        >
          Temperamento vs. Comportamento
        </motion.p>
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="rounded-xl border border-border/50 overflow-hidden"
        >
          <div className="grid grid-cols-2">
            <div className="bg-slide-red/10 px-6 py-3 text-sm font-sans font-semibold text-slide-red border-b border-border/30">Temperamento</div>
            <div className="bg-slide-blue/10 px-6 py-3 text-sm font-sans font-semibold text-slide-blue border-b border-border/30">Comportamento</div>
          </div>
          {rows.map(([t, c], i) => (
            <motion.div key={i} custom={i + 3} variants={fadeUp} initial="hidden" animate="visible"
              className="grid grid-cols-2 border-b border-border/20 last:border-b-0"
            >
              <div className="px-6 py-3 text-foreground/80 font-sans text-sm">{t}</div>
              <div className="px-6 py-3 text-foreground/80 font-sans text-sm">{c}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div custom={8} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-8 text-center"
        >
          <p className="text-xl font-display text-foreground">
            👉 <span className="text-primary">Resumo fácil:</span>
          </p>
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
    <img src={slideBgClosing} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
    <div className="absolute inset-0 bg-background/60" />
    <div className="relative z-10 text-center max-w-3xl px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-16 h-0.5 bg-gradient-gold mx-auto mb-8" />
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
          "{slide.title}"
        </h2>
        <p className="text-lg text-primary font-sans italic">— {slide.subtitle}</p>
        <div className="w-16 h-0.5 bg-gradient-gold mx-auto mt-8" />
      </motion.div>
    </div>
  </div>
);

const LinksSlide = ({ slide }: { slide: any }) => (
  <div className="h-full flex items-center justify-center p-8 md:p-16">
    <div className="max-w-2xl w-full">
      <motion.h2 custom={0} variants={fadeUp} initial="hidden" animate="visible"
        className="font-display text-3xl md:text-5xl font-bold text-gradient-gold mb-10"
      >
        {slide.title}
      </motion.h2>
      <div className="space-y-4">
        {slide.links.map((link: { label: string; url: string }, i: number) => (
          <motion.a
            key={i}
            custom={i + 1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-gold transition-all font-sans group"
          >
            <span className="text-foreground group-hover:text-primary transition-colors">{link.label}</span>
            <span className="block text-xs text-muted-foreground mt-1 truncate">{link.url}</span>
          </motion.a>
        ))}
      </div>
    </div>
  </div>
);
