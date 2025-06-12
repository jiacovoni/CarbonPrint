import PDFDocument from "pdfkit";

/** GET /report -> downloads carbonprint-report.pdf */
export const loader = async () => {
  /* ----- 1.  Fetch or calculate stats  ----- */
  const co2data = { total: 123.45, unit: "kg CO₂e" }; // TODO: replace with real query

  /* ----- 2.  Build the PDF in memory  ----- */
  const doc = new PDFDocument({ autoFirstPage: false });
  const chunks = [];
  doc.on("data", (c) => chunks.push(c));
  doc.on("error", (err) => console.error("PDF error:", err));

  doc.addPage({ size: "A4", margin: 50 });
  doc.fontSize(20).text("CarbonPrint CO₂ Report", { align: "center" });
  doc.moveDown();
  doc.fontSize(14).text(`Total emissions: ${co2data.total} ${co2data.unit}`);

  doc.end();

  /* ----- 3.  Wait for the PDF to finish  ----- */
  const pdfBuffer = await new Promise((res) =>
    doc.on("end", () => res(Buffer.concat(chunks)))
  );

  /* ----- 4.  Return the file  ----- */
  return new Response(pdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="carbonprint-report.pdf"',
    },
  });
};

/* This route never renders HTML */
export default function Report() {
  return null;
}
