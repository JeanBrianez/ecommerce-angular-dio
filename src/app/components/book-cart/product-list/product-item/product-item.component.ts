import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../../../../models/author.model';
import { Book } from '../../../../models/books.model';
import { Publisher } from '../../../../models/publisher.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  url : string = "";

  @Input()
  livro!: Book;

  @Input()
  autor!: Author;

  @Input()
  editora!: Publisher;

  constructor() {

   }

  ngOnInit(): void {



  }

}
