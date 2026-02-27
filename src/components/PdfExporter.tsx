import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { slidesData } from "@/data/slidesData";
import { SlideRenderer } from "./SlideRenderer";
import { createRoot } from "react-dom/client";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PdfExporter = () => {
  const [exporting, setExporting] = useState(false);
  const [progress, setProgress] = useState(0);

  const exportPdf = async () => {
    setExporting(true);
    setProgress(0);

    const pdf = new jsPDF({ orientation: "landscape", unit: "px", format: [1920, 1080] });

    // Create an off-screen container
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

      // Clear and render slide
      const slideWrapper = document.createElement("div");
      slideWrapper.style.width = "1920px";
      slideWrapper.style.height = "1080px";
      slideWrapper.style.position = "relative";
      slideWrapper.style.overflow = "hidden";
      container.innerHTML = "";
      container.appendChild(slideWrapper);

      const root = createRoot(slideWrapper);
      root.render(<SlideRenderer slide={slidesData[i]} index={i} />);

      // Wait for images and rendering
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

        const imgData = canvas.toDataURL("image/jpeg", 0.92);

        if (i > 0) pdf.addPage([1920, 1080], "landscape");
        pdf.addImage(imgData, "JPEG", 0, 0, 1920, 1080);
      } catch (err) {
        console.error(`Error capturing slide ${i + 1}:`, err);
      }

      root.unmount();
    }

    document.body.removeChild(container);
    pdf.save("Perfil-Comportamental-Apresentacao.pdf");
    setExporting(false);
    setProgress(0);
  };

  return (
    <button
      onClick={exportPdf}
      disabled={exporting}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-sm font-medium disabled:opacity-70"
    >
      {exporting ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          <span>Gerando PDF... {progress}%</span>
        </>
      ) : (
        <>
          <Download size={16} />
          <span>Baixar PDF</span>
        </>
      )}
    </button>
  );
};

export default PdfExporter;
