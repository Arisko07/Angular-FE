import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/article/skill.model';
import { ArticleService } from 'src/app/custom-service/article.service';

@Component({
  selector: 'app-detail-table',
  templateUrl: './detail-table.component.html',
  styleUrls: ['./detail-table.component.css']
})
export class DetailTableComponent implements OnInit {
  skillList: Skill[] = []  
  constructor(private article: ArticleService) { }

  ngOnInit(): void {
    this.skillList = this.article.getSelectedArticle().skill    
  }
}
