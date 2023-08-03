import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ActorComponent } from './pages/actor/actor.component';
import { FilmComponent } from './pages/film/film.component';
import { HomeComponent } from './pages/home/home.component';
import { CityComponent } from './pages/city/city.component';

const routes: Routes = [{
  path: '',
  component: TemplateComponent,
  children: [{
    path: 'actor',
    component: ActorComponent
  },
  {
    path: 'film',
    component: FilmComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'city',
    component: CityComponent
  },
]
},
{
path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(mod=>mod.AuthModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
