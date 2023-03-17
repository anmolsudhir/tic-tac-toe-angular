import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton [disabled]="gameOver" *ngIf="!value">{{ this.value }}</button>
    <button nbButton hero status="success" *ngIf="value == 'X'">{{ this.value }}</button>
    <button nbButton info status="info" *ngIf="value == 'O'">{{ this.value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }'],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
  @Input() gameOver: boolean;
}
