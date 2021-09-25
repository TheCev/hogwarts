import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  		<mat-toolbar color="primary" class="nav">
  			<span class="nav-title">Hogwarts</span>
  			<span class="spacer"></span>
      		<span routerLink="/staff" class="nav-item">Staff</span>
      		<span routerLink="/characters" class="nav-item">Characters</span>
      		<span routerLink="/students" class="nav-item">Students</span>
		</mat-toolbar>
  `,
  styles: [`
  		.spacer {
			flex: 1 1 auto;
		}

		.nav{
			background: rgba(0,0,0,.3);
		}

		.nav-title{
			font-size: 30px;
			color:#EEBA30;
			text-shadow: 2px 1px 3px #000;
			font-weight: 300;
		}

		.nav-item {
			font-size: 18px;
			color: #EEBA30;
			text-shadow: 2px 1px 3px #000;
			font-weight: 400;
			margin: auto 10px;
			padding:5px;
		}

		.nav-item:hover {
			cursor: pointer;
			font-size: 18px;
			color: #EEBA30;
			padding:5px 10px;
			text-shadow: 4px 2px 6px #000;
			font-weight: 400;
			margin: auto 15px;
			border-radius: 5px;
			box-shadow: 4px 2px 6px #000;
		}
  `]
})
export class HeaderComponent{ }
