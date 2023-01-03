import { validateVerticalPosition } from '@angular/cdk/overlay';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    
loginForm!: FormGroup;

  constructor(private form:FormBuilder) { }

  ngOnInit(): void {
   this.loginForm = this.form.group({
    email : ['',Validators.required],
    password : ['',Validators.required],
     mobileNo:['',Validators.required],
  
  
  })
  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  
  submitFormData(){
    console.log(this.loginForm.value)
  }
 
}
