import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProveedoresService } from '../../services/proveedores.service';
import { ProveedoresExclusivosService } from '../../services/proveedoresExclusivos.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProveedorComponent implements OnInit {

  proveedor:any = {};

  constructor( private activatedRoute:ActivatedRoute, private _proveedoresService:ProveedoresService, private _proveedoresExclusivosService:ProveedoresExclusivosService) {
    this.activatedRoute.params.subscribe( params =>{
      if(params['tipo'] == "exclusivo"){
        this.proveedor = this._proveedoresExclusivosService.getProveedorExclusivo(params['id']);
      }
      if(params['tipo'] == "compartido"){
        this.proveedor = this._proveedoresService.getProveedor(params['id']);
      }
    })

  }

  ngOnInit() {
  }

}
