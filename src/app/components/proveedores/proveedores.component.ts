import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';
import { ProveedoresExclusivosService } from '../../services/proveedoresExclusivos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedores:any[] = [];
  proveedoresExclusivos:any[] = [];

  constructor( private _proveedoresService:ProveedoresService, private _proveedoresExclusivosService:ProveedoresExclusivosService, private router:Router ) {
  }

  ngOnInit() {
    this.proveedores = this._proveedoresService.getProveedores();
    this.proveedoresExclusivos = this._proveedoresExclusivosService.getProveedoresExclusivos();
  }

  verProveedor(idx:number){
    this.router.navigate(['/representada','compartido',idx]);
  }

  verProveedorExclusivo(idx:number){
    this.router.navigate(['/representada','exclusivo',idx]);
  }

}
