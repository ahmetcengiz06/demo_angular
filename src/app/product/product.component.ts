import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { CalcServiceService } from '../services/calc-service.service';
import{Product} from './product';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[CalcServiceService]
})
export class ProductComponent implements OnInit {
  constructor(private alertifyService:AlertifyService,private calcService:CalcServiceService,private http:HttpClient) {
  }
  title = 'Ürün Listesi';
  filterText ="";
  sum:number=this.calcService.add(1,2,3,4);
  products: Product[];
  path="http://localhost:3000/products";
  ngOnInit(): void {
    this.http.get<Product[]>(this.path).subscribe(data=>{
      this.products=data;
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
