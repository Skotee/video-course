import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'

@Component({
  selector: 'app-video-course',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './video-course.component.html',
  styleUrls: ['./video-course.component.scss'],
})
export class VideoCourseComponent {}
