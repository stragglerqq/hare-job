import { Component, Input, OnInit } from '@angular/core';
import { Job } from '@core/job/state';
import { Category, CategoryQuery } from '@core/category/state';
import { Technology, TechnologyQuery } from '@core/technology/state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-row',
  templateUrl: './job-row.component.html',
  styleUrls: ['./job-row.component.scss']
})
export class JobRowComponent {
  @Input() job: Job;

  constructor( private readonly categoryQuery: CategoryQuery,
               private readonly technologyQuery: TechnologyQuery
  ) { }

  getCategory(id: Category['id']): Observable<Category> {
    return this.categoryQuery.selectEntity(id);
  }

  getTechnology(id: Technology['id']): Observable<Technology> {
    return this.technologyQuery.selectEntity(id);
  }
}
