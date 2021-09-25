import { Injectable } from '@angular/core';
//http
import { HttpClient } from '@angular/common/http'
//rxjs
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})


export class StaffService {

	//Properties
	apiUrl = 'http://hp-api.herokuapp.com/api/characters/staff'

	//Dependencies Injection
  constructor(private http: HttpClient) { }

  //Methods

  //get the staff through the apiUrl
  getStaff():Observable<any>{
  	return this.http.get(this.apiUrl)
  }
}
