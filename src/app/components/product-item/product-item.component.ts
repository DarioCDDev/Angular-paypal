import { Component, Input, OnInit, input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{

  @Input()product: Product = new Product(0, '', '', 0, '');

  constructor() { }

  ngOnInit(): void {
      
  }

}
