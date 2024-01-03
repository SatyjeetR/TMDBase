import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchQuerySubject = new BehaviorSubject<string>('');
  currentSearchQuery: Observable<string> = this.searchQuerySubject.asObservable();

  updateSearchQuery(query: string): void {
    this.searchQuerySubject.next(query);
  }
}
