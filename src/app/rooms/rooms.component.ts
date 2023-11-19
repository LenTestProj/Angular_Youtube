import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomsList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.roomsList=[
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, free Wi-fi, TV, bathroom, Kitchen',
        price: 500,
        photos:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkxRAHhvrOZfFUawkqWMjuYwX-qBtRXz3QWyfvcVv&s',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating:4.5
      },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, free Wi-fi, TV, bathroom, Kitchen',
        price: 1000,
        photos:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkxRAHhvrOZfFUawkqWMjuYwX-qBtRXz3QWyfvcVv&s',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating:3.423
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, free Wi-fi, TV, bathroom, Kitchen',
        price: 1500,
        photos:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkxRAHhvrOZfFUawkqWMjuYwX-qBtRXz3QWyfvcVv&s',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        rating:2.6
      },
    ]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
