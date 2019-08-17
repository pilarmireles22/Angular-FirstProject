import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-users',
  templateUrl: './detalles-users.component.html',
  styleUrls: ['./detalles-users.component.css']
})
export class DetallesUsersComponent implements OnInit {
nombre = '';
email = '';
img;
  constructor(public activa: ActivatedRoute, public route: Router) { }

  ngOnInit() {

    this.activa.queryParams.subscribe(data => {
      this.nombre = data.nombre;
      this.email = data.email;
      this.img = data.img;
    });
  }

}
