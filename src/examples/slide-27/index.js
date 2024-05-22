//process.argv.forEach((val, index) => {
//    console.log(`${index}: ${val}`)
//})

//const args = process.argv.slice(2)
//console.log(args[0]);

const args = require('minimist')(process.argv.slice(2));
console.log(args['name']); // 'joe'
