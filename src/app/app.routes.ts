import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { AboutComponent } from '../app/components/about/about.component';
import { ProveedoresComponent } from '../app/components/proveedores/proveedores.component';
import { ClientesComponent } from '../app/components/clientes/clientes.component';
import { ServiciosComponent } from '../app/components/servicios/servicios.component';
import { ProveedorComponent } from '../app/components/proveedor/proveedor.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'representadas', component: ProveedoresComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'representada/:tipo/:id', component: ProveedorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
