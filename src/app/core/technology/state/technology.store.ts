import { Injectable } from '@angular/core';
import { EntityState, EntityStore, ID, StoreConfig } from '@datorama/akita';
import { Technology } from '@core/technology/state/technology.model';

export interface TechnologyState extends EntityState<Technology, ID> {
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'technology', idKey: 'id' })
export class TechnologyStore extends EntityStore<TechnologyState> {

  constructor() {
    super();
  }
}
