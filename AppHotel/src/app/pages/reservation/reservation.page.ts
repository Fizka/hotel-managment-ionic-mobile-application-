import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Room} from '../../model/room';
import {RoomService} from '../../servis/room.service';
import {ReservationService} from '../../servis/reservation.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Reservet} from '../../model/reservet';
import {Customer} from '../../model/customer';
import {Observable} from 'rxjs';
import {Reservation} from '../../model/reservations';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  room: Room;
  id: any;
  customer: Customer;
  reservets: Reservet[];
  months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień',
    'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień',
    'Pażdziernik', 'Listopad', 'Grudzień'];
  contactForm: FormGroup;
  dni = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18',
    '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  miesiacToDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  EndDate: Date;
  StartDate: Date;
  todaydate = new Date();
  years = [2020, 2021];

  constructor(private router: Router, private fb: FormBuilder, private route: ActivatedRoute,
              private roomService: RoomService, private reservationservice: ReservationService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.loadData();
    this.contactForm = this.fb.group({
      monthStart: [null],
      dayStart: [null],
      yearStart: [null],
      monthEnd: [null],
      dayEnd: [null],
      yearEnd: [null]
    });
    this.customer = JSON.parse(sessionStorage.getItem('login'));
  }

  loadData() {
    this.roomService.getRoom(this.id).subscribe(
      (data) => {
        this.room = data;
        this.reservationservice.getReservetByRoomId(this.room.idRoom).subscribe((rows) => {
          this.reservets = rows;
        });
      },
      error => console.log(error)
    );
  }

  getDays() {
    console.log('getDays!');
    const month = this.months.indexOf(this.contactForm.get('monthStart').value);
    const kaldat = new Date(this.todaydate.getFullYear(), month, 1);
    const daysInMonth = this.miesiacToDays[kaldat.getMonth()];
    const daysfinally = new Array();
    const filterData = Array.of(this.reservets);
    if (daysInMonth !== 31) {
      this.dni.splice(daysInMonth);
    }
    console.log(this.reservets);
    /*
    const daysFromReservation =
      filterData.filter(
        (row) => {
          return new Date(row.dateReservation).getMonth() === month;
        })
        .map(row => row.dateReservation);
    console.log(daysFromReservation);
    daysFromReservation.forEach(
      (rows: string) => {
        console.log(rows);
        const part = rows.toString().split('-');
        daysfinally.push(part[2]);
        this.dni = this.dni.filter(row => row !== part[2]);
      }
    );
    */

    console.log(daysfinally);
    console.log(this.dni);
  }

  onSubmit() {
    const monthStart = this.months.indexOf(this.contactForm.get('monthStart').value) + 1;
    const monthEnd = this.months.indexOf(this.contactForm.get('monthEnd').value) + 1;
    console.log(this.contactForm.get('monthStart').value + ' ' +
      this.contactForm.get('dayStart').value + ' ' +
      this.contactForm.get('yearStart').value + ' ' +
      this.contactForm.get('monthEnd').value + ' ' +
      this.contactForm.get('dayEnd').value + ' ' +
      this.contactForm.get('yearEnd').value);
    this.StartDate = new Date(this.contactForm.get('yearStart').value +
      '-' + monthStart + '-' + this.contactForm.get('dayStart').value);
    this.EndDate = new Date(this.contactForm.get('yearEnd').value +
      '-' + monthEnd + '-' + this.contactForm.get('dayEnd').value);

    const howLong = (this.EndDate.getTime() - this.StartDate.getTime()) / (1000 * 3600 * 24);
    console.log(howLong);
    console.log(this.StartDate);
    console.log(this.EndDate);
    const reservation: Reservation = new Reservation(this.StartDate, this.EndDate, this.room.idRoom, this.customer.idCustomer, howLong, false);
    console.log(this.StartDate);
    this.reservationservice.createReservation(this.room.idRoom, this.customer.idCustomer, reservation)
      .subscribe(data => this.router.navigate(['/roomdetails', this.room.idRoom]));
  }

  goToRoom() {
    this.router.navigate(['/roomdetails', this.room.idRoom]);
  }

}
