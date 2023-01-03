import { createInjectableType, identifierName, ThisReceiver } from '@angular/compiler';
import { Component, HostListener, Inject } from '@angular/core';
import { TableService } from './table.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatInput } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProjrct';
  //stmt1 = true;
  //btn() {
  //  alert('Button is working!!');
 // }
//today= Date()
//capstring(item:string){
//return item.toUpperCase()
//}
 // constructor() {
//console.log('Hiii... thise is component')
 // }
//@HostListener('click',['$vent'])
//onhostclick(event:Event)
//{
 // alert('Hello')
//}
}
