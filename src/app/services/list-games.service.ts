import { Injectable } from '@angular/core';
import { listGamesData } from '../data/listGamesData';
import { GameData } from '../models/gameData';

@Injectable({
  providedIn: 'root'
})
export class ListGamesService {
  private games: GameData[] = listGamesData;

  constructor() { }

  getAllGames(): GameData[] {
    return this.games;
  }

  filterGames(category?: string, consoleType?: string): GameData[] { 
    let filteredGames = this.games;
    if (category) {
      filteredGames = filteredGames.filter(game => {
        const matches = game.categoria.some(cat => cat.toLowerCase() === category.toLowerCase());
        return matches;
      });
    }
    if (consoleType) { // Usar consoleType aqui
      filteredGames = filteredGames.filter(game => {
        const matches = game.console.some(con => con.toLowerCase() === consoleType.toLowerCase()); // Usar consoleType aqui
        return matches;
      });
    }
    return filteredGames;
  }

  filterGamePage(nomeUrl: string):GameData[] {
    let filterGamePage = this.games;
    if (nomeUrl) {
      filterGamePage = filterGamePage.filter(game => {
        const matches = game.console.some(nam => nam.toLowerCase() === nomeUrl.toLowerCase());
        return matches;
      })
    }
    return filterGamePage;
  }
}
