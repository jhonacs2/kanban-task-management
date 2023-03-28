import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {


  constructor() {
  }

  toggleAsideVisibility( logoKanbanHtml: HTMLDivElement ): void {
    console.log('loguito', logoKanbanHtml);
  }
}
