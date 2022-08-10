import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/custom-service/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() navOpen: boolean = false;
  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
  }
  
  onPageSelect(selectedPage: string){
    this.navigation.setCurrentPage(selectedPage);
  }

}
