import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import {HttpClient} from '@angular/common/http';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  constructor(private http:HttpClient,private categoryService:CategoryService) {}
  title = 'Kategori Listesi';
  categories: Category[];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data=>{
      let _categories:Category[]=data.categories;
      this.categories=_categories
    });
  }
}
