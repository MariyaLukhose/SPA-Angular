import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FishComponent } from './fish/fish.component';
import { ReptilesComponent } from './reptiles/reptiles.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { DogsComponent } from './dogs/dogs.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    FishComponent,
    ReptilesComponent,
    DogsComponent,
    HomePageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
