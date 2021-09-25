import { Injectable } from '@angular/core';
//http
import { HttpClient } from '@angular/common/http'
//rxjs
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

	//Properties
	apiUrl = "https://hp-api.herokuapp.com/api/characters/students"

	//Dependencies Injection
  constructor(private http: HttpClient) { }

  //Methods

  //get students through apiUrl
  getStudents():Observable<any>{
  	return this.http.get(this.apiUrl)
  }
}
