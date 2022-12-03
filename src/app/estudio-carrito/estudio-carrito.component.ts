import { Component, OnInit } from '@angular/core';
import { clase } from '../clases-list/clase';
import { EstudioCarritoService } from '../estudio-carrito.service';

@Component({
  selector: 'app-estudio-carrito',
  templateUrl: './estudio-carrito.component.html',
  styleUrls: ['./estudio-carrito.component.scss']
})
export class EstudioCarritoComponent implements OnInit {
  claseagendada: clase[] =[]
  constructor(private carrito:EstudioCarritoService) {
    carrito.agendaClases.subscribe(c => this.claseagendada = c)


  } 

  ngOnInit(): void {
  }

}
