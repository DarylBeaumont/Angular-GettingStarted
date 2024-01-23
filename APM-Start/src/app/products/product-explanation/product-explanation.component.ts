import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../product.model';

@Component({
  selector: 'pm-product-explanation',
  templateUrl: './product-explanation.component.html',
  styleUrls: ['./product-explanation.component.css']
})
export class ProductExplanationComponent implements OnInit {
  pageTitle: string = "Product explanation";
  id: number = 0;
  product: IProduct | null = {
    id: 2,
    name: "Garden Cart",
    code: "GDN-0023",
    releaseDate: "March 18, 2021",
    description: "15 gallon capacity rolling garden cart",
    price: 32.99,
    starRating: 4.2,
    imageName: "assets/images/garden_cart.png"
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'] ?? 0;
      this.pageTitle += `: ${this.id}`;
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
