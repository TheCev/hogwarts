import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from 'src/app/material.module';
import { TableComponent } from './components/table/table.component'

import { RouterModule } from '@angular/router';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    TableComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
  	HeaderComponent,
  	TableComponent,
    ProgressBarComponent
  ]
})
export class SharedModule { }
