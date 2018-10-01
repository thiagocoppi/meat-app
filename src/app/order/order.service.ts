import { MEAT_API } from './../app.api';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CartItem } from './../restaurant-details/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-details/shopping-cart/shopping-cart.service';
import { Injectable } from "@angular/core";
import { Order } from './order.model';

@Injectable()
export class OrderService {
    constructor(private cartService : ShoppingCartService, private http : Http){}

    cartItems() : CartItem[] {
        return this.cartService.items;
    }

    increaseQtd(item : CartItem) {
        this.cartService.increaseQtd(item);
    }    

    decreaseQtd(item : CartItem) {
        this.cartService.decreaseQtd(item);
    }

    removeItem(item : CartItem) {
        this.cartService.removeItem(item);
    }

    itemsValue() : number {
        return this.cartService.total();
    }

    checkOrder(order : Order): Observable<string> {
        const header = new Headers();
        header.append('Content-Type', 'application/json');  
        
        return this.http.post(`${MEAT_API}/orders`, 
                              JSON.stringify(order),
                              new RequestOptions({headers: header}))
                        .map(response => response.json())
    }

    clear() {
        this.cartService.clear();
    }
}