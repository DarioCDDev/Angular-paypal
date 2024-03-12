import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'Skyrim',
      'lorem impsum',
      24.69,
      'https://m.media-amazon.com/images/I/81gwTXzdO7L._AC_SX569_.jpg'
    ),
    new Product(
      2,
      'Spiderman-2',
      'lorem impsum',
      60,
      'https://m.media-amazon.com/images/I/81DC-janmJL._AC_SX679_.jpg'
    ),
    new Product(
      3,
      'Far Cry 6',
      'lorem impsum',
      44.69,
      'https://m.media-amazon.com/images/I/71m3PYmp+uL._AC_SX522_.jpg'
    ),
    new Product(
      4,
      'Fortnite',
      'lorem impsum',
      17.95,
      'https://m.media-amazon.com/images/I/81vhvRIBgBL._AC_SX679_.jpg'
    ),
    new Product(
      6,
      'Modern Warfare III',
      'lorem impsum',
      70,
      'https://m.media-amazon.com/images/I/81NNWGkSUzL._AC_SX679_.jpg'
    ),
    new Product(
      7,
      'Bluey',
      'lorem impsum',
      5.69,
      'https://m.media-amazon.com/images/I/81W-kBmMVGL._AC_SX679_.jpg'
    ),
  ];

  constructor() {}

  getProduct(): Product[] {
    return this.products;
  }
}
