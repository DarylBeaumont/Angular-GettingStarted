import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTile: string = 'Product List';
  products: IProduct[] = [
    {
      id: 2,
      name: "Garden Cart",
      code: "GDN-0023",
      releaseDate: "March 18, 2021",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageName: "assets/images/garden_cart.png"
    },
    {
      id: 5,
      name: "Hammer",
      code: "TBX-0048",
      releaseDate: "May 21, 2021",
      description: "Curved claw steel hammer",
      price: 8.9,
      starRating: 4.8,
      imageName: "assets/images/hammer.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
