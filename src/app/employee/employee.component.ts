import { Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers: [RoomsService],
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John';

  constructor(private roomseService: RoomsService) {}
  // constructor(@Self() private roomseService: RoomsService) {}
  //@Self indicates that the service is only available locally in this component

  ngOnInit(): void {}
}
