import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from '../../components/menubar/menubar.component';
import { PageComponent } from '../../components/page/page.component';
import { ListGamesService } from '../../services/list-games.service';
import { GameData } from '../../models/gameData';


@Component({
  selector: 'app-games',
  standalone: true,
  imports: [MenubarComponent, PageComponent, CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit {
  games: GameData[] = [];
  GUrl: string = '';

  constructor(private route: ActivatedRoute, private listGamesService: ListGamesService) { } 

  ngOnInit(): void {
    // Para capturar o parâmetro da rota uma única vez (ao carregar o componente)
    this.route.paramMap.subscribe(params => {
      this.GUrl = params.get('nameGame') || ''; // 'nameGame' deve ser o mesmo nome da rota (:nameGame)
      this.applyFilter();
      // A partir daqui, você pode usar this.GUrl para buscar os dados do jogo
      // Por exemplo: this.loadGameDetails(this.GUrl);
    });
  }

  applyFilter(): void {
    this.games = this.listGamesService.filterGamePage(this.GUrl);
  }  
}
