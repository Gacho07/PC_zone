import { ArticlesService } from './../services/articles.service';
import { Article } from './../article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private services: ArticlesService) { }

  allArticles: Article[];

  ngOnInit(): void {
    this.services.getAllArticles().subscribe(
      (Response: Article[]) => {
        this.allArticles = Response;
      },
      error => {
        alert("An error occured: " + error);
      }
    )
  }

}
