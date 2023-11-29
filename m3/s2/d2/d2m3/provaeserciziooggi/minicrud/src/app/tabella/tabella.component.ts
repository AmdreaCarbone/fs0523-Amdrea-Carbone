import { Ipizza } from '../Models/ipizza';
import { PizzeService } from './../pizze.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.scss'
})
export class TabellaComponent {

  @Input() pizze:Ipizza[] = [];


}
