export class Reservet {
  idReservet: number;
  dateReservation: Date;
  customerId: number;
  Room: number;

  constructor(reservet: Reservet) {
    this.dateReservation = reservet.dateReservation;
    this.customerId = reservet.customerId;
    this.idReservet = reservet.idReservet;
    this.Room = reservet.Room;
  }
}
