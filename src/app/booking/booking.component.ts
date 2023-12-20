import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!:FormGroup;

  constructor(private configService:ConfigService, private fb:FormBuilder) { 
  }

  ngOnInit(): void {
    this.bookingForm=this.fb.group({
      roomId: [""],
      guestEmail: [""],
      checkinDate: [""],
      checkoutDate: [""],
      bookingStatus: [""],
      bookingAmount: [""],
      bookingDate: [""],
      mobileNumber: [""],
      guestName: [""],
      guestAddress: [""],
      guestCity: [""],
      guestState: [""],
      guestCountry: [""],
      guestZipCode: [""],
      guestCount: [""],
      guestList: [""]    
    })  
  }

}

// export interface Booking {
//   roomId: string;
//   guestEmail: string;
//   checkinDate: Date;
//   checkoutDate: Date;
//   bookingStatus: string;
//   bookingAmount: number;
//   bookingDate: Date;
//   mobileNumber: string;
//   guestName: string;
//   guestAddress: string;
//   guestCity: string;
//   guestState: string;
//   guestCountry: string;
//   guestZipCode: string;
//   guestCount: number;
//   guestList: []
// }