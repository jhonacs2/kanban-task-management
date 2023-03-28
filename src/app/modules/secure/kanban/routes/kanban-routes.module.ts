import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KANBAN_ROUTES } from './kanban-routes';

@NgModule({
  imports: [RouterModule.forChild(KANBAN_ROUTES)],
  exports: [RouterModule]
})
export class KanbanRoutesModule {
}
