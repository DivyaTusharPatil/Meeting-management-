
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivyaComponent } from './divya/divya.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NewComponent } from './new/new.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MeetingFormComponent } from './meeting-form/meeting-form.component';

import { MeetinglistComponent } from './meetinglist/meetinglist.component';
import { MeetingtableComponent } from './meetingtable/meetingtable.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card.component';
import { DatePipe } from '@angular/common';
import { TableService } from './table.service';
import { CustompipePipe } from './custompipe.pipe';
import { SingInComponent } from './sing-in/sing-in.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';
import { MeetingComponent } from './meeting/meeting.component';
@NgModule({
  declarations: [
    AppComponent,
    DivyaComponent,
    HomeComponent,
    FormComponent,
    CarouselComponent,
    NewComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DropdownComponent,
   MeetingFormComponent,
   MeetinglistComponent,
   MeetingtableComponent,
   RegisterComponent,
   CardComponent,
   CustompipePipe,
   SingInComponent,
   ScheduleMeetingComponent,
   MeetingComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule, 
    BrowserAnimationsModule,
  CarouselModule, 
 ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { 
  //constructor(){
    //console.log('Hii... this is module')
 // }
}
