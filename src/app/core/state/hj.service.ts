import { Injectable } from '@angular/core';
import { HjStore } from '@core/state/hj.store';
import { HjQuery } from '@core/state/hj.query';

@Injectable({ providedIn: 'root' })
export class TmService {

  constructor(
    private _store: HjStore,
    private _tmQuery: HjQuery,
  ) { }
}
