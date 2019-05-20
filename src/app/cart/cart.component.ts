import { Component, OnInit } from '@angular/core';
import { Wishlist } from '../wishlist';
import { WishlistService} from '../wishlist.service';
import { MaterialModule } from '../material.module';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
    
  private top_products: String;
  private wishlist: Wishlist[];  
  
  constructor(private wishlistService: WishlistService) {
  
  this.top_products = "Shopping Cart";   
  
  }

  getWishlist(): void {
    this.wishlistService.getWishlist()
    .subscribe(wishlist => this.wishlist = wishlist);
  }
  ngOnInit() {
     this.getWishlist();
  }

  


}