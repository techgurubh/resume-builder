import { useRef } from "react";

/**
 * usePrint — opens a new browser window with the resume HTML,
 * injects Tailwind via CDN, sets A4 page size, then triggers print.
 *
 * @returns {{ printRef, handlePrint }}
 */
export function usePrint() {
  const printRef = useRef(null);

  const handlePrint = () => {
    const content = printRef.current;
    if (!content) return;

    const printWindow = window.open("", "_blank", "width=900,height=700");
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>Resume</title>
          <script src="https://cdn.tailwindcss.com"><\/script>
          <style>
            @page { size: A4; margin: 0; }
            body  { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          </style>
        </head>
        <body>
          ${content.innerHTML}
          <script>
            window.onload = () => { window.print(); window.close(); };
          <\/script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return { printRef, handlePrint };
}

