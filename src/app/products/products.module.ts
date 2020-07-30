import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component'
import { EditComponent } from './edit/edit.component'


@NgModule({
  declarations: [ ProductsComponent, EditComponent ], 
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
