import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, CategoryQuery } from '@core/category/state';
import { Technology, TechnologyQuery } from '@core/technology/state';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FilterType } from '@jobs/jobs-board/components/jobs-filter/jobs-filter.component';
import { HjState } from '@core/state';

@Component({
  selector: 'app-salary-filter-dialog',
  templateUrl: './salary-filter-dialog.component.html',
  styleUrls: ['../dialogs.scss']
})
export class SalaryFilterDialogComponent implements OnInit {

  categorie$: Observable<Category[]>;
  technologie$: Observable<Technology[]>;

  constructor(
    private readonly dialogRef: MatDialogRef<SalaryFilterDialogComponent>,
    private readonly categoryQuery: CategoryQuery,
    private readonly technologyQuery: TechnologyQuery,
    @Inject(MAT_DIALOG_DATA) public data: HjState['boardView']['filters']
  ) {}

  ngOnInit(): void {
    this.categorie$ = this.categoryQuery.selectCategories$;
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
