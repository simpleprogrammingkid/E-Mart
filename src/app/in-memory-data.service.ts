import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Howard Stern Comes Again', category: 'Books and Publications', price: 50, imgUrl:"../../assets/img/book1.jpg" },
      { id: 12, name: 'Becoming Michelle Obama', category: 'Books and Publications', price: 40, imgUrl:"../../assets/img/book2.jpg"},
      { id: 13, name: 'I will Teach you to be rich', category: 'Books and Publications', price: 50, imgUrl:"../../assets/img/book3.jpg" },
      { id: 14, name: 'The Mueller Report', category: 'Books and Publications', price: 35, imgUrl:"../../assets/img/book4.jpg" },
      { id: 15, name: 'Girl Stop Apologizing', category: 'Books and Publications', price: 24, imgUrl:"../../assets/img/book5.jpg" },
      { id: 16, name: 'The Pioneers', category: 'Books and Publications', price: 65, imgUrl:"../../assets/img/book6.jpg" },
      { id: 17, name: 'Where the crawdads sings', category: 'Books and Publications', price: 15, imgUrl:"../../assets/img/book7.jpg" },
      { id: 18, name: 'Educated', category: 'Books and Publications', price: 35, imgUrl:"../../assets/img/book8.jpg" },
      { id: 19, name: 'Daring Greatly', category: 'Books and Publications', price: 19, imgUrl:"../../assets/img/book9.jpg" },
      { id: 20, name: "Oh, the places You'll Go!", category: 'Books and Publications', price: 20, imgUrl:"../../assets/img/book10.jpg" }    ];
    
    /* Newly added */
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
    const users = [
      {user_id: "test_user", password: "abcd3456"}
    ]                 

    /*               */
      return {heroes, wishlist, users};
    
  }
 
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) +1 : 11;
  }
}