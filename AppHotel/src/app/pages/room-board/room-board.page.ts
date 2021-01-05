import { Component, OnInit } from '@angular/core';
import {Room} from '../../model/room';
import {Router} from '@angular/router';
import {RoomService} from '../../servis/room.service';

@Component({
  selector: 'app-room-board',
  templateUrl: './room-board.page.html',
  styleUrls: ['./room-board.page.scss'],
})
export class RoomBoardPage implements OnInit {
  rooms: Room[];
  constructor(private router: Router, private roomService: RoomService) { }

  ngOnInit() {
    this.loadData();
    console.log(this.rooms);
  }

  goToDetails(id){
    console.log(id)
    this.router.navigate(['/roomdetails', id]);
  }

  loadData(){
    this.roomService.getRoomsList().subscribe((data) => {
      this.rooms = data;
      console.log(data);
    });
  }

}
