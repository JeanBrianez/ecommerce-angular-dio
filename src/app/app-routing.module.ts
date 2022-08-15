import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCartComponent } from './components/book-cart/book-cart.component';
import { DetailsComponent } from './components/book-cart/details/details.component';

const routes: Routes = [
  {
    path: '', 
    component: BookCartComponent
  },
  {
    path: 'details', 
    component: DetailsComponent
  }
  /*{path: 'produtos', component: ProductComponent}
  {path: 'categorias', component: CategoriesComponent}
  {path: 'carrinho', component: CartComponent}
  {path: 'admin', component: AdminComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
