import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meetingtable',
  templateUrl: './meetingtable.component.html',
  styleUrls: ['./meetingtable.component.css']
})
export class MeetingtableComponent implements OnInit {


 
employee=[
  {
    id:"1",
    name:"Baapu",
    gender:"Male",
    email:"govardhanpatil161963@gmail.com",
    address:"Pune"
  },
  
  {
    id:"2",
    name:"Chaya",
    gender:"Female",
    email:"chayagpatil1568@gmail.com",
    address:"Pune"
  },
  {
    id:"3",
    name:"Tushar",
    gender:"Male",
    email:"tusharpatil1393@gmail.com",
    address:"Mumbai"
  },
  {
    id:"4",
    name:"Divya",
    gender:"Female",
    email:"divyapatil4896@gmail.com",
    address:"Pune"
  },
  {
    id:"5",
    name:"Madhuri",
    gender:"Female",
    email:"madhurimpatil1090@gmai.com",
    address:"Nashik"
  }
  
  
]

  constructor(private http: HttpClient,) { }


  

  ngOnInit(): void {
    //let headers = new HttpHeaders();
   // headers = headers.append('ngrok-skip-browser-warning', 'true');
    //this.http.get(environment.apiUrl+'/employee', { headers: headers }).subscribe(res => {
     // console.log(res);
      //this.Apidata = res;
   // });


   //this.http.get('http://localhost:3000/user').subscribe((res: any) => {
    //console.log(res);
    //this.Apidata = res;
  // });

}
  
  }
  
 

