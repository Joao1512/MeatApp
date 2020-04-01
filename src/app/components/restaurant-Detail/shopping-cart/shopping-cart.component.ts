import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cartItem.model';
import { ShoppingCartService } from './shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items
  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.items = this.itemsCart()
  }
  itemsCart() {
    return this.shoppingCartService.items
  }
  total() {
    return this.shoppingCartService.total()
  }
  clear() {
    return this.shoppingCartService.clear()
  }
  remove(item) {
    return this.shoppingCartService.remove(item)
  }
}
