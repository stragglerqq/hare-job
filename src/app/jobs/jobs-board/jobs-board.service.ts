import { Injectable } from '@angular/core';
import { Job, JobQuery } from '@core/job/state';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';
import { Salary } from '@core/job/interface/jobDto';
import { HjQuery, HjState } from '@core/state';

@Injectable({ providedIn: 'root' })
export class JobsBoardService {
  job$: Observable<Job[]>;

  DEBOUNCE_TIME = 500;

  constructor(
    private readonly jobQuery: JobQuery,
    private readonly hjQuery: HjQuery,

  ) {
    this.job$ = this.hjQuery.selectBoardViewCurrentFilter$.pipe(
      debounceTime(this.DEBOUNCE_TIME),
      distinctUntilChanged(),
      switchMap((filters: HjState['boardView']['filters']) => {
        return this.jobQuery.selectAll({filterBy: [
            this.filterByCategoryIds(filters.categoryIds),
            this.filterByTechnologyIds(filters.technologyIds),
            this.filterBySalary(filters.salary)
        ]});
      }),

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
