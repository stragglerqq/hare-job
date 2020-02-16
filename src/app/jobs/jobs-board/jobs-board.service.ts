import { Injectable } from '@angular/core';
import { Job, JobQuery } from '@core/job/state';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class JobsBoardService {
  job$: Observable<Job[]>;
  jobsBS = new ReplaySubject<Job[]>();
  categoryId$ = new BehaviorSubject<number[]>([]);
  technologyId$ = new BehaviorSubject<number[]>([]);
  DEBOUNCE_TIME = 500;

  constructor(
    private readonly jobQuery: JobQuery,
  ) {
    this.job$ = combineLatest([this.categoryId$, this.technologyId$]).pipe(
      debounceTime(this.DEBOUNCE_TIME),
      distinctUntilChanged(),
      switchMap(([categoryIds, technologyIds]: [number[], number[]]) => {
        return this.jobQuery.selectAll({filterBy: [
            this.filterByCategoryIds(categoryIds),
            this.filterByTechnologyIds(technologyIds),
        ]});
      }),
      tap((jobs: Job[]) => {
        this.jobsBS.next(jobs);
      })
    );
  }

  getJobs(): Observable<Job[]> {
    return this.job$;
  }

  private filterByCategoryIds(ids: number[]): (job: Job) => boolean {
    return (job: Job) => ids.length ? ids.reduce((acc, id) => {
        return job.categoryIds.includes(id) || acc;
      }, false) : true;
  }

  private filterByTechnologyIds(ids: number[]): (job: Job) => boolean {
    return (job: Job) => ids.length ? ids.reduce((acc, id) => {
      return job.technologyIds.includes(id) || acc;
    }, false) : true;
  }
}
