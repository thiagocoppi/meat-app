import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-details',
  templateUrl: './restaurant-details.component.html'
})
export class RestaurantDetailsComponent implements OnInit {

  restaurant : Restaurant;

  constructor(private restaurantService : RestaurantsService,
              private router : ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.router.snapshot.params['id'])
          .subscribe(restaurant => this.restaurant = restaurant);
  }

}
