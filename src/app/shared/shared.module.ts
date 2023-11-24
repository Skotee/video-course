import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MaterialModule } from '../material.module'

import { FooterComponent } from '../components/footer/footer.component'
import { HeaderComponent } from '../components/header/header.component'
import { LogoComponent } from '../components/logo/logo.component'
import { UserLoginComponent } from '../components/user-login/user-login.component'

@NgModule({
  declarations: [FooterComponent, LogoComponent, HeaderComponent, UserLoginComponent],
  imports: [CommonModule, MaterialModule],
  exports: [FooterComponent, LogoComponent, HeaderComponent],
})
export class SharedModule {}
