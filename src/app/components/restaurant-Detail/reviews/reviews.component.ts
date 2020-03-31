import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from './../../../services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: any;
  testes = [
    {nome: 'joao'},
    {nome: 'carlos'}
  ]

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.restaurantsService.getReviews(this.route.parent.snapshot.params['id']).subscribe(reviews => this.reviews = reviews)
    ;
  }
}
