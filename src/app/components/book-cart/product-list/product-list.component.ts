import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { Book } from '../../../models/books.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  public livros$ = this.service.LoadBooks();

  constructor( private readonly service: ProductsService)  {}

  ngOnInit(): void {
    this.service.LoadBooks().pipe(take(1)).subscribe();
  }

  public deleteBook(book: Book): void {
    this.service.deleteBook(book).pipe(take(1)).subscribe();
  }

}


