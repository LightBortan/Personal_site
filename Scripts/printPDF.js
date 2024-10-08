function generatePDF() {
    var element = document.querySelector('#pdfContainer');
    var opt = {
        margin: 0,
        filename: `CV_Bart_Vink.pdf`,
        image: {
            type: 'jpeg',
            quality: 0.98
        },
        html2canvas: {
            scale: 2
        },
        jsPDF: {
            unit: 'in',
            format: 'a4',
            orientation: 'portrait'
        }
    };
    html2pdf().set(opt).from(element).save();
}