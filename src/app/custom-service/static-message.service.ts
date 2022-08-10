import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticMessageService {
  private disclaimerMessage: string = 'Disclaimer: Materials referenced are not owned by the developer and is use as demontration purpose only';
  constructor() { }

  getDisclaimer(){
    return this.disclaimerMessage;
  }
}
