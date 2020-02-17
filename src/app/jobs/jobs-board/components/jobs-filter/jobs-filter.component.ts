import { Component, OnInit } from '@angular/core';
import { JobsBoardService } from '@jobs/jobs-board/jobs-board.service';
import { MatDialog } from '@angular/material/dialog';
import { CheckboxFilterDialogComponent } from '@components/checkbox-filter-dialog.component';

@Component({
  selector: 'app-jobs-filter',
  templateUrl: './jobs-filter.component.html',
  styleUrls: ['./jobs-filter.component.scss']
})
export class JobsFilterComponent implements OnInit {

  constructor(
    private readonly jobsBoardService: JobsBoardService,
    public dialog: MatDialog,
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(CheckboxFilterDialogComponent, {
      width: '250px',
      data: {name: 'p', animal: 'pp0'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ' + result);
    });
  }
  ngOnInit(): void {
  }

  addCategory(): void {
    this.jobsBoardService.categoryId$.next([]);
  }

  addTechnology(): void {
    this.jobsBoardService.technologyId$.next([]);
  }
}
