import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-alcance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion-alcance.component.html',
  styleUrl: './gestion-alcance.component.scss'
})
export class GestionAlcanceComponent {
  activeTab = 1;

  selectTab(tabIndex: number): void {
    this.activeTab = tabIndex;
  }

  toggleAccordion(tabIndex: number): void {
    if (this.activeTab === tabIndex) {
      this.activeTab = 0; // Colapsar si se da click al activo
    } else {
      this.activeTab = tabIndex; // Expandir el clickeado
    }
  }
}
