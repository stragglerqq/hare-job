import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsBoardComponent } from './jobs-board.component';
import { RouterModule } from '@angular/router';
import { jobsBoardRoutes } from './jobs-board.routing';

@NgModule({
  declarations: [JobsBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(jobsBoardRoutes)
  ]
})
export class JobsBoardModule { }
