import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { SingleArticleComponent } from './single-article/single-article.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { ArticlesComponent } from './articles/articles.component';
import { CategoryArticlesComponent } from './category-articles/category-articles.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerReviewsComponent } from './home/customer-reviews/customer-reviews.component';
import { NewsletterComponent } from './home/newsletter/newsletter.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { NotFoundComponent } from './not-found/not-found.component';



const appRoutes : Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "articles",
    component: ArticlesComponent
  },
  {
    path: "articles/:idCategory",
    component: CategoryArticlesComponent
  },
  {
    path: "article-details/:id",
    component: ArticleDetailsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "/404"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    SliderComponent,
    SingleArticleComponent,
    CategoriesComponent,
    ArticlesComponent,
    CategoryArticlesComponent,
    FooterComponent,
    ContactComponent,
    CustomerReviewsComponent,
    NewsletterComponent,
    ShortenPipe,
    ArticleDetailsComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
