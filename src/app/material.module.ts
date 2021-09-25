import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSortModule,
    MatProgressBarModule,
    MatPaginatorModule
  ],
  exports: [
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSortModule,
    MatProgressBarModule,
    MatPaginatorModule

  ]
})
export class MaterialModule {}