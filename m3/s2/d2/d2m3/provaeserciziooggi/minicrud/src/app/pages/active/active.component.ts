import { Component } from '@angular/core';
import { PizzeService } from '../../pizze.service';
import { Ipizza } from '../../Models/ipizza';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.scss'
})
export class ActiveComponent {


  pizze:Ipizza[] = [];


  constructor(private pizzeSvc:PizzeService){}

  ngOninit(){
    this.pizze = this.pizzeSvc.getActivePizza()
  }
}
