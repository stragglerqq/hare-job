import { Injectable } from '@angular/core';
import { HjState, HjStore } from '@core/state/hj.store';
import { HjQuery } from '@core/state/hj.query';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HjService {

  constructor(
    private _store: HjStore,
    private _tmQuery: HjQuery,
  ) { }

  updateBoardViewFilters(filters: HjState['boardView']['filters']): Observable<void> {
    return this._store.update((state: HjState) => {
      return {
        ...state,
        ...{boardView: {
              filters: {...filters}
          }}
      };
    });
  }
}
