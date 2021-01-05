import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomBoardPage } from './room-board.page';

const routes: Routes = [
  {
    path: '',
    component: RoomBoardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomBoardPageRoutingModule {}
