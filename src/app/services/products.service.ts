import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit{

  constructor(private _HttpClient:HttpClient) { }
  ngOnInit() {}
  getAllProducts(){
    return this._HttpClient.get(environment.baseApi +'products')
  }
  getAllCategories(){
    return this._HttpClient.get(environment.baseApi +'products/categories')
  }

  getProductsByCategory(keyword:string){

    return this._HttpClient.get(environment.baseApi +'products/category/'+keyword)
  }

  getProductById(id:any){

    return this._HttpClient.get(environment.baseApi +'products/'+id)
  }
}
