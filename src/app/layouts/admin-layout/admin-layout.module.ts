import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

// Modules
import { ProductsComponent } from './../../products/products.component';
import { EditComponent } from './../../products/edit/edit.component';

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatRippleModule,
  MatInputModule,
  MatSelectModule,
  MatTooltipModule,
  MatTableModule,
  MatSortModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule,
  MatFormFieldModule
]

@NgModule({
  imports: [
    RouterModule.forChild(AdminLayoutRoutes),
    ...modules
  ],
  exports: [
    ...modules
  ],
  declarations: [ 
    ProductsComponent,
    EditComponent
  ]
})

export class AdminLayoutModule {}
