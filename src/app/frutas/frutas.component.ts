import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit {
  selected = {};
  constructor(public activa: ActivatedRoute, public route: Router) { }

  ngOnInit() {
    this.activa.queryParams.subscribe(data => {
      if(Object.keys(data).length==0){
        this.selected=false;
      }
      else{
        this.selected = data;
      }
      
    });
  }

}
