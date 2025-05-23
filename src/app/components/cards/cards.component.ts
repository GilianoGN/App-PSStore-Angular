import { Component, Input } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';


@Component({
  selector: 'app-cards',
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})

export class CardsComponent {
  @Input() cardImg:string = "";
  @Input() cardLabel:string = "";
  @Input() cardPrice:string = "";
  @Input() cardType:string = "";
  @Input() cardName:string = "";
  @Input() cardGUrl:string = "";
}
