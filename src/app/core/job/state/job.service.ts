import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { JobDto } from '@core/job/interface';
import { JobStore } from '@core/job/state/job.store';
import { Job, createJob } from '@core/job/state/job.model';
import { HttpService } from '@core/services/http.service';

@Injectable({ providedIn: 'root' })
export class JobService {
  private readonly URL: string = 'jobs';

  constructor(private readonly _jobStore: JobStore,
              private readonly http: HttpService) {
  }

  getAll(): Observable<Job[]> {
    return this.http.get<JobDto[]>(this.URL).pipe(
      map((jobDtos: JobDto[]) => jobDtos.map(createJob)),
      tap((jobs: Job[]) => this._jobStore.set(jobs)));
  }
}
