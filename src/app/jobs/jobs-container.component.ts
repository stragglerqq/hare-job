import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@core/category/state/category.service';
import { take } from 'rxjs/operators';
import { TechnologyService } from '@core/technology/state';
import { JobService } from '@core/job/state';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs-container.component.html',
  styleUrls: ['./jobs-container.component.scss']
})
export class JobsContainerComponent {
  constructor(
    private readonly _categoryService: CategoryService,
    private readonly _technologyService: TechnologyService,
    private readonly _jobService: JobService,
  ) {
    this._categoryService.getAll().pipe(take(1)).toPromise();
    this._technologyService.getAll().pipe(take(1)).toPromise();
    this._jobService.getAll().pipe(take(1)).toPromise();
  }
}
