import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent implements OnInit {
  

  isSubmitted: boolean = false;
  maxLength:number=50;
  meetingService: any;
  show:boolean=false;
  nigadi2:any
  regions!:[]
  

   city=[{location:'Nigdi'},{location:'Akurdi'},{location:'Pimpri'},{location:'chinchawad'}]
  constructor() {
  }

  ngOnInit(): void {
  }

  scheduleMeeting(){

  }
  onchange(event:any){
    this.show = !this.show;

    // Change the name of the button.
    if(this.show)  
      this.nigadi2 = "Hide";
    else
      this.nigadi2 = "Show";
  }

}
