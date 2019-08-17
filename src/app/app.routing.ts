import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VideojuegosComponent} from './videojuegos/videojuegos.component';
import {AnimalesComponent} from './animales/animales.component';
import {FrutasComponent} from './frutas/frutas.component';
import {HomeComponent} from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { DetallesComponent } from './detalles/detalles.component';
import { FormularioComponent } from './formulario/formulario.component';
import { DetallesUsersComponent } from './detalles-users/detalles-users.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'juegos/:id', component: VideojuegosComponent},
    {path: 'animales', component: AnimalesComponent},
    {path: 'frutas', component: FrutasComponent},
    {path: 'detalles/:id', component: DetallesComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'detalles-users', component: DetallesUsersComponent},
    {path: '**', component: Page404Component},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders =  RouterModule.forRoot(appRoutes);

