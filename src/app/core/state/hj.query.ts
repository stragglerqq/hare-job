import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { HjState, HjStore } from '@core/state/hj.store';

@Injectable({ providedIn: 'root' })
export class HjQuery extends Query<HjState> {

  constructor(protected store: HjStore) {
    super(store);
  }
}
