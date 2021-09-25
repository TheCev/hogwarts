import { Component, OnInit, OnDestroy } from '@angular/core';
//Services
import { StaffService } from './services/staff.service'
import { SharedService } from 'src/app/shared/services/shared.service'
//rxjs
import {Subscription} from 'rxjs'


@Component({
  selector: 'app-staff',
  template: `
  <h1 class="title">Staff</h1>
  <!--ProgressBarComponent-->
  <app-progress-bar *ngIf="!load"></app-progress-bar>
  <!--TableComponent-->
  <app-table></app-table>
  `,
  styles: [`
      .title {

        font-size:40px;
        text-align: center;
        margin: 2rem auto;
        color:#EEBA30;
        text-shadow: 2px 1px 3px #000;
        font-weight: 400;
        font-family: 'Libre Baskerville', serif;
    }
  `]
})


export class StaffComponent implements OnInit {

  //Properties
  load:boolean = false
  subscriptions: Subscription = new Subscription()

  //Dependencies Injection
   constructor(
    private staffSvc: StaffService,
    private sharedSvc: SharedService
    ) {}

  //Methods

  //get the staff through the StaffService
	getStaff():void{
    this.load = false
		this.subscriptions.add(this.staffSvc.getStaff().subscribe((staff) => {
     this.sharedSvc.setDataSource(staff)
     this.load = true
		}))
	}
  
  //Lifecycle Hooks
  ngOnInit(): void {
  	this.getStaff()
  }

}
