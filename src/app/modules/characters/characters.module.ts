import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';

import {MaterialModule} from 'src/app/material.module'

import {SharedModule} from 'src/app/shared/shared.module'
@NgModule({
  declarations: [
    CharactersComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MaterialModule,
    SharedModule

  ]
})
export class CharactersModule { }
