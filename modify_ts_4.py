import re

ts_path = "src/app/pages/linea-base-cronograma/linea-base-cronograma.component.ts"

with open(ts_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update SPRINT_SUMMARY
new_summary = """const SPRINT_SUMMARY: SprintSummary[] = [
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
];"""
content = re.sub(r"const SPRINT_SUMMARY: SprintSummary\[\] = \[.*?\];", new_summary, content, flags=re.DOTALL)

sprint4_data = """
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
"""
content = re.sub(r"(// ─── Mermaid diagrams as TS strings \(preserves newlines\) ─────────────────────)", sprint4_data + r"\n\1", content)


exports = """
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
"""

content = re.sub(
    r"  // Sprint 3\n  readonly activities3      = SPRINT3_ACTIVITIES;.*?readonly diagram3Gantt    = DIAGRAM3_GANTT;\n",
    exports,
    content,
    flags=re.DOTALL
)

with open(ts_path, "w", encoding="utf-8") as f:
    f.write(content)
