import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students.component';
import { AddNewStudentComponent } from './components/add-new-student/add-new-student.component'
import { RequestsComponent } from './components/requests/requests.component'

const routes: Routes = [
	{ 
		path: '', component: StudentsComponent 
	},
	{
		path:'add', component:AddNewStudentComponent
	},
	{
		path:'requests', component:RequestsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
