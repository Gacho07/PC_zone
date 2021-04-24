import { paths } from './../paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private service:HttpClient) { }

  getAllCategories() {
    let categories = this.service.get(paths.categories);
    return categories;
  }
}
