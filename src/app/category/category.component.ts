import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private http:HttpClient) {}
  title = 'Kategori Listesi';
  path="https://raw.githubusercontent.com/ahmetcengiz06/shop.github.io/main/shop.json";
  categories: Category[];
  ngOnInit(): void {
    this.http.get<any>(this.path).subscribe(data=>{
      let _categories:Category[]=data.categories;
      this.categories=_categories
    });
  }
}
