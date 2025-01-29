import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book, Status } from '../models/book.model';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-admin-book-page',
  templateUrl: './admin-book-page.component.html',
  styleUrls: ['./admin-book-page.component.css']
})
export class AdminBookPageComponent implements OnInit {
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
    private route: ActivatedRoute,
    private errorService: ErrorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.bookService.getBookById(+bookId).subscribe((data: Book) => {
        this.book = data;
      });
    }
  }

  updateBook(): void {
    console.log('Update book called');

    if (!this.book.isbn) {
      console.log('ISBN is missing');
      this.errorService.showError('ISBN is required.');
      return;
    }

    if (!this.book.isbn.match(/^\d{8}$/)) {
      console.log('ISBN is invalid');
      this.errorService.showError('ISBN must be exactly 8 digits.');
      return;
    }

    console.log('ISBN is valid');
    this.bookService.updateBook(this.book).subscribe(
      (response: Book) => {
        console.log('Book updated successfully', response);
        this.router.navigate(['/books']);
      },
      (error: any) => {
        console.error('Error updating book', error);
        this.errorService.showError('Error updating book');
      }
    );
  }



  deleteBook(): void {
    this.bookService.deleteBook(this.book.id).subscribe(
      (response: any) => {
        console.log('Book deleted successfully', response);
        this.router.navigate(['/books']);
      },
      (error: any) => {
        console.error('Error deleting book', error);
        this.errorService.showError('Something went wrong while deleting book');
      }
    );
  }
}
