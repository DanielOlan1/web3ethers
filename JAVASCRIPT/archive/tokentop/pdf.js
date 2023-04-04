// Crear un nuevo documento PDF
const doc = new jsPDF();

// Añadir un título al documento
doc.setFontSize(16);
doc.text("Mi documento PDF", 10, 10);

// Añadir texto al documento
doc.setFontSize(12);
doc.text("Este es un texto de ejemplo.", 10, 20);

// Guardar el documento como un archivo PDF
doc.save("mi-documento.pdf");
