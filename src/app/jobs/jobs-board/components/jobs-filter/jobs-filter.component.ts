import { Component, OnInit } from '@angular/core';
import { JobsBoardService } from '@jobs/jobs-board/jobs-board.service';
import { MatDialog } from '@angular/material/dialog';
import { CheckboxFilterDialogComponent } from '@components/checkbox-filter-dialog/checkbox-filter-dialog.component';
import { HjQuery, HjState } from '@core/state';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CategoryFilterDialogComponent } from '@jobs/jobs-board/components/dialogs/category-filter-dialog/category-filter-dialog.component';
import { TechnologyFilterDialogComponent } from '@jobs/jobs-board/components/dialogs/technology-filter-dialog/technology-filter-dialog.component';
import { SalaryFilterDialogComponent } from '@jobs/jobs-board/components/dialogs/salary-filter-dialog/salary-filter-dialog.component';

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

  constructor(
    private readonly jobsBoardService: JobsBoardService,
    private readonly hjQuery: HjQuery,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.filter$ = this.hjQuery.selectBoardViewCurrentFilter$.pipe(
      tap((filters: HjState['boardView']['filters']) => this.filters = filters)
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

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }

      this.filters = {...result};
    });
  }
}
