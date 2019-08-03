import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  id = 0;

  // tslint:disable-next-line: max-line-length
  Ingredientes = [{Img: 'https://sugarspunrun.com/wp-content/uploads/2018/07/Ice-Cream-Cone-Cupcakes-Recipe-1-of-1-6.jpg', Nombre: 'Ice Cream', Precio: 'RD$200', Ingredientes: ['8 claras de huevo', '1 taza de azúcar', '2 cucharaditas de extracto de vainilla', '1 pizca de sal', '2 tazas de crema de leche', '2 tazas de leche evaporada']},
  // tslint:disable-next-line: max-line-length
  {Img: 'https://saborgourmet.com/wp-content/uploads/postres-frutas-rapidos-ensalada-Stock-.jpg', Nombre: 'Fruits Dessert', Precio: 'RD$200', Ingredientes: ['5 Fresa', '3 moras', 'Lecha condesada']},
  // tslint:disable-next-line: max-line-length
  {Img: 'http://www.veintitantos.com/sites/default/files/styles/v2-img1000x563/public/articulo/2018-08/11_razones_para_comer_gelatina_a_la_menor_provocacion.jpg?itok=xiM3gek2', Nombre: 'Gelatina', Precio: 'RD$200', Ingredientes: ['Agua', 'Una caja que trae el polvo']},
  // tslint:disable-next-line: max-line-length
  {Img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/5/27/0/IGSP01_25282_s4x3.jpg.rend.hgtvcom.616.462.suffix/1485531666198.jpeg', Nombre: 'CheeseCake', Precio: 'RD$200', Ingredientes: ['250 gramos de galleta María molidas', '130 gramos de mantequilla sin sal', '2 cucharadas de azúcar', '4 paquetes de queso crema a temperatura ambiente', '1 1/4 tazas de leche condensada', '1/2 taza de jugo de limón', '1 cucharadita de extracto de vainilla', '3 sobres de grenetina hidratada (7g c/u)']},
  // tslint:disable-next-line: max-line-length
  {Img: 'https://dietamediterranea.com/wp-content/uploads/2017/04/20170424-Flan.jpg', Nombre: 'Flan', Precio: 'RD$200', Ingredientes: ['3/4 taza de azúcar', '4 huevos', '1 lata (397 gramos) de leche condensada', '1 taza de leche natural', '1 cucharadita de vainilla', '1 paquete (190 gramos) de queso crema']},
  // tslint:disable-next-line: max-line-length
  {Img: 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2018/04/pick-and-mix-chocolate-and-sweet-cake.jpg', Nombre: 'Cake', Precio: 'RD$200', Ingredientes: ['1/2 taza leche', '4 huevos', '2 cucharillas royal o polvo de hornear', '1 3/4 tazas harina', '1 1/2 taza azúcar', '1 taza mantequilla', 'cantidad necesaria vainilla', 'Horno a 160°C o 350°F']}];

  selected = {};
  constructor(public activated: ActivatedRoute, public route: Router) { }

  ngOnInit() {
    this.activated.params.subscribe(params => {
      this.selected = this.Ingredientes[params.id];
    });
  }

}
