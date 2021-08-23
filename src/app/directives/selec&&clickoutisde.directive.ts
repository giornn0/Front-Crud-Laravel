import { EventEmitter, Output } from '@angular/core';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[select-clickOutside]',
})

//U have 2 ways of this to being used in the html => [] to be used as an atribute of the element, and with .name to be used as a  class
export class SelectClickOutside {
  @Output() CloseSideMenu: EventEmitter<boolean> = new EventEmitter();
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event.target']) clickOutside(target: any) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (clickedInside) {
      this.CloseSideMenu.emit(false);
    }
  }
}
