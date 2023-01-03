import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { DivyaComponent } from './divya/divya.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MeetingFormComponent } from './meeting-form/meeting-form.component';
import { RegisterComponent } from './register/register.component';
import { MeetinglistComponent } from './meetinglist/meetinglist.component';
import { MeetingtableComponent } from './meetingtable/meetingtable.component';
import { CardComponent } from './card/card.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { MeetingComponent } from './meeting/meeting.component';
const routes: Routes = [
  { path: 'divya', component: DivyaComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'new', component: NewComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'meeting/:id', component: MeetingFormComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'allmeetings', component: MeetinglistComponent },
  { path: 'table', component: MeetingtableComponent },
  { path: 'card/:id', component: CardComponent},
  { path: 'singin', component: SingInComponent},
  { path: 'schedule', component: ScheduleMeetingComponent},
  { path: 'meetingtable', component: MeetingComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
