import { Injectable } from "@angular/core";

@Injectable()
export class VideojuegosService {

  private videojuegos: Videojuego[] = [
    {
      nombre: 'Gafas Totto',
      descripcion: 'Gafas De Sol Con Lente Óptico Eclogita, Lentes: Tricótate De Celulosa=100%, Marco: Policarbonato=80%, Rubber: Caucho=20%, una de las primeras gafas de fabricación en la empresa totto siendo la base de las gafas en totto',
      img: '../assets/GAFASTOTTO.jpg',
      lanzamiento: 'ESTADO USADO ',
      consola: '$ 174.900,00'
    },
    {
      nombre: 'AUTO ALFA ROMEO',
      descripcion: 'llamaba ALFA, luego al unirse a Nicola Romeo, da a la luz un nuevo nombre y con una premisa de generar innovación en cuanto a la fabricación de coches, que no está demás decir que era muy poca en esos años, entre 1910 y 1921, que es donde sale el clásico antes mencionado. En como conmemoración de este suceso la empresa del TIEMPO saca este producto 52 veces, en cumpleaños de la empresa ',
      img: '../assets/carroAlfa.jpeg',
      lanzamiento: 'ESTADO NUEVO ',
      consola: '$ 509.900,00'
    },
    {
      nombre: 'AUTO HOTWEELS SNOOPY',
      descripcion: 'Hot Wheels Peanuts Snoopy Serie De 6 Autos, este objeto coleccionable fue del año 2014 en auge de colecciones, uno de las colecciones más extrañas del mercado en hotwels salió mundial mente entre un periodo de 2 semanas.',
      img: '../assets/carroSnoopy.jpeg',
      lanzamiento: 'ESTADO: NUEVO ',
      consola: '$ 159.129.81'
    },
    {
      nombre: 'RELOJ A/X ',
      descripcion: 'Armani Exchange, Una novedad del otoño de 2019, este reloj de Armani Exchange presenta una esfera negra de cronógrafo tipo “rayo de sol” con textura, una esfera interna a rayas, una caja plata pulida y cepillada, y una pulsera de eslabones en forma de H a juego.',
      img: '../assets/reloj.jpeg',
      lanzamiento: 'ESTADO: USADO',
      consola: '$ 963.196.18'
    },
    {
      nombre: '6 REGLA ABECEDARIO',
      descripcion: 'God of War es un videojuego de acción-aventura desarrollado por SCE Santa Monica Studio y publicado por Sony Interactive Entertainment',
      img: '../assets/regla.jpeg',
      lanzamiento: 'ESTADO: USADO',
      consola: '$ 30.000.00'
    },
    {
      nombre: 'cubo 3X3',
      descripcion: 'Forza Horizon 4 es un videojuego de carreras de mundo abierto, jugable en línea, desarrollado por Playground Games para Xbox One y Windows 10.​',
      img: '../assets/cubo3x3.jpeg',
      lanzamiento: 'ESTADO: USADO',
      consola: '$ 30.000.00'
    },
  ];

  constructor() {
    console.log('Servicio listo para usarse.');
  }

  getVideojuegos(): Videojuego[] {
    return this.videojuegos;
  }

  getVideoJuego(idx: number) {
    return this.videojuegos[idx];
  }

  buscarVideojuegos(termino: string): Videojuego[] {
    let videojuegosArr: Videojuego[] = [];

    termino = termino.toLowerCase();

    for (let videojuego of this.videojuegos) {
      let nombre = videojuego.nombre.toLowerCase();
      if ( nombre.indexOf( termino ) >= 0) {
        videojuegosArr.push(videojuego);
      }  
    }
    return videojuegosArr;
  }
}

export interface Videojuego {
  nombre: string;
  descripcion: string;
  img: string;
  lanzamiento: string;
  consola: string; 
}