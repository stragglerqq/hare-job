import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyFilterDialogComponent } from './technology-filter-dialog.component';

describe('TechnologyFilterDialogComponent', () => {
  let component: TechnologyFilterDialogComponent;
  let fixture: ComponentFixture<TechnologyFilterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyFilterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
