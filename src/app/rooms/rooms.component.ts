import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  SkipSelf,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = true;
  selectedRoom!: RoomList;
  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20,
  };
  title = 'Room List';
  roomsList: RoomList[] = [];

  stream = new Observable((observer) => {
    observer.next('user 1');
    observer.next('user 2');
    observer.next('user 3');
    observer.complete();
    // observer.error
  });

  totalBytes = 0;
  subscription!: Subscription;
  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  //Subject is the base class for all streams in RXJS

  //room stream varaible stored in rooms$

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err)=>{
      console.log(err);
      this.error$.next(err.message);
      return of([])
    })
  );

  priceFilter = new FormControl(0);

  roomsCount$=this.roomsService.getRooms$.pipe(map((rooms)=>rooms.length))

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  // roomService=new RoomsService()

  //@skipSelf tells the component to look for service globally but not in the current component
  constructor(@SkipSelf() private roomsService: RoomsService,private configService:ConfigService) {}

  ngAfterViewChecked(): void {
    console.log('after view checked');
  }
  ngAfterViewInit(): void {
    // this.headerComponent.title = 'Rooms View';
    // this.headerChildrenComponent.last.title = 'last title';
    // console.log(this.headerChildrenComponent.last.title);
  }
  //this hook will be called after the view has been loaded in this file.
  //for example after the header component is loaded the above hook will be invoked

  ngOnInit(): void {
    this.error$
    this.roomsService.getPhotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (error) => console.log(error),
    });
    this.stream.subscribe((data) => {
      console.log(data);
    });
    // this.subscription = this.roomsService.getRooms$.subscribe((rooms) => {
    //   this.roomsList = rooms;
    // });
    this.roomsService.getRooms$.subscribe((rooms) => {
      this.roomsList = rooms;
    });
  }

  //detects cahnges in your entire application
  ngDoCheck(): void {
    this.roomsService;
  }

  //do not use ngDoCheck and ngOnChanges in the same component
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '4',
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, free wi-fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkxRAHhvrOZfFUawkqWMjuYwX-qBtRXz3QWyfvcVv&s',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    };
    // this.roomsList.push(room);
    // this.roomsList = [...this.roomsList, room];
    this.roomsService.addRooms(room).subscribe((data) => {
      this.roomsList = data;
    });
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Deluxe Room',
      amenities: 'Air conditioner, free wi-fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkxRAHhvrOZfFUawkqWMjuYwX-qBtRXz3QWyfvcVv&s',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    };
    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomsList = data;
    });
  }

  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe((data) => {
      this.roomsList = data;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
