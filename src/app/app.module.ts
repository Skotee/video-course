import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { HeaderComponent } from './components/header/header.component'
import { UserLoginComponent } from './components/user-login/user-login.component'
import { SearchSectionComponent } from './components/search-section/search-section.component'
import { VideoCourseListComponent } from './components/video-course-list/video-course-list.component'
import { VideoCourseComponent } from './components/video-course/video-course.component'
import { FooterComponent } from './components/footer/footer.component'
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component'
import { LogoComponent } from './components/logo/logo.component'
import { CoursesPageComponent } from './pages/courses-page/courses-page.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserLoginComponent,
    SearchSectionComponent,
    VideoCourseListComponent,
    VideoCourseComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    CoursesPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
