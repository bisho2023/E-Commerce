import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-clothe',
  templateUrl: './clothe.component.html',
  styleUrls: ['./clothe.component.scss']
})
export class ClotheComponent implements OnInit{
  categories:any[]=[];
  getAllProducts:any[]=[];
  loading:boolean=false;

  constructor(private prodSer:ProductsService){

  }
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  getProducts(){
    this.loading=true;
    this.prodSer.getAllProducts().subscribe((data:any)=>{
      this.loading=false
      this.getAllProducts=data;
    },err=>{
      this.loading=false
      alert("Error")
    })
  }

  getCategories(){
    this.loading=true;
    this.prodSer.getAllCategories().subscribe((data:any)=>{
      this.loading=false
      this.categories=data;
    },err=>{
      this.loading=false
      alert(err)
    })
  }

  filterCategory(event:any){
    this.loading=true;
    let value = event.target.value;
    if (value=="All"){
      this.loading=false
      this.getProducts()
    }
    else{
      this.loading=false
    this.getProductsCategory(value);
  }
  }

  getProductsCategory(keyword:string){
    this.loading=true;
    this.prodSer.getProductsByCategory(keyword).subscribe((res:any)=>{
      this.loading=false
       this.getAllProducts=res;
    })
  }

}
