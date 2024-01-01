import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges,OnDestroy {
  @Input() rooms: RoomList[] = [];
  //the above directive is used to get data from the parent component.
  @Input() title: string = '';

  @Input() price=0;

  @Output() selectedRoom = new EventEmitter<RoomList>(); //send what type data you need to send to parent component
  constructor() {}
  ngOnDestroy(): void {
console.log("on destroy called for room slist component");
//used for memory freeing code
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
