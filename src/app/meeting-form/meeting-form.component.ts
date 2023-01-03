import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TableService } from '../table.service';

@Component({
  selector: 'app-meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: ['./meeting-form.component.css']
})
export class MeetingFormComponent implements OnInit {

  RegisterForm!: FormGroup;
  attendees: string[] = [];

 

  // dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
  // Only highligh dates inside the month view.
  // if (view === 'month') {
  //const date = cellDate.getDate();

  // Highlight the 1st and 20th day of each month.
  // return date === 1 || date === 20 ? 'example-custom-date-class' : '';
  //}

  // return '';
  //};


  selectedTime: any;
  id: any;
  pdata: any;
  md: any;
  meetdata: any;
  date: any;
  mindate: string | null;

  //tableservice: any;

  constructor(private form: FormBuilder, private router: Router, private route: ActivatedRoute,
    private tableservice: TableService,public datepipe: DatePipe) {

      //this.yesterday.setDate(this.yesterday.getDate() - 0);

      this.date = new Date(new Date().setDate(new Date().getDate() - 1));

      this.mindate  =  this.datepipe.transform(this.date, "yyyy-MM-dd'T'HH:mm");
      //console.log(abc);


    // if(this.tableservice.editmeet(this.id)){
    //   if(this.id>0){
    //     this.router.navigate(['/meeting/'+ this.id])

    //   }else{
    //     this.router.navigate(['/meeting/'+ 0]);
    //   }
    // }
  }

  ngOnInit() {
     this.id = Number(this.router.url.slice(-2));
    console.log();
    // this.route.queryParams.subscribe(params => {
    //   const id = params['id'];
    //   console.log(id);
    // });
    // this.patchData();
    if (this.id > 0) {
      this.patchData();
    }
    else { }
    this.RegisterForm = this.form.group({
      Subject: ['', Validators.required],
      Datetime: ['', Validators.required],
      Location: ['', Validators.required],
      Agenda: ['', Validators.required],
      Attendees: ['', Validators.required],

    });
    // }
    
  }
  patchData() {
    this.tableservice.editmeet(this.id).subscribe((data) => {
      this.pdata = data;
      this.RegisterForm.patchValue({
        id: this.id,
        Subject: this.pdata.subject,
        Datetime: this.pdata.datetime,
        Location: this.pdata.location,
        Agenda: this.pdata.agenda,
        Attendees: this.pdata.attendees
      })

    })


  }
  onclick() {
    this.router.navigate(['/allmeetings']);
  }

  isCurrentUser(userId: number) {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user && user.id == userId;
  }

  RegisterFormData() {
    if (this.RegisterForm.valid) {
      const addModel = {
        "subject": this.RegisterForm.controls["Subject"].value as string,
        "datetime": this.RegisterForm.controls["Datetime"].value as Date,
        "location": this.RegisterForm.controls["Location"].value as string,
        "agenda": this.RegisterForm.controls["Agenda"].value as string,
        "attendees": this.attendees,//this.RegisterForm.controls["Attendees"].value as [],
        "id": null
      }
      if (this.id > 0) {
        this.tableservice.updatemeet(this.id, addModel).subscribe({
          next: (res) => {
            alert("User updated successfully");
            this.RegisterForm.reset();
            this.router.navigate(['/allmeetings'])
          },
          error: () => {
            alert("User not addded")
          }
        })
      } else {
        this.tableservice.postmeet(addModel).subscribe({
          next: (res) => {
            alert("User added successfully");
            this.RegisterForm.reset();
            this.router.navigate(['/allmeetings'])
          },
          error: () => {
            alert("User not addded")
          }
        })
      }
    }
  }



}

