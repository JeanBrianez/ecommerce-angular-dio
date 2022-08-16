import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { take, tap } from "rxjs/operators";
import { Book } from 'src/app/models/books.model';
import { ProductsService } from 'src/app/services/products.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent {
  public newBookForm = new FormGroup({
    title: new FormControl(''),
    isbn: new FormControl(''),
    author: new FormControl(''),
    publisher: new FormControl(''),
    language: new FormControl(''),
    genre: new FormControl(''),
    category: new FormControl(''),
    publicationYear: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),
    img: new FormControl('')
  })

  private get book(): Book {
    const title = this.newBookForm.get('title')?.value!;
    const isbn = this.newBookForm.get('isbn')?.value!;
    const author = this.newBookForm.get('author')?.value!;
    const publisher = this.newBookForm.get('publisher')?.value!;
    const language = this.newBookForm.get('language')?.value!;
    const genre = this.newBookForm.get('genre')?.value!;
    const category = this.newBookForm.get('category')?.value!;
    const publicationYear = this.newBookForm.get('publicationYear')?.value!;
    const price = this.newBookForm.get('price')?.value!;
    const quantity = this.newBookForm.get('quantity')?.value!;
    const img = this.newBookForm.get('img')?.value!;
    return {
      title, isbn, author, publisher, language, genre, category, publicationYear, price, quantity, img
    } as unknown as Book;
  }

  constructor(
    private readonly service: ProductsService,
    private readonly location: Location,
  ) { }

  public onSubmit(): void {
    this.service
    .createBook(this.book)
    .pipe(
      take(1),
      tap(() => this.location.back()),
    )
    .subscribe();
  }

}
