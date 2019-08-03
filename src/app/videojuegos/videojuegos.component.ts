import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit, DoCheck, OnDestroy {
  id = 0;
  juegos = [['Forza Horizon', 'The Crew 2', 'Dirt 4', 'NFS Rivals'],
  ['Call of duty', 'Battlefield', 'Gear of war'],
  ['GTA 5', 'watch dogs 2', 'Day Gone'],
  ['League of legends', 'Dota']];
  selected = [];
  constructor(public activated: ActivatedRoute, public route: Router) { }

  ngOnInit() {
    console.log('entre al componente');
    this.activated.params.subscribe(params => {
      this.selected = this.juegos[params.id];
    });
  }
  ngDoCheck() {
    console.log('cambió');
  }
  ngOnDestroy() {
    console.log('sali de el componente juegos');
  }
}
