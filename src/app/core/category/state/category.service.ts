import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { CategoryDto } from '@core/category/interface';
import { CategoryStore } from '@core/category/state/category.store';
import { Category, createCategory } from '@core/category/state/category.model';
import { HttpService } from '@core/services/http.service';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private readonly URL: string = 'categories';

  constructor(private readonly _categoryStore: CategoryStore,
              private readonly http: HttpService) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<CategoryDto[]>(this.URL).pipe(
      map((categoryDtos: CategoryDto[]) => categoryDtos.map(createCategory)),
      tap((categories: Category[]) => this._categoryStore.set(categories)));
  }
}
