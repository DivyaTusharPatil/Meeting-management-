import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild, } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TableService } from '../table.service';


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
};


@Component({
  selector: 'app-meetinglist',
  templateUrl: './meetinglist.component.html',
  styleUrls: ['./meetinglist.component.css']
})


export class MeetinglistComponent implements OnInit {

  name = 'Angular 5';
  scheduledDisplayedColumns = ['id', 'subject', 'attendees',  'datetime', 'location', 'agenda', 'details'];
  myMeetingDisplayColumns = ['id', 'subject', 'attendees', 'datetime', 'location', 'agenda', 'edit', 'delete'];
 
  dataSource: any;
  Apidata: any;
  fieldArray: any;
  onclick: any;
  currentUserName:any;

  constructor(private http: HttpClient, private tableservice: TableService, private router: Router) {
  }

  ngOnInit() {
     this.currentUserName = JSON.parse(localStorage.getItem('currentUser') || '{}');

    //let headers = new HttpHeaders();
    //headers = headers.append('ngrok-skip-browser-warning', 'true');
    //this.http.get('https://d6cb-103-211-60-76.in.ngrok.io/api/managementdetails/getdetails').subscribe(res => {
    // console.log(res);
    // this['dataSource'] = res;
    //});

    this.getMyMeetings();


  }
  getMeetingDetails(event: any) {
    this.dataSource = [];
    if (event.tab.textLabel == 'My Meeting') {
      this.getMyMeetings();
    }
    else if (event.tab.textLabel == 'Shedule Meeting') {
      this.getScheduleMeetings();
    }
  }

  getMyMeetings() {
    this.http.get('http://localhost:3000/user').subscribe((res: any) => {
      const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
      this.dataSource = res.filter((f: any) => f.attendees.find((x: any) => x.attendeeId == user.id && x.isOrganizer === true));
    });
  }
  getScheduleMeetings() {
    this.http.get('http://localhost:3000/user').subscribe((res: any) => {
      const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
      this.dataSource = res.filter((f: any) => f.attendees.find((x: any) => x.attendeeId == user.id && x.isOrganizer === false));
    });
  }

  getAttendees(attendees: any[]) {
    return attendees.map((f: any) => f.attendeeName).join(', ');
  }

  edit(id: any) {

    this.router.navigate(['/meeting' + '/' + id]);


   // this.tableservice.editmeet(id).subscribe(res=>{

    //})
  }

  delete(id: any) {
    if (confirm('Are you sure to delete??')) {
      this.tableservice.deleteData(id).subscribe(res => {
        location.reload();
      })
    }


  }

  details(id: any) {

    this.router.navigate(['/card' + '/' + id]);

  }
}





