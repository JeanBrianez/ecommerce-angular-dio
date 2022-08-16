import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, take, tap } from 'rxjs/operators';
import { Book } from 'src/app/models/books.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  public editBookForm = new FormGroup({
    id: new FormControl(''),
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
    img: new FormControl(''),
  })

  private get book(): Book {
    const id = this.editBookForm.get('id')?.value!;
    const title = this.editBookForm.get('title')?.value!;
    const isbn = this.editBookForm.get('isbn')?.value!;
    const author = this.editBookForm.get('author')?.value!;
    const publisher = this.editBookForm.get('publisher')?.value!;
    const language = this.editBookForm.get('language')?.value!;
    const genre = this.editBookForm.get('genre')?.value!;
    const category = this.editBookForm.get('category')?.value!;
    const publicationYear = this.editBookForm.get('publicationYear')?.value!;
    const price = this.editBookForm.get('price')?.value!;
    const quantity = this.editBookForm.get('quantity')?.value!;
    const img = this.editBookForm.get('img')?.value!;
    return {
      id, title, isbn, author, publisher, language, genre, category, publicationYear, price, quantity, img
    } as unknown as Book;
  }

  private set book(book: Book) {
    this.editBookForm.get('title')?.setValue(book.title);
    this.editBookForm.get('isbn')?.setValue(book.isbn);
    this.editBookForm.get('author')?.setValue(book.author + '');
    this.editBookForm.get('publisher')?.setValue(book.publisher + '');
    this.editBookForm.get('language')?.setValue(book.language);
    this.editBookForm.get('genre')?.setValue(book.genre);
    this.editBookForm.get('category')?.setValue(book.category);
    this.editBookForm.get('publicationYear')?.setValue(book.publicationYear + '');
    this.editBookForm.get('price')?.setValue(book.price + '');
    this.editBookForm.get('quantity')?.setValue(book.quantity + '');
    this.editBookForm.get('img')?.setValue(book.img);
  }

  constructor(
    private readonly service: ProductsService,
    private readonly location: Location,
    private readonly route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
      this.route.paramMap
      .pipe(
        take(1),
        map((params) => parseInt(params.get('id')!, 10)),
        mergeMap((bookId) => this.service.getBook(bookId)),
        tap((book) => (this.book = book)),
      )
      .subscribe
  }

  public onSubmit(): void {
    this.service
    .modifyBook(this.book, this.book.id)
    .pipe(
      take(1),
    )
    .subscribe();
  }
}
