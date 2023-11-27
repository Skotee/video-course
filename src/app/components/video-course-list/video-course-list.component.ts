import { Component } from '@angular/core'
import { VideoCourseComponent } from '../video-course/video-course.component'

@Component({
  selector: 'app-video-course-list',
  standalone: true,
  imports: [VideoCourseComponent],
  templateUrl: './video-course-list.component.html',
  styleUrls: ['./video-course-list.component.scss'],
})
export class VideoCourseListComponent {}
