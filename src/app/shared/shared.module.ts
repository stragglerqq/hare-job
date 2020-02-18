import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TechnologyFilterDialogComponent } from '@jobs/jobs-board/components/dialogs/technology-filter-dialog/technology-filter-dialog.component';
import { CategoryFilterDialogComponent } from '@jobs/jobs-board/components/dialogs/category-filter-dialog/category-filter-dialog.component';
import { SalaryFilterDialogComponent } from '@jobs/jobs-board/components/dialogs/salary-filter-dialog/salary-filter-dialog.component';

const MODULES = [
  CommonModule,
  TranslateModule,
  RouterModule,
  ReactiveFormsModule,
  MaterialModule
];

const COMPONENTS = [
  TechnologyFilterDialogComponent,
  CategoryFilterDialogComponent,
  SalaryFilterDialogComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES,
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ],
  entryComponents: [
    TechnologyFilterDialogComponent,
    CategoryFilterDialogComponent,
    SalaryFilterDialogComponent
  ]
})
export class SharedModule {
}
