const fs = require('fs');

const arquivo = process.argv;
const link = arquivo[2];

fs.readFile(link, 'utf-8', (erro, texto) => {
    console.log(texto);
}) 
