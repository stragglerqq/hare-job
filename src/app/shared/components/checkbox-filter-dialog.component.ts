import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-checkbox-filter-dialog',
  templateUrl: 'checkbox-filter-dialog.component.html',
  styleUrls: ['./checkbox-filter-dialog.component.scss']

})
export class CheckboxFilterDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CheckboxFilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  clickYest(): void {
    this.dialogRef.close({test: 'kek'});
  }
}
