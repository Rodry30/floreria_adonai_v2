import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-linea-base-cronograma',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linea-base-cronograma.component.html',
  styleUrl: './linea-base-cronograma.component.scss',
  preserveWhitespaces: true
})
export class LineaBaseCronogramaComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    import('mermaid').then((m) => {
      const mermaidInstance = m.default;
      mermaidInstance.initialize({
        startOnLoad: false,
        theme: 'base',
        gantt: {
          barHeight: 35,
          barGap: 8,
          fontSize: 14,
          sectionFontSize: 16
        },
        themeVariables: {
          primaryColor: '#E1F5EE',
          primaryTextColor: '#04342C',
          primaryBorderColor: '#1D9E75',
          lineColor: '#5A6478',
          secondaryColor: '#E6F1FB',
          tertiaryColor: '#FAEEDA'
        }
      });
      mermaidInstance.run({
        querySelector: '.mermaid'
      });
    });
  }
}
