import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@core/category/state/category.service';
import { take } from 'rxjs/operators';
import { TechnologyService } from '@core/technology/state';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs-container.component.html',
  styleUrls: ['./jobs-container.component.scss']
})
export class JobsContainerComponent {
  constructor(
    private readonly _categoryService: CategoryService,
    private readonly _technologyService: TechnologyService,
  ) {
    this._categoryService.getAll().pipe(take(1)).toPromise();
    this._technologyService.getAll().pipe(take(1)).toPromise();
  }
}
