import re

html_path = "src/app/pages/linea-base-cronograma/linea-base-cronograma.component.html"

with open(html_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

# The slice to replace is lines 1246 to 1302 (0-indexed). Let's verify by finding the marker.
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if '<div *ngIf="activeSprint === 3" class="space-y-6">' in line:
        start_idx = i
        break

if start_idx != -1:
    for i in range(start_idx + 1, len(lines)):
        if '<!-- ════════════════════════════════════════════════════════════════════' in lines[i] and 'SPRINT 4 — PLACEHOLDER' in lines[i+1]:
            end_idx = i - 1
            break

if start_idx != -1 and end_idx != -1:
    # Build replacement HTML
    replacement = """    <div *ngIf="activeSprint === 3" class="space-y-6">

      <section class="shadow-card bg-gradient-to-r from-amber-800 to-amber-600 text-white rounded-3xl p-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="text-3xl">📱</span>
            <div>
              <span class="text-amber-300 text-xs font-bold uppercase tracking-wider">Planificado</span>
              <h4 class="text-2xl font-black mt-0.5">Sprint 3 — Presencia digital, procesos y gestión del cambio</h4>
              <p class="text-amber-200 text-sm mt-1">Periodo: 2–24 noviembre 2026 · Pilares: 2, 3 y 4</p>
            </div>
          </div>
          <div class="flex gap-2">
            <div class="bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm text-center">
              <div class="text-[10px] text-amber-200 uppercase font-bold">Actividades</div>
              <div class="text-lg font-black leading-none mt-0.5">17</div>
            </div>
            <div class="bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm text-center">
              <div class="text-[10px] text-amber-200 uppercase font-bold">Duración CPM</div>
              <div class="text-lg font-black leading-none mt-0.5">16.4<span class="text-[10px] ml-0.5">días</span></div>
            </div>
          </div>
        </div>
        <div class="mt-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
          <h5 class="text-xs uppercase font-bold text-amber-200 mb-1">Objetivo del Sprint 3</h5>
          <p class="text-sm leading-relaxed">
            Implementar los componentes no tecnológicos de la transformación digital de la Florería Adonai mediante la estructuración de su presencia digital, la documentación de procesos operativos prioritarios y la ejecución de acciones de capacitación, asignación de responsabilidades y retroalimentación que permitan facilitar la adopción efectiva del sistema web por parte de la propietaria y la vendedora.
          </p>
        </div>
      </section>

      <!-- Alcance EDT -->
      <section class="shadow-card">
        <h3 class="section-title">Alcance EDT del Sprint 3</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-teal-50 border border-teal-200 p-3 rounded-xl">
            <div class="text-[10px] font-black text-teal-700 uppercase mb-1">WBS 1.2 — Pilar 2</div>
            <div class="font-bold text-slate-900 text-xs mb-1">Presencia Digital y Marketing</div>
            <div class="mt-1 text-[9px] text-teal-700 font-bold">1.2.1 Google Business Profile (A1, A2)<br>1.2.2 Calendario Editorial (B1, B2)<br>1.2.3 Plantillas Canva (C1, C2)</div>
          </div>
          <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl">
            <div class="text-[10px] font-black text-slate-700 uppercase mb-1">WBS 1.3 — Pilar 3</div>
            <div class="font-bold text-slate-900 text-xs mb-1">Procesos Operativos</div>
            <div class="mt-1 text-[9px] text-slate-700 font-bold">1.3.1 Protocolo Reposición (D1, D2)<br>1.3.2 Checklist Pedidos (E1, E2)</div>
          </div>
          <div class="bg-purple-50 border border-purple-200 p-3 rounded-xl">
            <div class="text-[10px] font-black text-purple-700 uppercase mb-1">WBS 1.4 — Pilar 4</div>
            <div class="font-bold text-slate-900 text-xs mb-1">Personas y Gestión del Cambio</div>
            <div class="mt-1 text-[9px] text-purple-700 font-bold">1.4.1 Capacitación (F1, F2, F3)<br>1.4.2 Roles Digitales (G1)<br>1.4.3 Feedback (H1, H2)</div>
          </div>
        </div>
        <div class="mt-4 bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-xl text-xs text-amber-900">
          <strong>Aclaración sobre la Actividad I1:</strong>
          La actividad I1 — Consolidación y validación del Sprint 3 no representa un nuevo paquete de trabajo de la EDT. Es una actividad de integración del cronograma destinada a verificar que los entregables de marketing, procesos operativos y gestión del cambio sean consistentes entre sí, cuenten con evidencia y hayan sido validados por las usuarias correspondientes.
          <br><br>
          <strong>Aclaración sobre Procesos Operativos:</strong>
          El Pilar 3 no desarrolla nuevos módulos informáticos. Los protocolos y checklists describen cómo deben actuar la propietaria y la vendedora utilizando las funcionalidades implementadas en el Sistema Web de Gestión.
        </div>
      </section>

      <!-- Tabla de actividades -->
      <section class="shadow-card">
        <h3 class="section-title">Tabla de Actividades — Sprint 3 (17 actividades)</h3>
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
              <!-- Data bindings -->
              <ng-container *ngFor="let act of activities3; let i = index">
                <tr [ngClass]="{'bg-slate-50': i % 2 !== 0}">
                  <td class="font-bold">{{ act.id }}</td>
                  <td>{{ act.name }}</td>
                  <td class="text-xs font-mono text-slate-500">{{ act.wbs }}</td>
                  <td><span class="pill bg-slate-200 text-slate-700">{{ act.responsible }}</span></td>
                  <td class="text-xs text-slate-600 font-mono">{{ act.predecessor }}</td>
                  <td class="text-xs whitespace-nowrap">{{ act.dates }}</td>
                </tr>
              </ng-container>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Distribución del equipo y Capacitación -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="shadow-card">
          <h3 class="section-title">Distribución del Equipo</h3>
          <ul class="text-sm space-y-3">
            <li><strong>Oscar:</strong> Coordinación con la propietaria y la vendedora. Registro de información del negocio. Validaciones operativas. Fechas comerciales. Evidencias. Retroalimentación.</li>
            <li><strong>Abel:</strong> Diseño del calendario editorial. Diseño de plantillas Canva. Vinculación con el catálogo. Apoyo en configuración visual del perfil.</li>
            <li><strong>Rodrigo:</strong> Protocolo de reposición. Capacitación de la propietaria. Documento de roles. Relación entre procesos y sistema.</li>
            <li><strong>Diego:</strong> Checklist de preparación y entrega. Capacitación de la vendedora. Encuesta de retroalimentación. Recolección y organización de comentarios.</li>
            <li><strong>Todo el equipo:</strong> Consolidación y validación final.</li>
          </ul>
          <div class="mt-4 bg-slate-50 p-2 rounded text-xs text-slate-600">
            <strong>Nota:</strong> El número de actividades asignadas no representa por sí solo la carga real de trabajo, debido a que las tareas incluyen coordinación con usuarias, preparación de materiales y validaciones externas.
          </div>
        </div>
        <div class="shadow-card bg-amber-50 border border-amber-200">
          <h3 class="section-title text-amber-900">Restricciones de Capacitación</h3>
          <ul class="text-sm text-amber-800 space-y-2">
            <li>• La capacitación debe diferenciarse por rol.</li>
            <li>• Cada sesión no debe superar dos horas.</li>
            <li>• Debe utilizar ejemplos reales de la florería.</li>
            <li>• Debe incluir prácticas sobre las funciones necesarias para cada usuaria.</li>
            <li>• La propietaria debe recibir capacitación administrativa.</li>
            <li>• La vendedora debe recibir capacitación operativa.</li>
            <li>• Debe generarse evidencia de participación.</li>
          </ul>
        </div>
      </section>

      <!-- Hitos -->
      <section class="shadow-card">
        <div class="flex justify-between items-end border-b border-slate-100 pb-2 mb-4">
          <h3 class="text-lg font-black text-slate-800">Hitos del Sprint 3</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-white border-2 border-slate-200 p-4 rounded-xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
            <div class="text-[10px] font-bold text-slate-500 uppercase">2 Nov 2026</div>
            <div class="font-black text-lg text-slate-800 mt-1">H-08</div>
            <div class="text-xs font-medium text-slate-600 leading-tight mt-1">Inicio formal del Sprint 3</div>
          </div>
          <div class="bg-white border-2 border-teal-200 p-4 rounded-xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-teal-400"></div>
            <div class="text-[10px] font-bold text-teal-600 uppercase">5 Nov 2026</div>
            <div class="font-black text-lg text-teal-800 mt-1">H-09</div>
            <div class="text-xs font-medium text-teal-700 leading-tight mt-1">Protocolos operativos y material preparados</div>
          </div>
          <div class="bg-white border-2 border-indigo-200 p-4 rounded-xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-indigo-400"></div>
            <div class="text-[10px] font-bold text-indigo-600 uppercase">19 Nov 2026</div>
            <div class="font-black text-lg text-indigo-800 mt-1">H-10</div>
            <div class="text-xs font-medium text-indigo-700 leading-tight mt-1">Presencia digital y gestión del cambio implementadas</div>
          </div>
          <div class="bg-white border-2 border-amber-200 p-4 rounded-xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
            <div class="text-[10px] font-bold text-amber-600 uppercase">24 Nov 2026</div>
            <div class="font-black text-lg text-amber-800 mt-1">H-11</div>
            <div class="text-xs font-medium text-amber-700 leading-tight mt-1">Sprint 3 consolidado y cerrado</div>
          </div>
        </div>
      </section>

      <!-- Diagrama de Red PDM/PERT -->
      <section class="shadow-card">
        <h3 class="section-title">Diagrama de Dependencias PDM/PERT — Sprint 3</h3>
        <p class="intro-text mb-4">
          La red muestra el flujo secuencial de Marketing y en paralelo Procesos y Personas, integrándose en I1.
        </p>
        <div class="custom-scrollbar overflow-x-auto">
          <div class="min-w-[1200px]">
            <div class="mermaid mermaid-scrollable" [innerHTML]="diagram3Pdm"></div>
          </div>
        </div>
      </section>

      <!-- Tabla PERT -->
      <section class="shadow-card">
        <h3 class="section-title">Estimación PERT — Sprint 3</h3>
        <div class="overflow-x-auto custom-scrollbar">
          <table class="custom-table text-center">
            <thead>
              <tr>
                <th class="w-16">ID</th>
                <th>Optimista (O)</th>
                <th>Probable (M)</th>
                <th>Pesimista (P)</th>
                <th class="bg-slate-100">Esperada (te)</th>
                <th>Desviación (σ)</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let p of pertActivities3">
                <td class="font-bold text-left">{{ p.id }}</td>
                <td>{{ p.optimistic }}</td>
                <td>{{ p.mostLikely }}</td>
                <td>{{ p.pessimistic }}</td>
                <td class="bg-slate-50 font-bold text-teal-700">{{ p.expected | number:'1.1-1' }}</td>
                <td class="text-slate-500">{{ p.standardDeviation | number:'1.1-1' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-[11px] text-slate-500 mt-2 italic">
          Las duraciones PERT se utilizan para representar la incertidumbre de las actividades. Las fechas calendario emplean jornadas laborales completas, por lo que pueden existir diferencias menores generadas por el redondeo.
        </p>
      </section>

      <!-- Tabla CPM -->
      <section class="shadow-card">
        <h3 class="section-title">Análisis de Ruta Crítica (CPM) — Sprint 3</h3>
        <div class="overflow-x-auto custom-scrollbar">
          <table class="custom-table text-center">
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th>te</th>
                <th class="bg-slate-50">ES</th>
                <th class="bg-slate-50">EF</th>
                <th class="bg-slate-50">LS</th>
                <th class="bg-slate-50">LF</th>
                <th class="bg-slate-100 font-bold">Holgura</th>
                <th class="text-left">Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let c of cpmActivities3" [ngClass]="{'bg-red-50/50': c.status === 'critical'}">
                <td class="font-bold text-left">{{ c.id }}</td>
                <td>{{ c.expected | number:'1.1-1' }}</td>
                <td class="bg-slate-50/50 text-slate-600">{{ c.earlyStart | number:'1.1-1' }}</td>
                <td class="bg-slate-50/50 text-slate-600">{{ c.earlyFinish | number:'1.1-1' }}</td>
                <td class="bg-slate-50/50 text-slate-600">{{ c.lateStart | number:'1.1-1' }}</td>
                <td class="bg-slate-50/50 text-slate-600">{{ c.lateFinish | number:'1.1-1' }}</td>
                <td class="bg-slate-100 font-bold" [ngClass]="{
                  'text-red-600': c.slack === 0,
                  'text-green-600': c.slack > 3
                }">{{ c.slack | number:'1.1-1' }}</td>
                <td class="text-left">
                  <span class="pill" [ngClass]="{
                    'bg-red-100 text-red-800': c.status === 'critical',
                    'bg-green-100 text-green-800': c.status === 'slack'
                  }">
                    {{ c.status === 'critical' ? 'Crítica' : 'Con holgura' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-red-50 border border-red-200 p-4 rounded-xl">
            <h4 class="text-red-800 font-bold text-sm mb-2 flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-red-500"></span>
              Ruta Crítica Oficial (Duración: 16.4 días hábiles)
            </h4>
            <div class="font-mono text-xs text-red-900 mt-2 bg-white px-3 py-2 rounded border border-red-100">
              A1 → A2 → B1 → B2 → C1 → C2 → I1
            </div>
          </div>
          <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl">
            <h4 class="text-slate-800 font-bold text-sm mb-2">Aviso de Nivelación de Recursos</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              La red CPM presenta las dependencias lógicas del Sprint 3. Las fechas calendario incorporan una asignación preliminar de recursos, pero deben verificarse las coincidencias entre actividades, especialmente aquellas que requieren la participación simultánea de Oscar, Rodrigo o Diego. La nivelación de recursos puede modificar fechas y holguras sin modificar los paquetes de trabajo de la EDT.
            </p>
          </div>
        </div>
      </section>

      <!-- Diagrama CPM -->
      <section class="shadow-card">
        <h3 class="section-title">Diagrama de Nodos CPM — Sprint 3</h3>
        <div class="custom-scrollbar overflow-x-auto">
          <div class="min-w-[1600px]">
            <div class="mermaid mermaid-scrollable" [innerHTML]="diagram3Cpm"></div>
          </div>
        </div>
      </section>

      <!-- Diagrama de Gantt -->
      <section class="shadow-card">
        <h3 class="section-title">Diagrama de Gantt — Sprint 3</h3>
        <p class="intro-text mb-4">
          Fechas calendario: Inicio el 2 nov, finalización de actividades el 23 nov, cierre el 24 nov. Periodo de contingencia 25-27 nov.
        </p>
        <div class="custom-scrollbar overflow-x-auto">
          <div class="min-w-[1000px]">
            <div class="mermaid mermaid-scrollable" [innerHTML]="diagram3Gantt"></div>
          </div>
        </div>
      </section>

      <!-- Riesgos -->
      <section class="shadow-card">
        <h3 class="section-title">Riesgos Específicos del Sprint 3</h3>
        <div class="overflow-x-auto">
          <table class="custom-table">
            <thead>
              <tr>
                <th class="w-1/3">Riesgo</th>
                <th class="w-1/3">Impacto posible</th>
                <th class="w-1/3">Respuesta prevista</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Demora en la verificación de Google Business Profile</td>
                <td>El perfil puede quedar pendiente de publicación</td>
                <td>Iniciar la solicitud al comienzo del sprint y registrar evidencia del trámite</td>
              </tr>
              <tr>
                <td>Falta de fotografías adecuadas</td>
                <td>Menor calidad de la presencia digital</td>
                <td>Usar fotografías disponibles y programar una sesión breve de actualización</td>
              </tr>
              <tr>
                <td>Baja disponibilidad de la propietaria</td>
                <td>Retraso en validación del protocolo y capacitación</td>
                <td>Programar las sesiones con anticipación y preparar materiales resumidos</td>
              </tr>
              <tr>
                <td>Baja disponibilidad de la vendedora</td>
                <td>Retraso en validación del checklist</td>
                <td>Realizar validaciones en periodos de menor atención</td>
              </tr>
              <tr>
                <td>Dificultad de adopción del sistema</td>
                <td>Uso parcial o abandono de herramientas</td>
                <td>Capacitación práctica, diferenciada por rol y con ejemplos reales</td>
              </tr>
              <tr>
                <td>Plantillas poco alineadas al catálogo</td>
                <td>Material visual inconsistente</td>
                <td>Vincular cada plantilla con categorías y productos reales del sistema</td>
              </tr>
              <tr>
                <td>Retroalimentación insuficiente</td>
                <td>Dificultad para identificar mejoras</td>
                <td>Utilizar una encuesta breve y preguntas guiadas</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 bg-blue-50 border border-blue-200 p-3 rounded-xl text-xs text-blue-900">
          <strong>Diferencia entre implementación y validación externa:</strong> Algunas actividades del Sprint 3 dependen de la disponibilidad de la propietaria, la vendedora o de procesos externos como la verificación de Google Business Profile. Por ello, una actividad puede considerarse cumplida cuando se completa el trabajo controlable por el equipo y se cuenta con evidencia de la solicitud o validación correspondiente.
        </div>
      </section>

      <!-- Entregables -->
      <section class="shadow-card">
        <h3 class="section-title">Entregables y Criterios de Aceptación — Sprint 3</h3>
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
                <td><strong>1. Google Business Profile</strong></td>
                <td>Perfil registrado o verificación solicitada, con nombre, categoría, horario, ubicación y fotografías cargadas</td>
              </tr>
              <tr>
                <td><strong>2. Calendario editorial</strong></td>
                <td>Contiene al menos ocho publicaciones planificadas y vinculadas a fechas comerciales del trimestre</td>
              </tr>
              <tr>
                <td><strong>3. Banco de plantillas</strong></td>
                <td>Contiene al menos cinco plantillas reutilizables en Canva, alineadas con productos del catálogo</td>
              </tr>
              <tr>
                <td><strong>4. Protocolo de reposición</strong></td>
                <td>Define responsables, pasos y acciones ante alertas de stock bajo y está validado por la propietaria</td>
              </tr>
              <tr>
                <td><strong>5. Checklist de pedidos</strong></td>
                <td>Contiene las etapas físicas de preparación y entrega y está validado por la vendedora</td>
              </tr>
              <tr>
                <td><strong>6. Capacitación de propietaria</strong></td>
                <td>Sesión ejecutada, con duración máxima de dos horas y evidencia de participación</td>
              </tr>
              <tr>
                <td><strong>7. Capacitación de vendedora</strong></td>
                <td>Sesión ejecutada, con duración máxima de dos horas y evidencia de participación</td>
              </tr>
              <tr>
                <td><strong>8. Roles y responsabilidades</strong></td>
                <td>Documento aprobado por la propietaria, con funciones digitales diferenciadas</td>
              </tr>
              <tr>
                <td><strong>9. Canal de retroalimentación</strong></td>
                <td>Encuesta o mecanismo accesible para las usuarias</td>
              </tr>
              <tr>
                <td><strong>10. Primera retroalimentación</strong></td>
                <td>Se registra y organiza al menos una ronda inicial de comentarios</td>
              </tr>
              <tr>
                <td><strong>11. Consolidación</strong></td>
                <td>Los entregables de los tres pilares cuentan con evidencia y validación correspondiente</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 bg-amber-50 border border-amber-300 p-3 rounded-xl text-xs text-amber-900">
          <strong>Todos los entregables están en estado: Planificado.</strong>
        </div>
      </section>

    </div>"""

    lines[start_idx:end_idx+1] = [replacement + "\n"]

    with open(html_path, "w", encoding="utf-8") as f:
        f.writelines(lines)
    print("Modified successfully!")
else:
    print("Error: Could not find Sprint 3 boundaries.")
