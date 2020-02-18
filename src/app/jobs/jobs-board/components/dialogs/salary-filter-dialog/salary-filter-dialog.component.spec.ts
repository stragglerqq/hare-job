import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryFilterDialogComponent } from './salary-filter-dialog.component';

describe('SalaryFilterDialogComponent', () => {
  let component: SalaryFilterDialogComponent;
  let fixture: ComponentFixture<SalaryFilterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryFilterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
