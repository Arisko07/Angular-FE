import { Component, OnInit, Output } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ArticleService } from '../custom-service/article.service';
import { SanitizeUrlPipe } from './SanitizeUrlPipe'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [SanitizeUrlPipe]
})
export class DetailComponent implements OnInit {
  videoRef: SafeHtml = '';
  videoHeader: string = '';
  constructor(private article: ArticleService,public sanitizeUrl: SanitizeUrlPipe) { }

  ngOnInit(): void {
    const article = this.article.getSelectedArticle();
    this.videoRef = this.sanitizeUrl.transform(article.videoRef);   
    this.videoHeader = article.header;
  }
}