import { useState } from "react";
import { FileDown, Loader2 } from "lucide-react";
import { slidesData } from "@/data/slidesData";
import { SlideRenderer } from "./SlideRenderer";
import { createRoot } from "react-dom/client";
import html2canvas from "html2canvas";
import PptxGenJS from "pptxgenjs";

const PptxExporter = () => {
  const [exporting, setExporting] = useState(false);
  const [progress, setProgress] = useState(0);

  const exportPptx = async () => {
    setExporting(true);
    setProgress(0);

    const pptx = new PptxGenJS();
    pptx.layout = "LAYOUT_WIDE"; // 13.33 x 7.5 inches (widescreen)

    // Create offscreen container that is VISIBLE but off-viewport
    // html2canvas works better with visible elements
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.left = "0";
    container.style.top = "0";
    container.style.width = "1920px";
    container.style.height = "1080px";
    container.style.overflow = "hidden";
    container.style.zIndex = "99999";
    container.style.opacity = "1";
    container.style.pointerEvents = "none";
    document.body.appendChild(container);

    // Pre-load all images to avoid CORS / missing image issues
    const allImages = document.querySelectorAll("img");
    await Promise.all(
      Array.from(allImages).map(
        (img) =>
          new Promise<void>((resolve) => {
            if (img.complete) resolve();
            else {
              img.onload = () => resolve();
              img.onerror = () => resolve();
            }
          })
      )
    );

    for (let i = 0; i < slidesData.length; i++) {
      setProgress(Math.round(((i + 1) / slidesData.length) * 100));

      const slideWrapper = document.createElement("div");
      slideWrapper.style.width = "1920px";
      slideWrapper.style.height = "1080px";
      slideWrapper.style.position = "relative";
      slideWrapper.style.overflow = "hidden";
      slideWrapper.style.background = "#0a0a0f";
      // Force no animations - override framer-motion
      slideWrapper.style.setProperty("--motion-duration", "0s");
      container.innerHTML = "";
      container.appendChild(slideWrapper);

      // Add style to kill all animations/transitions inside the slide
      const styleEl = document.createElement("style");
      styleEl.textContent = `
        #pptx-export-slide * {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
          opacity: 1 !important;
          transform: none !important;
        }
      `;
      slideWrapper.id = "pptx-export-slide";
      document.head.appendChild(styleEl);

      const root = createRoot(slideWrapper);
      root.render(<SlideRenderer slide={slidesData[i]} index={i} />);

      // Wait for render + images to load inside the slide
      await new Promise((r) => setTimeout(r, 800));

      // Wait for any images inside this slide to load
      const slideImages = slideWrapper.querySelectorAll("img");
      await Promise.all(
        Array.from(slideImages).map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete && img.naturalWidth > 0) resolve();
              else {
                img.onload = () => resolve();
                img.onerror = () => resolve();
                setTimeout(resolve, 3000); // timeout fallback
              }
            })
        )
      );

      // Extra wait for paint
      await new Promise((r) => setTimeout(r, 400));

      try {
        const canvas = await html2canvas(slideWrapper, {
          width: 1920,
          height: 1080,
          scale: 2, // 2x for crisp quality
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#0a0a0f",
          logging: false,
          imageTimeout: 10000,
          removeContainer: false,
        });

        // Use high-quality JPEG
        const imgData = canvas.toDataURL("image/jpeg", 0.95);
        const slide = pptx.addSlide();
        slide.background = { data: imgData };
      } catch (err) {
        console.error(`Error capturing slide ${i + 1}:`, err);
        const slide = pptx.addSlide();
        slide.background = { color: "0A0A0F" };
      }

      root.unmount();
      document.head.removeChild(styleEl);
    }

    document.body.removeChild(container);
    await pptx.writeFile({ fileName: "Perfil-Comportamental.pptx" });
    setExporting(false);
    setProgress(0);
  };

  return (
    <button
      onClick={exportPptx}
      disabled={exporting}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/80 transition-all text-sm font-medium disabled:opacity-70"
    >
      {exporting ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          <span>Gerando PPTX... {progress}%</span>
        </>
      ) : (
        <>
          <FileDown size={16} />
          <span>Baixar p/ Canva</span>
        </>
      )}
    </button>
  );
};

export default PptxExporter;
