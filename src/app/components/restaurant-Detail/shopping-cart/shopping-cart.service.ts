import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cartItem.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: CartItem[] = []

constructor() { }
  clear() {
    this.items = []
  }
  add(item: MenuItem) {
    let foundItem = this.items.find(cartItem => cartItem.menuItem.id === item.id)
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    }
    else{
      this.items.push(new CartItem(item))
    }
  }
  remove(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1)
  }
  total() {
    return this.items
    .map(item => item.value())
    .reduce((prev, value) => prev+value,0)
  }
}
