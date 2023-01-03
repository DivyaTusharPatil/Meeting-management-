import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableService } from '../table.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient, private tableservice: TableService, private router: Router) { }

  id : any
  ngOnInit(): void {
      this.id = Number(this.router.url.slice(-2));
      this.http.get('http://localhost:3000/user/' + this.id).subscribe((res: any) => {
        this.data = res;
        console.log(res)
      });
    
  }

  onclick() {
    this.router.navigate(['/allmeetings']);
  }
  getAttendees(attendees: any[]) {
    return attendees.map((f: any) => f.attendeeName).join(', ');
  }


}
