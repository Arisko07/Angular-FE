import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  pageSelected = new EventEmitter<null>();
  private currentPage: string = 'home';
  constructor() { }

  getCurrentPage(){
    return this.currentPage;
  }
  
  setCurrentPage(selectedPage: string){
    this.currentPage = selectedPage;
    this.pageSelected.emit();
  }
}
