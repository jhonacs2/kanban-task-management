import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main/main-view/main-view.component';
import { SecureRoutesModule } from './routes/secure-routes.module';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    MainViewComponent,
    NavBarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SecureRoutesModule
  ]
})
export class SecureModule {
}
