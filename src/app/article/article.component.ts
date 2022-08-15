import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../custom-service/article.service';
import { NavigationService } from '../custom-service/navigation.service';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: Article[] = [];
  selectedPage: string = '';
  paginationButton: Array<number> = [];
  currentPage: number = 0;
  constructor( private article: ArticleService, private navigation: NavigationService) { }

  ngOnInit(): void {    
    this.selectedPage = this.navigation.getCurrentPage();
    if(this.selectedPage==='article'){
      this.onPagination(0);
    }
    else{
      this.articles = this.article.getArticles().filter( article => article.type === 'events' );    
    }
    this.article.articleFilter.subscribe( filter => {
      this.articles = this.article.getArticles().filter( article => article.type === filter );
    });
    
  }
  onArticleClick(article: Article){
    this.navigation.loaderState.emit(true);
    this.article.setSelectedArticle(article);
    setTimeout(()=>{
      const selectedPage = 'detail';      
      this.navigation.setCurrentPage(selectedPage); 
      this.navigation.loaderState.emit(false);     
    }, 1000) 
  }
  onPagination(index: number){
    const mainArticle = this.arraySplit(this.article.getArticles(), 3)    
    this.navigation.loaderState.emit(true);
    this.currentPage = index;
    setTimeout(()=>{
      this.articles = mainArticle[index];
      this.paginationButton = [...Array(mainArticle.length).keys()];    
      this.navigation.loaderState.emit(false);     
    }, 1000) 

  }
  arraySplit(articles: Article[], size: number) {
    const res = [];
    for (let i = 0; i < articles.length; i += size) {
        const chunk = articles.slice(i, i + size);
        res.push(chunk);
    }
    return res;
}
}
