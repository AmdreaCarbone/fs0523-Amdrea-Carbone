import { Component } from '@angular/core';
import { Ipizza } from '../../Models/ipizza';
import { PizzeService } from '../../pizze.service';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrl: './inactive.component.scss'
})
export class InactiveComponent {

  pizze:Ipizza[] = [];


  constructor(private pizzeSvc:PizzeService){}

  ngOninit(){
    this.pizze = this.pizzeSvc.getInactivePizza()
  }

}
