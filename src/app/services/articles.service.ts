import { paths } from './../paths';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private service:HttpClient) { }

  getAllArticles() {
    return this.service.get(paths.articles);
  }

  getArticle(data: Article[], id: number): Article {
    return data.filter(x => x.id == id)[0];
  }
}
