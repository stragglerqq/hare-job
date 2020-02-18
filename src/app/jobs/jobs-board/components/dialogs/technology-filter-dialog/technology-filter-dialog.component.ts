import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Technology, TechnologyQuery } from '@core/technology/state';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HjState } from '@core/state';

@Component({
  selector: 'app-technology-filter-dialog',
  templateUrl: './technology-filter-dialog.component.html',
  styleUrls: ['../dialogs.scss']
})
export class TechnologyFilterDialogComponent implements OnInit {
  technologie$: Observable<Technology[]>;

  constructor(
    private readonly dialogRef: MatDialogRef<TechnologyFilterDialogComponent>,
    private readonly technologyQuery: TechnologyQuery,
    @Inject(MAT_DIALOG_DATA) public data: HjState['boardView']['filters']
  ) {}

  ngOnInit(): void {
    this.technologie$ = this.technologyQuery.selectTechnologie$;
  }

  resetAllFilters(): void {
    console.log(this.data);
    this.dialogRef.close();
  }

  applyFilters(): void {
    this.dialogRef.close({test: 'kek'});
  }
}
