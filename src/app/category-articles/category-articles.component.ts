import { ArticlesService } from './../services/articles.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category-articles',
  templateUrl: './category-articles.component.html',
  styleUrls: ['./category-articles.component.css']
})
export class CategoryArticlesComponent implements OnInit {
  idCategory
  articles
  category_articles=[];


  constructor(private http:HttpClient, private service:ArticlesService, private route:ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.idCategory =+ this.route.snapshot.params["idCategory"];
    })
  }


  ngOnInit(): void {
    this.service.getAllArticles().subscribe(
      Response => {
        this.articles = Response;
        for (let i = 0; i < this.articles.length; i++) {
          if (this.articles[i].idCategory == this.idCategory) {
            this.category_articles.push(this.articles[i])
          }
        }
        return this.category_articles;
      },
      error => {
        alert("Error: " + error);
      }
    )
  }

}
