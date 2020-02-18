import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HjState } from '@core/state';

@Component({
  selector: 'app-salary-filter-dialog',
  templateUrl: './salary-filter-dialog.component.html',
  styleUrls: ['../dialogs.scss']
})
export class SalaryFilterDialogComponent implements OnInit {

  constructor(
    private readonly dialogRef: MatDialogRef<SalaryFilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HjState['boardView']['filters']
  ) {}

  ngOnInit(): void {

  }

  resetAllFilters(): void {
    console.log(this.data);
    this.dialogRef.close();
  }

  applyFilters(): void {
    this.dialogRef.close({test: 'kek'});
  }

}
