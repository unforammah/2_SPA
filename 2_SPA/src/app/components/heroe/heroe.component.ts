import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  heroe: any = {};

  constructor(
    private _activatedroute: ActivatedRoute,
    private _heroeService: HeroesService
  ) {
    this._activatedroute.params.subscribe(params => {
      // Cuando Typescript no sabe si contiene el parámetro, se puede usar []
      // Lo que va en las llaves, es lo mismo que se definió en la parte de las rutas.
      console.log(params['id']);
      this.heroe = this._heroeService.getHeroe(params['id']);
    });
  }
}
