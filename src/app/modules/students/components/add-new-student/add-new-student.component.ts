import { Component } from '@angular/core';
//angular forms
import { FormGroup, FormControl, Validators } from '@angular/forms';
//angular router
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
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
      .container {
        width:200px;
        background: rgba(250,250,250,.8);
        padding: 20px;
        margin: 2rem auto;
        border-radius: 6px;
        box-shadow: 4px 2px 6px #000;
      }
      .input {
        margin: 1rem auto 1rem auto;
      }

      .button {
        margin-left:54px;
      }

      .right-button{
        margin-left: 2rem;
      }

      .left-button{
        margin-left:5%;
      }
  `]
})


export class AddNewStudentComponent {

  //Properties
   studentForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(6)]),
    gender: new FormControl('', Validators.required),
    house: new FormControl('', Validators.required),
    age: new FormControl('',[Validators.min(10), Validators.max(18), Validators.required ])

  })

   //Dependencies Injection
  constructor(private router: Router) { }

   //Methods

   //when submit the form
  onSubmit():void{

  	const formValue = this.studentForm.value
  	const requests:any[] = JSON.parse(localStorage.getItem('requests'))

  	if(requests){

  	  const repeated = requests.findIndex((el) => el.name == formValue.name) 
      console.log(repeated)

      if(!(repeated >= 0)) {

        requests.push(formValue)
        localStorage.setItem('requests', JSON.stringify(requests))
        this.router.navigate(['/students/requests'])

      }else{

        alert('The request student already exist')
      }
  	}else{

  		localStorage.setItem('requests', JSON.stringify([formValue]))
  	}
  }

}
