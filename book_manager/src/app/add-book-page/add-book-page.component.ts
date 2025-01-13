import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent {
  book = {
    title: '',
    author: '',
    description: ''
  };

  constructor(private router: Router, private bookService: BookService) {}

  onSubmit() {
    this.bookService.addBook(this.book).subscribe(
      () => {
        console.log('Book added successfully');
        this.router.navigate(['/admin']);
      },
      (error: any) => {
        console.error('Error adding book:', error);
      }
    );
  }
}
