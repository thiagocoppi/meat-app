import { CartItem } from './../restaurant-details/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { RadioOptions } from './../shared/radio/radio-options.model';
import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from './order.model';

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

  deliveryPrice : number = 8;

  itensValue() : number {
    return this.orderService.itemsValue();
  }


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


  checkOrder(order : Order) {
    order.orderItens = this.cartItens().map((item:CartItem)=> new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe((orderId: string) =>{
      console.log(orderId);
      this.orderService.clear();
    });
  }

  ngOnInit() {
  }

}
