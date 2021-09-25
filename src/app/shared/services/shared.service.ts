import { Injectable } from '@angular/core';
//rxjs
import { Observable, Subject} from 'rxjs'


@Injectable({
  providedIn: 'root'
})


export class SharedService {

	//properties
	private dataSource = new Subject()

	//Methods

	//get the table dataSource for subscribe
	getDataSource():Observable<any>{
		return this.dataSource.asObservable()
	}

	//set the content of dataSource
	setDataSource(array):void{
		console.log(array)
		this.dataSource.next(array)
	}
}
