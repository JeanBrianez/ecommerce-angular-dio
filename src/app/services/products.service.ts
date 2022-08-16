import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ignoreElements, mergeMap, tap } from 'rxjs/operators';
import { Book } from '../models/books.model';
import { ProductRepoService } from './product-repository.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public books = new BehaviorSubject<Array<Book>>([]);
  private loaded = false;

  constructor(private readonly repository: ProductRepoService) { }

  public LoadBooks(): Observable<Array<Book>> {
    if (this.loaded === true) {
      return this.books;
    }

    return this.repository.getAll().pipe(
      tap((books) => this.books.next(books)),
      tap(() => (this.loaded = true)),
      );
  }

  public getBook(bookId: number): Observable<Book> {
    return this.repository.getOne(bookId);
  }

  public createBook(newBook: Book): Observable<Array<Book>> {
    return this.repository.newBook(newBook).pipe(
      mergeMap(() => this.books),
      tap((currentBook) => this.addNewToList(newBook, currentBook),)
    )
  }

  public modifyBook(modifiedBook: Book, bookId: number): Observable<Array<Book>> {
    return this.repository.editBook(modifiedBook, bookId).pipe(
      mergeMap(() => this.books),
      tap((currentBook) => this.modifyOnList(modifiedBook, currentBook),)
    )
  }

  public deleteBook(deletedBook: Book): Observable<void> {
    return this.repository
    .deleteBook(deletedBook.id)
    .pipe(
      tap(() => this.removeFromList(deletedBook, this.books.value),)
    )  
  }


  private addNewToList(newBook: Book, currentBook: Array<Book>): void {
    this.books.next([...currentBook, newBook]);
  }
  
  private modifyOnList(modifiedBook: Book, currentBook: Array<Book>): void {
    debugger;
    const currentBookIndex = currentBook.findIndex(
      (book) => book.id === modifiedBook.id,
    );
    currentBook.splice(currentBookIndex, 1, modifiedBook);
    this.books.next(currentBook);
  }
  
  private removeFromList(deletedBook: Book, currentBooks: Array<Book>): void {
    const newBooksList = currentBooks.filter(
      (book) => book.id !== deletedBook.id,
    );
    this.books.next(newBooksList);
  }
}


