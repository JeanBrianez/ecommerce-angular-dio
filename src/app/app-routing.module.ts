import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCartComponent } from './components/book-cart/book-cart.component';
import { CreateProductComponent } from './components/book-cart/create-product/create-product.component';
import { DetailsComponent } from './components/book-cart/details/details.component';
import { EditProductComponent } from './components/book-cart/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '', 
    component: BookCartComponent
  },
  {
    path: 'details/:id', 
    component: DetailsComponent
  },
  {
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'edit/:id',
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
