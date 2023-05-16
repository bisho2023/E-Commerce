import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  cartProducts:any[]=[];
  amount:number=1
  id:any
  data:any={}
  constructor(private route:ActivatedRoute,private prdSer:ProductsService){
    this.id=this.route.snapshot.paramMap.get("id")
    window.scrollTo(0, 0)
  }
  ngOnInit() {
   this.getProduct()
  }

  getProduct(){
    this.prdSer.getProductById(this.id).subscribe(res=>{
      this.data=res
    })
  }

  addToCart(prd:any){
    if ("cart" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cartProducts.find(item=> item.prd.id === prd.id)
      if (exist){
        alert("product is already exist")
      } else
      {
        let obg ={prd:prd , quantity:this.amount}
        this.cartProducts.push(obg)
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
      
      }

    }
    else
    {
      let obg ={prd:prd , quantity:this.amount}
        this.cartProducts.push(obg)
      localStorage.setItem("cart",JSON.stringify(this.cartProducts));
    }


  }



}
