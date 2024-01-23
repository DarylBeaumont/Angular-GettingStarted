import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../product.model';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: IProduct | null = null;
  @Input() showImage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
