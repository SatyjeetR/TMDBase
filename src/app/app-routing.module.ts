import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './Components/movie/movie.component';
import { TVShowsComponent } from './Components/tv-shows/tv-shows.component';
import { WatchLaterComponent } from './Components/watch-later/watch-later.component';

const routes: Routes = [
  { path: '', component: MovieComponent },
  { path: 'tv-shows', component: TVShowsComponent },
  { path: 'watch-later', component: WatchLaterComponent },
  // Add additional routes as needed
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
