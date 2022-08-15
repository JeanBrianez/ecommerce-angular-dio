import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Book } from "../models/books.model";

type BooksApiGetResponse = {
  _embedded: {
    bookList: Array<Book>;
  };
};

@Injectable({
  providedIn: 'root'
})

export class ProductRepoService {

  private readonly url = 'http://localhost:8080/books';
  private endpointId = '${this.url}${bookId}';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor( private readonly http: HttpClient){}

    /*public getBooks() {
      return this.http.get(this.url)
    }*/

    public getAll(): Observable<Array<Book>> {
      return this.http
      .get<BooksApiGetResponse>(this.url)
      .pipe(map((response) => response._embedded.bookList));
    }

    public getOne(bookId: number): Observable<Book> {
      return this.http.get<Book>(this.endpointId);
    }

    public newBook(newBook: Book): Observable<Book> {
      return this.http.post<Book>(this.url, newBook)
    }

    public editBook(newBook: Book, bookId: number): Observable<Book> {
      return this.http.put<Book>(this.endpointId, newBook);
    }

    public deleteBook(bookId: number): Observable<void> {
      return this.http.delete<void>(this.endpointId)
    }
}
