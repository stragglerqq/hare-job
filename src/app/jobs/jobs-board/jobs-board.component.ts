import { Component } from '@angular/core';
import { JobQuery } from '@core/job/state';
import { JobsBoardService } from '@jobs/jobs-board/jobs-board.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-jobs-board',
  templateUrl: './jobs-board.component.html',
  styleUrls: ['./jobs-board.component.scss']
})
export class JobsBoardComponent {
  job$ = this.jobsBoardService.getJobs();

  constructor(
    private readonly jobsBoardService: JobsBoardService,
  ) { }

}
