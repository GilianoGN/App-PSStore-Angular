import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImplicitReceiver } from '@angular/compiler';

@Component({
  selector: 'app-card-label',
  imports: [CommonModule],
  templateUrl: './card-label.component.html',
  styleUrl: './card-label.component.css'
})
export class CardLabelComponent {
  @Input() gameLabel!:string;

  constructor() {}

  get labelBoolean(): boolean {
    return this.gameLabel !== "" && this.gameLabel !== undefined && this.gameLabel !== null;
  }

}
