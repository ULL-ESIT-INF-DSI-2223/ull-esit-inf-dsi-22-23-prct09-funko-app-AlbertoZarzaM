import { FunkoCollection } from "./FunkoCollection.js";

export class User {

  private _nombre: string;
  private _ownerOf: FunkoCollection;

  constructor(nombre: string) {
    this._nombre = nombre;
    this._ownerOf = new FunkoCollection(this.nombre);
    
  }


  get nombre(): string {
    return this._nombre;
  }

  setnombre(nombre: string) {
    this._nombre = nombre;
  }

  get ownerOf(): FunkoCollection {
    return this._ownerOf;
  }

  setownerOf(ownerOf: FunkoCollection) {
    this._ownerOf = ownerOf;
  }
}