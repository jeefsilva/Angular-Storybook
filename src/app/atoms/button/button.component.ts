import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sk-button',
  template: `
    <button mdc-button [raised]="raised" (click)="click.emit($event)">{{text}}</button>
  `
})
export class ButtonComponent {
  @Input() text: string;
  @Input() raised: boolean;
  @Output() click: EventEmitter<any> = new EventEmitter();
}
