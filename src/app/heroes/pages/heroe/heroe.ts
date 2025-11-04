import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  imports: [],
  templateUrl: './heroe.html',
  styles: ``
})
export class Heroe implements OnInit {

  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id)
    })
    
  }

}
