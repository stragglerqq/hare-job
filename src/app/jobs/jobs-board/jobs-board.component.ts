import { Component, OnInit } from '@angular/core';
import { JobQuery } from '@core/job/state';
import { Category, CategoryQuery } from '@core/category/state';
import { Technology, TechnologyQuery } from '@core/technology/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jobs-board',
  templateUrl: './jobs-board.component.html',
  styleUrls: ['./jobs-board.component.scss']
})
export class JobsBoardComponent {
  job$ = this.jobQuery.selectJob$;

  constructor(
    private readonly jobQuery: JobQuery,
    private readonly categoryQuery: CategoryQuery,
    private readonly technologyQuery: TechnologyQuery
  ) { }

  getCategory(id: Category['id']): Observable<Category> {
    return this.categoryQuery.selectEntity(id);
  }

  getTechnology(id: Technology['id']): Observable<Technology> {
    return this.technologyQuery.selectEntity(id);
  }
}
