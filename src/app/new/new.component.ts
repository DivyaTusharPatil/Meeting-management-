import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  isNameSelected!: boolean;
  value=[];
  array= [
    {Id: "1",Value: "Value-1"},
  {Id:"2",Value: "Value-2"} ];
  
  constructor() { }

  ngOnInit(): void {

  }
  Name: string ="Enter Name"
  
  enable: boolean = false;

  url : string ="https://picsum.photos/id/1/200/300";

  msg: string = "";
  
  
  onAddcard(event: any){
    this.msg= event.target.value  +  "Added in Card";
  }
  
  color= "orange";

  updatecolor(){
    this.color= "green"
  }
  onchnage(event:any)
  {
if(event == 2)
{
  this.value
}
else{
  !this.value
}
  }
  selectInput(event:any) {
    let selected = event.target.value;
    if (selected == "Value-1") {
      this.isNameSelected = true;
    } else {
      this.isNameSelected = false;
    }
  }

}
