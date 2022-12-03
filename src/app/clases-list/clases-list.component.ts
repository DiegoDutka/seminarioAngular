import { Component, OnInit } from '@angular/core';
import { EstudioCarritoService } from '../estudio-carrito.service';
import { clase } from './clase';

@Component({
  selector: 'app-clases-list',
  templateUrl: './clases-list.component.html',
  styleUrls: ['./clases-list.component.scss']
})
export class ClasesListComponent implements OnInit {
clase: clase [] =[
{
  nombre: "salsa",
  docente:"maria",
  dias:"mart-lun",
  horario:"15hs",
  duracion: "1h 30min",
  cupodisponible: 5,
},
{
  nombre: "arabe",
  docente:"Hernan",
  dias:"mart-lun",
  horario:"15hs",
  duracion: "1",
  cupodisponible: 2,
},
{
  nombre: "yoga",
  docente:"jose",
  dias:"mart-lun",
  horario:"15hs",
  duracion: "1",
  cupodisponible: 5,
},
{
  nombre: "pop",
  docente:"laura",
  dias:"mart-lun",
  horario:"15hs",
  duracion: "1.5",
  cupodisponible: 10,
},
{
  nombre: "acrobacia",
  docente:"diego",
  dias:"mart-lun",
  horario:"15hs",
  duracion: "1.5",
  cupodisponible: 10,
},
{
  nombre: "clasico",
  docente:"fernanda",
  dias:"mart-lun",
  horario:"15hs",
  duracion: "1.5",
  cupodisponible: 10,
},
];

  constructor(private carrito: EstudioCarritoService) { }

  ngOnInit(): void {
  }

  addToCart(clase:clase):void{
    this.carrito.addToCart(clase);
    clase.cupodisponible --
  }
}
