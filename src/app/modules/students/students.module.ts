import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';

import { MaterialModule } from 'src/app/material.module'
import { SharedModule } from 'src/app/shared/shared.module';
import { AddNewStudentComponent } from './components/add-new-student/add-new-student.component';
import {ReactiveFormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router';
import { RequestsComponent } from './components/requests/requests.component'

@NgModule({
  declarations: [
    StudentsComponent,
    AddNewStudentComponent,
    RequestsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class StudentsModule { }
