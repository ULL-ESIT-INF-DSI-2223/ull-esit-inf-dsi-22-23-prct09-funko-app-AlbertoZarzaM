
import * as fs from "fs";
import { Funko, Genero, Tipo } from './Funko.js';


export class FunkoCollection {

  private _funkos: Funko[];
  private owner: string;

  constructor(owner: string) {
    this._funkos = [];
    this.owner = owner;
    // Crea el directorio si no existe
    let archivos = [] as string[];
    try {
      // Lee el directorio
      archivos = fs.readdirSync('./data/'+this.owner +'/' , { withFileTypes: true }).filter(dirent => dirent.isFile()).map(dirent => dirent.name);
   
    } catch (err) {
      if (err.code === 'ENOENT') {
        // Si el error es porque el directorio no existe
        console.log(`El directorio  no existe. Creando directorio...`);
        fs.mkdirSync('./data/'+this.owner);
        console.log(`Directorio  creado exitosamente.`);
      } else {
        // Si el error no es porque el directorio no existe, lanza una excepción
        throw err;
      }
    }

    

    for (let i = 0; i < archivos.length; i++) {
      const funko = new Funko(0, '', '', Tipo.Pop, Genero.Animacion, '', 0, false, '', 0);
      const funkoJSON = fs.readFileSync('./data/'+this.owner +'/' + archivos[i], 'utf-8');
      const funkoLeido = JSON.parse(funkoJSON);
      Object.assign(funko, funkoLeido);
      this._funkos.push(funko);
    }
  }

  get funkos(): Funko[] {
    return this._funkos;
  }

  setfunkos(funkos: Funko[]) {
    this._funkos = funkos;
  }

  addFunko(funko: Funko): void {
    const funkoJSON = JSON.stringify(funko);
    fs.writeFileSync('./data/'+this.owner +'/funko' + funko.id + '.json', funkoJSON);
    this._funkos.push(funko);
  }

  removeFunko(id: number): void {
    const funko = this.getFunko(id);
    fs.unlinkSync('./data/'+this.owner +'/funko' + funko.id + '.json')
    this._funkos = this._funkos.filter(funko => funko.id !== id);
  }


  getFunko(id: number): Funko {
    return this._funkos.find(funko => funko.id === id) as Funko;
  }

  

}









