import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private historyKey = 'searchHistory';

  saveSearch(user: any, success: boolean): void {
    let history = this.getHistory();
    history = history.filter(entry => entry.login !== user.login); // Remove duplicates

    if (success) {
      history.unshift({ ...user, date: new Date(), success });
    } else {
      history.unshift({ user, date: new Date(), success });
    }

    localStorage.setItem(this.historyKey, JSON.stringify(history));
    console.log(localStorage)
  }

  getHistory(): any[] {
    return JSON.parse(localStorage.getItem(this.historyKey) || '[]');
  }

  clearHistory(): void {
    localStorage.removeItem(this.historyKey);
  }
}
