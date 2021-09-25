import { Component, OnInit, ViewChild } from '@angular/core';
//angular material
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
//Services
import { SharedService } from 'src/app/shared/services/shared.service'

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})


export class RequestsComponent implements OnInit {

	//Properties
  dataSource = null
  columnsToDisplay = ['name','house','age','gender']
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //Dependencies Injection
  constructor(private SharedSvc: SharedService) { }

  
  //Methods

  //method to render the table content
  renderTable():void{
      
      this.dataSource = new MatTableDataSource()
      this.dataSource.data = JSON.parse(localStorage.getItem('requests'))

      this.dataSource.sort = this.sort;
      
  }

  //method to filter the table content
  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //lifecycle hooks

  ngOnInit(): void {
   this.renderTable()
  }


}
