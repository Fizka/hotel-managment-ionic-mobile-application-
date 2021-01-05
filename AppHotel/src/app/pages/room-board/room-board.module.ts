import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomBoardPageRoutingModule } from './room-board-routing.module';

import { RoomBoardPage } from './room-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomBoardPageRoutingModule
  ],
  declarations: [RoomBoardPage]
})
export class RoomBoardPageModule {}
