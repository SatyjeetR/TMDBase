import { Component } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';
import { SearchService } from 'src/app/Service/search.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
 movies:any;
 baseUrlForImage="https://image.tmdb.org/t/p/original";
  watchLaterList: any;
  searchString = '';

constructor(private service:DataService , private searchService: SearchService){

}

ngOnInit(): void {
  console.log('MovieComponent initialized.');
  this.service.getMovieList().subscribe(
    (data) => {
      this.movies = data;
    },
    (error) => {
      console.error('Error fetching movie list:', error);
    }
  );
  
  const storedData = localStorage.getItem('watchLaterList');
  this.watchLaterList = storedData ? JSON.parse(storedData) : [];

  this.searchService.currentSearchQuery.subscribe((query) => {
    this.searchString = query;   });
}
addToWatchLater(movie: any): void {
  console.log('Clicked on movie:', movie);
  console.log('addToWatchLater method called.');

  // Retrieve the existing watch later list from local storage
  const storedData = localStorage.getItem('watchLaterList');
  const watchLaterList = storedData ? JSON.parse(storedData) : [];

  // Check if the movie is not already in the watch later list
  if (!watchLaterList.find((m: any) => m.id === movie.id)) {
    // Add the movie to the watch later list
    watchLaterList.push(movie);

    // Save the updated watch later list back to local storage
    localStorage.setItem('watchLaterList', JSON.stringify(watchLaterList));
  }
}



}
