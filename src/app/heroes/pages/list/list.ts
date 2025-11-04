import { Component, inject, OnInit, signal } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { CommonModule } from '@angular/common';
import { Heroe } from '../../interfaces/heroe.interface';
import { materialComponents } from '../../../material/material-components';
import { HeroeCard } from "../../components/heroe-card/heroe-card";

@Component({
  selector: 'app-list',
  imports: [CommonModule, materialComponents, HeroeCard],
  templateUrl: './list.html',
  styles: ``
})
export class List implements OnInit {
  heroeService = inject(HeroeService);

  heroes = signal<Heroe[]>([]);


  ngOnInit(): void {
    this.heroeService.getHeroes()
    .subscribe(res => this.heroes.set(res))
  }




}
