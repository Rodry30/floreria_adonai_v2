import re

with open("src/app/pages/linea-base-cronograma/linea-base-cronograma.component.html", "r", encoding="utf-8") as f:
    content = f.read()

sprint1_var_replacements = {
    "activities": "activities1",
    "pertActivities": "pertActivities1",
    "cpmActivities": "cpmActivities1",
    "diagramPdm": "diagram1Pdm",
    "diagramCpm": "diagram1Cpm",
    "diagramGantt": "diagram1Gantt",
}

for k, v in sprint1_var_replacements.items():
    content = content.replace(f'="{k}"', f'="{v}"')
    content = content.replace(f'{{{{ {k} }}}}', f'{{{{ {v} }}}}')

sprint2_html = """
    <!-- ════════════════════════════════════════════════════════════════════════
         SPRINT 2 — CONTENIDO COMPLETO
         ════════════════════════════════════════════════════════════════════════ -->
    <div *ngIf="activeSprint === 2" class="space-y-8">

      <!-- Header Sprint 2 -->
      <section class="shadow-card bg-gradient-to-r from-amber-900 to-amber-700 text-white rounded-3xl p-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span class="text-amber-300 text-xs font-bold uppercase tracking-wider">Sprint 2 — Planificado</span>
            <h4 class="text-2xl font-black mt-1">Ampliación Funcional y Despliegue del Sistema Web</h4>
            <p class="text-amber-200 text-sm mt-1">2 de octubre — 29 de octubre de 2026 · Hito de cierre: 29 oct 2026</p>
          </div>
          <div class="grid grid-cols-3 gap-3 text-center flex-shrink-0">
            <div class="bg-amber-800 p-3 rounded-xl">
              <div class="text-2xl font-black">21</div>
              <div class="text-[10px] text-amber-300 uppercase">Actividades</div>
            </div>
            <div class="bg-amber-800 p-3 rounded-xl">
              <div class="text-2xl font-black">19.4</div>
              <div class="text-[10px] text-amber-300 uppercase">Días PERT</div>
            </div>
            <div class="bg-amber-800 p-3 rounded-xl">
              <div class="text-2xl font-black">4</div>
              <div class="text-[10px] text-amber-300 uppercase">Hitos</div>
            </div>
          </div>
        </div>
        <div class="mt-4 bg-amber-800/50 rounded-xl p-4 text-sm">
          <strong class="text-amber-200">Objetivo del Sprint 2:</strong>
          <span class="text-amber-100 ml-1">Ampliar el sistema web de gestión de la Florería Adonai mediante la implementación de los módulos de proveedores, usuarios y accesos, catálogo público, compra simulada, indicadores e importación de datos; completar su despliegue en producción, ejecutar pruebas de regresión y consolidar la documentación técnica necesaria para dejar una versión funcional, integrada y disponible para su posterior adopción operativa.</span>
        </div>
      </section>

      <!-- Hitos del Sprint 2 -->
      <section class="shadow-card">
        <h3 class="section-title">Hitos Oficiales del Sprint 2</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-amber-50 border-2 border-amber-500 p-4 rounded-2xl text-center">
            <div class="text-3xl mb-2">🏁</div>
            <div class="font-black text-amber-900 text-lg">H-04</div>
            <div class="font-bold text-amber-800 text-sm">Inicio formal del Sprint 2</div>
            <div class="text-amber-600 text-xs mt-1 font-mono">2 octubre 2026</div>
          </div>
          <div class="bg-blue-50 border-2 border-blue-400 p-4 rounded-2xl text-center">
            <div class="text-3xl mb-2">🔖</div>
            <div class="font-black text-blue-900 text-lg">H-05</div>
            <div class="font-bold text-blue-800 text-sm">Listos para despliegue</div>
            <div class="text-blue-600 text-xs mt-1 font-mono">16 octubre 2026</div>
          </div>
          <div class="bg-purple-50 border-2 border-purple-400 p-4 rounded-2xl text-center">
            <div class="text-3xl mb-2">✅</div>
            <div class="font-black text-purple-900 text-lg">H-06</div>
            <div class="font-bold text-purple-800 text-sm">Regresión concluida</div>
            <div class="text-purple-600 text-xs mt-1 font-mono">22 octubre 2026</div>
          </div>
          <div class="bg-green-50 border-2 border-green-500 p-4 rounded-2xl text-center">
            <div class="text-3xl mb-2">🎉</div>
            <div class="font-black text-green-900 text-lg">H-07</div>
            <div class="font-bold text-green-800 text-sm">Sprint 2 consolidado y cerrado</div>
            <div class="text-green-600 text-xs mt-1 font-mono">29 octubre 2026</div>
          </div>
        </div>
      </section>

      <!-- Alcance EDT -->
      <section class="shadow-card">
        <h3 class="section-title">Alcance EDT del Sprint 2</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl">
            <div class="text-[10px] font-black text-teal-700 uppercase mb-1">WBS 1.1.5</div>
            <div class="font-bold text-slate-900 text-xs mb-1">Proveedores</div>
            <div class="mt-1 text-[9px] text-teal-700 font-bold">A1, A2, A3, A4</div>
          </div>
          <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl">
            <div class="text-[10px] font-black text-teal-700 uppercase mb-1">WBS 1.1.6</div>
            <div class="font-bold text-slate-900 text-xs mb-1">Usuarios/Accesos</div>
            <div class="mt-1 text-[9px] text-teal-700 font-bold">B1, B2, B3</div>
          </div>
          <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl">
            <div class="text-[10px] font-black text-teal-700 uppercase mb-1">WBS 1.1.7</div>
            <div class="font-bold text-slate-900 text-xs mb-1">Catálogo/Compra</div>
            <div class="mt-1 text-[9px] text-teal-700 font-bold">C1, C2, C3, C4</div>
          </div>
          <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl">
            <div class="text-[10px] font-black text-teal-700 uppercase mb-1">WBS 1.1.8</div>
            <div class="font-bold text-slate-900 text-xs mb-1">Dashboard</div>
            <div class="mt-1 text-[9px] text-teal-700 font-bold">D1, D2, D3</div>
          </div>
          <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl">
            <div class="text-[10px] font-black text-teal-700 uppercase mb-1">WBS 1.1.9</div>
            <div class="font-bold text-slate-900 text-xs mb-1">Importación CSV</div>
            <div class="mt-1 text-[9px] text-teal-700 font-bold">E1, E2, E3</div>
          </div>
          <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl">
            <div class="text-[10px] font-black text-teal-700 uppercase mb-1">WBS 1.1.10</div>
            <div class="font-bold text-slate-900 text-xs mb-1">Despliegue/Doc.</div>
            <div class="mt-1 text-[9px] text-teal-700 font-bold">G1, G2, G3</div>
          </div>
        </div>
        <div class="mt-4 bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-xl text-xs text-amber-900">
          <strong>Aclaración metodológica (F2 y Dashboard):</strong>
          La actividad F2 — Consolidación y validación del Sprint 2 no constituye un nuevo entregable de la EDT. Es una actividad de integración necesaria para verificar el funcionamiento conjunto de los módulos desarrollados, revisar el despliegue, consolidar evidencias, validar la documentación técnica y autorizar el cierre del incremento.
          Además, el dashboard técnico implementado en el Sprint 2 presenta indicadores generados por el sistema web. La definición formal de KPIs de éxito del negocio pertenece al Pilar 5 y será desarrollada en el Sprint 4.
        </div>
      </section>

      <!-- Tabla de actividades -->
      <section class="shadow-card">
        <h3 class="section-title">Tabla de Actividades — Sprint 2 (21 actividades)</h3>
        <div class="overflow-x-auto custom-scrollbar">
          <table class="custom-table">
            <thead>
              <tr>
                <th class="w-14">ID</th>
                <th>Actividad</th>
                <th class="w-24">WBS</th>
                <th class="w-32">Responsable</th>
                <th class="w-32">Predecesor</th>
                <th class="w-32">Fechas</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-slate-100">
                <td colspan="6" class="text-[10px] font-black text-amber-800 uppercase tracking-wider py-2 px-4">📦 Gestión de Proveedores (A1–A4)</td>
              </tr>
              <ng-container *ngFor="let a of activities2">
                <tr *ngIf="['A1','A2','A3','A4'].includes(a.id)">
                  <td><span class="pill pill-id">{{ a.id }}</span></td>
                  <td>{{ a.name }}</td>
                  <td class="font-mono text-xs">{{ a.wbs }}</td>
                  <td>{{ a.responsible }}</td>
                  <td class="font-mono text-xs">{{ a.predecessor }}</td>
                  <td class="text-xs">{{ a.dates }}</td>
                </tr>
              </ng-container>

              <tr class="bg-slate-100">
                <td colspan="6" class="text-[10px] font-black text-amber-800 uppercase tracking-wider py-2 px-4">👥 Usuarios y Accesos (B1–B3)</td>
              </tr>
              <ng-container *ngFor="let a of activities2">
                <tr *ngIf="['B1','B2','B3'].includes(a.id)">
                  <td><span class="pill pill-id">{{ a.id }}</span></td>
                  <td>{{ a.name }}</td>
                  <td class="font-mono text-xs">{{ a.wbs }}</td>
                  <td>{{ a.responsible }}</td>
                  <td class="font-mono text-xs">{{ a.predecessor }}</td>
                  <td class="text-xs">{{ a.dates }}</td>
                </tr>
              </ng-container>

              <tr class="bg-slate-100">
                <td colspan="6" class="text-[10px] font-black text-amber-800 uppercase tracking-wider py-2 px-4">🛒 Catálogo Público y Compra (C1–C4)</td>
              </tr>
              <ng-container *ngFor="let a of activities2">
                <tr *ngIf="['C1','C2','C3','C4'].includes(a.id)">
                  <td><span class="pill pill-id">{{ a.id }}</span></td>
                  <td>{{ a.name }}</td>
                  <td class="font-mono text-xs">{{ a.wbs }}</td>
                  <td>{{ a.responsible }}</td>
                  <td class="font-mono text-xs">{{ a.predecessor }}</td>
                  <td class="text-xs">{{ a.dates }}</td>
                </tr>
              </ng-container>

              <tr class="bg-slate-100">
                <td colspan="6" class="text-[10px] font-black text-amber-800 uppercase tracking-wider py-2 px-4">📊 Dashboard (D1–D3)</td>
              </tr>
              <ng-container *ngFor="let a of activities2">
                <tr *ngIf="['D1','D2','D3'].includes(a.id)">
                  <td><span class="pill pill-id">{{ a.id }}</span></td>
                  <td>{{ a.name }}</td>
                  <td class="font-mono text-xs">{{ a.wbs }}</td>
                  <td>{{ a.responsible }}</td>
                  <td class="font-mono text-xs">{{ a.predecessor }}</td>
                  <td class="text-xs">{{ a.dates }}</td>
                </tr>
              </ng-container>

              <tr class="bg-slate-100">
                <td colspan="6" class="text-[10px] font-black text-amber-800 uppercase tracking-wider py-2 px-4">📄 Importación CSV (E1–E3)</td>
              </tr>
              <ng-container *ngFor="let a of activities2">
                <tr *ngIf="['E1','E2','E3'].includes(a.id)">
                  <td><span class="pill pill-id">{{ a.id }}</span></td>
                  <td>{{ a.name }}</td>
                  <td class="font-mono text-xs">{{ a.wbs }}</td>
                  <td>{{ a.responsible }}</td>
                  <td class="font-mono text-xs">{{ a.predecessor }}</td>
                  <td class="text-xs">{{ a.dates }}</td>
                </tr>
              </ng-container>

              <tr class="bg-slate-100">
                <td colspan="6" class="text-[10px] font-black text-amber-800 uppercase tracking-wider py-2 px-4">🚀 Despliegue y Doc (G1–G3)</td>
              </tr>
              <ng-container *ngFor="let a of activities2">
                <tr *ngIf="['G1','G2','G3'].includes(a.id)">
                  <td><span class="pill pill-id">{{ a.id }}</span></td>
                  <td>{{ a.name }}</td>
                  <td class="font-mono text-xs">{{ a.wbs }}</td>
                  <td>{{ a.responsible }}</td>
                  <td class="font-mono text-xs">{{ a.predecessor }}</td>
                  <td class="text-xs">{{ a.dates }}</td>
                </tr>
              </ng-container>

              <tr class="bg-slate-100">
                <td colspan="6" class="text-[10px] font-black text-amber-800 uppercase tracking-wider py-2 px-4">🔗 Integración (F2)</td>
              </tr>
              <ng-container *ngFor="let a of activities2">
                <tr *ngIf="a.id === 'F2'">
                  <td><span class="pill pill-id">{{ a.id }}</span></td>
                  <td>{{ a.name }}</td>
                  <td class="font-mono text-xs">{{ a.wbs }}</td>
                  <td>{{ a.responsible }}</td>
                  <td class="font-mono text-xs">{{ a.predecessor }}</td>
                  <td class="text-xs">{{ a.dates }}</td>
                </tr>
              </ng-container>
            </tbody>
          </table>
        </div>
        <div class="mt-3 bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-xl text-xs text-amber-900">
          <strong>Total: 21 actividades</strong> — 20 vinculadas a la EDT + 1 actividad de consolidación e integración (F2).
          Periodo: <strong>2–29 octubre 2026</strong>. Hito de cierre: <strong>29 octubre 2026</strong>.
          El día 30 de octubre se conserva como margen administrativo para ajustes menores (no es parte de la ruta crítica productiva).
        </div>
      </section>

      <!-- Equipo Sprint 2 -->
      <section class="shadow-card">
        <h3 class="section-title">Asignación del Equipo — Sprint 2</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div class="bg-amber-50 border border-amber-200 p-4 rounded-2xl">
            <div class="text-2xl mb-1">🧑‍💻</div>
            <div class="font-black text-amber-900">Rodrigo</div>
            <div class="text-xs text-amber-700 mt-1">Backend · Proveedores · Seguridad · Importación · Despliegue · Doc.</div>
          </div>
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-2xl">
            <div class="text-2xl mb-1">🧑‍💻</div>
            <div class="font-black text-blue-900">Abel</div>
            <div class="text-xs text-blue-700 mt-1">Interfaces · Catálogo · Usuarios · Importación clientes · Pruebas</div>
          </div>
          <div class="bg-purple-50 border border-purple-200 p-4 rounded-2xl">
            <div class="text-2xl mb-1">🧑‍💻</div>
            <div class="font-black text-purple-900">Diego</div>
            <div class="text-xs text-purple-700 mt-1">Integración funcional · Reposición · Compra simulada · Dashboard · Pruebas</div>
          </div>
          <div class="bg-teal-50 border border-teal-200 p-4 rounded-2xl">
            <div class="text-2xl mb-1">🧑‍💻</div>
            <div class="font-black text-teal-900">Oscar</div>
            <div class="text-xs text-teal-700 mt-1">Apoyo en documentación · Evidencias · Validación de información</div>
          </div>
        </div>
        <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl text-xs text-slate-700">
          <strong>F2 — Todo el equipo:</strong> consolidación y validación final del Sprint 2.
          La cantidad de participaciones no representa por sí sola la carga real de trabajo, debido a que las actividades poseen duraciones y complejidades diferentes.
        </div>

        <!-- Advertencia de nivelación -->
        <div class="mt-4 bg-amber-50 border-2 border-amber-400 p-4 rounded-2xl">
          <div class="flex items-start gap-3">
            <div class="text-2xl">⚠️</div>
            <div>
              <div class="font-bold text-amber-900 text-sm">Advertencia Metodológica — Nivelación de Recursos</div>
              <p class="text-xs text-amber-800 mt-1">
                La red CPM representa las dependencias lógicas del Sprint 2. Las fechas calendario incorporan una distribución preliminar del equipo, pero antes de aprobar definitivamente la línea base debe verificarse la nivelación de recursos y la disponibilidad simultánea de los integrantes. La nivelación puede modificar fechas y holguras, aunque no debe cambiarse la EDT ni eliminarse trabajo comprometido.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tabla PERT -->
      <section class="shadow-card">
        <h3 class="section-title">Análisis PERT — Sprint 2</h3>
        <p class="intro-text mb-4">
          Estimación probabilística mediante tres valores por actividad.
          <strong>te = (O + 4M + P) / 6</strong> · <strong>σ = (P − O) / 6</strong>
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div class="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs">
            <div class="font-bold text-amber-900 mb-2">Duración esperada total (ruta crítica)</div>
            <div class="text-3xl font-black text-amber-800">19.4 <span class="text-base font-normal">días hábiles</span></div>
            <div class="text-amber-600 mt-1">C1 → C2 → C3 → C4 → G1 → G2 → G3 → F2</div>
          </div>
          <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs text-slate-700">
            <div class="font-bold text-slate-800 mb-2">Aclaración metodológica</div>
            Las estimaciones PERT representan duraciones probabilísticas. Las fechas del calendario se expresan mediante jornadas laborales completas, por lo que puede existir una diferencia menor por redondeo.
          </div>
        </div>

        <div class="overflow-x-auto custom-scrollbar">
          <table class="custom-table">
            <thead>
              <tr>
                <th class="w-14">ID</th>
                <th class="text-center w-16">O (Opt.)</th>
                <th class="text-center w-16">M (Más prob.)</th>
                <th class="text-center w-16">P (Pesim.)</th>
                <th class="text-center w-16">te</th>
                <th class="text-center w-16">σ</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let p of pertActivities2">
                <td><span class="pill pill-id">{{ p.id }}</span></td>
                <td class="text-center">{{ p.optimistic }}</td>
                <td class="text-center font-bold">{{ p.mostLikely }}</td>
                <td class="text-center">{{ p.pessimistic }}</td>
                <td class="text-center font-bold text-amber-800">{{ p.expected }}</td>
                <td class="text-center text-slate-600">{{ p.standardDeviation }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Tabla CPM -->
      <section class="shadow-card">
        <h3 class="section-title">Análisis CPM — Sprint 2</h3>
        <p class="intro-text mb-4">
          Método de la ruta crítica. Ruta crítica oficial:
          <strong class="text-red-700">C1 → C2 → C3 → C4 → G1 → G2 → G3 → F2</strong>
          — Duración total esperada: <strong>19.4 días hábiles</strong>.
        </p>

        <div class="flex flex-wrap gap-3 mb-4 text-xs">
          <span class="flex items-center gap-1"><span class="inline-block w-4 h-4 bg-red-100 border border-red-400 rounded"></span> Ruta crítica (holgura = 0)</span>
          <span class="flex items-center gap-1"><span class="inline-block w-4 h-4 bg-amber-100 border border-amber-400 rounded"></span> Holgura baja (≤ 2 días)</span>
          <span class="flex items-center gap-1"><span class="inline-block w-4 h-4 bg-green-100 border border-green-400 rounded"></span> Con holgura (> 2 días)</span>
        </div>

        <div class="overflow-x-auto custom-scrollbar">
          <table class="custom-table">
            <thead>
              <tr>
                <th class="w-14">ID</th>
                <th class="text-center w-16">te</th>
                <th class="text-center w-16">ES</th>
                <th class="text-center w-16">EF</th>
                <th class="text-center w-16">LS</th>
                <th class="text-center w-16">LF</th>
                <th class="text-center w-20">Holgura</th>
                <th class="text-center w-28">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let c of cpmActivities2" [ngClass]="getCpmRowClass(c.status)">
                <td><span class="pill pill-id">{{ c.id }}</span></td>
                <td class="text-center font-bold">{{ c.expected }}</td>
                <td class="text-center">{{ c.earlyStart }}</td>
                <td class="text-center">{{ c.earlyFinish }}</td>
                <td class="text-center">{{ c.lateStart }}</td>
                <td class="text-center">{{ c.lateFinish }}</td>
                <td class="text-center font-bold">{{ c.slack }}</td>
                <td class="text-center">
                  <span [ngClass]="getCpmBadgeClass(c.status)">{{ getCpmBadgeLabel(c.status) }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Diagramas Mermaid -->
      <section class="shadow-card">
        <h3 class="section-title">Diagrama PDM — Red de Dependencias del Sprint 2</h3>
        <p class="intro-text mb-4">
          Visualización de la red de actividades con colores por criticidad.
          <span class="text-red-700 font-bold">Rojo = Crítica</span> ·
          <span class="text-amber-700 font-bold">Amarillo = Holgura baja</span> ·
          <span class="text-green-700 font-bold">Verde = Con holgura</span>
        </p>
        <div class="custom-scrollbar overflow-x-auto bg-slate-50 rounded-xl border border-slate-200 p-4">
          <pre class="mermaid mermaid-scrollable">{{ diagram2Pdm }}</pre>
        </div>
      </section>

      <section class="shadow-card">
        <h3 class="section-title">Diagrama CPM — Ruta Crítica del Sprint 2</h3>
        <p class="intro-text mb-4">
          Muestra la ruta crítica principal y las demás actividades.
        </p>
        <div class="custom-scrollbar overflow-x-auto bg-slate-50 rounded-xl border border-slate-200 p-4">
          <pre class="mermaid mermaid-scrollable">{{ diagram2Cpm }}</pre>
        </div>
      </section>

      <section class="shadow-card">
        <h3 class="section-title">Diagrama de Gantt — Sprint 2 (octubre 2026)</h3>
        <p class="intro-text mb-4">
          Actividades críticas marcadas en rojo. Fines de semana excluidos del calendario.
        </p>
        <div class="custom-scrollbar overflow-x-auto bg-slate-50 rounded-xl border border-slate-200 p-4 min-w-full">
          <pre class="mermaid mermaid-scrollable">{{ diagram2Gantt }}</pre>
        </div>
      </section>

      <!-- Riesgos Sprint 2 -->
      <section class="shadow-card">
        <h3 class="section-title">Riesgos Específicos del Sprint 2</h3>
        <div class="overflow-x-auto">
          <table class="custom-table">
            <thead>
              <tr>
                <th class="w-1/3">Riesgo</th>
                <th class="w-1/3">Impacto Posible</th>
                <th class="w-1/3">Respuesta Prevista</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Retraso en la configuración de PythonAnywhere</td>
                <td>Aplazamiento del despliegue</td>
                <td>Preparar previamente variables de entorno, base de datos y dependencias</td>
              </tr>
              <tr>
                <td>Errores de permisos entre staff y superuser</td>
                <td>Acceso indebido o bloqueo de usuarios</td>
                <td>Ejecutar pruebas por rol y validar respuestas HTTP 403</td>
              </tr>
              <tr>
                <td>Inconsistencias en archivos CSV</td>
                <td>Fallas en importación o datos duplicados</td>
                <td>Validar estructura, encabezados y errores antes de confirmar carga</td>
              </tr>
              <tr>
                <td>Problemas en el flujo público de compra</td>
                <td>Interrupción del recorrido del cliente</td>
                <td>Realizar pruebas completas desde catálogo hasta confirmación</td>
              </tr>
              <tr>
                <td>Fallas de integración entre módulos</td>
                <td>Retraso en pruebas de regresión</td>
                <td>Integración progresiva y revisión antes del despliegue</td>
              </tr>
              <tr>
                <td>Documentación técnica incompleta</td>
                <td>Dificultad para mantenimiento posterior</td>
                <td>Actualizar README durante el desarrollo y validarlo al cierre</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Entregables y Criterios Sprint 2 -->
      <section class="shadow-card">
        <h3 class="section-title">Entregables y Criterios de Aceptación — Sprint 2</h3>
        <div class="overflow-x-auto">
          <table class="custom-table">
            <thead>
              <tr>
                <th class="w-1/3">Entregable</th>
                <th>Criterio de Aceptación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Módulo de gestión de proveedores</strong></td>
                <td>Permite registrar, editar, consultar y desactivar proveedores</td>
              </tr>
              <tr>
                <td><strong>2. Vinculación de reposición</strong></td>
                <td>Una alerta de stock bajo muestra el proveedor sugerido y permite registrar una solicitud de reposición</td>
              </tr>
              <tr>
                <td><strong>3. Módulo de gestión de usuarios y accesos</strong></td>
                <td>Los usuarios staff y superuser acceden únicamente a las funciones autorizadas; los accesos no permitidos generan HTTP 403</td>
              </tr>
              <tr>
                <td><strong>4. Catálogo público con búsqueda y filtros</strong></td>
                <td>Los productos activos pueden consultarse mediante búsqueda y filtros</td>
              </tr>
              <tr>
                <td><strong>5. Flujo de compra simulada</strong></td>
                <td>El usuario completa el flujo sin realizar un cobro real</td>
              </tr>
              <tr>
                <td><strong>6. Página de confirmación WhatsApp/Yape</strong></td>
                <td>La página final muestra instrucciones y opciones de contacto o pago simulado</td>
              </tr>
              <tr>
                <td><strong>7. Dashboard de indicadores técnicos</strong></td>
                <td>Los indicadores definidos se muestran a partir de información actual del sistema</td>
              </tr>
              <tr>
                <td><strong>8. Importación de productos y clientes (CSV)</strong></td>
                <td>Productos y clientes válidos se importan y los registros incorrectos se reportan sin corromper la información</td>
              </tr>
              <tr>
                <td><strong>9. Sistema desplegado en PythonAnywhere</strong></td>
                <td>La aplicación es accesible en PythonAnywhere</td>
              </tr>
              <tr>
                <td><strong>10. Suite de pruebas automatizadas de regresión</strong></td>
                <td>Los módulos del Sprint 1 y Sprint 2 superan las pruebas automatizadas definidas</td>
              </tr>
              <tr>
                <td><strong>11. Documentación técnica README</strong></td>
                <td>Contiene instalación, configuración, ejecución, despliegue y estructura principal</td>
              </tr>
              <tr>
                <td><strong>12. Incremento del Sprint 2 consolidado y validado</strong></td>
                <td>El incremento completo funciona de manera integrada y cuenta con evidencias de validación</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 bg-amber-50 border border-amber-300 p-3 rounded-xl text-xs text-amber-900">
          <strong>Todos los entregables están en estado: Planificado.</strong>
        </div>
      </section>

    </div>
    <!-- FIN SPRINT 2 -->
"""

content = re.sub(
    r"<!-- ════════════════════════════════════════════════════════════════════\n\s*SPRINT 2 — PLACEHOLDER.*?<!-- FIN SPRINT 2 -->",
    sprint2_html.strip(),
    content,
    flags=re.DOTALL
)

with open("src/app/pages/linea-base-cronograma/linea-base-cronograma.component.html", "w", encoding="utf-8") as f:
    f.write(content)
