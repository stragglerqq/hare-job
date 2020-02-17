import { NgModule } from '@angular/core';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

const MAT_SNACK_BAR_GLOBAL_CONFIG: MatSnackBarConfig = {
  duration: 10000,
  verticalPosition: 'bottom',
  horizontalPosition: 'center',
};

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule
];

@NgModule({
  exports: MATERIAL_MODULES,
  providers: [],
})
export class MaterialModule {
}
