import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudioClasesComponent } from './estudio-clases/estudio-clases.component';
import { EstudioDocentesComponent } from './estudio-docentes/estudio-docentes.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'clases',
    pathMatch:'full'


  },
  {
    path: 'clases',
    component: EstudioClasesComponent,
  },
  {
    path: 'docente',
    component: EstudioDocentesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
