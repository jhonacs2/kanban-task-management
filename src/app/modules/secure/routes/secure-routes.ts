import { Routes } from '@angular/router';
import { MainViewComponent } from '../main/main-view/main-view.component';

export const SECURE_ROUTES: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: 'kanban',
        loadChildren: () => import('../kanban/kanban.module').then(k => k.KanbanModule)
      }
    ]
  }
];
