import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from '../../services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['../../app.component.css']
})
export class ProveedoresComponent implements OnInit {

  constructor( private _proveedoresService:ProveedoresService ) { }

  ngOnInit() {
  }

}
