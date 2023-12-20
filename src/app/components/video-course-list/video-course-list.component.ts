import { Component, OnInit } from '@angular/core'
import { NgFor } from '@angular/common'

import { VideoCourseComponent } from '../video-course/video-course.component'
import { mockedCourses } from '../../data/courses.mock'
import { ICourse } from 'src/app/models/course'

@Component({
  selector: 'app-video-course-list',
  standalone: true,
  imports: [VideoCourseComponent, NgFor],
  templateUrl: './video-course-list.component.html',
  styleUrls: ['./video-course-list.component.scss'],
})
export class VideoCourseListComponent implements OnInit {
  coursesList: ICourse[] = []

  ngOnInit(): void {
    console.log('ngOnInit from list component')
    this.coursesList = mockedCourses
  }

  writeCourseId(courseID: number) {
    console.log('Course id: ', courseID)
  }

  identify(index: number, item: ICourse): number {
    return item.id
  }
}
