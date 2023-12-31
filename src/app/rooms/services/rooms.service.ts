import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { environment } from 'src/environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  // roomsList: RoomList[] = [
  //   {
  //     roomNumber: '1',
  //     roomType: 'Deluxe Room',
  //     amenities: 'Air Conditioner, free Wi-fi, TV, bathroom, Kitchen',
  //     price: 500,
  //     photos:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkxRAHhvrOZfFUawkqWMjuYwX-qBtRXz3QWyfvcVv&s',
  //     checkinTime: new Date('11-Nov-2021'),
  //     checkoutTime: new Date('12-Nov-2021'),
  //     rating: 4.5,
  //   },
  //   {
  //     roomNumber: '2',
  //     roomType: 'Deluxe Room',
  //     amenities: 'Air Conditioner, free Wi-fi, TV, bathroom, Kitchen',
  //     price: 1000,
  //     photos:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkxRAHhvrOZfFUawkqWMjuYwX-qBtRXz3QWyfvcVv&s',
  //     checkinTime: new Date('11-Nov-2021'),
  //     checkoutTime: new Date('12-Nov-2021'),
  //     rating: 3.423,
  //   },
  //   {
  //     roomNumber: '3',
  //     roomType: 'Private Suite',
  //     amenities: 'Air Conditioner, free Wi-fi, TV, bathroom, Kitchen',
  //     price: 1500,
  //     photos:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkxRAHhvrOZfFUawkqWMjuYwX-qBtRXz3QWyfvcVv&s',
  //     checkinTime: new Date('11-Nov-2021'),
  //     checkoutTime: new Date('12-Nov-2021'),
  //     rating: 2.6,
  //   },
  // ];
  roomList: RoomList[] = [];

  //  headers=new HttpHeaders({'token':'1234567asdfg'})
  getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(shareReplay(1));

  constructor(
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig,
    private http: HttpClient
  ) {
    console.log('room service initialized');
    console.log(environment.apiEndpoint);
  }

  getRooms() {
    
    return this.http.get<RoomList[]>('/api/rooms'); //generics are used to define thr type ofdata that is returned from the server
  }

  addRooms(room: RoomList) {
    return this.http.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>('/api/rooms/' + room.roomNumber, room);
  }

  deleteRoom(id: String) {
    return this.http.delete<RoomList[]>('/api/rooms/' + id);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true,
      }
    );
    return this.http.request(request);
  }
}
