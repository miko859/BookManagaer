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
  isModalVisible: boolean = false;
  bookIdToDelete: number = 0;
  searchQuery: string = '';


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

  deleteBook(): void {
    this.bookService.deleteBook(this.bookIdToDelete).subscribe(
      () => {
        console.log('Book deleted successfully');
        this.isModalVisible = false;
        //vymaze tu knihu z pola takze ziaden refresh ne treba 
        this.books = this.books.filter(book => book.id !== this.bookIdToDelete);
        this.originalBooks = this.originalBooks.filter(book => book.id !== this.bookIdToDelete);
      },
      (error) => {
        console.error('Error deleting book', error);
      }
    );
  }

  sortBooks(criteria: 'title' | 'status' | 'borrowed' | 'author' ): void {
    if (criteria === 'title') {
      this.books.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === 'status') {
      this.books = this.books.filter(book => book.status?.name === 'Available');
    } else if (criteria === 'borrowed') {
      this.books = this.books.filter(book => book.status?.name === 'Borrowed'); 
    } else if (criteria === 'author') {
      this.books.sort((a, b) => a.author.localeCompare(b.author)); 
    } 
  }

  resetBooks(): void {
    this.books = [...this.originalBooks];
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  //objavi sa
  confirmDelete(bookId: number): void {
    this.bookIdToDelete = bookId;
    this.isModalVisible = true;
  }

  //neobjavi sa
  closeModal(): void {
    this.isModalVisible = false;
  }

  filterBooks(): void {
    const query = this.searchQuery.toLowerCase();
    this.books = this.originalBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
  }
}
