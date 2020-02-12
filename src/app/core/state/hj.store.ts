import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface HjState {
  name: string;
}

export function createInitialState(params?: Partial<HjState>): HjState {
  return {name: 'test'};
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'HJ' })
export class HjStore extends Store<HjState> {

  constructor(
  ) {
    super(createInitialState());
  }
}
