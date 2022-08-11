import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../custom-service/article.service';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article[] = []
  constructor( private article: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.article.getArticles().filter( article => article.type === 'events' );
    this.article.articleFilter.subscribe( filter => {
      this.articles = this.article.getArticles().filter( article => article.type === filter );
    })
  }

}
