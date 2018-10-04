import { AboutModule } from './about/about.module';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderComponent } from './order/order.component';
import { ReviewsComponent } from './restaurant-details/reviews/reviews.component';
import { MenuComponent } from './restaurant-details/menu/menu.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'restaurants/:id', component: RestaurantDetailsComponent,
    children : [
        {path: '', redirectTo: 'menu', pathMatch: 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent}
    ]},
    {path: 'order', component: OrderComponent},
    {path: 'order-summary', component: OrderSummaryComponent}


];