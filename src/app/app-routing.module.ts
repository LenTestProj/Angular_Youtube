import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent, canActivate:[LoginGuard] },
  
  {path: 'login', component: LoginComponent },
  {path:'rooms',loadChildren:()=>import('./rooms/rooms.module').then((m)=>m.RoomsModule),
  // canActivate:[LoginGuard],canLoad:[LoginGuard]
},
  { path: '', redirectTo: '/rooms', pathMatch: 'full' },
  { path: 'booking/:roomId', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)},
  { path: 'comment', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule],
})
export class AppRoutingModule {}
