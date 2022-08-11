import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/custom-service/article.service';
import { HotNews } from '../hot-news.model';

@Component({
  selector: 'app-hot-news',
  templateUrl: './hot-news.component.html',
  styleUrls: ['./hot-news.component.css']
})
export class HotNewsComponent implements OnInit {
  hotNews: HotNews[] = [];
  constructor(private article: ArticleService) { }

  ngOnInit(): void {
    this.hotNews = this.article.getHowNews();
  }

}
