import { Component, OnInit } from '@angular/core';
import { ResultModel } from './result-model';
import { SearchModel } from './search-model';
import { SearchService } from './search-service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: SearchModel = { username: '' };
  result: ResultModel = { login: '', location: '', avatar_url: '', errorMessage: '' };
  loading: Boolean = false;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search_click() {
    this.loading = true;
    this.searchService.searchUser(this.search)
      .subscribe((result) => {
        this.result = result;
      }, (error) => {
        this.loading = false;
        this.result = { errorMessage: `Error on searching the user... ${error ? JSON.stringify(error) : ''}` };
      },
        () => {
          this.loading = false;
        })
  }

}
