import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title='Learn About Services In Angular'
  users:any;
  constructor(private user: UserService) { 

    user.users().subscribe((data)=>{
      console.log("data",data);
      this.users=data
    })
    // console.log("user",user.employee)
    // this.employee=user.employee
  }

  ngOnInit(): void {
  }

}
