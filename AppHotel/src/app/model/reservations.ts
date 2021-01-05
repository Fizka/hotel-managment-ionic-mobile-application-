export class Reservation {
  idReservation: number;
  startData: Date;
  endData: Date;
  howLong: number;
  customerid: number;
  roomid: number;
  room: string;
  customer: string;
  status: boolean;


  constructor(startData: Date, endData: Date, howLong: number, customerid: number, roomid: number, status: boolean) {
    this.startData = startData;
    this.endData = endData;
    this.howLong = howLong;
    this.customerid = customerid;
    this.roomid = roomid;
    this.status = status;
  }
}
