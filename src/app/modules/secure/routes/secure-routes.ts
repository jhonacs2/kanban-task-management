import { Routes } from '@angular/router';
import { MainViewComponent } from '../main/main-view/main-view.component';
import * as path from 'path';

export const SECURE_ROUTES: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: 'kanban',
        loadChildren: () => import('../kanban/kanban.module').then(k => k.KanbanModule)
      },
      {
        path: '',
        redirectTo: 'kanban',
        pathMatch: 'full'
      }
    ]
  }
];
