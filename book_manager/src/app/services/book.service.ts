import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:3000/books'; // Replace with backend URL in the future

  constructor(private http: HttpClient) {}

  addBook(book: any) {
    return this.http.post(this.baseUrl, book);
  }
}
