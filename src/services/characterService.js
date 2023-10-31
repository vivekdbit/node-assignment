const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Function to generate a PDF character profile
function generatePDF(character) {

    const pdfDirectory = path.join(process.cwd(), 'public/pdfs');

    //console.log(character);
    const doc = new PDFDocument();
    const fileName = `${character.id}_profile.pdf`;

    const filePath = path.join(pdfDirectory, fileName);
    // Pipe the PDF content to a writable stream (in this case, a file)
    var writeStream = fs.createWriteStream(filePath);
    doc.pipe(writeStream);

    // Add content to the PDF
    doc.fontSize(14).text('Character Profile', { align: 'center' });
    doc.fontSize(12).text(`Name: ${character.name}`);
    doc.text(`Status: ${character.status}`);
    doc.text(`Species: ${character.species}`);

    // End the PDF document
    doc.end();
    return filePath;
}

module.exports = {
    generatePDF,
};
