import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { CalcServiceService } from '../services/calc-service.service';
import{Product} from './product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[CalcServiceService]
})
export class ProductComponent implements OnInit {
  constructor(private alertifyService:AlertifyService,private calcService:CalcServiceService) {
  }
  title = 'Ürün Listesi';
  filterText ="";
  sum:number=this.calcService.add(1,2,3,4);
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus ZenBook',
      imageUrl:"https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: 'Telefon',
      price: 10000,
      categoryId: 2,
      description: 'Iphone',
      imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: 'Telefon',
      price: 10000,
      categoryId: 2,
      description: 'Iphone',
      imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: 'Telefon',
      price: 10000,
      categoryId: 2,
      description: 'Iphone',
      imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      name: 'Telefon',
      price: 10000,
      categoryId: 2,
      description: 'Iphone',
      imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      name: 'Telefon',
      price: 10000,
      categoryId: 2,
      description: 'Iphone',
      imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
  ];
  ngOnInit(): void {}
  addToCart(product){
    if( product.name.toLowerCase()==="telefon"){
      this.alertifyService.error("can't added");
      return;
    }
    this.alertifyService.success(product.name+" added");

  }
  
}
