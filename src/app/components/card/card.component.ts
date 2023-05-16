import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  
  thressProducts:any[]=[];
  firstFourProducts:any[]=[];
  secondFourProduct:any[]=[];
  loading:boolean=false;
  constructor(private prodSer:ProductsService){}
  ngOnInit() {
    this.getProducts()

  }

 

  getProducts(){
    this.loading=true;
    this.prodSer.getAllProducts().subscribe((data:any)=>{
      this.thressProducts = data.slice(0,3);
      this.firstFourProducts=data.slice(3,7);
      this.secondFourProduct=data.slice(7,11);
      this.loading=false
    },err=>{
      this.loading=false
      alert(err)
    })


  }







}
