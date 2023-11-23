import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatInputModule } from '@angular/material/input' // Add this line
import { MatFormFieldModule } from '@angular/material/form-field' // Add this line

import { SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module'
import { MaterialModule } from './material.module'

import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'

import { SearchSectionComponent } from './components/search-section/search-section.component'
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component'
import { CoursesPageComponent } from './pages/courses-page/courses-page.component'
import { VideoCourseListComponent } from './components/video-course-list/video-course-list.component'

@NgModule({
  declarations: [AppComponent, SearchSectionComponent, BreadcrumbsComponent, CoursesPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    VideoCourseListComponent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
