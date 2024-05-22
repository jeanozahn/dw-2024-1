const fs = require('fs');

// Leitura de arquivo não bloqueante
fs.readFile('/path/to/file', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});

// Esta linha será executada imediatamente, sem esperar a leitura do arquivo
console.log('Esta linha é executada imediatamente');


