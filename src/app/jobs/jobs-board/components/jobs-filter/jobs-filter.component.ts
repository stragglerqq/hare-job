import { Component, OnInit } from '@angular/core';
import { JobsBoardService } from '@jobs/jobs-board/jobs-board.service';

@Component({
  selector: 'app-jobs-filter',
  templateUrl: './jobs-filter.component.html',
  styleUrls: ['./jobs-filter.component.scss']
})
export class JobsFilterComponent implements OnInit {

  constructor(
    private readonly jobsBoardService: JobsBoardService,
  ) { }

  ngOnInit(): void {
  }

  addCategory(): void {
    this.jobsBoardService.categoryId$.next([1]);
  }

  addTechnology(): void {
    this.jobsBoardService.technologyId$.next([3]);
  }
}
