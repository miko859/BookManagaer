import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import {Book, Status} from '../models/book.model';
import { ErrorService } from '../services/error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent {
  book: Book = {
    id: 0,
    title: '',
    author: '',
    isbn: '',
    status: { id: 0, name: '' }
  };

  statuses: Status[] = [
    { id: 1, name: 'Available' },
    { id: 2, name: 'Borrowed' }
  ];

  constructor(
              private bookService: BookService,
              private router: Router,
              private errorService: ErrorService
  ) {}

  addBook(): void {
    console.log(this.book);
    if (this.book.title && this.book.author && this.book.isbn && this.book.status.id) {
      console.log(this.book)
      this.bookService.addBook(this.book).subscribe(
          (response: any) => {
          console.log('Book added successfully', response);
          this.router.navigate(['/books']);
        },
          (error: any) => {
          console.error('Error adding book', error);
          this.errorService.showError('Something went wrong while adding book');

        }
      );
    }
  }
}