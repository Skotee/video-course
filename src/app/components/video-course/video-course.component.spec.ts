import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCourseComponent } from './video-course.component';

describe('VideoCourseComponent', () => {
  let component: VideoCourseComponent;
  let fixture: ComponentFixture<VideoCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCourseComponent]
    });
    fixture = TestBed.createComponent(VideoCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
