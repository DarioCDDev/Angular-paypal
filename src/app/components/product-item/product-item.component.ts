import { Component, Input, OnInit, input } from '@angular/core';
import { Product } from '../../models/product';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product(0, '', '', 0, '');

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  addToCart(): void {
    this.messageService.sendMessage(this.product);
  }
}
