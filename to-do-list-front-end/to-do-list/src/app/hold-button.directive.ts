import { Directive, Output, EventEmitter, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoldButton]'
})
export class HoldButtonDirective {
  @Input() appHoldDuration: number = 1000; // Default hold duration in milliseconds (1 second)
  @Output() appHoldClick = new EventEmitter();

  private holdTimeout: any;

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  onHoldStart(event: MouseEvent | TouchEvent) {
    this.holdTimeout = setTimeout(() => {
      this.appHoldClick.emit();
    }, this.appHoldDuration);
  }

  @HostListener('mouseup')
  @HostListener('touchend')
  onHoldEnd() {
    clearTimeout(this.holdTimeout);
  }
}