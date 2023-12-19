import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  
  ]
})
export class BookingModule { }
