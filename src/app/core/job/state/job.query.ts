import { Injectable } from '@angular/core';
import { filterNil, QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { JobState, JobStore } from '@core/job/state/job.store';
import { Job } from '@core/job/state/job.model';

@Injectable({ providedIn: 'root' })
export class JobQuery extends QueryEntity<JobState> {

  selectJob$: Observable<Job[]> = this.selectAll().pipe(filterNil);

  constructor(protected store: JobStore) {
    super(store);
  }

}
