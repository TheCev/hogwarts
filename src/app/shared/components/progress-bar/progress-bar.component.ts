import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `
  		<mat-progress-bar mode="indeterminate" color="accent" class="progress-bar">
  		</mat-progress-bar>
  `,
  styles: [`
  
  	.progress-bar {
      max-width: 1400px;
      width: 90%;
      min-width: 500px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 2rem;
      margin-bottom:0px;
    }
  `]
})
export class ProgressBarComponent { }
