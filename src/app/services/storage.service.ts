import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private historyKey = 'searchHistory';

  saveSearch(username: string, success: boolean): void {
    let history = this.getHistory();
    history.push({ username, success, date: new Date() });
    localStorage.setItem(this.historyKey, JSON.stringify(history));
  }

  getHistory(): any[] {
    return JSON.parse(localStorage.getItem(this.historyKey) || '[]');
  }

  clearHistory(): void {
    localStorage.removeItem(this.historyKey);
  }
}
