import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {
  id:number=0;
  id$ !:Observable<number>;

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    // this.id= this.router.snapshot.params['id'];
    // this.router.params.subscribe((params)=>{
    //   this.id=params['id'];
    //   console.log(params);
    // })

    // this.id$=this.router.params.pipe(
    //   map(params=>params['id'])
    // )
  }

}
