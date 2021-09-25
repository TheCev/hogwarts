import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
const routes: Routes = [
	{
		path:'', redirectTo:'students', pathMatch:'full'
	},
	{ 
		path: 'characters', loadChildren: () => import('./modules/characters/characters.module').then(m => m.CharactersModule) 
	},
	{ 
		path: 'staff', loadChildren: () => import('./modules/staff/staff.module').then(m => m.StaffModule) 
	},
	{ 
		path: 'students', loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule) 
	}
]

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
