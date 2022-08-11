import { Component, Input, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/custom-service/navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() navOpen: boolean = false;
  selectedPage: string = '';
  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
    this.selectedPage = this.navigation.getCurrentPage();
    this.navigation.navToggle.subscribe( () => this.navOpen = this.navigation.getNavState() )
  }
  
  onPageSelect(selectedPage: string){

    this.navigation.loaderState.emit(true);

    setTimeout(()=>{
      this.navigation.loaderState.emit(false);
      this.navigation.setCurrentPage(selectedPage);
      this.selectedPage = selectedPage;
    }, 1000)    

  }
  onNavClose(){
    this.navigation.setNavState(!this.navigation.getNavState());
    this.navOpen = this.navigation.getNavState()
  }
}
