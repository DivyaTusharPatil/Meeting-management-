import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent implements OnInit {
  userform=NgForm
  //selected:any
  isSubmitted: boolean = false;
  maxLength:number=50;
  meetingService: any;
  // show:boolean=false;
  // nigadi2:any
  // regions!:[]
  

  // area =[{value:"Nigdi",id:"1"},
  // {value:"Akurdi",id:"2"},
  // {value:"Pimpri",id:"3"},
  // {value:"Chinchawad",id:"4"}]

  // city=['Nigdi','Akurdi','Pimpri','Chinchawad']
  constructor() {
  }

  ngOnInit(): void {
  }
  
  getuserformdata(data:any){
console.log(data)
  }

  scheduleMeeting(){

  }
  onchange(event:any){
    // this.show = !this.show;

    // // Change the name of the button.
    // if(this.show)  
    //   this.nigadi2 = "Hide";
    // else
    //   this.nigadi2 = "Show";


  }

}
