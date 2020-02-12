import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteStates } from './shared/enums/RouteStates';
import { JobsContainerComponent } from './jobs/jobs-container.component';

const routes: Routes = [
  {
    path: '',
    component: JobsContainerComponent,
    children: [
      {path: '', redirectTo: `/${RouteStates.JOBS}`, pathMatch: 'full'},
      {
        path: RouteStates.JOBS,
        loadChildren: () => import('./jobs/jobs-board/jobs-board.module').then(m => m.JobsBoardModule),
      },
      {
        path: `${RouteStates.JOBS}/:id`,
        loadChildren: () => import('./jobs/job-details/job-details.module').then(m => m.JobDetailsModule),
      },
      { path: '**', redirectTo: `/${RouteStates.JOBS}`, pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
