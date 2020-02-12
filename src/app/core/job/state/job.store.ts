import { Injectable } from '@angular/core';
import { EntityState, EntityStore, ID, StoreConfig } from '@datorama/akita';
import { Job } from '@core/job/state/job.model';

export interface JobState extends EntityState<Job, ID> {
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'job', idKey: 'id' })
export class JobStore extends EntityStore<JobState> {

  constructor() {
    super();
  }
}
