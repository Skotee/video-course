import { Component } from '@angular/core'

import { MaterialModule } from 'src/app/material.module'

@Component({
  selector: 'app-video-course',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './video-course.component.html',
  styleUrls: ['./video-course.component.scss'],
})
export class VideoCourseComponent {}
