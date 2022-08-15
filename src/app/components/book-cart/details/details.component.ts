import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { Book } from 'src/app/models/books.model';
import { Publisher } from 'src/app/models/publisher.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  url : string = "";

  @Input()
  livro!: Book;

  @Input()
  autor!: Author;

  @Input()
  editora!: Publisher;

  constructor() { }

  ngOnInit(): void {
  }

}
