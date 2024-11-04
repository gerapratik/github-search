// src/app/components/history/history.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../../services/storage.service'; // Import the storage service

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: any[] = []; // Define the 'history' property as an array

  constructor(private router: Router, private storageService: StorageService) {} // Inject storage service

  ngOnInit(): void {
    this.loadHistory(); // Load history on initialization
  }

  loadHistory(): void {
    this.history = this.storageService.getHistory(); // Fetch history from storage
  }

  clearHistory(): void {
    this.history = []; // Clear local history
    this.storageService.clearHistory(); // Clear stored history in the service
  }
  viewProfile(username: string) {
    this.router.navigate(['/profile', username]); // Adjust the route as necessary
  }
}
