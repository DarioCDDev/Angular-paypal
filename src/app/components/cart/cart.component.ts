import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { Product } from '../../models/product';
import { CartItem } from '../../models/cart-item';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  total: number = 0;

  constructor(private messageSerivice: MessageService, private storageService: StorageService) {}

  ngOnInit(): void {
    if (this.storageService.existsCart()) {
      this.cartItems = this.storageService.getCart();
    }
    this.getItems();
    this.total = this.getTotal();
  }

  getItems(): void {
    this.messageSerivice.getMessage().subscribe((product: Product) => {
      let isExist = false;
      this.cartItems.forEach((item: CartItem) => {
        if (item.productId === product.id) {
          item.quantity++;
          isExist = true;
        }
      });
      if (!isExist) {
        const cartItem = new CartItem(product);
        this.cartItems.push(cartItem);
      }
      this.total = this.getTotal();
      this.storageService.setCart(this.cartItems);
    });
  }

  getTotal(): number {
    let total = 0;
    this.cartItems.forEach((item: CartItem) => {
      total += item.quantity * item.productPrice;
    });
    return +total.toFixed(2);
  }

  emptyCart(): void {
    this.cartItems = [];
    this.total = 0;
    this.storageService.clearCart();
  }
  delteItem(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    } else {
      this.cartItems.splice(index, 1);
    }
    this.total = this.getTotal();
    this.storageService.setCart(this.cartItems);
  }
}
