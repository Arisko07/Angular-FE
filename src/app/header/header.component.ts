import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navState: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onNavClick(){
    this.navState = !this.navState;
  }
}
