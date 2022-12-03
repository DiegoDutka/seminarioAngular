import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClasesListComponent } from './clases-list/clases-list.component';
import { EstudioDocentesComponent } from './estudio-docentes/estudio-docentes.component';
import { EstudioClasesComponent } from './estudio-clases/estudio-clases.component';
import { EstudioCarritoComponent } from './estudio-carrito/estudio-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    ClasesListComponent,
    EstudioDocentesComponent,
    EstudioClasesComponent,
    EstudioCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
