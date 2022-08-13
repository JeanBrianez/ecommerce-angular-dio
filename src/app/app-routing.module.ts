import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/book-cart/product-list/details/details.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'detalhes', component: DetailsComponent}
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
