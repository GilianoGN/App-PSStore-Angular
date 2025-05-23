import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menubar',
  imports: [ CommonModule ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {
  isHoveringConsole: boolean = false;
  isHoveringCategoria: boolean = false;
  activeSubmenu: string | null = null;
  @Output() categorySelected = new EventEmitter<string>();
  @Output() consoleSelected = new EventEmitter<string>();

  constructor() {}

  toggleSubmenu(menuName: string) {
    this.activeSubmenu = (this.activeSubmenu === menuName) ? null : menuName;
    this.isHoveringConsole = false;
    this.isHoveringCategoria = false;
  }

  closeAllSubmenus() {
    this.activeSubmenu = null;
    this.isHoveringConsole = false;
    this.isHoveringCategoria = false;
  }

  // Método para emitir o filtro de categoria
  selectCategory(category: string): void {
    this.categorySelected.emit(category);
    this.closeAllSubmenus();
  }

  // Método para emitir o filtro de console
  selectConsole(consoleType: string): void {
    this.consoleSelected.emit(consoleType);
    this.closeAllSubmenus();
  }
}
