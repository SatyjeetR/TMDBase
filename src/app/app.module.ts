import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http'; 
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './Components/movie/movie.component';
import { TVShowsComponent } from './Components/tv-shows/tv-shows.component';
import { WatchLaterComponent } from './Components/watch-later/watch-later.component';
import { DataService } from './Service/data.service';
import { FormsModule } from '@angular/forms';
import { SearchService } from './Service/search.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    TVShowsComponent,
    WatchLaterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [DataService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
