import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  username = '';
  user: any;
  error = '';

  constructor(
    private githubService: GithubService,
    private storageService: StorageService,
    private router: Router
  ) {}

  searchUser() {
    this.githubService.searchUser(this.username).subscribe(
      user => {
        this.user = user;
        this.error = '';
        this.storageService.saveSearch(this.username, true);
      },
      err => {
        this.error = 'User not found';
        this.user = null;
        this.storageService.saveSearch(this.username, false);
      }
    );
  }

  viewProfile() {
    this.router.navigate(['/profile', this.username]);
  }
}
