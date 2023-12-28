import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormGroup,FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingForm!:FormGroup;

  get guests(){
    return this.bookingForm.get('guests') as FormArray;
  } 

  constructor(private configService:ConfigService, private fb:FormBuilder, private bookingService:BookingService) { 
  }

  ngOnInit(): void {
    this.bookingForm=this.fb.group({
            roomId: new FormControl({value:'2',disabled:true},{validators:[Validators.required]}),
            guestEmail: ["",{
                updateOn:'blur',
                validators:[Validators.required,Validators.email]
            }],
            checkinDate: [""],
            checkoutDate: [""],
            bookingStatus: [""],
            bookingAmount: [""],
            bookingDate: [""],
            mobileNumber: ["",{
                updateOn:'blur'
            }],
            guestName: ["",[Validators.required,Validators.minLength(5),CustomValidator.validateName,CustomValidator.validateSpecialChar("*")]],
            address:this.fb.group({
              addressLine1: ["",{validators:[Validators.required]}],
              addressLine2: [""],
              city: ["",{validators:[Validators.required]}],
              state: ["",{validators:[Validators.required]}],
              country: [""],
              zipCode: [""],
            }),
            guests: this.fb.array([this.addGuestControl()]), 
            tnc: new FormControl(false,{validators:Validators.requiredTrue})
          }
          ,{
                updateOn:'blur',
                validators:[CustomValidator.validatedate]
            }
            )

          this.getBookingData();

        //   this.bookingForm.valueChanges.subscribe((data)=>{
        //     this.bookingService.bookRoom(data);
        //   })

          this.bookingForm.valueChanges.pipe(
            exhaustMap((data)=>this.bookingService.bookRoom(data))//waits for previous entry to complete then proceeds further
            // switchMap((data)=>this.bookingService.bookRoom(data))//only latest entries are proceeded
            // mergeMap((data)=>this.bookingService.bookRoom(data)) //passes the stream to whoever has subscribed
          ).subscribe((data)=>console.log(data));
    }

    addBooking(){
        // console.log(this.bookingForm.value) //displa the values but exclude the disabled value
        console.log(this.bookingForm.getRawValue())
        this.bookingService.bookRoom(this.bookingForm.getRawValue()).subscribe((data)=>{
            console.log(data);
        })
        
        this.bookingForm.reset({
            roomId:'2',
            guestEmail: '',
            checkinDate: '',
            checkoutDate: '',
            bookingStatus: '',
            bookingAmount: '',
            bookingDate: '',
            mobileNumber: '',
            guestName: '',
            address:{
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                country: '',
                zipCode: '',
            },
            guests: [], 
            tnc:false    
        });

    }

    //assume data is fetched from the backend
    getBookingData(){
        // this.bookingForm.setValue() - akes all values compulsory
        this.bookingForm.patchValue({
            roomId:'2',
            guestEmail: 'test@gmail.com',
            checkinDate: new Date('10-02-2020'),
            checkoutDate: '',
            bookingStatus: '',
            bookingAmount: '',
            bookingDate: '',
            mobileNumber: '',
            guestName: '',
            address:{
                addressLine1: '',
                addressLine2: '',
                city: '',
                state: '',
                country: '',
                zipCode: '',
            },
            guests: [], 
            tnc:false    
        }) 
    }

    addGuest(){
        this.guests.push(
            this.addGuestControl()
        )
    }

    addGuestControl(){
        return this.fb.group({
            guestName:['',{validators:[Validators.required]}],
            age:new FormControl('')
        })
    }

    addPassport(){
        this.bookingForm.addControl('passport',new FormControl(''))
    }

    deletePassport(){
        if(this.bookingForm.get('passport'))
        {
            this.bookingForm.removeControl('passport')
        }
    }

    removeGuest(i:number){
        this.guests.removeAt(i);
    }

}

