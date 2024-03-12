import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent implements OnInit{

  @Input() cartItem: any ;

  constructor() { }

  ngOnInit(): void {
  }

}
