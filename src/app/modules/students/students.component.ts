import { Component, OnInit, OnDestroy } from '@angular/core';
//Services
import { StudentsService } from './services/students.service';
import {SharedService} from 'src/app/shared/services/shared.service';
//rxjs
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-students',
  template: `
    <h1 class="title">Students</h1>
    <!--Buttons-->
    <button mat-raised-button color="accent" class="button left-button" routerLink="/students/requests">
      Show Requests
    </button>
    <button mat-raised-button color="accent" class="button right-button" routerLink="/students/add">
      Make a Request
    </button>
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

    .right-button{
      margin-left: 2rem;
    }
    .left-button{
      margin-left:5%;
    }

  `]
})


export class StudentsComponent implements OnInit {

  //Properties
  subscriptions = new Subscription
  load = false

  //Dependencies Injection
  constructor(
    private studentsSvc: StudentsService,
    private sharedSvc: SharedService
    ) { }

  //Methods 

  //Get the students through the StudentsService
  getStudents():void{

    this.load = false

  	this.subscriptions.add(this.studentsSvc.getStudents().subscribe((students) => {
      this.load = true
      this.sharedSvc.setDataSource(students)
  	}))
  }

  //Lifeclycle Hooks
  
  ngOnInit(): void {
  	this.getStudents()
  }

  ngOnDestroy():void {
    this.subscriptions.unsubscribe()
  }

}
