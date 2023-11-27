import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCourseListComponent } from './video-course-list.component';

describe('VideoCourseListComponent', () => {
  let component: VideoCourseListComponent;
  let fixture: ComponentFixture<VideoCourseListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCourseListComponent]
    });
    fixture = TestBed.createComponent(VideoCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
