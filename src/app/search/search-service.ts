import { Injectable } from '@angular/core';
import { ResultModel } from './result-model';
import { SearchModel } from './search-model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public searchUser(searchModel: SearchModel): Observable<ResultModel> {
    if (searchModel.username == '') {
      return of({ login: '', avatar_url: '', location: '', errorMessage: 'The username is required.' });
    }

    return this.http.get<ResultModel>(`https://api.github.com/users/${searchModel.username}`);
  }

}
