import { Component } from '@angular/core';
import { JobQuery } from '@core/job/state';

@Component({
  selector: 'app-jobs-board',
  templateUrl: './jobs-board.component.html',
  styleUrls: ['./jobs-board.component.scss']
})
export class JobsBoardComponent {
  job$ = this.jobQuery.selectJob$;

  constructor(
    private readonly jobQuery: JobQuery,
  ) { }

}
