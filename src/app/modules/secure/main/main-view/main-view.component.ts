import { Component } from '@angular/core';
import { slideInOutAnimation } from '../../animations/slideInAnimation.function';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  animations: [slideInOutAnimation]
})
export class MainViewComponent {

  sideBarVisible = true;

  toggleSidebar() {
    this.sideBarVisible = !this.sideBarVisible;
  }
}
