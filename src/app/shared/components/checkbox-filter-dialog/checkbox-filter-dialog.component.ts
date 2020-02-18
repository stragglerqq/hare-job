import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HjState } from '@core/state';
import { Category, CategoryQuery } from '@core/category/state';
import { Technology, TechnologyQuery } from '@core/technology/state';
import { FilterType } from '@jobs/jobs-board/components/jobs-filter/jobs-filter.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkbox-filter-dialog',
  templateUrl: 'checkbox-filter-dialog.component.html',
  styleUrls: ['./checkbox-filter-dialog.component.scss']

})
export class CheckboxFilterDialogComponent implements OnInit {
  categorie$: Observable<Category[]>;
  technologie$: Observable<Technology[]>;

  constructor(
    private readonly dialogRef: MatDialogRef<CheckboxFilterDialogComponent>,
    private readonly categoryQuery: CategoryQuery,
    private readonly technologyQuery: TechnologyQuery,
    @Inject(MAT_DIALOG_DATA) public data: {type: FilterType, filters: HjState['boardView']['filters']}
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

  isCategoryType(): boolean {
    return this.data.type === FilterType.CATEGORY;
  }

  isTechnologyType(): boolean {
    return this.data.type === FilterType.TECHNOLOGY;
  }

  isSalaryType(): boolean {
    return this.data.type === FilterType.SALARY;
  }
}
