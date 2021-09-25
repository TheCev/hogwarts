import { Component, OnDestroy} from '@angular/core';
//Services
import { CharactersService } from './services/characters.service';
import { SharedService } from 'src/app/shared/services/shared.service';
//rxjs
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-characters',
  template: `
	<h1 class="title" >Characters</h1>
	<h2 class="subtitle">Choose a House to Show a Table</h2>
	<div class="container">
		<!--House Selector Input Component-->
		<mat-form-field class="selector" color="accent">
			<mat-label class="hola">House</mat-label>
			<mat-select>
				<mat-option value="none">--choose a house--</mat-option>
				<mat-option *ngFor="let house of houses" [value]="house.value" (click)="getHouse(house.value)">{{house.viewValue}}</mat-option>
			</mat-select>
		</mat-form-field>
	</div>
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

		.subtitle {

			color:#fff;
			text-shadow: 2px 1px 3px #000;
			text-align: center;
			margin:2rem;
			font-family: 'Libre Baskerville', serif;

		}

	.container{
		background: rgba(250,250,250,.5);
		margin: 1rem auto;
		width: 175px;
		padding:10px;
		border-radius: 6px;
		box-shadow: 2px 1px 4px #000;
	}`
  ]
})


export class CharactersComponent implements OnDestroy{

	//Properties

	subscriptions:Subscription = new Subscription()

	houses = [
		{
			viewValue:'Slytherin',
			value:'slytherin'
		},
		{
			viewValue:'Gryffindor',
			value:'gryffindor'
		},
		{
			viewValue:'Ravenclaw',
			value:'ravenclaw'
		},
		{
			viewValue:'Hufflepuff',
			value:'Hufflepuff'
		}
	]

	load = true

	//Dependencies Injection
  constructor( 
  	private CharactersSvc: CharactersService,
  	private  SharedSvc: SharedService
  	) { }

  //Methods

  //get the characters accord to the house select this through the CharactersService
  getHouse(house):void{
  	this.load = false
  	this.subscriptions.add(this.CharactersSvc.getHouse(house).subscribe((characters) => {
  		this.SharedSvc.setDataSource(characters)
  		this.load = true
  	}))
  }

  //Lifecycle Hooks
  ngOnDestroy():void{
  	this.subscriptions.unsubscribe()
  }
  
}
