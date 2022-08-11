import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../custom-service/navigation.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  loaderState: boolean = false;
  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
    this.navigation.loaderState.subscribe( state => this.loaderState = state );
  }

}
