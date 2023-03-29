import { Component } from '@angular/core';
import { BoardResponse } from '../../interfaces/board-response.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})

export class SidebarComponent {
  boardList: BoardResponse[];

  constructor() {
    this.boardList = [
      { id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', boardName: 'Platform Launch' },
      { id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', boardName: 'Marketing Plan' },
      { id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d', boardName: 'RoadMap' },
    ];
  }
}
