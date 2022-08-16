import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { Author } from '../../../../models/author.model';
import { Book } from '../../../../models/books.model';
import { Publisher } from '../../../../models/publisher.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  livro!: Book;

  @Input()
  autor!: Author;

  @Input()
  editora!: Publisher;

  constructor(private readonly service: ProductsService) {}

  ngOnInit(): void {
    this.service.LoadBooks().pipe(take(1)).subscribe();
  }

  public deleteBook(book: Book): void {
    this.service.deleteBook(book).pipe(take(1)).subscribe();
  }
}
