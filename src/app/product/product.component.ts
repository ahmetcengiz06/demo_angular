import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { CalcServiceService } from '../services/calc-service.service';
import { ProductService } from '../services/product.service';
import{Product} from './product';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[CalcServiceService,ProductService]
})
export class ProductComponent implements OnInit {
  constructor(private alertifyService:AlertifyService,private calcService:CalcServiceService,private productService:ProductService) {
  }
  title = 'Ürün Listesi';
  filterText ="";
  sum:number=this.calcService.add(1,2,3,4);
  products: Product[];
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data=>{
      let _products:Product[]=data.products;
      this.products=_products;
    });
  }
  addToCart(product){
    if( product.name.toLowerCase()==="telefon"){
      this.alertifyService.error("can't added");
      return;
    }
    this.alertifyService.success(product.name+" added");

  }
  
}
