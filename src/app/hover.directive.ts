import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { inject } from '@angular/core/testing';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  // color:string='red';

  // constructor(private element:ElementRef, @Inject(DOCUMENT) private document:Document) { 
  //   console.log(this.element.nativeElement);
  // }

  // @Input() color:string='red'

  @Input() appHover ='red'

  constructor(private element:ElementRef, private renderer:Renderer2) { 
    console.log(this.element.nativeElement);
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor='red';
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.appHover)
  }

  //Host listenner listends to events on the component where the directive is applied
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','white')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.appHover)
  }
}
