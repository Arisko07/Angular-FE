import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  pageSelected = new EventEmitter<null>();
  navToggle = new EventEmitter<null>();
  loaderState = new EventEmitter<boolean>();

  private currentPage: string = 'home';
  private navState: boolean = false;  
  private links: Array<any> = [
    {
      type: 'header',
      name: 'codeAndTheory',
      link: 'https://www.codeandtheory.com/'
    },
    {
      type: 'footer',
      name: 'git',
      link: 'https://github.com/Arisko07/Angular-FE',
      icon: 'gitwhite.png'
    },
    {
      type: 'footer',
      name: 'facebook',
      link: 'https://facebook.com',
      icon: 'faceIcon.png'
    },
    {
      type: 'footer',
      name: 'linkedIn',
      link: 'https://www.linkedin.com/',
      icon: 'linked.png'
    },
    {
      type: 'footer',
      name: 'reddit',
      link: 'https://www.reddit.com/r/Genshin_Impact/',
      icon: 'reddit-logo.png'
    },
    {
      type: 'guide',
      name: 'Beginners Guide',
      link: 'https://www.youtube.com/watch?v=Bp_GgNSy8eU'
    },
    {
      type: 'guide',
      name: 'Character Reference',
      link: 'https://docs.google.com/spreadsheets/d/1gNxZ2xab1J6o1TuNVWMeLOZ7TPOqrsf3SshP5DLvKzI/htmlview?pru=AAABdXYM80o*xMxXJdNbCCZ-v9FLVh6EXg#'
    },
    {
      type: 'reference',
      name: 'Genshin Wiki',
      link: 'https://genshin-impact.fandom.com/wiki/Genshin_Impact_Wiki'
    },
    {
      type: 'reference',
      name: 'Genshin Youtube',
      link: 'https://www.youtube.com/c/GenshinImpact'
    }
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
