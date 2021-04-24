import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  animations: [
    trigger("logo", [
      state('false', style({ transform: 'rotateX(0deg)' })),
      state('true', style({ transform: 'rotateX(45deg)' })),
      transition('false <=> true', animate('1000ms ease'))
    ])
  ]
})
export class CategoriesComponent implements OnInit {

  constructor(private services: CategoriesService) { }

  public categories;

  logoRotate = false;

  ngOnInit(): void {
    this.services.getAllCategories().subscribe(
      Response=> {
        this.categories = Response;
      },
      error => {
        alert("An error occured: " + error);
      }
    )

    setInterval(() => this.logoRotate = true, 500);
    setInterval(() => this.logoRotate = false, 1000);
  }

}
