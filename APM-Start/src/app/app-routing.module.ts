import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductExplanationComponent } from './products/product-explanation/product-explanation.component';
import { ProductExplanationGuard } from './products/product-explanation/product-explanation.guard';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent, title: "Welcome - Product Shop"},
  { path: 'products',  component: ProductListComponent, title: "Products - Product Shop"},
  { path: 'products/:id', canActivate: [ProductExplanationGuard], component: ProductExplanationComponent, title: "Explanation - Product Shop"},
  { path: '', redirectTo: '/home', pathMatch: "full"},
  { path: '**', component: WelcomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
