import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const DownloadPDFButton = () => {
  const downloadPDF = () => {
    const input = document.getElementById("exercises");

    html2canvas(input, { scale: 4 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png", 1.0);
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const pdfWidth = imgWidth < imgHeight ? 595.28 : 841.89;
      const pdfHeight = (imgHeight * pdfWidth) / imgWidth;
      const pdf = new jsPDF({
        unit: "pt",
        format: [pdfWidth, pdfHeight],
      });
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      pdf.save("download.pdf");
    });
  };

  return (
    <div
      className="brownish-button rounded-pill px-4 d-flex align-items-center justify-content-center text-white gap-1 me-2 cursor pt-2"
      // window.print();
      onClick={downloadPDF}
    >
      <div>
        <span className="material-symbols-outlined">download</span>
      </div>
    </div>
  );
};

export default DownloadPDFButton;
