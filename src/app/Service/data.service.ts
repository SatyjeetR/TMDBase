import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiKey = '120fea759ebbac315ef4029564b6d9ca';
  private apiUrlMovie = 'https://api.themoviedb.org/3/discover/movie';
  private apiUrlTvShow ='https://api.themoviedb.org/3/discover/tv';



  constructor(private http: HttpClient) { }


  getMovieList() {
    const url = `${this.apiUrlMovie}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.get(url);
  }

  getTvList() {
    const url = `${this.apiUrlTvShow}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${this.apiKey}`;
    return this.http.get(url);
  }
  searchMovies(query: string): Observable<any> {
    const url = `${this.apiUrlMovie}/search/movie?query=${query}&api_key=${this.apiKey}`;
    return this.http.get(url);
  }
  
}
