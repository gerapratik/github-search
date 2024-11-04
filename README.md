# GithubSearchApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# About the App
The application is structured with the following main components:

DashboardComponent: Main landing page, providing links to Search and History.
SearchComponent: Contains an input field where users can enter a GitHub username to search for. Displays user results below the search input.
HistoryComponent: Shows a list of past search queries and includes a "Clear History" button.
ProfileComponent: Displays detailed information about a selected user from the search results or history.

# Usage
## Dashboard
The dashboard provides navigation links to:

Search: Opens the search page.
History: Opens the search history page.
## Search Page
Enter a GitHub username into the search field and press Enter or click the Search button.
Results will display the user’s public profile information (username, avatar, etc.).
If a user is not found, an error message will appear.
## History Page
Shows a list of past searches.
Users can click on any entry to view the corresponding profile.
The "Clear History" button deletes the search history from both the UI and localStorage.
## Profile Page
Displays detailed user information when a user is selected from either the search results or the history.
