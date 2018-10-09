import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { NgModule } from "@angular/core";
import { OrderComponent } from "./order.component";
import { OrderItemsComponent } from './order-items/order-items.component';


const ROUTES: Routes = [
    {path:'', component: OrderComponent}
]

@NgModule({
    declarations:[
        OrderComponent,
        DeliveryCostsComponent,
        OrderItemsComponent
    ],
    imports:[
        SharedModule,
        RouterModule.forChild(ROUTES)
    ],
    exports:[

    ]
})
export class OrderModule {

}