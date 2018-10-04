import { CartItem } from './../restaurant-details/shopping-cart/cart-item.model';
import { OrderService } from './order.service';
import { RadioOptions } from './../shared/radio/radio-options.model';
import { Component, OnInit } from '@angular/core';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  paymentOptions : RadioOptions[] = [
    {label: 'Cartão', value : 'CAR'},
    {label: 'Dinheiro', value : 'MON'},
    {label: 'Vale Refeição', value : 'VR'}
  ];

  deliveryPrice : number = 8;

  itensValue() : number {
    return this.orderService.itemsValue();
  }


  constructor(private orderService : OrderService, 
              private router: Router,
              private formBuilder: FormBuilder) { }

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
    this.orderService.checkOrder(order).subscribe((orderId: Order) =>{     
      this.orderService.clear();
      this.router.navigate(['/order-summary']); 
    });
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      complemento: this.formBuilder.control(''),
      formasPagamentos: this.formBuilder.control('', [Validators.required])
    }, {validator: OrderComponent.equalTo});
  }

  static equalTo(group : AbstractControl) : {[key:string]: boolean} {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');
    
    if (!email || !emailConfirmation)
      return undefined;

    if (email.value !== emailConfirmation.value) {
      return {
        emailsNotMatch:true
      }
    }

    return undefined;
  }

}
