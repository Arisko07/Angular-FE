import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundImage]'
})
export class BackgroundImageDirective implements OnInit{
  @Input('appBackgroundImage') defaultImage: string = '/assets/img/yellowBanner.jpg';
  @Input() repeat: string = 'no-repeat';
  @HostBinding('style.background') background: string = `url(${this.defaultImage}) ${this.repeat}`;
  @HostBinding('style.backgroundSize') backgroundSize: string = 'cover';
  constructor() { }

  ngOnInit(){
    this.background = `url(${this.defaultImage}) ${this.repeat}`;
  }
}
