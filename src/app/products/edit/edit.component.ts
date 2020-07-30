import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { ColorService } from './../../services/Color/color.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productForm: any;
  colors: any;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private colorService: ColorService,
    ) { }

  ngOnInit(): void {
    this.getAllColors();
    this.initForm();
  }

  initForm(){
    this.productForm = new FormGroup({
      name: new FormControl((this.data.name) ? this.data.name : ''),
      purchase_price: new FormControl((this.data.purchase_price) ? this.data.purchase_price : ''),
      sale_price: new FormControl((this.data.sale_price) ? this.data.sale_price : ''),
      category: new FormControl((this.data.category) ? this.data.category : ''),
      color: new FormControl((this.data.color_id) ? this.data.color_id.toString() : ''),
      description: new FormControl((this.data.description) ? this.data.description : ''),
      trademark: new FormControl((this.data.trademark) ? this.data.trademark : ''),
      stock: new FormControl((this.data.stock) ? this.data.stock : ''),
    });
  }

  getAllColors(){
    this.colorService.getAll()
    .subscribe((resp: any) =>  {
        this.colors = resp;
    });
  }

  store(){
    this.dialogRef.close(this.productForm.value);
  }
}
