import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TableService } from '../table.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm!: FormGroup
  hide = true;
  data: any;
  resData: any;
  isValid: boolean = false;



  constructor(private form: FormBuilder, private router: Router, private tableservice: TableService) {

  }

  ngOnInit(): void {
    this.LoginForm = this.form.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })


  }
  /* onlogin(){
     console.log(this.LoginForm.value);
     this.router.navigate(['/meeting/:id']);
 
   }*/
  onlogin() {
    this.data = this.LoginForm.value;
    this.tableservice.login(this.data).subscribe({
      next: (res) => {
        if (res) {
          this.resData = res;
          localStorage.clear();
          localStorage.setItem("currentUser", JSON.stringify(res));
          alert("Success")
          this.router.navigate(['/allmeetings']);
          console.log(this.data);
        }
      }, error: (err) => {
        //alert(err)
        this.isValid = err;
      }
    });
  }
}



