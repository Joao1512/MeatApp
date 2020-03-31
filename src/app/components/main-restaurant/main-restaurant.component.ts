import { RestaurantsService } from './../../services/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'app-main-restaurant',
  templateUrl: './main-restaurant.component.html',
  styleUrls: ['./main-restaurant.component.css']
})
export class MainRestaurantComponent implements OnInit {
  restaurants;

  constructor (private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.getRestaurants()
    .subscribe(restaurants => this.restaurants = restaurants);
  }

}
