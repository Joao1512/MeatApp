import { RestaurantsService } from './services/restaurants.service';
import { RestaurantComponent } from './components/main-restaurant/restaurant/restaurant.component';
import { MainRestaurantComponent } from './components/main-restaurant/main-restaurant.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MainRestaurantComponent,
    RestaurantComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,


  ],
  providers: [RestaurantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
