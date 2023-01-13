import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:3000/user"
  constructor(private http:HttpClient) { }
users(){
return this.http.get(this.url);
}

  // employee=[
  //   {
  //     id:"1",
  //     name:"Baapu",
  //     gender:"Male",
  //     email:"govardhanpatil161963@gmail.com",
  //     address:"Pune"
  //   },
    
  //   {
  //     id:"2",
  //     name:"Chaya",
  //     gender:"Female",
  //     email:"chayagpatil1568@gmail.com",
  //     address:"Pune"
  //   },
  //   {
  //     id:"3",
  //     name:"Tushar",
  //     gender:"Male",
  //     email:"tusharpatil1393@gmail.com",
  //     address:"Mumbai"
  //   },
  //   {
  //     id:"4",
  //     name:"Divya",
  //     gender:"Female",
  //     email:"divyapatil4896@gmail.com",
  //     address:"Pune"
  //   },
  //   {
  //     id:"5",
  //     name:"Madhuri",
  //     gender:"Female",
  //     email:"madhurimpatil1090@gmai.com",
  //     address:"Nashik"
  //   }
    
    
  // ]
}
