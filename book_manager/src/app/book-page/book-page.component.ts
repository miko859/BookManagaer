import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { AuthService } from '../auth.service';
import { Book } from '../models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
  books: Book[] = [];
  originalBooks: Book[] = [];

  constructor(private bookService: BookService, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
      this.originalBooks = [...data];
    });
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }

  navigateToAddBook(): void {
    this.router.navigate(['/add-book']);
  }

  navigateToUpdateBook(bookId: number): void {
    this.router.navigate(['/admin/book', bookId]); // Redirect to update page
  }

  deleteBook(bookId: number): void {
    this.bookService.deleteBook(bookId).subscribe(
      (response: any) => {
        console.log('Book deleted successfully', response);
        this.router.navigate(['/books']);
      },
      (error: any) => {
        console.error('Error deleting book', error);
      }
    );
  }

  sortBooks(criteria: 'title' | 'status'): void {
    if (criteria === 'title') {
      this.books.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === 'status') {
      this.books = this.books.filter(book => book.status?.name === 'Available');
    }
  }

  resetBooks(): void {
    this.books = [...this.originalBooks];
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
