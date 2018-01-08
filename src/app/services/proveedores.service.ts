import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresService {

  private proveedores:any = [
    {
      nombre:"EIPSA",
      descripcion:"EIPSA (española de instrumentos primaria S.A) es una compañía creada en los años 80 por un grupo de técnicos con una amplia experiencia en el sector de la instrumentación. La estrecha colaboración con empresas de ingeniería (tales como Técnicas Reunidas, Foster Wheeler, Fluor, TPL, Technip, Amec,entre otras) permite desarrollar esos nuevos productos que las nuevas tecnologías demandan.",
      web:"http://www.eipsa.es/index.php/es/",
      productos1:"",
      productos2:"",
      logo:"assets/img/eipsa/logo.png",
      img1:"assets/img/eipsa/img1.jpg",
      img2:"assets/img/eipsa/img2.jpg"
    },
    {
      nombre:"TRE-C–EVERWATT",
      descripcion:"Empresa italiana fundada en el año 1963, especialistas en la fabricación de resistencias eléctricas blindadas, controladores de temperatura, sistema de control, Skim and Pagkages, para diferentes sectores industriales. Además ofrece, en gran escala: resistencias para inmersión, resistencias para calentamiento de aire y baterías, resistencias de cartucho ( con fabricación de 2-3 días ), de abrazadera y planas, resistencias blindadas microtubulares, de caucho de silicona y cables calentadores, sistemas de regulación térmica y termopares, calentadores monotubo para galvanización y una gran cantidad de accesorios.",
      web:"http://www.tre-c.it",
      productos1:"",
      productos2:"",
      logo:"assets/img/eipsa/logo.png",
      img1:"assets/img/eipsa/img1.jpg",
      img2:"assets/img/eipsa/img2.jpg"
    },
    {
      nombre:"VALVOLE HOFMANN",
      descripcion:"Valvole Hofmann fue fundada en 1989 con el objetivo de diseñar y fabricar productos tecnológicamente avanzados, lo que garantiza un altísimo nivel de calidad. Una vasta gama de productos nos permite encontrar una solución para todas las necesidades de control y procesamiento de fluidos.",
      web:"http://en.valvolehofmann.com",
      productos1:"",
      productos2:"",
      logo:"assets/img/valvole/logo.png",
      img1:"assets/img/valvole/img1.jpg",
      img2:"assets/img/valvole/img2.jpg"
    },
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

}
