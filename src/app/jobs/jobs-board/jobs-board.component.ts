import { Component } from '@angular/core';
import { JobsBoardService } from '@jobs/jobs-board/jobs-board.service';

@Component({
  selector: 'app-jobs-board',
  templateUrl: './jobs-board.component.html',
  styleUrls: ['./jobs-board.component.scss']
})
export class JobsBoardComponent {
  job$ = this.jobsBoardService.job$;

  constructor(
    private readonly jobsBoardService: JobsBoardService,
  ) { }

}
