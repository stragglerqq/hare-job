import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Salary } from '@core/job/interface/jobDto';

export interface HjState {
  boardView: {
    filters: {
      categoryIds: number[],
      technologyIds: number[],
      salary: Salary
    }
  };
}

export function createInitialState(params?: Partial<HjState>): HjState {
  return {
    boardView: {
      filters: {
        categoryIds: [],
        technologyIds: [],
        salary: null
      }
    }
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'HJ' })
export class HjStore extends Store<HjState> {

  constructor(
  ) {
    super(createInitialState());
  }
}
