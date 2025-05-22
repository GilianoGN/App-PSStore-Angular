import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { MenubarComponent } from '../../components/menubar/menubar.component';

@Component({
  selector: 'app-home',
  imports: [CardsComponent, MenubarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
