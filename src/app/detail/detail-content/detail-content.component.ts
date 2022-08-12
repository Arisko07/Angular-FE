import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/article/article.model';
import { ArticleService } from 'src/app/custom-service/article.service';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.css']
})
export class DetailContentComponent implements OnInit {
  details: Article = this.articles.getArticles()[0];
  constructor(private articles: ArticleService) { }

  ngOnInit(): void {
    this.details = this.articles.getSelectedArticle();    
  }

}
