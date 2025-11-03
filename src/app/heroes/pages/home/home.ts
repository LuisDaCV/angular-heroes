import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { materialComponents } from '../../../material/material-components';


@Component({
  selector: 'app-home',
  imports: [materialComponents, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './home.html',
  styles: ``
})
export class Home {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
