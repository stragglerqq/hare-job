import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, CategoryQuery } from '@core/category/state';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HjState } from '@core/state';

@Component({
  selector: 'app-category-filter-dialog',
  templateUrl: './category-filter-dialog.component.html',
  styleUrls: ['../dialogs.scss']
})
export class CategoryFilterDialogComponent implements OnInit {
  categorie$: Observable<Category[]>;

  constructor(
    private readonly dialogRef: MatDialogRef<CategoryFilterDialogComponent>,
    private readonly categoryQuery: CategoryQuery,
    @Inject(MAT_DIALOG_DATA) public data: HjState['boardView']['filters']
  ) {}

  ngOnInit(): void {
    this.categorie$ = this.categoryQuery.selectCategories$;
  }


  isChecked(id: number): boolean {
    return this.data.categoryIds.indexOf(id) > -1;
  }

  onChange(id: number): void {
    this.data.categoryIds = this.isChecked(id) ?
      this.data.categoryIds.filter((itemId: number) => id !== itemId) :
      [...this.data.categoryIds, id];
  }

  resetAllFilters(): void {
    this.data.categoryIds = [];
    this.dialogRef.close(this.data);
  }

  applyFilters(): void {
    this.dialogRef.close(this.data);
  }
}
