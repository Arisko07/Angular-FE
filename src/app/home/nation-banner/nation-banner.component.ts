import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/custom-service/article.service';
import { NationBanner } from '../nation-banner.model';

@Component({
  selector: 'app-nation-banner',
  templateUrl: './nation-banner.component.html',
  styleUrls: ['./nation-banner.component.css']
})
export class NationBannerComponent implements OnInit {
  nationBanner: NationBanner[] = [];
  constructor(private article: ArticleService) { }

  ngOnInit(): void {
    this.nationBanner = this.article.getNationBanner();
  }

}
