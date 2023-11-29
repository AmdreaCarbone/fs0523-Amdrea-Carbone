import { Injectable } from '@angular/core';
import { Ipizza } from './Models/ipizza';

@Injectable({
  providedIn: 'root'
})
export class PizzeService {

  pizze:Ipizza[]= [
    {
      id:1,
      gusto: "margherita",
      prezzo: 3,
      active: true
    },
    {
      id:2,
      gusto: "diavolaa",
      prezzo: 3,
      active: true
    },
    {
      id:3,
      gusto: "capriccita",
      prezzo: 3,
      active: false
    },
    {
      id:4,
      gusto: "ananas",
      prezzo: 3,
      active: false
    },
  ];


  constructor() { }

  getActivePizza(){
    return this.pizze.filter(p => p.active)
  }
  getInactivePizza(){
    return this.pizze.filter(p => !p.active)
  }

  getall(){
    return this.pizze
  }
}
