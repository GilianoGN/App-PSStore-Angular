import { Component, Input} from '@angular/core';
import { BoxtitleComponent } from "./boxtitle/boxtitle.component";

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [BoxtitleComponent],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})

export class PageComponent {
  @Input() pagImg:string = "https://image.jeuxvideo.com/medias-sm/174583/1745830289-4269-jaquette-avant.png";
  @Input() pagName:string = "DOOM: The Dark Ages";
  @Input() pagLabel:string = "Digital";
  @Input() pagPrice:string = "R$ 349,90";
  @Input() pagType:string[] = ["Ação","RPG","Aventura","Luta"];
  @Input() pagConsole:string[] = ["PS5","STANDARD EDITION", "PS5 PRO"];

}
