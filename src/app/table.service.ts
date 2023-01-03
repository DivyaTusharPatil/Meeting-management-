import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TableService {
  url = "http://localhost:3000";


  constructor(private http: HttpClient, private router: Router) { }

  meeting(data: any) {
    return this.http.post(this.url + '/user', data);
  }

  meetlist() {
    return this.http.get(this.url + '/user');

  }

  meetbyId(id: any) {
    return this.http.get(this.url + '/user/' + id);
  }
  editmeet(id: any) {
    return this.http.get(this.url + '/user/' + id);
  }

  updatemeet(id: any, data: any) {
    return this.http.put(this.url + '/user/' + id, data);
  }

  deleteData(id: any) {
    return this.http.delete(this.url + '/user/' + id);
  }
  postmeet(data: any): Observable<any> {
    return this.http.post<any>(this.url + '/user/', data);
  }

  login(data: any): Observable<any> {
    return new Observable((observer) => {
      this.http.get<any>(this.url + '/login/').subscribe(res => {
        const user = res.find((f: any) => f.username == data.username && f.password == data.password);
        if(user){
          observer.next(user);
        }
        else{
          observer.error('Invalid user');
        }
      });
    });
  }
}
