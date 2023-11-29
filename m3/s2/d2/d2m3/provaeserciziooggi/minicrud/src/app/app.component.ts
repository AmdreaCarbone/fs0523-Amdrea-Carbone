import { Component } from '@angular/core';
import { Ipizza } from './Models/ipizza';
import { PizzeService } from './pizze.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  pizze:Ipizza[] = [];

constructor(private PizzaSvc:PizzeService){}

ngOnInit(){

  this.pizze = this.PizzaSvc.getall()
}

}
