import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryBoxComponent } from './salary-box.component';

describe('SalaryBoxComponent', () => {
  let component: SalaryBoxComponent;
  let fixture: ComponentFixture<SalaryBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
