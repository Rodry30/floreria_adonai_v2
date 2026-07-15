import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface SprintActivity {
  id: string;
  name: string;
  wbs: string;
  responsible: string;
  predecessor: string;
  dates: string;
}

export interface PertActivity {
  id: string;
  optimistic: number;
  mostLikely: number;
  pessimistic: number;
  expected: number;
  standardDeviation: number;
}

export interface CpmActivity {
  id: string;
  expected: number;
  earlyStart: number;
  earlyFinish: number;
  lateStart: number;
  lateFinish: number;
  slack: number;
  status: 'critical' | 'near-critical' | 'slack';
}

export interface SprintSummary {
  number: number;
  name: string;
  period: string;
  scope: string;
  pillars: string;
  status: string;
  milestone: string;
  statusClass: string;
}

// ─── Data: Summary ───────────────────────────────────────────────────────────

const SPRINT_SUMMARY: SprintSummary[] = [
  {
    number: 1, name: 'Sprint 1 — Base tecnológica y módulos principales',
    period: '1–30 septiembre 2026',
    scope: 'Base, Productos, Clientes y Ventas',
    pillars: 'Pilar 1',
    status: 'Planificado', statusClass: 'bg-teal-100 text-teal-800',
    milestone: 'Sprint 1 cerrado — 1 octubre 2026'
  },
  {
    number: 2, name: 'Sprint 2 — Ampliación funcional, despliegue y documentación',
    period: '2–29 octubre 2026',
    scope: 'Proveedores, Usuarios, Catálogo, Dashboard, CSV y Despliegue',
    pillars: 'Pilar 1',
    status: 'Planificado', statusClass: 'bg-teal-100 text-teal-800',
    milestone: 'Sprint 2 consolidado y cerrado — 29 octubre 2026'
  },
  {
    number: 3, name: 'Sprint 3 — Presencia digital, procesos y gestión del cambio',
    period: '2–24 noviembre 2026',
    scope: 'Presencia digital, procesos y gestión del cambio',
    pillars: 'Pilares 2, 3 y 4',
    status: 'Planificado', statusClass: 'bg-teal-100 text-teal-800',
    milestone: 'Sprint 3 cerrado — 24 nov 2026'
  },
  {
    number: 4, name: 'Sprint 4 — Analítica, sostenibilidad, integración y cierre',
    period: '1–15 diciembre 2026',
    scope: 'Analítica, sostenibilidad, integración y cierre',
    pillars: 'Pilar 5 y cierre transversal',
    status: 'Planificado', statusClass: 'bg-teal-100 text-teal-800',
    milestone: 'Proyecto formalmente cerrado — 15 dic 2026'
  },
];

// ─── Sprint 1 — Data ─────────────────────────────────────────────────────────

const SPRINT1_ACTIVITIES: SprintActivity[] = [
  { id: 'A1', name: 'Configuración del entorno Django y base de datos',     wbs: '1.1.1.1',  responsible: 'Rodrigo',        predecessor: 'H-01',      dates: '1–2 sept'        },
  { id: 'A2', name: 'Diseño del modelo de datos general',                   wbs: '1.1.1.2',  responsible: 'Rodrigo',        predecessor: 'A1',        dates: '3–4 sept'        },
  { id: 'A3', name: 'Implementación del control de acceso staff/superuser', wbs: '1.1.1.3',  responsible: 'Rodrigo',        predecessor: 'A2',        dates: '7–8 sept'        },
  { id: 'B1', name: 'Modelo de datos Categoría y Producto',                 wbs: '1.1.2.1',  responsible: 'Rodrigo',        predecessor: 'H-02',      dates: '10–11 sept'      },
  { id: 'B2', name: 'Vistas CRUD de productos',                             wbs: '1.1.2.2',  responsible: 'Rodrigo',        predecessor: 'B1',        dates: '14–16 sept'      },
  { id: 'B3', name: 'Lógica de alertas automáticas de stock bajo',          wbs: '1.1.2.3',  responsible: 'Rodrigo',        predecessor: 'B2',        dates: '17–18 sept'      },
  { id: 'B4', name: 'Carga inicial de productos reales',                    wbs: '1.1.2.4',  responsible: 'Oscar',          predecessor: 'B3',        dates: '21–23 sept'      },
  { id: 'B5', name: 'Pruebas del módulo de productos',                      wbs: '1.1.2.5',  responsible: 'Abel',           predecessor: 'B4',        dates: '24–25 sept'      },
  { id: 'C1', name: 'Modelo de datos Cliente',                              wbs: '1.1.3.1',  responsible: 'Rodrigo',        predecessor: 'H-02',      dates: '10 sept'         },
  { id: 'C2', name: 'Vistas CRUD de clientes',                              wbs: '1.1.3.2',  responsible: 'Abel',           predecessor: 'C1',        dates: '11, 14 y 15 sept'},
  { id: 'C3', name: 'Historial de compras por cliente',                     wbs: '1.1.3.3',  responsible: 'Abel',           predecessor: 'C2',        dates: '16–17 sept'      },
  { id: 'C4', name: 'Carga inicial de clientes frecuentes',                 wbs: '1.1.3.4',  responsible: 'Oscar',          predecessor: 'C3',        dates: '18 y 21 sept'    },
  { id: 'C5', name: 'Pruebas del módulo de clientes',                       wbs: '1.1.3.5',  responsible: 'Diego',          predecessor: 'C4',        dates: '22–23 sept'      },
  { id: 'D1', name: 'Modelo de datos Venta y DetalleVenta',                 wbs: '1.1.4.1',  responsible: 'Abel',           predecessor: 'H-02',      dates: '10–11 sept'      },
  { id: 'D2', name: 'Vistas CRUD de ventas',                                wbs: '1.1.4.2',  responsible: 'Abel',           predecessor: 'D1',        dates: '14–16 sept'      },
  { id: 'D3', name: 'Cálculo automático de totales y reversión de stock',   wbs: '1.1.4.3',  responsible: 'Diego',          predecessor: 'D2',        dates: '17, 18 y 21 sept'},
  { id: 'D4', name: 'Flujo de estados del pedido',                          wbs: '1.1.4.4',  responsible: 'Diego',          predecessor: 'D3',        dates: '22–23 sept'      },
  { id: 'D5', name: 'Pruebas del módulo de ventas',                         wbs: '1.1.4.5',  responsible: 'Abel + Diego',   predecessor: 'D4',        dates: '24, 25 y 28 sept'},
  { id: 'F1', name: 'Consolidación y validación del Sprint 1',              wbs: '(integr.)',responsible: 'Todo el equipo', predecessor: 'B5, C5, D5', dates: '29–30 sept'     },
];

const SPRINT1_PERT: PertActivity[] = [
  { id: 'A1', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'A2', optimistic: 1, mostLikely: 2, pessimistic: 4, expected: 2.2, standardDeviation: 0.5 },
  { id: 'A3', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'B1', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'B2', optimistic: 2, mostLikely: 3, pessimistic: 5, expected: 3.2, standardDeviation: 0.5 },
  { id: 'B3', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'B4', optimistic: 2, mostLikely: 3, pessimistic: 6, expected: 3.3, standardDeviation: 0.7 },
  { id: 'B5', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'C1', optimistic: 1, mostLikely: 1, pessimistic: 2, expected: 1.2, standardDeviation: 0.2 },
  { id: 'C2', optimistic: 2, mostLikely: 3, pessimistic: 4, expected: 3.0, standardDeviation: 0.3 },
  { id: 'C3', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'C4', optimistic: 1, mostLikely: 2, pessimistic: 4, expected: 2.2, standardDeviation: 0.5 },
  { id: 'C5', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'D1', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'D2', optimistic: 2, mostLikely: 3, pessimistic: 5, expected: 3.2, standardDeviation: 0.5 },
  { id: 'D3', optimistic: 2, mostLikely: 3, pessimistic: 4, expected: 3.0, standardDeviation: 0.3 },
  { id: 'D4', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'D5', optimistic: 2, mostLikely: 3, pessimistic: 4, expected: 3.0, standardDeviation: 0.3 },
  { id: 'F1', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
];

const SPRINT1_CPM: CpmActivity[] = [
  { id: 'A1', expected: 2.0, earlyStart: 0.0,  earlyFinish: 2.0,  lateStart: 0.0,  lateFinish: 2.0,  slack: 0.0, status: 'critical'     },
  { id: 'A2', expected: 2.2, earlyStart: 2.0,  earlyFinish: 4.2,  lateStart: 2.0,  lateFinish: 4.2,  slack: 0.0, status: 'critical'     },
  { id: 'A3', expected: 2.0, earlyStart: 4.2,  earlyFinish: 6.2,  lateStart: 4.2,  lateFinish: 6.2,  slack: 0.0, status: 'critical'     },
  { id: 'B1', expected: 2.0, earlyStart: 6.2,  earlyFinish: 8.2,  lateStart: 6.9,  lateFinish: 8.9,  slack: 0.7, status: 'near-critical'},
  { id: 'B2', expected: 3.2, earlyStart: 8.2,  earlyFinish: 11.4, lateStart: 8.9,  lateFinish: 12.1, slack: 0.7, status: 'near-critical'},
  { id: 'B3', expected: 2.0, earlyStart: 11.4, earlyFinish: 13.4, lateStart: 12.1, lateFinish: 14.1, slack: 0.7, status: 'near-critical'},
  { id: 'B4', expected: 3.3, earlyStart: 13.4, earlyFinish: 16.7, lateStart: 14.1, lateFinish: 17.4, slack: 0.7, status: 'near-critical'},
  { id: 'B5', expected: 2.0, earlyStart: 16.7, earlyFinish: 18.7, lateStart: 17.4, lateFinish: 19.4, slack: 0.7, status: 'near-critical'},
  { id: 'C1', expected: 1.2, earlyStart: 6.2,  earlyFinish: 7.4,  lateStart: 9.0,  lateFinish: 10.2, slack: 2.8, status: 'slack'        },
  { id: 'C2', expected: 3.0, earlyStart: 7.4,  earlyFinish: 10.4, lateStart: 10.2, lateFinish: 13.2, slack: 2.8, status: 'slack'        },
  { id: 'C3', expected: 2.0, earlyStart: 10.4, earlyFinish: 12.4, lateStart: 13.2, lateFinish: 15.2, slack: 2.8, status: 'slack'        },
  { id: 'C4', expected: 2.2, earlyStart: 12.4, earlyFinish: 14.6, lateStart: 15.2, lateFinish: 17.4, slack: 2.8, status: 'slack'        },
  { id: 'C5', expected: 2.0, earlyStart: 14.6, earlyFinish: 16.6, lateStart: 17.4, lateFinish: 19.4, slack: 2.8, status: 'slack'        },
  { id: 'D1', expected: 2.0, earlyStart: 6.2,  earlyFinish: 8.2,  lateStart: 6.2,  lateFinish: 8.2,  slack: 0.0, status: 'critical'     },
  { id: 'D2', expected: 3.2, earlyStart: 8.2,  earlyFinish: 11.4, lateStart: 8.2,  lateFinish: 11.4, slack: 0.0, status: 'critical'     },
  { id: 'D3', expected: 3.0, earlyStart: 11.4, earlyFinish: 14.4, lateStart: 11.4, lateFinish: 14.4, slack: 0.0, status: 'critical'     },
  { id: 'D4', expected: 2.0, earlyStart: 14.4, earlyFinish: 16.4, lateStart: 14.4, lateFinish: 16.4, slack: 0.0, status: 'critical'     },
  { id: 'D5', expected: 3.0, earlyStart: 16.4, earlyFinish: 19.4, lateStart: 16.4, lateFinish: 19.4, slack: 0.0, status: 'critical'     },
  { id: 'F1', expected: 2.0, earlyStart: 19.4, earlyFinish: 21.4, lateStart: 19.4, lateFinish: 21.4, slack: 0.0, status: 'critical'     },
];

// ─── Sprint 2 — Data ─────────────────────────────────────────────────────────

const SPRINT2_ACTIVITIES: SprintActivity[] = [
  { id: 'A1', name: 'Implementación del modelo de datos Proveedor',                      wbs: '1.1.5.1',  responsible: 'Rodrigo',         predecessor: 'H-04',               dates: '2 oct'       },
  { id: 'A2', name: 'Desarrollo de vistas CRUD de proveedores',                          wbs: '1.1.5.2',  responsible: 'Rodrigo',         predecessor: 'A1',                 dates: '5–7 oct'     },
  { id: 'A3', name: 'Vinculación de alertas de stock con solicitud de reposición',       wbs: '1.1.5.3',  responsible: 'Rodrigo + Diego', predecessor: 'A2',                 dates: '8–9 oct'     },
  { id: 'A4', name: 'Pruebas del módulo de proveedores',                                 wbs: '1.1.5.4',  responsible: 'Diego',           predecessor: 'A3',                 dates: '12–13 oct'   },
  { id: 'B1', name: 'Configuración de cuentas internas staff/superuser',                 wbs: '1.1.6.1',  responsible: 'Rodrigo',         predecessor: 'H-04',               dates: '2 oct'       },
  { id: 'B2', name: 'Desarrollo de vistas de administración de usuarios y permisos',     wbs: '1.1.6.2',  responsible: 'Abel',            predecessor: 'B1',                 dates: '5–6 oct'     },
  { id: 'B3', name: 'Pruebas de control de acceso',                                      wbs: '1.1.6.3',  responsible: 'Abel + Diego',    predecessor: 'B2',                 dates: '7–8 oct'     },
  { id: 'C1', name: 'Desarrollo de la vista de catálogo público con búsqueda y filtros', wbs: '1.1.7.1',  responsible: 'Abel',            predecessor: 'H-04',               dates: '2, 5 y 6 oct'},
  { id: 'C2', name: 'Implementación del flujo de compra simulada',                       wbs: '1.1.7.2',  responsible: 'Abel + Diego',    predecessor: 'C1',                 dates: '7–9 oct'     },
  { id: 'C3', name: 'Desarrollo de página de confirmación WhatsApp/Yape',                wbs: '1.1.7.3',  responsible: 'Diego',           predecessor: 'C2',                 dates: '12–13 oct'   },
  { id: 'C4', name: 'Pruebas del flujo de compra pública',                               wbs: '1.1.7.4',  responsible: 'Abel + Diego',    predecessor: 'C3',                 dates: '14–15 oct'   },
  { id: 'D1', name: 'Definición de KPIs técnicos del dashboard',                         wbs: '1.1.8.1',  responsible: 'Diego',           predecessor: 'H-04',               dates: '2 oct'       },
  { id: 'D2', name: 'Implementación de vistas del dashboard',                            wbs: '1.1.8.2',  responsible: 'Diego + Rodrigo', predecessor: 'D1',                 dates: '5–7 oct'     },
  { id: 'D3', name: 'Pruebas del dashboard',                                             wbs: '1.1.8.3',  responsible: 'Abel',            predecessor: 'D2',                 dates: '8–9 oct'     },
  { id: 'E1', name: 'Implementación de importación de productos por CSV',                wbs: '1.1.9.1',  responsible: 'Rodrigo',         predecessor: 'H-04',               dates: '2 y 5 oct'   },
  { id: 'E2', name: 'Implementación de importación de clientes por CSV',                 wbs: '1.1.9.2',  responsible: 'Abel',            predecessor: 'H-04',               dates: '2 y 5 oct'   },
  { id: 'E3', name: 'Pruebas de importación CSV',                                        wbs: '1.1.9.3',  responsible: 'Diego',           predecessor: 'E1, E2',             dates: '6–7 oct'     },
  { id: 'G1', name: 'Despliegue del sistema en producción mediante PythonAnywhere',      wbs: '1.1.10.1', responsible: 'Rodrigo',         predecessor: 'A4, B3, C4, D3, E3', dates: '16 y 19 oct' },
  { id: 'G2', name: 'Ejecución de suite de pruebas automatizadas de regresión',          wbs: '1.1.10.2', responsible: 'Abel + Diego',    predecessor: 'G1',                 dates: '20–22 oct'   },
  { id: 'G3', name: 'Elaboración y actualización de documentación técnica README',       wbs: '1.1.10.3', responsible: 'Rodrigo + Oscar', predecessor: 'G2',                 dates: '23 y 26 oct' },
  { id: 'F2', name: 'Consolidación y validación del Sprint 2',                           wbs: '(integr.)',responsible: 'Todo el equipo',  predecessor: 'G3',                 dates: '27–28 oct'   },
];

const SPRINT2_PERT: PertActivity[] = [
  { id: 'A1', optimistic: 1, mostLikely: 1, pessimistic: 2, expected: 1.2, standardDeviation: 0.2 },
  { id: 'A2', optimistic: 2, mostLikely: 3, pessimistic: 4, expected: 3.0, standardDeviation: 0.3 },
  { id: 'A3', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'A4', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'B1', optimistic: 1, mostLikely: 1, pessimistic: 2, expected: 1.2, standardDeviation: 0.2 },
  { id: 'B2', optimistic: 1, mostLikely: 2, pessimistic: 4, expected: 2.2, standardDeviation: 0.5 },
  { id: 'B3', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'C1', optimistic: 2, mostLikely: 3, pessimistic: 5, expected: 3.2, standardDeviation: 0.5 },
  { id: 'C2', optimistic: 2, mostLikely: 3, pessimistic: 4, expected: 3.0, standardDeviation: 0.3 },
  { id: 'C3', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'C4', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'D1', optimistic: 1, mostLikely: 1, pessimistic: 2, expected: 1.2, standardDeviation: 0.2 },
  { id: 'D2', optimistic: 2, mostLikely: 3, pessimistic: 5, expected: 3.2, standardDeviation: 0.5 },
  { id: 'D3', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'E1', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'E2', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'E3', optimistic: 1, mostLikely: 2, pessimistic: 4, expected: 2.2, standardDeviation: 0.5 },
  { id: 'G1', optimistic: 1, mostLikely: 2, pessimistic: 4, expected: 2.2, standardDeviation: 0.5 },
  { id: 'G2', optimistic: 2, mostLikely: 3, pessimistic: 4, expected: 3.0, standardDeviation: 0.3 },
  { id: 'G3', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'F2', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
];

const SPRINT2_CPM: CpmActivity[] = [
  { id: 'A1', expected: 1.2, earlyStart: 0.0,  earlyFinish: 1.2,  lateStart: 2.0,  lateFinish: 3.2,  slack: 2.0, status: 'near-critical'},
  { id: 'A2', expected: 3.0, earlyStart: 1.2,  earlyFinish: 4.2,  lateStart: 3.2,  lateFinish: 6.2,  slack: 2.0, status: 'near-critical'},
  { id: 'A3', expected: 2.0, earlyStart: 4.2,  earlyFinish: 6.2,  lateStart: 6.2,  lateFinish: 8.2,  slack: 2.0, status: 'near-critical'},
  { id: 'A4', expected: 2.0, earlyStart: 6.2,  earlyFinish: 8.2,  lateStart: 8.2,  lateFinish: 10.2, slack: 2.0, status: 'near-critical'},
  { id: 'B1', expected: 1.2, earlyStart: 0.0,  earlyFinish: 1.2,  lateStart: 4.8,  lateFinish: 6.0,  slack: 4.8, status: 'slack'},
  { id: 'B2', expected: 2.2, earlyStart: 1.2,  earlyFinish: 3.4,  lateStart: 6.0,  lateFinish: 8.2,  slack: 4.8, status: 'slack'},
  { id: 'B3', expected: 2.0, earlyStart: 3.4,  earlyFinish: 5.4,  lateStart: 8.2,  lateFinish: 10.2, slack: 4.8, status: 'slack'},
  { id: 'C1', expected: 3.2, earlyStart: 0.0,  earlyFinish: 3.2,  lateStart: 0.0,  lateFinish: 3.2,  slack: 0.0, status: 'critical'},
  { id: 'C2', expected: 3.0, earlyStart: 3.2,  earlyFinish: 6.2,  lateStart: 3.2,  lateFinish: 6.2,  slack: 0.0, status: 'critical'},
  { id: 'C3', expected: 2.0, earlyStart: 6.2,  earlyFinish: 8.2,  lateStart: 6.2,  lateFinish: 8.2,  slack: 0.0, status: 'critical'},
  { id: 'C4', expected: 2.0, earlyStart: 8.2,  earlyFinish: 10.2, lateStart: 8.2,  lateFinish: 10.2, slack: 0.0, status: 'critical'},
  { id: 'D1', expected: 1.2, earlyStart: 0.0,  earlyFinish: 1.2,  lateStart: 3.8,  lateFinish: 5.0,  slack: 3.8, status: 'slack'},
  { id: 'D2', expected: 3.2, earlyStart: 1.2,  earlyFinish: 4.4,  lateStart: 5.0,  lateFinish: 8.2,  slack: 3.8, status: 'slack'},
  { id: 'D3', expected: 2.0, earlyStart: 4.4,  earlyFinish: 6.4,  lateStart: 8.2,  lateFinish: 10.2, slack: 3.8, status: 'slack'},
  { id: 'E1', expected: 2.0, earlyStart: 0.0,  earlyFinish: 2.0,  lateStart: 6.0,  lateFinish: 8.0,  slack: 6.0, status: 'slack'},
  { id: 'E2', expected: 2.0, earlyStart: 0.0,  earlyFinish: 2.0,  lateStart: 6.0,  lateFinish: 8.0,  slack: 6.0, status: 'slack'},
  { id: 'E3', expected: 2.2, earlyStart: 2.0,  earlyFinish: 4.2,  lateStart: 8.0,  lateFinish: 10.2, slack: 6.0, status: 'slack'},
  { id: 'G1', expected: 2.2, earlyStart: 10.2, earlyFinish: 12.4, lateStart: 10.2, lateFinish: 12.4, slack: 0.0, status: 'critical'},
  { id: 'G2', expected: 3.0, earlyStart: 12.4, earlyFinish: 15.4, lateStart: 12.4, lateFinish: 15.4, slack: 0.0, status: 'critical'},
  { id: 'G3', expected: 2.0, earlyStart: 15.4, earlyFinish: 17.4, lateStart: 15.4, lateFinish: 17.4, slack: 0.0, status: 'critical'},
  { id: 'F2', expected: 2.0, earlyStart: 17.4, earlyFinish: 19.4, lateStart: 17.4, lateFinish: 19.4, slack: 0.0, status: 'critical'},
];


// ─── Sprint 3 — Data ─────────────────────────────────────────────────────────

const SPRINT3_ACTIVITIES: SprintActivity[] = [
  { id: 'A1', name: 'Registro y solicitud de verificación de Google Business Profile',  wbs: '1.2.1.1', responsible: 'Oscar',           predecessor: 'H-08', dates: '2–3 nov' },
  { id: 'A2', name: 'Carga de horario, ubicación, fotos y categoría del negocio',       wbs: '1.2.1.2', responsible: 'Oscar + Abel',    predecessor: 'A1',   dates: '4–5 nov' },
  { id: 'B1', name: 'Definición de fechas comerciales clave del trimestre',             wbs: '1.2.2.1', responsible: 'Oscar',           predecessor: 'A2',   dates: '6 y 9 nov' },
  { id: 'B2', name: 'Diseño del calendario editorial de redes sociales',                wbs: '1.2.2.2', responsible: 'Abel + Oscar',    predecessor: 'B1',   dates: '10–12 nov' },
  { id: 'C1', name: 'Diseño de plantillas base reutilizables en Canva',                 wbs: '1.2.3.1', responsible: 'Abel',            predecessor: 'B2',   dates: '13, 16 y 17 nov' },
  { id: 'C2', name: 'Vinculación de las plantillas con productos del catálogo',         wbs: '1.2.3.2', responsible: 'Abel + Oscar',    predecessor: 'C1',   dates: '18–19 nov' },
  { id: 'D1', name: 'Definición del procedimiento ante alerta de stock bajo',           wbs: '1.3.1.1', responsible: 'Rodrigo + Oscar', predecessor: 'H-08', dates: '2–3 nov' },
  { id: 'D2', name: 'Validación del protocolo de reposición con la propietaria',        wbs: '1.3.1.2', responsible: 'Oscar',           predecessor: 'D1',   dates: '4 nov' },
  { id: 'E1', name: 'Definición de pasos del flujo físico de preparación y entrega',    wbs: '1.3.2.1', responsible: 'Diego + Oscar',   predecessor: 'H-08', dates: '2–3 nov' },
  { id: 'E2', name: 'Validación del checklist con la vendedora',                        wbs: '1.3.2.2', responsible: 'Oscar',           predecessor: 'E1',   dates: '4 nov' },
  { id: 'F1', name: 'Diseño de capacitación para la propietaria',                       wbs: '1.4.1.1', responsible: 'Rodrigo',         predecessor: 'H-08', dates: '2–3 nov' },
  { id: 'F2', name: 'Diseño de capacitación para la vendedora',                         wbs: '1.4.1.2', responsible: 'Diego',           predecessor: 'H-08', dates: '2–3 nov' },
  { id: 'F3', name: 'Ejecución de las sesiones de capacitación',                        wbs: '1.4.1.3', responsible: 'Rodrigo + Diego', predecessor: 'F1, F2, G1', dates: '6 y 9 nov' },
  { id: 'G1', name: 'Elaboración del documento de roles y responsabilidades digitales', wbs: '1.4.2.1', responsible: 'Rodrigo + Oscar', predecessor: 'H-08', dates: '2–3 nov' },
  { id: 'H1', name: 'Diseño de encuesta o canal de retroalimentación',                  wbs: '1.4.3.1', responsible: 'Diego',           predecessor: 'G1',   dates: '4 nov' },
  { id: 'H2', name: 'Primera recolección de retroalimentación',                         wbs: '1.4.3.2', responsible: 'Diego + Oscar',   predecessor: 'F3, H1', dates: '10–11 nov' },
  { id: 'I1', name: 'Consolidación y validación del Sprint 3',                          wbs: '(integr.)', responsible: 'Todo el equipo',  predecessor: 'A2, B2, C2, D2, E2, F3, G1, H2', dates: '20 y 23 nov' },
];

const SPRINT3_PERT: PertActivity[] = [
  { id: 'A1', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'A2', optimistic: 1, mostLikely: 2, pessimistic: 4, expected: 2.2, standardDeviation: 0.5 },
  { id: 'B1', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'B2', optimistic: 2, mostLikely: 3, pessimistic: 4, expected: 3.0, standardDeviation: 0.3 },
  { id: 'C1', optimistic: 2, mostLikely: 3, pessimistic: 5, expected: 3.2, standardDeviation: 0.5 },
  { id: 'C2', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'D1', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'D2', optimistic: 1, mostLikely: 1, pessimistic: 2, expected: 1.2, standardDeviation: 0.2 },
  { id: 'E1', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'E2', optimistic: 1, mostLikely: 1, pessimistic: 2, expected: 1.2, standardDeviation: 0.2 },
  { id: 'F1', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'F2', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'F3', optimistic: 1, mostLikely: 2, pessimistic: 4, expected: 2.2, standardDeviation: 0.5 },
  { id: 'G1', optimistic: 1, mostLikely: 2, pessimistic: 4, expected: 2.2, standardDeviation: 0.5 },
  { id: 'H1', optimistic: 1, mostLikely: 1, pessimistic: 2, expected: 1.2, standardDeviation: 0.2 },
  { id: 'H2', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'I1', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
];

const SPRINT3_CPM: CpmActivity[] = [
  { id: 'A1', expected: 2.0, earlyStart: 0.0, earlyFinish: 2.0, lateStart: 0.0, lateFinish: 2.0, slack: 0.0, status: 'critical' },
  { id: 'A2', expected: 2.2, earlyStart: 2.0, earlyFinish: 4.2, lateStart: 2.0, lateFinish: 4.2, slack: 0.0, status: 'critical' },
  { id: 'B1', expected: 2.0, earlyStart: 4.2, earlyFinish: 6.2, lateStart: 4.2, lateFinish: 6.2, slack: 0.0, status: 'critical' },
  { id: 'B2', expected: 3.0, earlyStart: 6.2, earlyFinish: 9.2, lateStart: 6.2, lateFinish: 9.2, slack: 0.0, status: 'critical' },
  { id: 'C1', expected: 3.2, earlyStart: 9.2, earlyFinish: 12.4, lateStart: 9.2, lateFinish: 12.4, slack: 0.0, status: 'critical' },
  { id: 'C2', expected: 2.0, earlyStart: 12.4, earlyFinish: 14.4, lateStart: 12.4, lateFinish: 14.4, slack: 0.0, status: 'critical' },
  { id: 'D1', expected: 2.0, earlyStart: 0.0, earlyFinish: 2.0, lateStart: 11.2, lateFinish: 13.2, slack: 11.2, status: 'slack' },
  { id: 'D2', expected: 1.2, earlyStart: 2.0, earlyFinish: 3.2, lateStart: 13.2, lateFinish: 14.4, slack: 11.2, status: 'slack' },
  { id: 'E1', expected: 2.0, earlyStart: 0.0, earlyFinish: 2.0, lateStart: 11.2, lateFinish: 13.2, slack: 11.2, status: 'slack' },
  { id: 'E2', expected: 1.2, earlyStart: 2.0, earlyFinish: 3.2, lateStart: 13.2, lateFinish: 14.4, slack: 11.2, status: 'slack' },
  { id: 'F1', expected: 2.0, earlyStart: 0.0, earlyFinish: 2.0, lateStart: 8.2, lateFinish: 10.2, slack: 8.2, status: 'slack' },
  { id: 'F2', expected: 2.0, earlyStart: 0.0, earlyFinish: 2.0, lateStart: 8.2, lateFinish: 10.2, slack: 8.2, status: 'slack' },
  { id: 'F3', expected: 2.2, earlyStart: 2.2, earlyFinish: 4.4, lateStart: 10.2, lateFinish: 12.4, slack: 8.0, status: 'slack' },
  { id: 'G1', expected: 2.2, earlyStart: 0.0, earlyFinish: 2.2, lateStart: 8.0, lateFinish: 10.2, slack: 8.0, status: 'slack' },
  { id: 'H1', expected: 1.2, earlyStart: 2.2, earlyFinish: 3.4, lateStart: 11.2, lateFinish: 12.4, slack: 9.0, status: 'slack' },
  { id: 'H2', expected: 2.0, earlyStart: 4.4, earlyFinish: 6.4, lateStart: 12.4, lateFinish: 14.4, slack: 8.0, status: 'slack' },
  { id: 'I1', expected: 2.0, earlyStart: 14.4, earlyFinish: 16.4, lateStart: 14.4, lateFinish: 16.4, slack: 0.0, status: 'critical' },
];

const DIAGRAM3_PDM = `flowchart LR
  H08(["🏁 H-08<br>Inicio<br>2 nov"])
  
  subgraph MKT [Presencia Digital y Marketing]
    A1["A1 — Registro Google<br>2-3 nov<br>Oscar"]
    A2["A2 — Config Google<br>4-5 nov<br>Oscar+Abel"]
    B1["B1 — Fechas Comerciales<br>6,9 nov<br>Oscar"]
    B2["B2 — Calendario Edit<br>10-12 nov<br>Abel+Oscar"]
    C1["C1 — Plantillas Canva<br>13,16,17 nov<br>Abel"]
    C2["C2 — Vincular Catálogo<br>18-19 nov<br>Abel+Oscar"]
  end

  subgraph PROC [Procesos Operativos]
    D1["D1 — Proc. Reposición<br>2-3 nov<br>Rodrigo+Oscar"]
    D2["D2 — Validar D1<br>4 nov<br>Oscar"]
    E1["E1 — Checklist Pedidos<br>2-3 nov<br>Diego+Oscar"]
    E2["E2 — Validar E1<br>4 nov<br>Oscar"]
  end

  subgraph GC [Personas y Gestión Cambio]
    F1["F1 — Cap. Propietaria<br>2-3 nov<br>Rodrigo"]
    F2["F2 — Cap. Vendedora<br>2-3 nov<br>Diego"]
    F3["F3 — Sesiones Cap.<br>6,9 nov<br>Rodrigo+Diego"]
    G1["G1 — Documento Roles<br>2-3 nov<br>Rodrigo+Oscar"]
    H1["H1 — Canal Feedback<br>4 nov<br>Diego"]
    H2["H2 — Feedback 1<br>10-11 nov<br>Diego+Oscar"]
  end

  I1["I1 — Consolidación<br>20,23 nov<br>Todo equipo"]
  H11(["🎉 H-11<br>Cierre<br>24 nov"])

  H08 --> A1
  H08 --> D1
  H08 --> E1
  H08 --> F1
  H08 --> F2
  H08 --> G1

  A1 --> A2
  A2 --> B1
  B1 --> B2
  B2 --> C1
  C1 --> C2

  D1 --> D2
  E1 --> E2

  F1 --> F3
  F2 --> F3
  G1 --> F3
  G1 --> H1
  F3 --> H2
  H1 --> H2

  A2 --> I1
  B2 --> I1
  C2 --> I1
  D2 --> I1
  E2 --> I1
  F3 --> I1
  G1 --> I1
  H2 --> I1

  I1 --> H11

  classDef critical fill:#fee2e2,stroke:#ef4444,stroke-width:2px;
  classDef slack fill:#dcfce7,stroke:#22c55e,stroke-width:1px;

  class A1,A2,B1,B2,C1,C2,I1 critical;
  class D1,D2,E1,E2,F1,F2,F3,G1,H1,H2 slack;
`;

const DIAGRAM3_CPM = `flowchart LR
  A1["A1<br>te: 2.0<br>ES: 0.0 | EF: 2.0<br>LS: 0.0 | LF: 2.0<br>Holgura: 0.0"]
  A2["A2<br>te: 2.2<br>ES: 2.0 | EF: 4.2<br>LS: 2.0 | LF: 4.2<br>Holgura: 0.0"]
  B1["B1<br>te: 2.0<br>ES: 4.2 | EF: 6.2<br>LS: 4.2 | LF: 6.2<br>Holgura: 0.0"]
  B2["B2<br>te: 3.0<br>ES: 6.2 | EF: 9.2<br>LS: 6.2 | LF: 9.2<br>Holgura: 0.0"]
  C1["C1<br>te: 3.2<br>ES: 9.2 | EF: 12.4<br>LS: 9.2 | LF: 12.4<br>Holgura: 0.0"]
  C2["C2<br>te: 2.0<br>ES: 12.4 | EF: 14.4<br>LS: 12.4 | LF: 14.4<br>Holgura: 0.0"]
  
  D1["D1<br>te: 2.0<br>ES: 0.0 | EF: 2.0<br>LS: 11.2 | LF: 13.2<br>Holgura: 11.2"]
  D2["D2<br>te: 1.2<br>ES: 2.0 | EF: 3.2<br>LS: 13.2 | LF: 14.4<br>Holgura: 11.2"]
  
  E1["E1<br>te: 2.0<br>ES: 0.0 | EF: 2.0<br>LS: 11.2 | LF: 13.2<br>Holgura: 11.2"]
  E2["E2<br>te: 1.2<br>ES: 2.0 | EF: 3.2<br>LS: 13.2 | LF: 14.4<br>Holgura: 11.2"]

  F1["F1<br>te: 2.0<br>ES: 0.0 | EF: 2.0<br>LS: 8.2 | LF: 10.2<br>Holgura: 8.2"]
  F2["F2<br>te: 2.0<br>ES: 0.0 | EF: 2.0<br>LS: 8.2 | LF: 10.2<br>Holgura: 8.2"]
  F3["F3<br>te: 2.2<br>ES: 2.2 | EF: 4.4<br>LS: 10.2 | LF: 12.4<br>Holgura: 8.0"]
  
  G1["G1<br>te: 2.2<br>ES: 0.0 | EF: 2.2<br>LS: 8.0 | LF: 10.2<br>Holgura: 8.0"]
  
  H1["H1<br>te: 1.2<br>ES: 2.2 | EF: 3.4<br>LS: 11.2 | LF: 12.4<br>Holgura: 9.0"]
  H2["H2<br>te: 2.0<br>ES: 4.4 | EF: 6.4<br>LS: 12.4 | LF: 14.4<br>Holgura: 8.0"]
  
  I1["I1<br>te: 2.0<br>ES: 14.4 | EF: 16.4<br>LS: 14.4 | LF: 16.4<br>Holgura: 0.0"]

  A1 --> A2 --> B1 --> B2 --> C1 --> C2 --> I1
  D1 --> D2 --> I1
  E1 --> E2 --> I1
  F1 --> F3
  F2 --> F3
  G1 --> F3
  G1 --> H1
  F3 --> H2
  H1 --> H2
  H2 --> I1
  G1 --> I1
  F3 --> I1

  classDef critical fill:#fee2e2,stroke:#ef4444,stroke-width:2px;
  classDef slack fill:#dcfce7,stroke:#22c55e,stroke-width:1px;

  class A1,A2,B1,B2,C1,C2,I1 critical;
  class D1,D2,E1,E2,F1,F2,F3,G1,H1,H2 slack;
`;

const DIAGRAM3_GANTT = `gantt
    title Línea Base del Cronograma — Sprint 3
    dateFormat YYYY-MM-DD
    axisFormat %d %b
    excludes weekends

    section Inicio
    H-08 Inicio del Sprint 3       :milestone, 2026-11-02, 0d
    
    section Google Business Profile
    A1 Registro Google             :crit, a1, 2026-11-02, 2d
    A2 Carga info                  :crit, a2, after a1, 2d
    
    section Calendario Editorial
    B1 Definición fechas           :crit, b1, after a2, 2d
    B2 Diseño calendario           :crit, b2, after b1, 3d
    
    section Plantillas Canva
    C1 Diseño plantillas           :crit, c1, after b2, 3d
    C2 Vincular catálogo           :crit, c2, after c1, 2d
    
    section Protocolo Reposición
    D1 Definición proc.            :d1, 2026-11-02, 2d
    D2 Validación proc.            :d2, after d1, 1d
    
    section Checklist Pedidos
    E1 Definición flujo            :e1, 2026-11-02, 2d
    E2 Validación checklist        :e2, after e1, 1d
    
    section Capacitación
    F1 Cap. propietaria            :f1, 2026-11-02, 2d
    F2 Cap. vendedora              :f2, 2026-11-02, 2d
    F3 Sesiones                    :f3, after f1 f2, 2d
    
    section Roles
    G1 Doc. roles                  :g1, 2026-11-02, 2d
    
    section Retroalimentación
    H1 Canal feedback              :h1, after g1, 1d
    H2 Primera recolección         :h2, after f3 h1, 2d
    
    section Integración
    H-09 Materiales preparados     :milestone, 2026-11-05, 0d
    H-10 Presencia digital         :milestone, 2026-11-19, 0d
    I1 Consolidación Sprint 3      :crit, i1, after c2, 2d
    H-11 Sprint 3 cerrado          :milestone, after i1, 0d
`;


// ─── Sprint 4 — Data ─────────────────────────────────────────────────────────

const SPRINT4_ACTIVITIES: SprintActivity[] = [
  { id: 'A1', name: 'Selección y documentación de indicadores de éxito del proyecto', wbs: '1.5.1.1', responsible: 'Diego + Abel', predecessor: 'H-12', dates: '1–2 dic' },
  { id: 'B1', name: 'Elaboración del documento de responsables de soporte post-entrega', wbs: '1.5.2.1', responsible: 'Rodrigo + Oscar', predecessor: 'H-12', dates: '1–2 dic' },
  { id: 'B2', name: 'Elaboración del procedimiento ante fallas o caídas de conexión', wbs: '1.5.2.2', responsible: 'Rodrigo', predecessor: 'B1', dates: '3–4 dic' },
  { id: 'C1', name: 'Integración y evaluación conjunta de los cinco pilares', wbs: 'Transversal (1.0)', responsible: 'Todo el equipo', predecessor: 'A1, B2', dates: '7–8 dic' },
  { id: 'C2', name: 'Validación final de entregables con la propietaria', wbs: 'Transversal (1.0)', responsible: 'Oscar + Rodrigo', predecessor: 'C1', dates: '9 dic' },
  { id: 'C3', name: 'Elaboración del registro de lecciones aprendidas', wbs: 'Cierre (1.0)', responsible: 'Todo el equipo', predecessor: 'C2', dates: '10 dic' },
  { id: 'C4', name: 'Preparación y consolidación de la presentación final', wbs: 'Cierre (1.0)', responsible: 'Abel + Diego + Oscar', predecessor: 'C3', dates: '11 dic' },
  { id: 'C5', name: 'Cierre administrativo y consolidación final de evidencias', wbs: 'Cierre (1.0)', responsible: 'Todo el equipo', predecessor: 'C4', dates: '14 dic' },
];

const SPRINT4_PERT: PertActivity[] = [
  { id: 'A1', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'B1', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'B2', optimistic: 1, mostLikely: 2, pessimistic: 3, expected: 2.0, standardDeviation: 0.3 },
  { id: 'C1', optimistic: 1, mostLikely: 2, pessimistic: 4, expected: 2.2, standardDeviation: 0.5 },
  { id: 'C2', optimistic: 1, mostLikely: 1, pessimistic: 2, expected: 1.2, standardDeviation: 0.2 },
  { id: 'C3', optimistic: 1, mostLikely: 1, pessimistic: 2, expected: 1.2, standardDeviation: 0.2 },
  { id: 'C4', optimistic: 1, mostLikely: 1, pessimistic: 2, expected: 1.2, standardDeviation: 0.2 },
  { id: 'C5', optimistic: 1, mostLikely: 1, pessimistic: 2, expected: 1.2, standardDeviation: 0.2 },
];

const SPRINT4_CPM: CpmActivity[] = [
  { id: 'A1', expected: 2.0, earlyStart: 0.0, earlyFinish: 2.0, lateStart: 2.0, lateFinish: 4.0, slack: 2.0, status: 'near-critical' },
  { id: 'B1', expected: 2.0, earlyStart: 0.0, earlyFinish: 2.0, lateStart: 0.0, lateFinish: 2.0, slack: 0.0, status: 'critical' },
  { id: 'B2', expected: 2.0, earlyStart: 2.0, earlyFinish: 4.0, lateStart: 2.0, lateFinish: 4.0, slack: 0.0, status: 'critical' },
  { id: 'C1', expected: 2.2, earlyStart: 4.0, earlyFinish: 6.2, lateStart: 4.0, lateFinish: 6.2, slack: 0.0, status: 'critical' },
  { id: 'C2', expected: 1.2, earlyStart: 6.2, earlyFinish: 7.4, lateStart: 6.2, lateFinish: 7.4, slack: 0.0, status: 'critical' },
  { id: 'C3', expected: 1.2, earlyStart: 7.4, earlyFinish: 8.6, lateStart: 7.4, lateFinish: 8.6, slack: 0.0, status: 'critical' },
  { id: 'C4', expected: 1.2, earlyStart: 8.6, earlyFinish: 9.8, lateStart: 8.6, lateFinish: 9.8, slack: 0.0, status: 'critical' },
  { id: 'C5', expected: 1.2, earlyStart: 9.8, earlyFinish: 11.0, lateStart: 9.8, lateFinish: 11.0, slack: 0.0, status: 'critical' },
];

const DIAGRAM4_PDM = `flowchart LR
  H12(["🏁 H-12<br>Inicio<br>1 dic"])

  subgraph ANA [Analítica]
    A1["A1 — KPIs Negocio<br>1-2 dic<br>Diego+Abel"]
  end

  subgraph SOS [Sostenibilidad]
    B1["B1 — Doc Responsables<br>1-2 dic<br>Rodrigo+Oscar"]
    B2["B2 — Proc Fallas<br>3-4 dic<br>Rodrigo"]
  end

  subgraph INT [Integración]
    C1["C1 — Integración 5 Pilares<br>7-8 dic<br>Todo equipo"]
  end

  subgraph VAL [Validación]
    C2["C2 — Validación Propietaria<br>9 dic<br>Oscar+Rodrigo"]
  end

  subgraph CIE [Cierre]
    C3["C3 — Lecciones Aprend.<br>10 dic<br>Todo equipo"]
    C4["C4 — Presentación Final<br>11 dic<br>Abel+Diego+Oscar"]
    C5["C5 — Cierre Admin.<br>14 dic<br>Todo equipo"]
  end

  H16(["🎉 H-16<br>Cierre Proyecto<br>15 dic"])

  H12 --> A1
  H12 --> B1

  B1 --> B2

  A1 --> C1
  B2 --> C1

  C1 --> C2
  C2 --> C3
  C3 --> C4
  C4 --> C5
  
  C5 --> H16

  classDef critical fill:#fee2e2,stroke:#ef4444,stroke-width:2px;
  classDef nearcritical fill:#fef3c7,stroke:#f59e0b,stroke-width:2px;

  class B1,B2,C1,C2,C3,C4,C5 critical;
  class A1 nearcritical;
`;

const DIAGRAM4_CPM = `flowchart LR
  A1["A1<br>te: 2.0<br>ES: 0.0 | EF: 2.0<br>LS: 2.0 | LF: 4.0<br>Holgura: 2.0"]
  B1["B1<br>te: 2.0<br>ES: 0.0 | EF: 2.0<br>LS: 0.0 | LF: 2.0<br>Holgura: 0.0"]
  B2["B2<br>te: 2.0<br>ES: 2.0 | EF: 4.0<br>LS: 2.0 | LF: 4.0<br>Holgura: 0.0"]
  C1["C1<br>te: 2.2<br>ES: 4.0 | EF: 6.2<br>LS: 4.0 | LF: 6.2<br>Holgura: 0.0"]
  C2["C2<br>te: 1.2<br>ES: 6.2 | EF: 7.4<br>LS: 6.2 | LF: 7.4<br>Holgura: 0.0"]
  C3["C3<br>te: 1.2<br>ES: 7.4 | EF: 8.6<br>LS: 7.4 | LF: 8.6<br>Holgura: 0.0"]
  C4["C4<br>te: 1.2<br>ES: 8.6 | EF: 9.8<br>LS: 8.6 | LF: 9.8<br>Holgura: 0.0"]
  C5["C5<br>te: 1.2<br>ES: 9.8 | EF: 11.0<br>LS: 9.8 | LF: 11.0<br>Holgura: 0.0"]

  B1 --> B2 --> C1
  A1 --> C1
  C1 --> C2 --> C3 --> C4 --> C5

  classDef critical fill:#fee2e2,stroke:#ef4444,stroke-width:2px;
  classDef nearcritical fill:#fef3c7,stroke:#f59e0b,stroke-width:2px;

  class B1,B2,C1,C2,C3,C4,C5 critical;
  class A1 nearcritical;
`;

const DIAGRAM4_GANTT = `gantt
    title Línea Base del Cronograma — Sprint 4
    dateFormat YYYY-MM-DD
    axisFormat %d %b
    excludes weekends

    section Inicio
    H-12 Inicio del Sprint 4       :milestone, 2026-12-01, 0d
    
    section KPIs Negocio
    A1 Sel. Indicadores            :a1, 2026-12-01, 2d
    
    section Sost. y Mant.
    B1 Doc. Responsables           :crit, b1, 2026-12-01, 2d
    B2 Proc. Fallas                :crit, b2, after b1, 2d
    
    section Integración
    H-13 KPIs y sost. listos       :milestone, 2026-12-04, 0d
    C1 Integración 5 Pilares       :crit, c1, after b2 a1, 2d
    
    section Validación
    H-14 Integración evaluada      :milestone, after c1, 0d
    C2 Val. Propietaria            :crit, c2, after c1, 1d
    
    section Lecciones Aprendidas
    C3 Reg. Lecciones              :crit, c3, after c2, 1d
    
    section Presentación Final
    C4 Prep. Presentación          :crit, c4, after c3, 1d
    H-15 Pres. final preparada     :milestone, after c4, 0d
    
    section Cierre
    C5 Cierre Admin.               :crit, c5, after c4, 1d
    H-16 Proyecto cerrado          :milestone, 2026-12-15, 0d
`;

// ─── Mermaid diagrams as TS strings (preserves newlines) ─────────────────────

const DIAGRAM1_PDM = `flowchart LR
  H01(["🏁 H-01<br>Inicio<br>1 sept"])
  A1["A1 — Config. Django<br>1-2 sept<br>Rodrigo"]
  A2["A2 — Modelo datos<br>3-4 sept<br>Rodrigo"]
  A3["A3 — Control acceso<br>7-8 sept<br>Rodrigo"]
  H02(["🔖 H-02<br>Base lista<br>9 sept"])

  B1["B1 — Modelo Producto<br>10-11 sept<br>Rodrigo"]
  B2["B2 — CRUD Productos<br>14-16 sept<br>Rodrigo"]
  B3["B3 — Alertas stock<br>17-18 sept<br>Rodrigo"]
  B4["B4 — Carga datos<br>21-23 sept<br>Oscar"]
  B5["B5 — Pruebas Prod.<br>24-25 sept<br>Abel"]

  C1["C1 — Modelo Cliente<br>10 sept<br>Rodrigo"]
  C2["C2 — CRUD Clientes<br>11,14-15 sept<br>Abel"]
  C3["C3 — Historial<br>16-17 sept<br>Abel"]
  C4["C4 — Carga clientes<br>18,21 sept<br>Oscar"]
  C5["C5 — Pruebas Cli.<br>22-23 sept<br>Diego"]

  D1["D1 — Modelo Venta<br>10-11 sept<br>Abel"]
  D2["D2 — CRUD Ventas<br>14-16 sept<br>Abel"]
  D3["D3 — Cálculo/Stock<br>17,18,21 sept<br>Diego"]
  D4["D4 — Estados pedido<br>22-23 sept<br>Diego"]
  D5["D5 — Pruebas Vta.<br>24,25,28 sept<br>Abel+Diego"]

  F1["F1 — Consolidación<br>29-30 sept<br>Todo el equipo"]
  H03(["✅ H-03<br>Sprint 1 cerrado<br>1 oct"])

  H01 --> A1 --> A2 --> A3 --> H02
  H02 --> B1 --> B2 --> B3 --> B4 --> B5
  H02 --> C1 --> C2 --> C3 --> C4 --> C5
  H02 --> D1 --> D2 --> D3 --> D4 --> D5
  B5 --> F1
  C5 --> F1
  D5 --> F1
  F1 --> H03

  style H01 fill:#0f766e,color:#fff,stroke:#0f766e
  style H02 fill:#0f766e,color:#fff,stroke:#0f766e
  style H03 fill:#0f766e,color:#fff,stroke:#0f766e
  style A1 fill:#fca5a5,stroke:#dc2626
  style A2 fill:#fca5a5,stroke:#dc2626
  style A3 fill:#fca5a5,stroke:#dc2626
  style D1 fill:#fca5a5,stroke:#dc2626
  style D2 fill:#fca5a5,stroke:#dc2626
  style D3 fill:#fca5a5,stroke:#dc2626
  style D4 fill:#fca5a5,stroke:#dc2626
  style D5 fill:#fca5a5,stroke:#dc2626
  style F1 fill:#fca5a5,stroke:#dc2626
  style B1 fill:#fde68a,stroke:#d97706
  style B2 fill:#fde68a,stroke:#d97706
  style B3 fill:#fde68a,stroke:#d97706
  style B4 fill:#fde68a,stroke:#d97706
  style B5 fill:#fde68a,stroke:#d97706
  style C1 fill:#bbf7d0,stroke:#16a34a
  style C2 fill:#bbf7d0,stroke:#16a34a
  style C3 fill:#bbf7d0,stroke:#16a34a
  style C4 fill:#bbf7d0,stroke:#16a34a
  style C5 fill:#bbf7d0,stroke:#16a34a`;

const DIAGRAM1_CPM = `flowchart LR
  A1["A1 | ES:0 EF:2<br>LS:0 LF:2 | H:0 🔴<br>Config. Django"]
  A2["A2 | ES:2 EF:4.2<br>LS:2 LF:4.2 | H:0 🔴<br>Modelo datos"]
  A3["A3 | ES:4.2 EF:6.2<br>LS:4.2 LF:6.2 | H:0 🔴<br>Control acceso"]
  D1["D1 | ES:6.2 EF:8.2<br>LS:6.2 LF:8.2 | H:0 🔴<br>Modelo Venta"]
  D2["D2 | ES:8.2 EF:11.4<br>LS:8.2 LF:11.4 | H:0 🔴<br>CRUD Ventas"]
  D3["D3 | ES:11.4 EF:14.4<br>LS:11.4 LF:14.4 | H:0 🔴<br>Cálculo/Stock"]
  D4["D4 | ES:14.4 EF:16.4<br>LS:14.4 LF:16.4 | H:0 🔴<br>Estados pedido"]
  D5["D5 | ES:16.4 EF:19.4<br>LS:16.4 LF:19.4 | H:0 🔴<br>Pruebas Vta."]
  F1["F1 | ES:19.4 EF:21.4<br>LS:19.4 LF:21.4 | H:0 🔴<br>Consolidación"]

  A1 --> A2 --> A3 --> D1 --> D2 --> D3 --> D4 --> D5 --> F1

  style A1 fill:#fca5a5,stroke:#dc2626,color:#000
  style A2 fill:#fca5a5,stroke:#dc2626,color:#000
  style A3 fill:#fca5a5,stroke:#dc2626,color:#000
  style D1 fill:#fca5a5,stroke:#dc2626,color:#000
  style D2 fill:#fca5a5,stroke:#dc2626,color:#000
  style D3 fill:#fca5a5,stroke:#dc2626,color:#000
  style D4 fill:#fca5a5,stroke:#dc2626,color:#000
  style D5 fill:#fca5a5,stroke:#dc2626,color:#000
  style F1 fill:#fca5a5,stroke:#dc2626,color:#000`;

const DIAGRAM1_GANTT = `gantt
  title Sprint 1 — Línea Base del Cronograma (septiembre 2026)
  dateFormat YYYY-MM-DD
  excludes weekends

  section Config. Base
  A1 Config. Django (crítica)       :crit, a1, 2026-09-01, 2d
  A2 Modelo datos (crítica)         :crit, a2, after a1, 2d
  A3 Control acceso (crítica)       :crit, a3, after a2, 2d

  section Productos y Categorías
  B1 Modelo Categoría/Producto      :b1, 2026-09-10, 2d
  B2 CRUD Productos                 :b2, after b1, 3d
  B3 Alertas de stock               :b3, after b2, 2d
  B4 Carga datos reales             :b4, after b3, 3d
  B5 Pruebas Productos              :b5, after b4, 2d

  section Clientes
  C1 Modelo Cliente                 :c1, 2026-09-10, 1d
  C2 CRUD Clientes                  :c2, after c1, 3d
  C3 Historial de compras           :c3, after c2, 2d
  C4 Carga clientes frecuentes      :c4, after c3, 2d
  C5 Pruebas Clientes               :c5, after c4, 2d

  section Ventas
  D1 Modelo Venta/Detalle (crítica) :crit, d1, 2026-09-10, 2d
  D2 CRUD Ventas (crítica)          :crit, d2, after d1, 3d
  D3 Cálculo/Reversión (crítica)    :crit, d3, after d2, 3d
  D4 Estados pedido (crítica)       :crit, d4, after d3, 2d
  D5 Pruebas Ventas (crítica)       :crit, d5, after d4, 3d

  section Integración y Cierre
  F1 Consolidación Sprint 1 (crit.) :crit, f1, after d5, 2d
  H-02 Base del sistema lista       :milestone, 2026-09-09, 0d
  H-03 Sprint 1 cerrado             :milestone, 2026-10-01, 0d`;

const DIAGRAM2_PDM = `flowchart LR
  H04(["🏁 H-04<br>Inicio<br>2 oct"])
  
  A1["A1 — Modelo Prov.<br>2 oct\\nRodrigo"]
  A2["A2 — CRUD Prov.<br>5-7 oct\\nRodrigo"]
  A3["A3 — Alerta Repos.<br>8-9 oct\\nRodrigo+Diego"]
  A4["A4 — Pruebas Prov.<br>12-13 oct\\nDiego"]
  
  B1["B1 — Config Cuentas<br>2 oct\\nRodrigo"]
  B2["B2 — Vistas Permisos<br>5-6 oct\\nAbel"]
  B3["B3 — Pruebas Acceso<br>7-8 oct\\nAbel+Diego"]
  
  C1["C1 — Catálogo Púb.<br>2,5-6 oct\\nAbel"]
  C2["C2 — Compra Simul.<br>7-9 oct\\nAbel+Diego"]
  C3["C3 — Conf. WP/Yape<br>12-13 oct\\nDiego"]
  C4["C4 — Pruebas Compra<br>14-15 oct\\nAbel+Diego"]
  
  D1["D1 — KPIs Dashboard<br>2 oct\\nDiego"]
  D2["D2 — Vistas Dash.<br>5-7 oct\\nDiego+Rodrigo"]
  D3["D3 — Pruebas Dash.<br>8-9 oct\\nAbel"]
  
  E1["E1 — Import. Prod.<br>2,5 oct\\nRodrigo"]
  E2["E2 — Import. Cli.<br>2,5 oct\\nAbel"]
  E3["E3 — Pruebas CSV<br>6-7 oct\\nDiego"]
  
  G1["G1 — Despliegue<br>16,19 oct\\nRodrigo"]
  G2["G2 — Regresión<br>20-22 oct\\nAbel+Diego"]
  G3["G3 — README<br>23,26 oct\\nRodrigo+Oscar"]
  F2["F2 — Consolidación<br>27-28 oct\\nTodo el equipo"]
  
  H05(["🔖 H-05<br>Listos Despliegue<br>16 oct"])
  H06(["✅ H-06<br>Regresión Lista<br>22 oct"])
  H07(["🎉 H-07<br>Sprint 2 cerrado<br>29 oct"])

  H04 --> A1 --> A2 --> A3 --> A4
  H04 --> B1 --> B2 --> B3
  H04 --> C1 --> C2 --> C3 --> C4
  H04 --> D1 --> D2 --> D3
  H04 --> E1
  H04 --> E2
  E1 --> E3
  E2 --> E3
  
  A4 --> H05
  B3 --> H05
  C4 --> H05
  D3 --> H05
  E3 --> H05
  
  H05 --> G1
  G1 --> G2 --> H06
  H06 --> G3 --> F2 --> H07

  style H04 fill:#0f766e,color:#fff,stroke:#0f766e
  style H05 fill:#0f766e,color:#fff,stroke:#0f766e
  style H06 fill:#0f766e,color:#fff,stroke:#0f766e
  style H07 fill:#0f766e,color:#fff,stroke:#0f766e
  
  style C1 fill:#fca5a5,stroke:#dc2626
  style C2 fill:#fca5a5,stroke:#dc2626
  style C3 fill:#fca5a5,stroke:#dc2626
  style C4 fill:#fca5a5,stroke:#dc2626
  style G1 fill:#fca5a5,stroke:#dc2626
  style G2 fill:#fca5a5,stroke:#dc2626
  style G3 fill:#fca5a5,stroke:#dc2626
  style F2 fill:#fca5a5,stroke:#dc2626
  
  style A1 fill:#fef08a,stroke:#eab308
  style A2 fill:#fef08a,stroke:#eab308
  style A3 fill:#fef08a,stroke:#eab308
  style A4 fill:#fef08a,stroke:#eab308
  
  style B1 fill:#bbf7d0,stroke:#16a34a
  style B2 fill:#bbf7d0,stroke:#16a34a
  style B3 fill:#bbf7d0,stroke:#16a34a
  style D1 fill:#bbf7d0,stroke:#16a34a
  style D2 fill:#bbf7d0,stroke:#16a34a
  style D3 fill:#bbf7d0,stroke:#16a34a
  style E1 fill:#bbf7d0,stroke:#16a34a
  style E2 fill:#bbf7d0,stroke:#16a34a
  style E3 fill:#bbf7d0,stroke:#16a34a`;

const DIAGRAM2_CPM = `flowchart LR
  C1["C1 | ES:0 EF:3.2<br>LS:0 LF:3.2 | H:0 🔴<br>Catálogo Púb."]
  C2["C2 | ES:3.2 EF:6.2<br>LS:3.2 LF:6.2 | H:0 🔴<br>Compra Simulada"]
  C3["C3 | ES:6.2 EF:8.2<br>LS:6.2 LF:8.2 | H:0 🔴<br>Conf. WP/Yape"]
  C4["C4 | ES:8.2 EF:10.2<br>LS:8.2 LF:10.2 | H:0 🔴<br>Pruebas Compra"]
  G1["G1 | ES:10.2 EF:12.4<br>LS:10.2 LF:12.4 | H:0 🔴<br>Despliegue"]
  G2["G2 | ES:12.4 EF:15.4<br>LS:12.4 LF:15.4 | H:0 🔴<br>Regresión"]
  G3["G3 | ES:15.4 EF:17.4<br>LS:15.4 LF:17.4 | H:0 🔴<br>Doc. README"]
  F2["F2 | ES:17.4 EF:19.4<br>LS:17.4 LF:19.4 | H:0 🔴<br>Consolidación"]

  C1 --> C2 --> C3 --> C4 --> G1 --> G2 --> G3 --> F2

  style C1 fill:#fca5a5,stroke:#dc2626,color:#000
  style C2 fill:#fca5a5,stroke:#dc2626,color:#000
  style C3 fill:#fca5a5,stroke:#dc2626,color:#000
  style C4 fill:#fca5a5,stroke:#dc2626,color:#000
  style G1 fill:#fca5a5,stroke:#dc2626,color:#000
  style G2 fill:#fca5a5,stroke:#dc2626,color:#000
  style G3 fill:#fca5a5,stroke:#dc2626,color:#000
  style F2 fill:#fca5a5,stroke:#dc2626,color:#000`;

const DIAGRAM2_GANTT = `gantt
  title Línea Base del Cronograma — Sprint 2
  dateFormat YYYY-MM-DD
  axisFormat %d %b
  excludes weekends

  section Inicio
  H-04 Inicio Sprint 2              :milestone, 2026-10-02, 0d
  
  section Gestión Proveedores
  A1 Modelo Prov.                   :a1, 2026-10-02, 1d
  A2 CRUD Prov.                     :a2, after a1, 3d
  A3 Alerta reposición              :a3, after a2, 2d
  A4 Pruebas Prov.                  :a4, after a3, 2d

  section Usuarios y Accesos
  B1 Config. cuentas                :b1, 2026-10-02, 1d
  B2 Vistas permisos                :b2, after b1, 2d
  B3 Pruebas acceso                 :b3, after b2, 2d

  section Catálogo Público
  C1 Catálogo Púb. (crítica)        :crit, c1, 2026-10-02, 3d
  C2 Compra Simul. (crítica)        :crit, c2, after c1, 3d
  C3 Conf. WP/Yape (crítica)        :crit, c3, after c2, 2d
  C4 Pruebas Compra (crítica)       :crit, c4, after c3, 2d

  section Dashboard
  D1 KPIs técnicos                  :d1, 2026-10-02, 1d
  D2 Vistas Dashboard               :d2, after d1, 3d
  D3 Pruebas Dashboard              :d3, after d2, 2d

  section Importación CSV
  E1 Import. Prod.                  :e1, 2026-10-02, 2d
  E2 Import. Cli.                   :e2, 2026-10-02, 2d
  E3 Pruebas CSV                    :e3, after e1 e2, 2d

  section Despliegue y Doc.
  H-05 Listos para despliegue       :milestone, 2026-10-16, 0d
  G1 Despliegue (crítica)           :crit, g1, 2026-10-16, 2d
  G2 Regresión (crítica)            :crit, g2, after g1, 3d
  H-06 Regresión lista              :milestone, 2026-10-22, 0d
  G3 Doc. README (crítica)          :crit, g3, after g2, 2d

  section Integración y Cierre
  F2 Consolidación (crítica)        :crit, f2, after g3, 2d
  H-07 Sprint 2 cerrado             :milestone, 2026-10-29, 0d`;

// ─── Component ───────────────────────────────────────────────────────────────

@Component({
  selector: 'app-linea-base-cronograma',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './linea-base-cronograma.component.html',
  styleUrl: './linea-base-cronograma.component.scss',
  preserveWhitespaces: true
})
export class LineaBaseCronogramaComponent implements AfterViewInit, OnDestroy {

  // ── Sprint navigation ──
  activeSprint: number = 2;

  // ── Exposed data ──
  readonly sprintSummary   = SPRINT_SUMMARY;
  
  // Sprint 1
  readonly activities1      = SPRINT1_ACTIVITIES;
  readonly pertActivities1  = SPRINT1_PERT;
  readonly cpmActivities1   = SPRINT1_CPM;
  readonly diagram1Pdm      = DIAGRAM1_PDM;
  readonly diagram1Cpm      = DIAGRAM1_CPM;
  readonly diagram1Gantt    = DIAGRAM1_GANTT;

  // Sprint 2
  readonly activities2      = SPRINT2_ACTIVITIES;
  readonly pertActivities2  = SPRINT2_PERT;
  readonly cpmActivities2   = SPRINT2_CPM;
  readonly diagram2Pdm      = DIAGRAM2_PDM;
  readonly diagram2Cpm      = DIAGRAM2_CPM;
  readonly diagram2Gantt    = DIAGRAM2_GANTT;


  // Sprint 3
  readonly activities3      = SPRINT3_ACTIVITIES;
  readonly pertActivities3  = SPRINT3_PERT;
  readonly cpmActivities3   = SPRINT3_CPM;
  readonly diagram3Pdm      = DIAGRAM3_PDM;
  readonly diagram3Cpm      = DIAGRAM3_CPM;
  readonly diagram3Gantt    = DIAGRAM3_GANTT;

  // Sprint 4
  readonly activities4      = SPRINT4_ACTIVITIES;
  readonly pertActivities4  = SPRINT4_PERT;
  readonly cpmActivities4   = SPRINT4_CPM;
  readonly diagram4Pdm      = DIAGRAM4_PDM;
  readonly diagram4Cpm      = DIAGRAM4_CPM;
  readonly diagram4Gantt    = DIAGRAM4_GANTT;

  // ── CPM status helpers ──
  getCpmRowClass(status: CpmActivity['status']): string {
    if (status === 'critical')      return 'bg-red-50';
    if (status === 'near-critical') return 'bg-amber-50';
    return 'bg-green-50';
  }

  getCpmBadgeClass(status: CpmActivity['status']): string {
    if (status === 'critical')      return 'pill-high';
    if (status === 'near-critical') return 'bg-amber-200 text-amber-900 px-2 py-0.5 rounded text-xs font-bold';
    return 'bg-green-200 text-green-900 px-2 py-0.5 rounded text-xs font-bold';
  }

  getCpmBadgeLabel(status: CpmActivity['status']): string {
    if (status === 'critical')      return 'Crítica';
    if (status === 'near-critical') return 'Holgura baja';
    return 'Con holgura';
  }

  // ── Sprint selector ──
  selectSprint(n: number): void {
    this.activeSprint = n;
    // Re-run Mermaid after Angular finishes rendering
    setTimeout(() => {
      // Store original diagram text before mermaid overwrites it (for newly rendered elements)
      document.querySelectorAll('.mermaid').forEach(el => {
        if (!el.getAttribute('data-original')) {
          el.setAttribute('data-original', el.textContent || '');
        }
      });
      this.runMermaid();
    }, 150);
  }

  // ── Mermaid ──
  private mermaidReady = false;

  private runMermaid(): void {
    import('mermaid').then((m) => {
      const mi = m.default;
      if (!this.mermaidReady) {
        mi.initialize({
          startOnLoad: false,
          theme: 'base',
          gantt: { barHeight: 30, barGap: 6, fontSize: 13, sectionFontSize: 15 },
          themeVariables: {
            primaryColor: '#E1F5EE',
            primaryTextColor: '#04342C',
            primaryBorderColor: '#1D9E75',
            lineColor: '#5A6478',
            secondaryColor: '#E6F1FB',
            tertiaryColor: '#FAEEDA'
          }
        });
        this.mermaidReady = true;
      }
      // Reset processed diagrams so mermaid re-renders them
      document.querySelectorAll('.mermaid[data-processed]').forEach(el => {
        el.removeAttribute('data-processed');
        // Restore original text if it was replaced
        const original = el.getAttribute('data-original');
        if (original) el.textContent = original;
      });
      mi.run({ querySelector: '.mermaid' });
    });
  }

  ngAfterViewInit(): void {
    // Store original diagram text before mermaid overwrites it
    document.querySelectorAll('.mermaid').forEach(el => {
      if (!el.getAttribute('data-original')) {
        el.setAttribute('data-original', el.textContent || '');
      }
    });
    this.runMermaid();
  }

  ngOnDestroy(): void {
    this.mermaidReady = false;
  }
}
