import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(environment.apiUrl+'product'); 
  }

  find(id:number){
    return this.http.get(environment.apiUrl+'product/'+id); 
  }

  store(product:any){
    return this.http.post(environment.apiUrl+'product', product);
  }

  save(product:any){
    return this.http.put(environment.apiUrl+'product', product);
  }
}
