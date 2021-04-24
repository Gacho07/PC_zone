import { state, style, trigger, transition, animate } from '@angular/animations';
import { ArticlesService } from '../services/articles.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article } from '../article';
import { Subscription } from 'rxjs/';


@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css'],
  animations: [
    trigger('photoState', [
      state('move', style({ transform: 'translateX(-100%) translateY(50px)' })),
      state('scale', style({ transform: 'scale(0.8)' })),
      state('back', style({ transform: 'rotateY(180deg)' })),
      transition('scale => move', animate('2000ms ease-out')),
      transition('* => *', animate('1000ms ease'))
    ])
  ]
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {

  constructor(private service: ArticlesService, private router: Router, private route: ActivatedRoute) { }

  paramsSubscription: Subscription
  article: Article

  position: string;

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params: Params) => this.loadArticles(params['id']));
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  private loadArticles(id: number): void {
    this.service.getAllArticles().subscribe(
      (data: Article[]) => {
        let tmp = this.service.getArticle(data, id);
        if (tmp == null) this.router.navigate(['/404']);
        this.article = tmp;
      },
      error => alert("Error: " + error)
    );
  }

  changePosition(newPosition: string) {
    this.position = newPosition;
  }

}
