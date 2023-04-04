

/*
En concreto, un Funko vendrá descrito por los siguientes elementos mínimos de información que deberán ser almacenados:

ID. Debe ser un identificador único del Funko.
Nombre. Debe ser una cadena de caracteres.
Descripción. Debe ser una cadena de caracteres.
Tipo. Debe ser un enumerado con valores como, por ejemplo, Pop!, Pop! Rides, Vynil Soda o Vynil Gold, entre otros.
Género. Debe ser un enumerado con valores como, por ejemplo, Animación, Películas y TV, Videojuegos, Deportes, Música o Ánime, entre otras.
Franquicia. Debe ser una cadena de caracteres como, por ejemplo, The Big Bang Theory, Game of Thrones, Sonic The Hedgehog o Marvel: Guardians of the Galaxy, entre otras.
Número. Debe ser el número identificativo del Funko dentro de la franquicia correspondiente.
Exclusivo. Debe ser un valor booleano, esto es, verdadero en el caso de que el Funko sea exclusivo o falso en caso contrario.
Características especiales. Debe ser una cadena de caracteres que indique las característica especiales del Funko como, por ejemplo, si brilla en la oscuridad o si su cabeza balancea.
Valor de mercado. Debe ser un valor numérico positivo.

*/

import chalk from "chalk";

export enum Tipo {
  Pop = 'Pop!',
  PopRides = 'Pop! Rides', 
  VynilSoda = 'Vynil Soda',
  VynilGold = 'Vynil Gold'

}

export enum Genero {  
  Animacion = 'Animación',  
  PeliculasYTV = 'Películas y TV',
  Videojuegos = 'Videojuegos',
  Deportes = 'Deportes',
  Musica = 'Música',
  Anime = 'Ánime'
}

export class Funko {

  private _id: number;
  private _nombre: string;
  private _descripcion: string;
  private _tipo: Tipo;
  private _genero: Genero;
  private _franquicia: string;
  private _numero: number;
  private _exclusivo: boolean;
  private _caracteristicasEspeciales: string;
  private _valorDeMercado: number;

  constructor(id: number, nombre: string, descripcion: string, tipo: Tipo, genero: Genero, franquicia: string, numero: number, exclusivo: boolean, caracteristicasEspeciales: string, valorDeMercado: number) {
    this._id = id;
    this._nombre = nombre;
    this._descripcion = descripcion;
    this._tipo = tipo;
    this._genero = genero;
    this._franquicia = franquicia;
    this._numero = numero;
    this._exclusivo = exclusivo;
    this._caracteristicasEspeciales = caracteristicasEspeciales;
    this._valorDeMercado = valorDeMercado;
  }

  mostrarFunko(): void {
    console.log(chalk.green(`ID: ${this._id}`));
    console.log(chalk.green(`Nombre: ${this._nombre}`));
    console.log(chalk.green(`Descripción: ${this._descripcion}`));
    console.log(chalk.green(`Tipo: ${this._tipo}`));
    console.log(chalk.green(`Género: ${this._genero}`));
    console.log(chalk.green(`Franquicia: ${this._franquicia}`));
    console.log(chalk.green(`Número: ${this._numero}`));
    console.log(chalk.green(`Exclusivo: ${this._exclusivo}`));
    console.log(chalk.green(`Características especiales: ${this._caracteristicasEspeciales}`));
    console.log(chalk.green(`Valor de mercado: ${this._valorDeMercado}`));
    
  }

  get id(): number {
    return this._id;
  }

  setid(id: number) {
    this._id = id;
  }

  get nombre(): string {
    return this._nombre;
  }

  setnombre(nombre: string) {
    this._nombre = nombre;
  }

  get descripcion(): string {
    return this._descripcion;
  }

  setdescripcion(descripcion: string) {
    this._descripcion = descripcion;
  }

  get tipo(): Tipo {
    return this._tipo;
  }

  settipo(tipo: Tipo) {
    this._tipo = tipo;
  }

  get genero(): Genero {
    return this._genero;
  }

  setgenero(genero: Genero) {
    this._genero = genero;
  }

  get franquicia(): string {
    return this._franquicia;
  }

  setfranquicia(franquicia: string) {
    this._franquicia = franquicia;
  }

  get numero(): number {
    return this._numero;
  }

  setnumero(numero: number) {
    this._numero = numero;
  }

  get exclusivo(): boolean {
    return this._exclusivo;
  }

  setexclusivo(exclusivo: boolean) {
    this._exclusivo = exclusivo;
  }

  get caracteristicasEspeciales(): string {
    return this._caracteristicasEspeciales;
  }

  setcaracteristicasEspeciales(caracteristicasEspeciales: string) {
    this._caracteristicasEspeciales = caracteristicasEspeciales;
  }

  get valorDeMercado(): number {
    return this._valorDeMercado;
  }

  setvalorDeMercado(valorDeMercado: number) {
    if (valorDeMercado < 0  ) {
      throw new Error('El valor de mercado debe ser un valor numérico positivo');
    }
    this._valorDeMercado = valorDeMercado;
  }

  toString(): string {
    return `ID: ${this.id}, Nombre: ${this.nombre}, Descripcion: ${this.descripcion}, Tipo: ${this.tipo}, Genero: ${this.genero}, Franquicia: ${this.franquicia}, Numero: ${this.numero}, Exclusivo: ${this.exclusivo}, Caracteristicas Especiales: ${this.caracteristicasEspeciales}, Valor de Mercado: ${this.valorDeMercado}`;
  }

}
