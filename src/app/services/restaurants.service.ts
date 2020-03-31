import { map } from 'rxjs/operators';
import { errorHandler } from './../errorHandler';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Restaurant } from 'app/components/main-restaurant/restaurant/restaurant.model';
@Injectable()
export class RestaurantsService {


constructor(private http: HttpClient) { }

  getRestaurants() {
    return this.http.get('http://localhost:3000/restaurants')
  }
  getRestaurantsById(id: String) {
    return this.http.get(`http://localhost:3000/restaurants/${id}`)
  }
  getReviews(id: String) {
    return this.http.get(`http://localhost:3000/restaurants/${id}/reviews`)
  }
  getMenu(id: String) {
    return this.http.get(`http://localhost:3000/restaurants/${id}/menu`)
  }
}
