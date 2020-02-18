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

  isChecked(id: number): boolean {
    return this.data.technologyIds.indexOf(id) > -1;
  }

  onChange(id: number): void {
    this.data.technologyIds = this.isChecked(id) ?
      this.data.technologyIds.filter((itemId: number) => id !== itemId) :
      [...this.data.technologyIds, id];
  }

  resetAllFilters(): void {
    this.data.technologyIds = [];
    this.dialogRef.close(this.data);
  }

  applyFilters(): void {
    this.dialogRef.close(this.data);
  }
}
