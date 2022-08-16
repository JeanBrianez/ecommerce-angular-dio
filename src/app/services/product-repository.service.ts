import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Book } from "../models/books.model";

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

    public getAll(): Observable<Book[]> {
      return this.http
      .get<Book[]>(this.url)
      .pipe(map((response) => response));
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
