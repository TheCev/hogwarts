import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
//moment library
import * as moment from 'moment'
//angular material
import { MatTableDataSource } from '@angular/material/table';
import {MatSort } from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator'
//services
import { SharedService } from 'src/app/shared/services/shared.service'
//rxjs
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})



export class TableComponent implements OnInit {

  //Properties
  dataSource = null
  subscriptions:Subscription = new Subscription()

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  columnsToDisplay:string[] = ['name','patronus','age','image']

  //Dependencies Injection
  constructor(private SharedSvc: SharedService) { }

  //Methods

  //render the table content
  renderTable():void{

    this.subscriptions.add(this.SharedSvc.getDataSource().subscribe((data) => {

      this.dataSource = new MatTableDataSource()

      this.dataSource.data = data.map((el) => {
        //Calcule the age column
        if(el.dateOfBirth){
          //use moment.js for calculate the years since the dateOfBirth, then become in a number
          el.age = Number.parseInt(moment(el.dateOfBirth, 'DD-MM-YYYY').fromNow())
        }else if(el.yearOfBirth){
          //use moment.js for calculate the years since the yearOfBirth, then become in a number
          el.age = Number.parseInt(moment(el.yearOfBirth, 'YYYY').fromNow())
        }else {
          el.age = 0
        }
        return el
      })
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    }))
  }

  //when filter the table content
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //Lifecycle Hooks

  ngOnInit(): void {
   this.renderTable()
  }

  ngOnDestroy():void {
    this.subscriptions.unsubscribe()
  }

}
