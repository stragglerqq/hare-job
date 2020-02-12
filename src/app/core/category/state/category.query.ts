import { Injectable } from '@angular/core';
import { filterNil, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { CategoryState, CategoryStore } from '@core/category/state/category.store';
import { Category } from '@core/category/state/category.model';

@Injectable({ providedIn: 'root' })
export class CategoryQuery extends QueryEntity<CategoryState> {

  selectCategories$: Observable<Category[]> = this.selectAll().pipe(filterNil);

  constructor(protected store: CategoryStore) {
    super(store);
  }

}
