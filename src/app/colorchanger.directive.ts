import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorchanger]'
})
export class ColorchangerDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('text-danger'); // Bootstrap class
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('text-dark'); // Reset class
  }

  private changeColor(className: string) {
    const el = this.elementRef.nativeElement;
    el.classList.remove('text-info', 'text-dark', 'text-primary', 'text-danger'); // remove known classes
    el.classList.add(className);
  }
}
