import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '../../services/storage.service'; 

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: any[] = []; 

  constructor(private router: Router, private storageService: StorageService) {} 

  ngOnInit(): void {
    this.loadHistory(); 
  }

  loadHistory(): void {
    this.history = this.storageService.getHistory(); 
  }

  clearHistory(): void {
    this.history = []; 
    this.storageService.clearHistory(); 
  }
  viewProfile(username: string) {
    this.router.navigate(['/profile', username]); 
  }
}
