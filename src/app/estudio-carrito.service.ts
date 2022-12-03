import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { clase } from './clases-list/clase';

@Injectable({
  providedIn: 'root'
})
export class EstudioCarritoService {
  public _agendaClases: clase[]=[];
  agendaClases: BehaviorSubject< clase[]> = new BehaviorSubject(this._agendaClases)

  addToCart(clase: clase) {
    let item =this._agendaClases.find((c1)=> c1.nombre == clase.nombre)
    if (!item) {
      this._agendaClases.push(clase);      
    }
    console.log(this._agendaClases)
    this.agendaClases.next(this._agendaClases);
  }


  constructor() { }
}
