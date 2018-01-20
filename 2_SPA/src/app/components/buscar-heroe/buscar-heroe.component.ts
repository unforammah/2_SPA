import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html'
})
export class BuscarHeroeComponent implements OnInit {

  heroes: Heroe[] = [];
  texto: string;
  constructor(private _heroesService: HeroesService,
    private _activatedroute: ActivatedRoute) {

  }

  ngOnInit() {
    this._activatedroute.params.subscribe(params => {
      // Cuando Typescript no sabe si contiene el parámetro, se puede usar []
      // Lo que va en las llaves, es lo mismo que se definió en la parte de las rutas.
      this.texto = params['texto'];
      this.heroes = this._heroesService.buscarHeroes(params['texto']);
    });
  }

}
