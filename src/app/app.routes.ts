import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotaComponent } from './rota/rota.component';
import { ListarComponent } from './components/listar/listar.component';
// import { Listar } from './interfaces/Listar';
// import { Pokemon } from './interfaces/Listar';
// import { Pokemon } from './interfaces/pokemom';
import { PokemomComponent } from './pokemom/pokemom.component';

export const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'nova-rota' , component:RotaComponent},
    {path: 'listar' , component: ListarComponent },
    {path:'**' , component: HomeComponent},
    
{ path: 'pokemon', component: PokemomComponent },
{ path: '**', component: HomeComponent}
];  


