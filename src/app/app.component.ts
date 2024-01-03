import { Component } from '@angular/core';
import { SearchService } from './Service/search.service';
import { DataService } from './Service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  searchQuery = '';

  constructor(private dataService: DataService) {}

  search() {
    // Send the search query to the DataService
    // this.dataService.setSearchQuery(this.searchQuery);
  }

  isLinkActive(route: string) {
    // Add logic to determine if the link is currently active
    // You can use Angular Router's ActivatedRoute to get the current route and check against the provided route parameter
    // Return true if active, false otherwise
    return true; // replace with your logic
  }
}
