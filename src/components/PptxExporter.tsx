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

    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "-9999px";
    container.style.left = "-9999px";
    container.style.width = "1920px";
    container.style.height = "1080px";
    container.style.overflow = "hidden";
    container.style.background = "#0a0a0f";
    document.body.appendChild(container);

    for (let i = 0; i < slidesData.length; i++) {
      setProgress(Math.round(((i + 1) / slidesData.length) * 100));

      const slideWrapper = document.createElement("div");
      slideWrapper.style.width = "1920px";
      slideWrapper.style.height = "1080px";
      slideWrapper.style.position = "relative";
      slideWrapper.style.overflow = "hidden";
      container.innerHTML = "";
      container.appendChild(slideWrapper);

      const root = createRoot(slideWrapper);
      root.render(<SlideRenderer slide={slidesData[i]} index={i} />);

      await new Promise((r) => setTimeout(r, 1500));

      try {
        const canvas = await html2canvas(slideWrapper, {
          width: 1920,
          height: 1080,
          scale: 1,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#0a0a0f",
        });

        const imgData = canvas.toDataURL("image/png");
        const slide = pptx.addSlide();
        slide.background = { data: imgData };
      } catch (err) {
        console.error(`Error capturing slide ${i + 1}:`, err);
        pptx.addSlide(); // blank fallback
      }

      root.unmount();
    }

    document.body.removeChild(container);
    await pptx.writeFile({ fileName: "Perfil-Comportamental-Canva.pptx" });
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
