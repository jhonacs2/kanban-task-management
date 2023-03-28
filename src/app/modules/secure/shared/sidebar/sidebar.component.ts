import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { first, interval } from 'rxjs';
import { slideInOutAnimation } from '../../animations/slideInAnimation.function';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent {
  testif: boolean = false;

  constructor() {
    interval(3000).pipe(first()).subscribe(() => this.testif = true);
  }
}
