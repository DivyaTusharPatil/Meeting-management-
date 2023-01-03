import { state } from '@angular/animations';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  output : any;

  selectedFood: string | undefined;

  foods = [
    {value: 'product10', viewValue: 'Steak'},
    {value: 'product20', viewValue: 'Pizza'},
    {value: 'product30', viewValue: 'Tacos'},
    {value: 'product40', viewValue: 'Lasagne'},
  ];
  result: any;


  onFoodSelection() {
    this.output = this.selectedFood;
    if(this.selectedFood === "product30"){
      this.result = "product30Divya"
    }else if(this.selectedFood === "product10"){
          this.result = "product10"
    }else if(this.selectedFood === "product20"){
      this.result = "product20"
}else if(this.selectedFood === "product40"){
  this.result = "product40"
}

  }
}

