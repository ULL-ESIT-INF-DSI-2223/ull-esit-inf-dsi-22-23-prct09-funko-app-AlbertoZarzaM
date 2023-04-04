
import * as fs from 'fs';
import { Funko, Genero, Tipo } from './Funko.js';


// //Crear una carpeta llamada "data" en la raíz del proyecto.
//   fs.mkdirSync('data');

// //
//   fs.writeFileSync('data/funkos.json', '[]');

// //Agregar el siguiente contenido al archivo "funkos.json":
// //
// // [
// //   {
// //     "id": 1,
// //     "nombre": "Funko Pop! de Harry Potter",
// //     "descripcion": "Funko Pop! de Harry Potter con el uniforme de Slytherin",
// //     "tipo": "Figura",
// //     "genero": "Masculino",
// //     "franquicia": "Harry Potter",
// //     "numero": 1,
// //     "exclusivo": "No",
// //     "caracteristicasEspeciales": "No",
// //     "valorDeMercado": 100000
// //   }
// // ]

// const funko: Funko = new Funko( 1, 'Funko Pop! de Harry Potter', 'Funko Pop! de Harry Potter con el uniforme de Slytherin', Tipo.Pop, Genero.Animacion, 'Harry Potter', 1, true, 'No', 100000);

// //Convertir el objeto de tipo Funko a una cadena de caracteres en formato JSON.
// const funkoJSON: string = JSON.stringify(funko);

// //Agregar el objeto de tipo Funko a un arreglo de objetos de tipo Funko.
// const funkos: Funko[] = [funko];

// //Convertir el arreglo de objetos de tipo Funko a una cadena de caracteres en formato JSON.
// const funkosJSON: string = JSON.stringify(funkos);

// //Escribir la cadena de caracteres en formato JSON en el archivo "funkos.json".
// fs.writeFileSync('data/funkos.json', funkosJSON);


try {
  fs.mkdirSync('data');
  console.log('Carpeta creada correctamente');
} catch (err) {
  if (err.code === 'EEXIST') {
    console.error('La carpeta ya existe');
  } else {
    console.error('Error al crear la carpeta:', err);
  }
}


// Crea una instancia de la clase Funko
const funko = new Funko(
  1,
  'Spider-Man',
  'Figura de vinilo de Spider-Man',
   Tipo.Pop,
  Genero.Animacion,
  'Marvel',
  1,
  true,
  'Cabeza bobble',
  1000
);

// Convierte la instancia de la clase a una cadena JSON
const funkoJSON = JSON.stringify(funko);

// Escribe la cadena JSON en un archivo
fs.writeFileSync('./data/funko1.json', funkoJSON);

// Lee el archivo
const funkoLeidoJSON = fs.readFileSync('./data/funko1.json', 'utf-8');

// Convierte la cadena JSON en una instancia de la clase Funko
const funkoLeido = JSON.parse(funkoLeidoJSON);

const funko1: Funko = new Funko(0, '', '', Tipo.Pop, Genero.Animacion, '', 0, false, '', 0);

Object.assign(funko1, funkoLeido);

// Muestra la instancia de la clase Funko leída
console.log(funko1.descripcion);

const name = "1";

const filePath = './data/**.json';
const fileExists = fs.existsSync(filePath);

if (fileExists) {
  // Hacer algo con el archivo
  console.log('El archivo existe');
} else {
  console.log('El archivo no existe');
}


const directorios = fs.readdirSync('./data', { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

console.log(directorios);

const archivos = fs.readdirSync('./data/alber/', { withFileTypes: true })
  .filter(dirent => dirent.isFile())
  .map(dirent => dirent.name);

console.log(archivos);