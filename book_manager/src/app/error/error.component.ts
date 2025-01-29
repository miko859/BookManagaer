import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage: string | null = null;

  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.errorService.error$.subscribe((message: string | null) => {
      console.log('ErrorComponent received error message:', message); // Add this
      this.errorMessage = message;

      // Reset after 5 seconds
      setTimeout(() => this.errorMessage = null, 5000);
    });
  }

}
