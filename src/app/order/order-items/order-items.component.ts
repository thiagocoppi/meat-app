import { CartItem } from './../../restaurant-details/shopping-cart/cart-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];  
  @Output() increaseQtd = new EventEmitter<CartItem>();
  @Output() decreaseQtd = new EventEmitter<CartItem>();
  @Output() removeItem = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQtd(item : CartItem) {
    this.increaseQtd.emit(item);
  }

  emitDecreaseQtd(item : CartItem) {
    this.decreaseQtd.emit(item);
  }

  emitRemoveItem(item : CartItem) {
    this.removeItem.emit(item);
  }

}
