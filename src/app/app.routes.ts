import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GamesComponent } from './pages/games/games.component';

export const routes: Routes = [
    {path:'', component: HomeComponent, pathMatch: 'full'},
    {path: 'games/:nameGame', component: GamesComponent},
    {path:'**', redirectTo: ''}
];
