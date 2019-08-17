import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primer Proyecto';
  edad = 24;
  description = 'Test';
  datos = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
  visible = false;
  red = '';
  menu = [{path: '', title: 'Inicio' },
  {path: '/juegos', title: 'juegos'},
  {path: '/frutas', title: 'Frutas'},
  {path: '/animales', title: 'Animales'},
  {path: '/formulario', title: 'Formulario'}
 ];
  savePerson() {
    alert('hola');
  }
  alerta(msg) {
    alert(msg);
  }
  cambio() {
    if (this.visible) {
      this.visible = false;
    } else {
      this.visible = true;
    }
    this.alerta('hola');
  }

  }
