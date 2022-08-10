import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  pageSelected = new EventEmitter<null>();
  navToggle = new EventEmitter<null>();
  private currentPage: string = 'home';
  private navState: boolean = false;
  private links: Array<any> = [
    {
      name: 'codeAndTheory',
      link: 'https://www.codeandtheory.com/'
    },
    {
      name: 'git',
      link: 'https://github.com/Arisko07/Angular-FE',
      icon: 'gitwhite.png'
    },
    {
      name: 'facebook',
      link: 'https://facebook.com',
      icon: 'faceIcon.png'
    },
    {
      name: 'linkedIn',
      link: 'https://www.linkedin.com/',
      icon: 'linked.png'
    },
    {
      name: 'reddit',
      link: 'https://www.reddit.com/r/Genshin_Impact/',
      icon: 'reddit-logo.png'
    },
    
  ]
  constructor() { }

  getLinks(){
    return this.links;
  }

  getCurrentPage(){
    return this.currentPage;
  }
  getNavState(){
    return this.navState;
  }
  setNavState(state: boolean){
    this.navState = state;
  }
  setCurrentPage(selectedPage: string){
    this.currentPage = selectedPage;
    this.pageSelected.emit();
  }
}
