import { ReviewsComponent } from './components/restaurant-Detail/reviews/reviews.component';
import { MenuComponent } from './components/restaurant-Detail/menu/menu.component';
import { RestaurantDetailComponent } from './components/restaurant-Detail/restaurant-Detail.component';
import { MainRestaurantComponent } from './components/main-restaurant/main-restaurant.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';


const routes: Routes = [
  // { path: 'dataForm', loadChildren: () => import('./components/data-form/data-form.module').then(m => m.DataFormModule) },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'restaurants', component: MainRestaurantComponent},
  { path:'restaurants/:id', component: RestaurantDetailComponent,
      children: [
        {path:'', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent},
      ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
