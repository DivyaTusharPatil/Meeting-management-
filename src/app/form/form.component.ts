import { validateVerticalPosition } from '@angular/cdk/overlay';
import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupName, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loginForm!: FormGroup;
  data:any;
  displayval:any;
    // onInput(event:any){
  // this.value = this.n = 123;
  // if(this.value){
  //   this.n = 123 
  // }else{
  //   String(this.n).padStart(8, '0'); // '0009' 
  // }
  // console.log(String(this.n).padStart(8, '0'));
  // }

  constructor(private form: FormBuilder) {

  }

  ngOnInit(): void {
    this.loginForm = this.form.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      mobileNo: ['', Validators.required],
      clientdpid: ['', Validators.required]


    })
  }

  // updateInput($event:any){
  //   const n = 12;
  //   String(n).padStart(8, '0'); // '0009'
  //   console.log(String(n).padStart(8, '0'));
  // }

  numberOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  onInput(e:any) {
      
      this.displayval= e.target.value.padStart(8,'0');
     // console.log(this.displayval.padStart(8,'0'));
      console.log(e.target.value);
       
   }
  

  submitFormData() {
    console.log(this.loginForm.value)
  }

}
