import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CostItem {
  code?: string;
  category: string;
  basis?: string;
  amount: number;
}

interface LaborCost {
  member: string;
  role: string;
  hourlyRate: number;
  sprint1Hours: number;
  sprint2Hours: number;
  sprint3Hours: number;
  sprint4Hours: number;
  totalHours: number;
  totalCost: number;
}

interface SprintBudget {
  sprint: string;
  labor: number;
  users: number;
  implementation: number;
  documents: number;
  consulting: number;
  technology: number;
  total: number;
}

interface BudgetSummary {
  directCosts: number;
  indirectCosts: number;
  baseEstimate: number;
  contingency: number;
  costBaseline: number;
  managementReserve: number;
  authorizedBudget: number;
}

@Component({
  selector: 'app-linea-base-costos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linea-base-costos.html',
  styleUrl: './linea-base-costos.css',
})
export class LineaBaseCostosComponent implements AfterViewInit, OnDestroy {
  laborCosts: LaborCost[] = [
    { member: 'Rodrigo', role: 'Arquitectura, backend, despliegue y soporte', hourlyRate: 25, sprint1Hours: 96, sprint2Hours: 80, sprint3Hours: 28, sprint4Hours: 24, totalHours: 228, totalCost: 5700 },
    { member: 'Abel', role: 'Desarrollo funcional, interfaces, pruebas y diseño', hourlyRate: 22, sprint1Hours: 72, sprint2Hours: 72, sprint3Hours: 40, sprint4Hours: 20, totalHours: 204, totalCost: 4488 },
    { member: 'Diego', role: 'Lógica, pruebas, capacitación y analítica', hourlyRate: 22, sprint1Hours: 48, sprint2Hours: 64, sprint3Hours: 36, sprint4Hours: 20, totalHours: 168, totalCost: 3696 },
    { member: 'Oscar', role: 'Trabajo de campo, validaciones y coordinación', hourlyRate: 18, sprint1Hours: 24, sprint2Hours: 24, sprint3Hours: 56, sprint4Hours: 24, totalHours: 128, totalCost: 2304 },
  ];

  implementationCosts: CostItem[] = [
    { category: 'Levantamiento y depuración de información', basis: 'Materiales y organización', amount: 180 },
    { category: 'Fotografías y edición básica', basis: 'Accesorios y adecuación', amount: 250 },
    { category: 'Transporte', basis: '8 visitas × S/ 25', amount: 200 },
    { category: 'Logística de capacitación', basis: '2 sesiones × S/ 80', amount: 160 },
    { category: 'Materiales de pruebas piloto', basis: 'Formularios y validaciones', amount: 150 },
    { category: 'Puesta en producción', basis: 'Gastos operativos', amount: 100 },
    { category: 'Medio de respaldo', basis: 'Memoria USB o equivalente', amount: 120 },
  ];

  documentCosts: CostItem[] = [
    { category: 'Manuales por rol', amount: 150 },
    { category: 'Informes finales encuadernados', amount: 105 },
    { category: 'Protocolos y checklists impresos', amount: 60 },
    { category: 'Hojas, etiquetas y útiles', amount: 45 },
    { category: 'Respaldo y organización documental', amount: 30 },
  ];

  consultingCosts: CostItem[] = [
    { category: 'Asesoría metodológica', basis: '12 horas a S/ 80/h', amount: 960 },
    { category: 'Revisión Django y despliegue', basis: '6 horas a S/ 70/h', amount: 420 },
    { category: 'Revisión de marketing digital', basis: '4 horas a S/ 60/h', amount: 240 },
  ];

  technologyCosts: CostItem[] = [
    { category: 'Hosting PythonAnywhere', basis: '12 meses', amount: 456 },
    { category: 'Dominio propio', basis: '1 año', amount: 70 },
    { category: 'Internet del proyecto', basis: '4 meses', amount: 320 },
    { category: 'Datos móviles y pruebas', basis: 'Bolsa del proyecto', amount: 80 },
  ];

  sprintBudgets: SprintBudget[] = [
    { sprint: 'Sprint 1', labor: 5472, users: 0, implementation: 300, documents: 80, consulting: 300, technology: 200, total: 6352 },
    { sprint: 'Sprint 2', labor: 5424, users: 0, implementation: 350, documents: 80, consulting: 400, technology: 550, total: 6804 },
    { sprint: 'Sprint 3', labor: 3380, users: 520, implementation: 400, documents: 130, consulting: 520, technology: 100, total: 5050 },
    { sprint: 'Sprint 4', labor: 1912, users: 140, implementation: 110, documents: 100, consulting: 400, technology: 76, total: 2738 },
  ];

  pilarDistribution = [
    { name: 'Sistema Web de Gestión', amount: 13156, percentage: 62.8 },
    { name: 'Presencia Digital y Marketing', amount: 2150, percentage: 10.3 },
    { name: 'Procesos Operativos', amount: 1200, percentage: 5.7 },
    { name: 'Personas y Gestión del Cambio', amount: 1700, percentage: 8.1 },
    { name: 'Analítica, sostenibilidad y cierre', amount: 2738, percentage: 13.1 },
  ];

  budgetSummary: BudgetSummary = {
    directCosts: 20944,
    indirectCosts: 1047,
    baseEstimate: 21991,
    contingency: 2199,
    costBaseline: 24190,
    managementReserve: 1210,
    authorizedBudget: 25400
  };

  diagramCurvaS = `xychart-beta
    title "Línea base acumulada de costos (Soles)"
    x-axis ["Septiembre", "Octubre", "Noviembre", "Diciembre"]
    y-axis "Acumulado S/" 0 --> 25000
    line [7337, 15195, 21028, 24190]
    bar [7337, 7858, 5833, 3162]`;

  diagramControlCambios = `flowchart LR
    A[Solicitud de cambio] --> B[Identificar paquete afectado]
    B --> C[Estimar costo adicional]
    C --> D[Evaluar alcance y cronograma]
    D --> E{¿Existe contingencia?}
    E -->|Sí| F[Solicitar autorización]
    E -->|No| G[Evaluar reserva de gestión]
    G --> H[Solicitar aprobación formal]
    F --> I[Actualizar registros]
    H --> I
    I --> J[Comunicar decisión]
    
    style E fill:#fef08a,stroke:#eab308,color:#000
    style F fill:#bbf7d0,stroke:#16a34a,color:#000
    style G fill:#fca5a5,stroke:#dc2626,color:#000
    style H fill:#fca5a5,stroke:#dc2626,color:#000`;

  getTotal(items: CostItem[]): number {
    return items.reduce((sum, item) => sum + item.amount, 0);
  }

  private mermaidReady = false;

  private runMermaid(): void {
    import('mermaid').then((m) => {
      const mi = m.default;
      if (!this.mermaidReady) {
        mi.initialize({
          startOnLoad: false,
          theme: 'base',
          themeVariables: {
            primaryColor: '#E1F5EE',
            primaryTextColor: '#04342C',
            primaryBorderColor: '#1D9E75',
            lineColor: '#5A6478'
          }
        });
        this.mermaidReady = true;
      }
      document.querySelectorAll('.mermaid[data-processed]').forEach(el => {
        el.removeAttribute('data-processed');
        const original = el.getAttribute('data-original');
        if (original) el.textContent = original;
      });
      mi.run({ querySelector: '.mermaid' });
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      document.querySelectorAll('.mermaid').forEach(el => {
        if (!el.getAttribute('data-original')) {
          el.setAttribute('data-original', el.textContent || '');
        }
      });
      this.runMermaid();
    }, 150);
  }

  ngOnDestroy(): void {
    this.mermaidReady = false;
  }
}
