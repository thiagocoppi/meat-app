import { CartItem } from './../restaurant-details/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { RadioOptions } from './../shared/radio/radio-options.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions : RadioOptions[] = [
    {label: 'Cartão', value : 'CAR'},
    {label: 'Dinheiro', value : 'MON'},
    {label: 'Vale Refeição', value : 'VR'}
  ];

  constructor(private orderService : OrderService) { }

  cartItens() {
    return this.orderService.cartItems();
  }

  increaseQtd(item : CartItem) {
    this.orderService.increaseQtd(item);
  }

  decreaseQtd(item : CartItem) {
    this.orderService.decreaseQtd(item);
  }

  remove(item : CartItem){
    this.orderService.removeItem(item);
  }


  ngOnInit() {
  }

}
