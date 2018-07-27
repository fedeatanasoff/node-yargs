const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite) => {
  console.log("=============================".bold.green);
  console.log(`======== Tabla del ${base} ========`.bold.green);
  console.log("=============================".bold.green);

  for (let i = 0; i <= limite; i++) {
    console.log(` ${base} * ${i} = ${base * i} `.bold);
  }
};

let crearArchivo = (base, limite = 4) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor introducido (${base}) no es un numero`);
      return;
    }

    let tabla = `-- Tabla del ${base} --\n`;

    for (let i = 0; i <= limite; i++) {
      tabla += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, tabla, err => {
      if (err) reject(err);
      else resolve(`tabla-del-${base}-al-${limite}.txt`.bold);
    });
  });
};

module.exports = {
  crearArchivo: crearArchivo,
  listarTabla: listarTabla
};
