import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-iteracion-dos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iteracion-dos.component.html',
  styleUrl: './iteracion-dos.component.scss'
})
export class IteracionDosComponent {
  activeTab = 1;

  selectTab(tabIndex: number): void {
    this.activeTab = tabIndex;
  }

  toggleAccordion(tabIndex: number): void {
    if (this.activeTab === tabIndex) {
      this.activeTab = 0; // Collapse if clicked the active one
    } else {
      this.activeTab = tabIndex; // Expand the clicked one
    }
  }
}
