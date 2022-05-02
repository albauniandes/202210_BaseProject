export class Coffee {
  id: number;
  nombre: string;
  tipo: string;
  region: string;
  sabor: string;
  altura: number;
  image: string;

  constructor(
    id: number,
    nombre: string,
    tipo: string,
    region: string,
    sabor: string,
    altura: number,
    image: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.sabor = sabor;
    this.altura = altura;
    this.image = image;
  }
 }
