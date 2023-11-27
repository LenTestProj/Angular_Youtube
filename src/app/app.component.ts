import { AfterViewInit, Component,ComponentRef,ElementRef,OnInit,ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  // ngAfterViewInit(): void {
  //   const componentRef=this.vcr.createComponent(RoomsComponent)
  //   componentRef.instance.numberOfRooms=50
  // }
  title = 'hotelInventoryApp';

  role = 'User';

  // @ViewChild('user',{
  //   read:ViewContainerRef
  // })vcr!:ViewContainerRef;

  @ViewChild('name',{
    static:true
  }) name!:ElementRef

  ngOnInit(): void {
    this.loggerService?.Log('AppComponent.ngOnInit()');
    this.name.nativeElement. innerText="Hello";
  }

  constructor(private loggerService:LoggerService){

  }
}
