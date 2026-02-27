import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { slidesData } from "@/data/slidesData";
import { SlideRenderer } from "./SlideRenderer";
import PdfExporter from "./PdfExporter";
import PptxExporter from "./PptxExporter";

const Presentation = () => {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const total = slidesData.length;

  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, total - 1)), [total]);
  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Escape") setIsFullscreen(false);
      if (e.key === "f" || e.key === "F") setIsFullscreen((v) => !v);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  useEffect(() => {
    if (isFullscreen) {
      document.documentElement.requestFullscreen?.();
    } else if (document.fullscreenElement) {
      document.exitFullscreen?.();
    }
  }, [isFullscreen]);

  useEffect(() => {
    const handler = () => {
      if (!document.fullscreenElement) setIsFullscreen(false);
    };
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  return (
    <div className={`flex flex-col h-screen bg-background select-none ${isFullscreen ? "cursor-none" : ""}`}>
      {/* Top bar */}
      {!isFullscreen && (
        <header className="flex items-center justify-between px-6 py-3 border-b border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-display text-sm text-foreground/80">Perfil Comportamental</span>
          </div>
          <div className="flex items-center gap-4">
            <PptxExporter />
            <PdfExporter />
            <span className="text-xs text-muted-foreground font-sans">
              {current + 1} / {total}
            </span>
            <button
              onClick={() => setIsFullscreen(true)}
              className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <Maximize2 size={16} />
            </button>
          </div>
        </header>
      )}

      {/* Slide area */}
      <div className="flex-1 relative overflow-hidden" onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        if (x > rect.width / 2) next(); else prev();
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <SlideRenderer slide={slidesData[current]} index={current} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {!isFullscreen && (
          <>
            {current > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all backdrop-blur-sm"
              >
                <ChevronLeft size={20} />
              </button>
            )}
            {current < total - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-card/80 border border-border/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all backdrop-blur-sm"
              >
                <ChevronRight size={20} />
              </button>
            )}
          </>
        )}

        {/* Fullscreen exit */}
        {isFullscreen && (
          <button
            onClick={(e) => { e.stopPropagation(); setIsFullscreen(false); }}
            className="absolute top-4 right-4 p-2 rounded-full bg-card/50 text-muted-foreground hover:text-foreground transition-all opacity-0 hover:opacity-100"
          >
            <Minimize2 size={16} />
          </button>
        )}
      </div>

      {/* Bottom progress */}
      {!isFullscreen && (
        <div className="px-6 py-3 border-t border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="flex gap-1">
            {slidesData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary flex-[3]"
                    : i < current
                    ? "bg-primary/40 flex-1"
                    : "bg-secondary flex-1"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Presentation;
