import { Injectable } from '@angular/core';
import { Job, JobQuery } from '@core/job/state';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Salary } from '@core/job/interface/jobDto';

@Injectable({ providedIn: 'root' })
export class JobsBoardService {
  job$: Observable<Job[]>;
  jobsBS = new ReplaySubject<Job[]>();
  categoryId$ = new BehaviorSubject<number[]>([]);
  technologyId$ = new BehaviorSubject<number[]>([]);
  salary$ = new BehaviorSubject<Salary>(null);
  DEBOUNCE_TIME = 500;

  constructor(
    private readonly jobQuery: JobQuery,
  ) {
    this.job$ = combineLatest([this.categoryId$, this.technologyId$, this.salary$]).pipe(
      debounceTime(this.DEBOUNCE_TIME),
      distinctUntilChanged(),
      switchMap(([categoryIds, technologyIds, salary]:
                   [number[], number[], Salary]) => {
        return this.jobQuery.selectAll({filterBy: [
            this.filterByCategoryIds(categoryIds),
            this.filterByTechnologyIds(technologyIds),
            this.filterBySalary(salary)
        ]});
      }),
      tap((jobs: Job[]) => {
        this.jobsBS.next(jobs);
      })
    );
  }

  private filterBySalary(salary: Salary): (job: Job) => boolean {
    return (job: Job) => true;
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
