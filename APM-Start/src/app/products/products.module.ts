import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductExplanationComponent } from './product-explanation/product-explanation.component';
import { ProductListComponent } from './product-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductExplanationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class ProductsModule { }
