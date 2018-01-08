import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresExclusivosService {

  private proveedoresExclusivos:any = [
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
    }
  ]

  constructor() { }

  getProveedoresExclusivos(){
    return this.proveedoresExclusivos;
  }

}
