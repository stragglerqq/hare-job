import { Component, OnInit } from '@angular/core';
import { JobsBoardService } from '@jobs/jobs-board/jobs-board.service';
import { MatDialog } from '@angular/material/dialog';
import { HjQuery, HjService, HjState } from '@core/state';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CategoryFilterDialogComponent } from '@jobs/jobs-board/components/dialogs/category-filter-dialog/category-filter-dialog.component';
import { TechnologyFilterDialogComponent } from '@jobs/jobs-board/components/dialogs/technology-filter-dialog/technology-filter-dialog.component';
import { SalaryFilterDialogComponent } from '@jobs/jobs-board/components/dialogs/salary-filter-dialog/salary-filter-dialog.component';
import { Category, CategoryQuery } from '@core/category/state';
import { Technology, TechnologyQuery } from '@core/technology/state';

export enum FilterType {
  CATEGORY,
  TECHNOLOGY,
  SALARY
}

@Component({
  selector: 'app-jobs-filter',
  templateUrl: './jobs-filter.component.html',
  styleUrls: ['./jobs-filter.component.scss']
})
export class JobsFilterComponent implements OnInit {
  filter$: Observable<HjState['boardView']['filters']>;
  filters: HjState['boardView']['filters'];
  filterType = FilterType;
  categorie$: Observable<Category[]>;
  technologie$: Observable<Technology[]>;

  constructor(
    private readonly jobsBoardService: JobsBoardService,
    private readonly hjQuery: HjQuery,
    private readonly hjService: HjService,
    public dialog: MatDialog,
    private readonly categoryQuery: CategoryQuery,
    private readonly technologyQuery: TechnologyQuery
  ) { }

  ngOnInit(): void {
    this.filter$ = this.hjQuery.selectBoardViewCurrentFilter$.pipe(
      tap((filters: HjState['boardView']['filters']) => {
        this.filters = filters;
        this.categorie$ = this.categoryQuery.selectMany(filters.categoryIds);
        this.technologie$ = this.technologyQuery.selectMany(filters.technologyIds);
      }),
    );
  }

  openDialog(type: FilterType): void {
    let dialogClass;
    switch (type) {
      case FilterType.CATEGORY:
        dialogClass = CategoryFilterDialogComponent;
        break;
      case FilterType.TECHNOLOGY:
        dialogClass = TechnologyFilterDialogComponent;
        break;
      case FilterType.SALARY:
        dialogClass = SalaryFilterDialogComponent;
        break;
      default:
        break;
    }

    const dialogRef = this.dialog.open(dialogClass, {
      width: '450px',
      data: {...this.filters},
    });

    dialogRef.afterClosed().subscribe((result: HjState['boardView']['filters']) => {
      if (!result) {
        return;
      }

      this.hjService.updateBoardViewFilters(result);
    });
  }
}
