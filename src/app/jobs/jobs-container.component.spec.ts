import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsContainerComponent } from './jobs-container.component';

describe('JobsComponent', () => {
  let component: JobsContainerComponent;
  let fixture: ComponentFixture<JobsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
