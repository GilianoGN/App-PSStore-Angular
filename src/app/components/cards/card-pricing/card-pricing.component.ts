import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  imports: [],
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent {
  @Input() gameType: string = "";
  @Input() gamePrice: string = "";
}
