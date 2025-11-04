import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private http = inject(HttpClient);

  getHeroes(){
    return this.http.get<Heroe[]>('http://localhost:3000/heroes');
  }
}
