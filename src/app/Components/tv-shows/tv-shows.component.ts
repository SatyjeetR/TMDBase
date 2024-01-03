import { Component } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TVShowsComponent {
  constructor(private service: DataService) { }
  tvShows:any;


  ngOnInit(): void {

    this.service.getTvList().subscribe(
      (data) => {
        this.tvShows = data;
        console.log("data",data);
        
      },
      (error) => {
        console.error('Error fetching movie list:', error);
      }
    );


    
  }
  
  addToWatchLater(tvShow: any): void {
    console.log('Clicked on movie:', tvShow);
    console.log('addToWatchLater method called.');
  
    // Retrieve the existing watch later list from local storage
    const storedData = localStorage.getItem('watchLaterList');
    const watchLaterList = storedData ? JSON.parse(storedData) : [];
  
    // Check if the movie is not already in the watch later list
    if (!watchLaterList.find((m: any) => m.id === tvShow.id)) {
      // Add the movie to the watch later list
      watchLaterList.push(tvShow);
  
      // Save the updated watch later list back to local storage
      localStorage.setItem('watchLaterList', JSON.stringify(watchLaterList));
    }
  }
}

