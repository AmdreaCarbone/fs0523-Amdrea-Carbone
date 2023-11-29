import { Ipizza } from './../Models/ipizza';
import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  @Output() onAddPizza:EventEmitter<Ipizza>= new EventEmitter();

  newPizza:Ipizza ={
    id: 0,
    gusto: '',
    prezzo: 0,
    active: false
  }

  crea(){
this.onAddPizza.emit(this.newPizza);
  }
}
function output(): (target: FormComponent, propertyKey: "onAddPizza") => void {
  throw new Error('Function not implemented.');
}

