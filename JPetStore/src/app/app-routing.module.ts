import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { FishComponent } from './fish/fish.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ReptilesComponent } from './reptiles/reptiles.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainMenu', pathMatch:'full'},
  { path: 'fish', component: FishComponent},
  { path: 'reptile', component: ReptilesComponent},
  { path: 'mainMenu', component: MainMenuComponent},
  { path: 'dogs', component: DogsComponent},
  { path: 'homePage', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
