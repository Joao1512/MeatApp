import { ShoppingCartService } from './components/restaurant-Detail/shopping-cart/shopping-cart.service';
import { ReviewsComponent } from './components/restaurant-Detail/reviews/reviews.component';
import { ShoppingCartComponent } from './components/restaurant-Detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './components/restaurant-Detail/menu-item/menu-item.component';
import { MenuComponent } from './components/restaurant-Detail/menu/menu.component';
import { RestaurantDetailComponent } from './components/restaurant-Detail/restaurant-Detail.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { RestaurantsService } from './services/restaurants.service';
import { RestaurantComponent } from './components/main-restaurant/restaurant/restaurant.component';
import { MainRestaurantComponent } from './components/main-restaurant/main-restaurant.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MainRestaurantComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ReviewsComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [RestaurantsService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
