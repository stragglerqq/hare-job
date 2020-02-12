import { Injectable } from '@angular/core';
import { filterNil, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { TechnologyState, TechnologyStore } from '@core/technology/state/technology.store';
import { Technology } from '@core/technology/state/technology.model';

@Injectable({ providedIn: 'root' })
export class TechnologyQuery extends QueryEntity<TechnologyState> {

  selectTechnologie$: Observable<Technology[]> = this.selectAll().pipe(filterNil);

  constructor(protected store: TechnologyStore) {
    super(store);
  }

}
