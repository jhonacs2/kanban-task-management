import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBoardComponent } from './pages/main-board/main-board.component';
import { KanbanRoutesModule } from './routes/kanban-routes.module';


@NgModule({
  declarations: [
    MainBoardComponent,
  ],
  imports: [
    CommonModule,
    KanbanRoutesModule
  ]
})
export class KanbanModule { }
