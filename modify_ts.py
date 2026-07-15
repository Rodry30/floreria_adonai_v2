import re

with open("src/app/pages/linea-base-cronograma/linea-base-cronograma.component.ts", "r", encoding="utf-8") as f:
    content = f.read()

# Modify SPRINT_SUMMARY
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
    number: 4, name: 'Sprint 4 — Analítica, sostenibilidad y cierre',
    period: '1–15 diciembre 2026',
    scope: 'Analítica, sostenibilidad, integración y cierre',
    pillars: 'Pilar 5 y cierre transversal',
    status: 'Pendiente de planificación detallada', statusClass: 'bg-amber-100 text-amber-800',
    milestone: 'Cierre final del proyecto'
  },
];"""
content = re.sub(r"const SPRINT_SUMMARY: SprintSummary\[\] = \[.*?\];", new_summary, content, flags=re.DOTALL)

sprint3_data = """
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
"""
content = re.sub(r"(// ─── Mermaid diagrams as TS strings \(preserves newlines\) ─────────────────────)", sprint3_data + r"\n\1", content)

exports = """
  activities2 = SPRINT2_ACTIVITIES;
  pertActivities2 = SPRINT2_PERT;
  cpmActivities2 = SPRINT2_CPM;

  activities3 = SPRINT3_ACTIVITIES;
  pertActivities3 = SPRINT3_PERT;
  cpmActivities3 = SPRINT3_CPM;

  diagram1Pdm = DIAGRAM1_PDM;
  diagram1Cpm = DIAGRAM1_CPM;
  diagram1Gantt = DIAGRAM1_GANTT;

  diagram2Pdm = DIAGRAM2_PDM;
  diagram2Cpm = DIAGRAM2_CPM;
  diagram2Gantt = DIAGRAM2_GANTT;

  diagram3Pdm = DIAGRAM3_PDM;
  diagram3Cpm = DIAGRAM3_CPM;
  diagram3Gantt = DIAGRAM3_GANTT;
"""
content = re.sub(
    r"activities2 = SPRINT2_ACTIVITIES;.*?diagram2Gantt = DIAGRAM2_GANTT;",
    exports.strip(),
    content,
    flags=re.DOTALL
)

with open("src/app/pages/linea-base-cronograma/linea-base-cronograma.component.ts", "w", encoding="utf-8") as f:
    f.write(content)
