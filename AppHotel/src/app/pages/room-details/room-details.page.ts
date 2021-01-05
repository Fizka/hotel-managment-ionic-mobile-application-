import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../model/room';
import {ActivatedRoute, Router} from '@angular/router';
import {RoomService} from '../../servis/room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.page.html',
  styleUrls: ['./room-details.page.scss'],
})
export class RoomDetailsPage implements OnInit {

  room: Room;
  id: any;

  constructor(private router: Router, private route: ActivatedRoute, private roomService: RoomService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.getRoom();
  }

  getRoom() {
    this.roomService.getRoom(this.id).subscribe(
      (data) => {
        this.room = data;
      },
      error => console.log(error)
    );
  }

  goBack(){
    this.router.navigate(['/room']);
  }

  goToReservationPage(){
    this.router.navigate(['/reservation', this.room.idRoom]);
  }

}
