import { Component, EventEmitter, Input, Output, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

import { ICourse } from '../../models/course';

@Component({
  selector: 'app-video-course',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './video-course.component.html',
  styleUrls: ['./video-course.component.scss'],
})
export class VideoCourseComponent implements OnInit, OnChanges {
  @Input() course: ICourse = {} as ICourse;
  @Output() CourseIdEvent = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges comes first');

    if (changes['course']) {
      console.log('Previous course:', changes['course'].previousValue);
      console.log('Current course:', changes['course'].currentValue);
    }
  }

  ngOnInit(): void {
    console.log('ngOnInit comes after onChanges, from item component');

    if (!this.course) {
      console.warn('No course was provided!');
    }
    console.log('ngOnInit - course', this.course);
  }

  typeId(value: number) {
    this.CourseIdEvent.emit(value);
  }

  timeConvert(duration: number) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return hours + 'h ' + minutes + 'min';
  }
}
