const tesseract = require('tesseract.js')
// const outputPath = 'C:/Users/Ankush/Desktop/pdf/tmp';
tesseract.recognize('C:/Users/Ankush/Desktop/pdf/tmp/page-1.jpg', 'eng', { logger: e => console.log((e)) })
    .then(out => console.log(out))