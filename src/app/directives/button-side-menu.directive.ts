import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[hide-side-menu]',
})
export class HideSideMenu {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['event.target']) onClick(target: any) {
    const clickInside = this.elementRef.nativeElement.contains(target);
  }
}
