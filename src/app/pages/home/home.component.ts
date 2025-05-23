import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../../components/cards/cards.component';
import { MenubarComponent } from '../../components/menubar/menubar.component';
import { ListGamesService } from '../../services/list-games.service';
import { GameData } from '../../models/gameData';

@Component({
  selector: 'app-home',
  imports: [CardsComponent, MenubarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  games: GameData[] = [];
  activeCategory: string | undefined;
  activeConsole: string | undefined;

  constructor(private listGamesService: ListGamesService) {}

  ngOnInit(): void {
      this.games = this.listGamesService.getAllGames();
  }

  filterByCategory(category:string): void {
    this.activeCategory = category === 'Todos' ? undefined : category;
    this.applyFilter();
  }

  filterByConsole(consoleType:string): void {
    this.activeConsole = consoleType === 'Todos' ? undefined : consoleType;
    this.applyFilter();
  }

  applyFilter(): void {
    this.games = this.listGamesService.filterGames(this.activeCategory, this.activeConsole);
  }
}
