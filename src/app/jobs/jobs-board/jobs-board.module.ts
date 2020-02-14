import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsBoardComponent } from './jobs-board.component';
import { RouterModule } from '@angular/router';
import { jobsBoardRoutes } from './jobs-board.routing';
import { JobRowComponent } from './components/job-row/job-row.component';
import { SalaryBoxComponent } from './components/salary-box/salary-box.component';

@NgModule({
  declarations: [JobsBoardComponent, JobRowComponent, SalaryBoxComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(jobsBoardRoutes)
  ]
})
export class JobsBoardModule { }
