import { Author } from "./author.model";
import { Publisher } from "./publisher.model";

export class Book 
{
    id!: number;
    title!: string;
    isbn!: string;
    author!: Author;
    publisher!: Publisher;
    language!: string;
    genre!: string;
    category!: string;
    publicationYear!: number;
    price!: number;
    quantity!: number;
    img!: string;
}