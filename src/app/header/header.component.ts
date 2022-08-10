import { Component, OnInit, Output } from '@angular/core';
import { NavigationService } from '../custom-service/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navState: boolean = false;
  codeLink: string = '';
  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
    //this.codeLink = this.navigation.getLinks().find(link =>  link[name] === 'codeAndTheory' )
    const links = this.navigation.getLinks();    
    this.codeLink = links.find( link => link.name === 'codeAndTheory').link;
  }
  onNavClick(){
    this.navState = !this.navState;
  }
}
