const fs = require("fs");

let listarTabla = (base, limite) => {
  for (let i = 0; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
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
      else resolve(`tabla-del-${base}-al-${limite}.txt`);
    });
  });
};

module.exports = {
  crearArchivo: crearArchivo,
  listarTabla: listarTabla
};
