import {
  AfterViewInit,
  Component,
  ComponentRef,
  ElementRef,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
  Inject,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { localStorageToken } from './localStorage.token';
import { InitService } from './init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
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

  @ViewChild('name', {
    static: true,
  })
  name!: ElementRef;

  ngOnInit(): void {
    this.loggerService?.Log('AppComponent.ngOnInit()');
    this.name.nativeElement.innerText = 'Hello';

    if (this.localStorage) {
      this.localStorage.setItem('name', 'hotel Cali');
    }
  }

  //optioanl is used so that no error is occured during the runtime
  constructor(
    @Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: Storage,
    private initService:InitService
  ) {
    console.log(initService.config)
  }
}
