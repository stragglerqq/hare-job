import { Injectable } from '@angular/core';
import { EntityState, EntityStore, ID, StoreConfig } from '@datorama/akita';
import { Category } from '@core/category/state/category.model';

export interface CategoryState extends EntityState<Category, ID> {
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'category', idKey: 'id' })
export class CategoryStore extends EntityStore<CategoryState> {

  constructor() {
    super();
  }
}
