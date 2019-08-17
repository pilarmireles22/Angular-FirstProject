import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private user: UserService) { }

 gender = '';
 results;
 cantidad = 0;
  ngOnInit() {

  }
  public search() {
    this.user.getUser(this.cantidad, this.gender)
    .subscribe((data: any) => {
      this.results = data.results;
    });
  }
}
