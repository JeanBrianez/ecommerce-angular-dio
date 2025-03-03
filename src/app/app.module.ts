import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookCartComponent } from './components/book-cart/book-cart.component';
import { ProductListComponent } from './components/book-cart/product-list/product-list.component';
import { FiltersComponent } from './components/book-cart/filters/filters.component';

import { ProductItemComponent } from './components/book-cart/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import {ProductRepoService} from './services/product-repository.service';
import { DetailsComponent } from './components/book-cart/details/details.component';
import { CreateProductComponent } from './components/book-cart/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './components/book-cart/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookCartComponent,
    ProductListComponent,
    FiltersComponent,
    ProductItemComponent,
    DetailsComponent,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ProductRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
