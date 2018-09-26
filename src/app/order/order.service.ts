import { MenuItem } from './../restaurant-details/menu-item/menu-item.model';
import { CartItem } from './../restaurant-details/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../restaurant-details/shopping-cart/shopping-cart.service';
import { Injectable } from "@angular/core";

@Injectable()
export class OrderService {
    constructor(private cartService : ShoppingCartService){}

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
}