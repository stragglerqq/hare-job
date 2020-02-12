import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailsComponent } from './job-details.component';
import { RouterModule } from '@angular/router';
import { jobDetailsRoutes } from './job-details.routing';



@NgModule({
  declarations: [JobDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(jobDetailsRoutes)
  ]
})
export class JobDetailsModule { }
