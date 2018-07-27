const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar.js");
// const argv = require("./config/yargs").argv;
const { argv } = require("./config/yargs");

//console.log(argv);
let comando = argv._[0];
console.log("comando pasado por argumento: ", comando);

switch (comando) {
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then(archivo => {
        console.log(`El archivo ${archivo} ha sido creado`);
      })
      .catch(err => {
        console.log("Error: ", err);
      });
    break;
  case "listar":
    listarTabla(argv.base, argv.limite);
    break;
  default:
    console.log("Comando no reconocido");
}
