import { Component } from '@angular/core';
import { SearchService } from 'src/app/Service/search.service';

@Component({
  selector: 'app-watch-later',
  templateUrl: './watch-later.component.html',
  styleUrls: ['./watch-later.component.scss']
})
export class WatchLaterComponent {
  watchLaterList: any[] = [];
  searchString: string = '';

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    // Retrieve the watch later list from local storage
    const storedData = localStorage.getItem('watchLaterList');

    // Parse the stored data or default to an empty array if it's null
    this.watchLaterList = storedData ? JSON.parse(storedData) : [];

    this.searchService.currentSearchQuery.subscribe((query) => {
      this.searchString = query;
      // Call your watch later list filtering logic based on the search query here
      // Example: this.filterWatchLaterList();
    });
  }

  addToWatchLater(movie: any): void {
    // Retrieve the existing watch later list from local storage
    const storedData = localStorage.getItem('watchLaterList');
    let watchLaterList = storedData ? JSON.parse(storedData) : [];
  
    // Check if the movie is not already in the watch later list
    if (!watchLaterList.find((m: any) => m.id === movie.id)) {
      // Add the movie to the watch later list
      watchLaterList.push(movie);
  
      // Save the updated watch later list back to local storage
      localStorage.setItem('watchLaterList', JSON.stringify(watchLaterList));
    }
  }
  removeFromWatchLater(movie: any): void {
    console.log('Remove from watch later:', movie);

    // Filter out the movie to be removed from the watch later list
    this.watchLaterList = this.watchLaterList.filter((m: any) => m.id !== movie.id);

    // Save the updated watch later list back to local storage
    localStorage.setItem('watchLaterList', JSON.stringify(this.watchLaterList));
  }
}
