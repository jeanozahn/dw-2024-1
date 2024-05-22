//cenário hipotético

const fs = require('fs');

// Leitura de arquivo bloqueante
const data = fs.readFileSync('/path/to/file');
console.log(data.toString());

// Outras operações são bloqueadas até a leitura do arquivo ser concluída
console.log('Esta linha só será executada após a leitura do arquivo');