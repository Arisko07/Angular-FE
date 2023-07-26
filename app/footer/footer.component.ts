import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../custom-service/navigation.service';
import { StaticMessageService } from '../custom-service/static-message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  links: Array<any> = [];
  disclaimerMessage: string = '';
  constructor(private navigation: NavigationService, private staticMessage: StaticMessageService) { }

  ngOnInit(): void {
    this.links = this.navigation.getLinks().filter(link => link.type === 'footer');
    this.disclaimerMessage = this.staticMessage.getDisclaimer();    
  }
}
