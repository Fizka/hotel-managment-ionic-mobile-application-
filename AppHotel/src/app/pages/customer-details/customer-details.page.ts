import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../servis/customer.service';
import {Reservation} from '../../model/reservations';
import {Observable} from 'rxjs';
import {ReservationService} from '../../servis/reservation.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.page.html',
  styleUrls: ['./customer-details.page.scss'],
})
export class CustomerDetailsPage implements OnInit {

  reservation: Reservation[];
  customer: Customer;
  id: number;

  constructor(private userService: CustomerService, private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.customer = JSON.parse(sessionStorage.getItem('login'));
    this.id = this.customer.idCustomer;
    this.reloadDate();
  }

  reloadDate() {
    this.userService.getCustomer(this.id).subscribe((data) => {
      this.customer = data;
      this.reservationService.getReservationByCustomerId(this.customer.idCustomer)
        .subscribe(dataSub => this.reservation = dataSub);
    });
  }

  confirm(reservationData) {
    reservationData.status = true;
    this.reservationService.updateReservation(reservationData.idReservation, reservationData)
      .subscribe(data => console.log(data));
  }

}
