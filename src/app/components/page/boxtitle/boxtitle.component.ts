import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boxtitle',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './boxtitle.component.html',
  styleUrl: './boxtitle.component.css'
})
export class BoxtitleComponent {
  @Input() boxName:string = "";
  @Input() boxConsole:string[] = [];
  @Input() boxPrice:string = "";
  @Input() boxLabel:string = "";
  @Input() boxType:string[] = [];
}
