import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresService {

  private proveedores:any = [
    {
      nombre:"CHROMALOX",
      descripcion:"Desde hace casi 100 años entregando soluciones de la mayor calidad e innovación para aplicaciones de calefacción industrial, fabricando la línea más grande y amplia del mundo de productos de electro calefacción y control, lo que incluye componentes de calefacción, calefactores de inmersión, sistemas de circulación, sistemas de transferencia de calor, calderas, calefacción de aire industrial y de ambientes, cables de rastreo de calor, sensores y controles electrónicos de precisión.",
      web:"http://www.chromalox.com",
      productos1:"",
      productos2:"",
      logo:"assets/img/chromalox/logo.png",
      img1:"assets/img/chromalox/img1.png",
      img2:"assets/img/chromalox/img2.jpg"
    },
    {
      nombre:"ASA",
      descripcion:"ASA es una empresa italiana que lleva más de 70 años presente en el mercado de la que diseña, fabrica y comercializa en Italia y en el extranjero una amplia cartera de instrumentación industrial para medición de caudal de alta tecnología. Durante esta larga vida ASA confirma su liderazgo en el mercado de la instrumentación haciendo sus puntos clave la experiencia, la calidad, la fiabilidad y el apoyo altamente capacitado que identifican a nuestra marca.",
      web:"http://www.asaspa.com/en/",
      productos1:"",
      productos2:"",
      logo:"assets/img/asa/logo.jpg",
      img1:"assets/img/asa/img1.png",
      img2:"assets/img/asa/img2.png"
    },
    {
      nombre:"Delta Controls",
      descripcion:"Delta Control es un especialista mundial en el diseño y fabricación de instrumentos de control de temperatura, presión y flujo con experiencia eb áreas peligrosas. Con más de 65 años de experiencia en los principales mercados, ofrecemos soluciones para una amplia gama de industrias.",
      web:"http://www.asaspa.com/en/",
      productos1:"",
      productos2:"",
      logo:"assets/img/delta/logo.jpg",
      img1:"assets/img/delta/img1.png",
      img2:"assets/img/delta/img2.png"
    }
  ]

  constructor() { }

  getProveedores(){
    return this.proveedores;
  }

  getProveedor(idx:string){
    return this.proveedores[idx];
  }

}
