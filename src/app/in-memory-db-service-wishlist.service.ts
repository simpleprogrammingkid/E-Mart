import { Injectable } from '@angular/core';
import { Wishlist } from './wishlist';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDbServiceWishlistService {

  createDb() {
    const wishlist = [
      {
        id: 11,
        products:
        [  
      { id: 11, name: 'Howard Stern Comes Again', category: 'Books and Publications', price: 50, imgUrl:"../../assets/img/book1.jpg" },
      { id: 12, name: 'Becoming Michelle Obama', category: 'Books and Publications', price: 40, imgUrl:"../../assets/img/book2.jpg"},
      ]},
      {
        id: 12,
        products:
       [
         { id: 13, name: 'I will Teach you to be rich', category: 'Books and Publications', price: 50, imgUrl:"../../assets/img/book3.jpg" },
         {id: 14, name: 'The Mueller Report', category: 'Books and Publications', price: 35, imgUrl:"../../assets/img/book4.jpg" }
       ]
      }
                     ];
    return {wishlist};
    
  }
 
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(wishlist: Wishlist[]): number {
    return wishlist.length > 0 ? Math.max(...wishlist.map(wishlist => wishlist.id)) +1 : 11;
  }
}
