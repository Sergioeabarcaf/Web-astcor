import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

import { ProveedoresService } from './services/proveedores.service';
import { ProveedoresExclusivosService } from './services/proveedoresExclusivos.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProveedoresComponent,
    ProveedorComponent,
    ClientesComponent,
    ServiciosComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ProveedoresService,
    ProveedoresExclusivosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
