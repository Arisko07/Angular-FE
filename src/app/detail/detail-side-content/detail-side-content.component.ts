import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/custom-service/navigation.service';

@Component({
  selector: 'app-detail-side-content',
  templateUrl: './detail-side-content.component.html',
  styleUrls: ['./detail-side-content.component.css']
})
export class DetailSideContentComponent implements OnInit {
  guideList: Array<any> = [];
  refList: Array<any> = [];

  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
    this.guideList = this.navigation.getLinks().filter(link => link.type=== 'guide');
    this.refList = this.navigation.getLinks().filter(link => link.type=== 'reference');
  }

}
