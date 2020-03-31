import { map } from 'rxjs/operators';
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
}
