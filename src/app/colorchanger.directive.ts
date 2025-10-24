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
    this.changeColor('text-success'); // Reset class
  }

  private changeColor(className: string) {
    const el = this.elementRef.nativeElement;
    el.classList.remove('text-info', 'text-success', 'text-primary', 'text-danger'); // remove known classes
    el.classList.add(className);
  }
}
