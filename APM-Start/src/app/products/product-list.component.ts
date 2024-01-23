import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  
  pageTile: string = 'Product List';
  showImage: boolean = false;
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  _listFilter: string = "";
  sub: Subscription | null = null;
  
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.filterProducts(value); 
  }
  
  constructor(private productsService: ProductService) { }
  
  ngOnInit(): void {
    this.sub = this.productsService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (error) => {
        console.log("Error loading products from API.");
        console.log(error);
      }
    });
    //this.filteredProducts = this.products;
  }
  
  toggleImage() {
    this.showImage = !this.showImage;
  }
  
  filterProducts(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products?.filter((product) => product.name.toLocaleLowerCase().includes(filterBy));
  }
  
  onNotify(notification: string) {
    console.log(notification);
    this.pageTile = notification;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}

