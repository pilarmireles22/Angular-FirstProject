import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { AnimalesComponent } from './animales/animales.component';
import { HomeComponent } from './home/home.component';
import { FrutasComponent } from './frutas/frutas.component';
import { routing, appRoutingProviders } from './app.routing';
import { Page404Component } from './page404/page404.component';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    AnimalesComponent,
    HomeComponent,
    FrutasComponent,
    Page404Component,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
