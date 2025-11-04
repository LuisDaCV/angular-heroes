import { Component, Input,  signal } from '@angular/core';
import { materialComponents } from '../../../material/material-components';
import { Heroe } from '../../interfaces/heroe.interface';
import { ImagenPipe } from "../../pipes/imagen-pipe";
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-heroe-card',
  imports: [materialComponents, ImagenPipe, RouterLink],
  templateUrl: './heroe-card.html',
  styles: `
  :host {
    display: contents;
  }
  `
})
export class HeroeCard {

    @Input() heroe!: Heroe;

 
  

}
