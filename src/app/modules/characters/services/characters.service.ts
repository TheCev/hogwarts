import { Injectable } from '@angular/core';
//http
import { HttpClient } from '@angular/common/http'
//rxjs
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class CharactersService {

	//Properties
	apiUrl = 'http://hp-api.herokuapp.com/api/characters/house'

	//Dependencies Injection
  constructor(private http: HttpClient) { }

  //Methods

  //get characters through the apiUrl
  getHouse(house):Observable<any>{
  	return this.http.get(`${this.apiUrl}/${house}`)
  }
}
