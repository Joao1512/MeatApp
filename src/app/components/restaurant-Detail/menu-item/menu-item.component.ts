import { MenuItem } from './menu-item.model';
import { ShoppingCartService } from './../shopping-cart/shopping-cart.service';
import { RestaurantsService } from './../../../services/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  menu
  id: String
  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
    private shoppingCartService: ShoppingCartService,
  ) { }

  ngOnInit() {
    this.id = this.route.parent.snapshot.params['id'];
    this.restaurantsService.getMenu(this.id).subscribe(menu => this.menu = menu);
  }
  add(item: MenuItem) {
    return this.shoppingCartService.add(item)
  }
}
