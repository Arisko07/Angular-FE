import { Component, OnInit } from '@angular/core';
import { NavigationService } from './custom-service/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular-FE';
  currentPage = 'home';

  constructor(private navigation: NavigationService){}

  ngOnInit(){
    this.navigation.pageSelected.subscribe( () => { this.currentPage = this.navigation.getCurrentPage(); } )
  }
}
