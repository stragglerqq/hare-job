import { Injectable } from '@angular/core';
import { filterNil, Query } from '@datorama/akita';
import { HjState, HjStore } from '@core/state/hj.store';
import { Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HjQuery extends Query<HjState> {

  selectBoardViewCurrentFilter$: Observable<HjState['boardView']['filters']> = this.select((state: HjState) => state.boardView.filters)
    .pipe(filterNil, distinctUntilChanged());

  constructor(protected store: HjStore) {
    super(store);
  }

}
