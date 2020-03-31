import { RestaurantsService } from './../../services/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-Detail',
  templateUrl: './restaurant-Detail.component.html',
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: any;
  id: String;
  constructor(
    private restaurantsService:RestaurantsService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.restaurantsService.getRestaurantsById(this.id).subscribe(restaurant => this.restaurant = restaurant)
  }

}
