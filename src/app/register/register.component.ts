import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router,} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  SingupForm!: FormGroup;
  hide=true;
  

  constructor(private form:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.SingupForm = this.form.group ({
      name :  ['',Validators.required],
      username :  ['',Validators.required],
      password :  ['',Validators.required],
      cpassword :  ['',Validators.required],
      
    })
  }

  SingupFormData(){
    console.log(this.SingupForm.value);
    this.router.navigate(['/meeting/:id'])

  }

}
