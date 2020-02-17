import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxFilterDialogComponent } from '@components/checkbox-filter-dialog.component';

const MODULES = [
  CommonModule,
  TranslateModule,
  RouterModule,
  ReactiveFormsModule,
  MaterialModule
];

const COMPONENTS = [
  CheckboxFilterDialogComponent
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
  entryComponents: [CheckboxFilterDialogComponent]
})
export class SharedModule {
}
