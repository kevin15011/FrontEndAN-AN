import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import { ProductService } from './../services/Product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns = ['name','color','stock','purchase_price','sale_price','actions'];
  dataSource = null;

  constructor(private dialog: MatDialog, private productService: ProductService) { }

  ngOnInit(): void {
    this.getAll();
  }

  edit(id:number){
    this.productService.find(id)
    .subscribe((resp: any) =>  {
      let dialogRef = this.dialog.open(EditComponent, {
        data: resp[0],
        // disableClose: true
      });
      dialogRef.afterClosed().subscribe( data => {
        if(data){
          this.store(data);
        }
      });   
    });
  }

  getAll(){
    this.productService.getAll()
    .subscribe((resp: any) =>  {
        this.dataSource = new MatTableDataSource<any>(resp);
    });
  }

  store(product:any){
    this.productService.store(product)
    .subscribe((resp: any) =>  {
        if(resp){
          
        }
    });
  }

}
