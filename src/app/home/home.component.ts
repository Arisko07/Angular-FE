import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../custom-service/article.service';
import { NavigationService } from '../custom-service/navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articleNavigation: string = 'events'
  constructor(private article: ArticleService, private navigation: NavigationService) {
    this.navigation.setCurrentPage('home'); 
  }

  ngOnInit(): void {       
  }
  onArticleFilter(filter: string){
    this.article.articleFilter.emit(filter);
    this.articleNavigation = filter;
  }
}
