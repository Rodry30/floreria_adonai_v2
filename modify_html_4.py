import re

html_path = "src/app/pages/linea-base-cronograma/linea-base-cronograma.component.html"

with open(html_path, "r", encoding="utf-8") as f:
    content = f.read()

new_calendar_html = """    <!-- Calendario visual -->
    <h4 class="subsection-title mt-6">Calendario Maestro del Proyecto</h4>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="bg-teal-900 text-white p-4 rounded-2xl border border-teal-700 shadow-md">
        <div class="text-xs font-bold uppercase tracking-wide text-teal-300 mb-1">1–30 Sept 2026</div>
        <div class="font-black text-sm mb-1">Sprint 1</div>
        <p class="text-[11px] text-teal-200">Base del sistema, Productos, Clientes y Ventas</p>
        <div class="mt-2 text-[10px] bg-teal-800 px-2 py-1 rounded">🏁 Planificado</div>
      </div>
      <div class="bg-teal-900 text-white p-4 rounded-2xl border border-teal-700 shadow-md">
        <div class="text-xs font-bold uppercase tracking-wide text-teal-300 mb-1">2–29 Oct 2026</div>
        <div class="font-black text-sm mb-1">Sprint 2</div>
        <p class="text-[11px] text-teal-200">Ampliación funcional, despliegue y documentación</p>
        <div class="mt-2 text-[10px] bg-teal-800 px-2 py-1 rounded">🏁 Planificado</div>
      </div>
      <div class="bg-teal-900 text-white p-4 rounded-2xl border border-teal-700 shadow-md">
        <div class="text-xs font-bold uppercase tracking-wide text-teal-300 mb-1">2–24 Nov 2026</div>
        <div class="font-black text-sm mb-1">Sprint 3</div>
        <p class="text-[11px] text-teal-200">Presencia digital, protocolos, capacitación y retroalimentación</p>
        <div class="mt-2 text-[10px] bg-teal-800 px-2 py-1 rounded">🏁 Planificado</div>
      </div>
      <div class="bg-teal-900 text-white p-4 rounded-2xl border border-teal-700 shadow-md">
        <div class="text-xs font-bold uppercase tracking-wide text-teal-300 mb-1">1–15 Dic 2026</div>
        <div class="font-black text-sm mb-1">Sprint 4</div>
        <p class="text-[11px] text-teal-200">KPIs, sostenibilidad, integración, validación y cierre</p>
        <div class="mt-2 text-[10px] bg-teal-800 px-2 py-1 rounded">🏁 Planificado</div>
      </div>
    </div>
    <p class="text-[11px] text-slate-500 mt-3 font-bold">
      Periodo total de la línea base: 1 de septiembre al 15 de diciembre de 2026.
    </p>"""

content = re.sub(
    r"<!-- Calendario visual -->.*?Las fechas detalladas del Sprint 4 serán incorporadas cuando se complete su planificación.\n    </p>",
    new_calendar_html,
    content,
    flags=re.DOTALL
)

sprint4_html = """    <!-- ════════════════════════════════════════════════════════════════════
         SPRINT 4
         ════════════════════════════════════════════════════════════════════ -->
    <div *ngIf="activeSprint === 4" class="space-y-6">

      <section class="shadow-card bg-gradient-to-r from-slate-800 to-slate-600 text-white rounded-3xl p-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="text-3xl">🏁</span>
            <div>
              <span class="text-slate-300 text-xs font-bold uppercase tracking-wider">Planificado · Sprint Final</span>
              <h4 class="text-2xl font-black mt-0.5">Sprint 4 — Analítica, sostenibilidad, integración y cierre</h4>
              <p class="text-slate-300 text-sm mt-1">Periodo: 1–15 diciembre 2026 · Pilar 5 + Cierre transversal</p>
            </div>
          </div>
          <div class="flex gap-2">
            <div class="bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm text-center">
              <div class="text-[10px] text-slate-300 uppercase font-bold">Actividades</div>
              <div class="text-lg font-black leading-none mt-0.5">8</div>
            </div>
            <div class="bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm text-center">
              <div class="text-[10px] text-slate-300 uppercase font-bold">Duración CPM</div>
              <div class="text-lg font-black leading-none mt-0.5">11.0<span class="text-[10px] ml-0.5">días</span></div>
            </div>
          </div>
        </div>
        <div class="mt-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
          <h5 class="text-xs uppercase font-bold text-slate-300 mb-1">Objetivo del Sprint 4</h5>
          <p class="text-sm leading-relaxed">
            Completar la transformación digital integral de la Florería Adonai mediante la definición de indicadores de éxito, el establecimiento de responsabilidades y procedimientos de sostenibilidad, la evaluación conjunta de los cinco pilares implementados, la validación final con la propietaria y la documentación de las lecciones aprendidas, dejando formalmente cerrado y entregado el proyecto.
          </p>
        </div>
      </section>

      <!-- Alcance EDT -->
      <section class="shadow-card">
        <h3 class="section-title">Alcance EDT del Sprint 4</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-indigo-50 border border-indigo-200 p-4 rounded-xl">
            <div class="text-[10px] font-black text-indigo-700 uppercase mb-1">WBS 1.5 — Pilar 5</div>
            <div class="font-bold text-slate-900 text-sm mb-2">Analítica y Mejora Continua</div>
            <div class="text-[11px] text-indigo-800 space-y-1">
              <p><strong>1.5.1 Definición de KPIs de Negocio</strong> (A1)</p>
              <p><strong>1.5.2 Plan de Sostenibilidad y Mantenimiento</strong> (B1, B2)</p>
            </div>
          </div>
          <div class="bg-slate-50 border border-slate-300 p-4 rounded-xl">
            <div class="text-[10px] font-black text-slate-600 uppercase mb-1">Transversal (1.0)</div>
            <div class="font-bold text-slate-900 text-sm mb-2">Integración, Validación y Cierre</div>
            <div class="text-[11px] text-slate-700 space-y-1">
              <p>Actividad transversal de integración de los cinco pilares (C1, C2)</p>
              <p>Actividad de cierre de proyecto (C3, C4, C5)</p>
            </div>
          </div>
        </div>
        
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-xl text-xs text-amber-900">
            <strong>Diferencia entre dashboard y KPIs de negocio:</strong>
            El dashboard desarrollado en el Sprint 2 presenta indicadores generados por el Sistema Web de Gestión. En el Sprint 4 se seleccionan y documentan los KPIs que permitirán evaluar el éxito de la transformación digital integral, incluyendo dimensiones tecnológicas, comerciales, operativas y de adopción.
          </div>
          <div class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-xl text-xs text-blue-900">
            <strong>Nota metodológica:</strong>
            A1, B1 y B2 se derivan directamente de paquetes de trabajo de la EDT. C1 es una actividad transversal de integración. C2 es una actividad de validación externa. C3, C4 y C5 son actividades de cierre del proyecto. No se crean códigos como 1.6 o 1.7 porque no existen en la EDT aprobada.
          </div>
        </div>
      </section>

      <!-- Tabla de actividades -->
      <section class="shadow-card">
        <h3 class="section-title">Tabla de Actividades — Sprint 4 (8 actividades)</h3>
        <div class="overflow-x-auto custom-scrollbar">
          <table class="custom-table">
            <thead>
              <tr>
                <th class="w-14">ID</th>
                <th>Actividad</th>
                <th class="w-36">WBS / Vinculación</th>
                <th class="w-36">Responsable</th>
                <th class="w-24">Predecesor</th>
                <th class="w-24">Fechas</th>
              </tr>
            </thead>
            <tbody>
              <ng-container *ngFor="let act of activities4; let i = index">
                <tr [ngClass]="{'bg-slate-50': i % 2 !== 0}">
                  <td class="font-bold">{{ act.id }}</td>
                  <td>{{ act.name }}</td>
                  <td class="text-[10px] font-bold" [ngClass]="{'text-indigo-700': act.wbs.includes('1.5'), 'text-slate-600': !act.wbs.includes('1.5')}">{{ act.wbs }}</td>
                  <td><span class="pill bg-slate-200 text-slate-700">{{ act.responsible }}</span></td>
                  <td class="text-xs text-slate-600 font-mono">{{ act.predecessor }}</td>
                  <td class="text-xs whitespace-nowrap">{{ act.dates }}</td>
                </tr>
              </ng-container>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Distribución del equipo -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="shadow-card">
          <h3 class="section-title">Distribución del Equipo</h3>
          <ul class="text-sm space-y-3 text-slate-700">
            <li><strong>Diego:</strong> Apoyo en selección de KPIs. Análisis de indicadores operativos y de adopción. Preparación de la presentación final.</li>
            <li><strong>Abel:</strong> Documentación de KPIs. Consolidación visual de resultados. Preparación de presentación y evidencias.</li>
            <li><strong>Rodrigo:</strong> Definición de soporte técnico post-entrega. Procedimiento ante fallas. Validación técnica final. Coordinación del cierre.</li>
            <li><strong>Oscar:</strong> Coordinación con la propietaria. Validación de responsabilidades. Recolección de evidencias. Validación final del proyecto. Apoyo en presentación.</li>
            <li><strong>Todo el equipo:</strong> Integración de los cinco pilares. Lecciones aprendidas. Cierre administrativo. Consolidación final.</li>
          </ul>
          <div class="mt-4 bg-slate-50 p-2 rounded text-xs text-slate-500 italic">
            La distribución del equipo combina actividades técnicas, documentales, de coordinación y validación. La cantidad de tareas asignadas no representa por sí sola el esfuerzo total.
          </div>
        </div>
        
        <div class="shadow-card bg-indigo-50 border border-indigo-200">
          <h3 class="section-title text-indigo-900">KPIs de éxito del proyecto</h3>
          <p class="text-xs text-indigo-800 mb-2">Durante el Sprint 4 se seleccionan los indicadores y se define cómo medirlos. No deben mostrarse valores obtenidos si todavía no existe un periodo suficiente de ejecución.</p>
          <ul class="text-[11px] text-indigo-900 space-y-2">
            <li><strong>Tecnología:</strong> Porcentaje de módulos operativos, número de incidencias registradas, disponibilidad del sistema, tiempo promedio de resolución de fallas.</li>
            <li><strong>Operaciones:</strong> Porcentaje de productos con stock actualizado, número de alertas de stock atendidas, porcentaje de pedidos que utilizan el checklist, reducción de registros manuales.</li>
            <li><strong>Comercial:</strong> Número de consultas desde canales digitales, número de ventas registradas en el sistema, ticket promedio, productos más vendidos.</li>
            <li><strong>Presencia digital:</strong> Visualizaciones del perfil, solicitudes de contacto, publicaciones realizadas respecto al calendario, uso de plantillas definidas.</li>
            <li><strong>Adopción:</strong> Porcentaje de usuarias capacitadas, frecuencia de uso del sistema, número de comentarios de retroalimentación, nivel de satisfacción de la propietaria y vendedora.</li>
          </ul>
        </div>
      </section>

      <!-- Sostenibilidad e Integración -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="shadow-card">
          <h3 class="section-title">Plan de Sostenibilidad y Fallas</h3>
          <h4 class="text-xs font-bold text-slate-800 uppercase mt-2 mb-1">Documento de soporte</h4>
          <p class="text-xs text-slate-600 mb-3">
            Define responsables funcionales y técnicos, actualización de productos, gestión de usuarios, alertas, publicaciones, frecuencia de respaldo, canal de incidencias, escalamiento y criterios para solicitar cambios.
          </p>
          <h4 class="text-xs font-bold text-slate-800 uppercase mt-2 mb-1">Procedimiento ante fallas</h4>
          <ol class="text-[11px] text-slate-600 list-decimal pl-4 space-y-1 mb-2">
            <li>Identificación de la falla.</li>
            <li>Registro de fecha, hora y descripción.</li>
            <li>Verificación de conexión a internet.</li>
            <li>Verificación del estado del alojamiento.</li>
            <li>Comunicación al responsable técnico.</li>
            <li>Uso temporal de registro manual mínimo.</li>
            <li>Restauración del servicio.</li>
            <li>Ingreso posterior de información acumulada.</li>
            <li>Verificación de consistencia.</li>
            <li>Cierre de la incidencia.</li>
          </ol>
          <div class="bg-amber-50 text-[10px] text-amber-800 p-2 rounded">
            <strong>Aclaración:</strong> El procedimiento manual es únicamente un mecanismo temporal de respaldo. No reemplaza el uso regular del sistema.
          </div>
        </div>

        <div class="shadow-card">
          <h3 class="section-title">Integración y Validación</h3>
          <h4 class="text-xs font-bold text-slate-800 uppercase mt-2 mb-1">Integración de los 5 Pilares (C1)</h4>
          <p class="text-[11px] text-slate-600 mb-2">
            La integración no consiste en desarrollar nuevas funcionalidades, sino en verificar que los entregables tecnológicos (Sistema Web), operativos (Protocolos), comerciales (Presencia Digital), humanos (Capacitación) y de analítica (KPIs) funcionen como una solución coherente.
          </p>
          <h4 class="text-xs font-bold text-slate-800 uppercase mt-3 mb-1">Validación Final (C2)</h4>
          <ul class="text-[11px] text-slate-600 space-y-1 mb-2 list-disc pl-4">
            <li>Presentación del sistema.</li>
            <li>Revisión de los documentos operativos.</li>
            <li>Revisión del material de marketing.</li>
            <li>Confirmación de responsabilidades.</li>
            <li>Revisión del plan de sostenibilidad.</li>
            <li>Registro de observaciones.</li>
            <li>Aprobación o aceptación condicionada.</li>
          </ul>
          <div class="bg-blue-50 text-[10px] text-blue-800 p-2 rounded">
            Si existen observaciones menores, deben registrarse como recomendaciones posteriores y no deben alterar la línea base sin un control formal de cambios.
          </div>
        </div>
      </section>

      <!-- Hitos -->
      <section class="shadow-card">
        <h3 class="section-title">Hitos del Sprint 4</h3>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-3">
          <div class="bg-white border-2 border-slate-200 p-3 rounded-xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-slate-300"></div>
            <div class="text-[9px] font-bold text-slate-500 uppercase">1 Dic 2026</div>
            <div class="font-black text-base text-slate-800 mt-1">H-12</div>
            <div class="text-[11px] font-medium text-slate-600 leading-tight mt-1">Inicio formal del Sprint 4</div>
          </div>
          <div class="bg-white border-2 border-indigo-200 p-3 rounded-xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-indigo-400"></div>
            <div class="text-[9px] font-bold text-indigo-600 uppercase">4 Dic 2026</div>
            <div class="font-black text-base text-indigo-800 mt-1">H-13</div>
            <div class="text-[11px] font-medium text-indigo-700 leading-tight mt-1">KPIs y sostenibilidad preparados</div>
          </div>
          <div class="bg-white border-2 border-purple-200 p-3 rounded-xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-purple-400"></div>
            <div class="text-[9px] font-bold text-purple-600 uppercase">8 Dic 2026</div>
            <div class="font-black text-base text-purple-800 mt-1">H-14</div>
            <div class="text-[11px] font-medium text-purple-700 leading-tight mt-1">Integración evaluada</div>
          </div>
          <div class="bg-white border-2 border-pink-200 p-3 rounded-xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-pink-400"></div>
            <div class="text-[9px] font-bold text-pink-600 uppercase">11 Dic 2026</div>
            <div class="font-black text-base text-pink-800 mt-1">H-15</div>
            <div class="text-[11px] font-medium text-pink-700 leading-tight mt-1">Entregables validados y presentación</div>
          </div>
          <div class="bg-white border-2 border-slate-800 p-3 rounded-xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-slate-900"></div>
            <div class="text-[9px] font-bold text-slate-600 uppercase">15 Dic 2026</div>
            <div class="font-black text-base text-slate-900 mt-1">H-16</div>
            <div class="text-[11px] font-bold text-slate-800 leading-tight mt-1">Proyecto cerrado</div>
          </div>
        </div>
      </section>

      <!-- Diagrama de Red PDM/PERT -->
      <section class="shadow-card">
        <h3 class="section-title">Diagrama de Dependencias PDM/PERT — Sprint 4</h3>
        <div class="custom-scrollbar overflow-x-auto">
          <div class="min-w-[1000px]">
            <div class="mermaid mermaid-scrollable" [innerHTML]="diagram4Pdm"></div>
          </div>
        </div>
      </section>

      <!-- Tabla PERT -->
      <section class="shadow-card">
        <h3 class="section-title">Estimación PERT — Sprint 4</h3>
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
              <tr *ngFor="let p of pertActivities4">
                <td class="font-bold text-left">{{ p.id }}</td>
                <td>{{ p.optimistic }}</td>
                <td>{{ p.mostLikely }}</td>
                <td>{{ p.pessimistic }}</td>
                <td class="bg-slate-50 font-bold text-indigo-700">{{ p.expected | number:'1.1-1' }}</td>
                <td class="text-slate-500">{{ p.standardDeviation | number:'1.1-1' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="text-[11px] text-slate-500 mt-2 italic">
          Las estimaciones PERT representan la duración probabilística del trabajo. Las fechas calendario se expresan en jornadas laborales completas, por lo que pueden existir diferencias menores por redondeo.
        </p>
      </section>

      <!-- Tabla CPM -->
      <section class="shadow-card">
        <h3 class="section-title">Análisis de Ruta Crítica (CPM) — Sprint 4</h3>
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
              <tr *ngFor="let c of cpmActivities4" [ngClass]="{'bg-red-50/50': c.status === 'critical'}">
                <td class="font-bold text-left">{{ c.id }}</td>
                <td>{{ c.expected | number:'1.1-1' }}</td>
                <td class="bg-slate-50/50 text-slate-600">{{ c.earlyStart | number:'1.1-1' }}</td>
                <td class="bg-slate-50/50 text-slate-600">{{ c.earlyFinish | number:'1.1-1' }}</td>
                <td class="bg-slate-50/50 text-slate-600">{{ c.lateStart | number:'1.1-1' }}</td>
                <td class="bg-slate-50/50 text-slate-600">{{ c.lateFinish | number:'1.1-1' }}</td>
                <td class="bg-slate-100 font-bold" [ngClass]="{
                  'text-red-600': c.slack === 0,
                  'text-amber-500': c.slack > 0 && c.slack <= 2
                }">{{ c.slack | number:'1.1-1' }}</td>
                <td class="text-left">
                  <span class="pill" [ngClass]="{
                    'bg-red-100 text-red-800': c.status === 'critical',
                    'bg-amber-100 text-amber-800': c.status === 'near-critical'
                  }">
                    {{ c.status === 'critical' ? 'Crítica' : 'Holgura baja' }}
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
              Ruta Crítica Oficial (Duración: 11.0 días hábiles)
            </h4>
            <div class="font-mono text-xs text-red-900 mt-2 bg-white px-3 py-2 rounded border border-red-100">
              B1 → B2 → C1 → C2 → C3 → C4 → C5
            </div>
          </div>
          <div class="bg-slate-50 border border-slate-200 p-4 rounded-xl">
            <h4 class="text-slate-800 font-bold text-sm mb-2">Aviso de Nivelación de Recursos</h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              La red CPM representa las dependencias lógicas del Sprint 4. Las fechas calendario deben verificarse mediante nivelación de recursos, especialmente porque las actividades C1, C3 y C5 requieren la participación de todo el equipo. La nivelación puede modificar la distribución diaria del trabajo, pero no debe eliminar actividades ni alterar el alcance aprobado.
            </p>
          </div>
        </div>
      </section>

      <!-- Diagrama CPM -->
      <section class="shadow-card">
        <h3 class="section-title">Diagrama de Nodos CPM — Sprint 4</h3>
        <div class="custom-scrollbar overflow-x-auto">
          <div class="min-w-[1400px]">
            <div class="mermaid mermaid-scrollable" [innerHTML]="diagram4Cpm"></div>
          </div>
        </div>
      </section>

      <!-- Diagrama de Gantt -->
      <section class="shadow-card">
        <h3 class="section-title">Diagrama de Gantt — Sprint 4</h3>
        <div class="custom-scrollbar overflow-x-auto">
          <div class="min-w-[1000px]">
            <div class="mermaid mermaid-scrollable" [innerHTML]="diagram4Gantt"></div>
          </div>
        </div>
      </section>

      <!-- Riesgos -->
      <section class="shadow-card">
        <h3 class="section-title">Riesgos Específicos del Sprint 4</h3>
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
                <td>Falta de datos históricos para calcular KPIs</td>
                <td>Los indicadores no podrán mostrar tendencias confiables</td>
                <td>Definir fórmula, fuente, frecuencia y línea inicial sin inventar resultados</td>
              </tr>
              <tr>
                <td>Indefinición de responsables post-entrega</td>
                <td>Abandono o mantenimiento insuficiente</td>
                <td>Asignar responsables nominales y funciones específicas</td>
              </tr>
              <tr>
                <td>Baja disponibilidad de la propietaria para validación</td>
                <td>Retraso del cierre formal</td>
                <td>Programar la validación desde el inicio del sprint</td>
              </tr>
              <tr>
                <td>Observaciones tardías sobre entregables anteriores</td>
                <td>Retrabajo y retraso del cierre</td>
                <td>Aplicar criterios de aceptación y registrar cambios no críticos como recomendaciones</td>
              </tr>
              <tr>
                <td>Documentación dispersa</td>
                <td>Dificultad para realizar la entrega final</td>
                <td>Consolidar evidencias y documentos en una estructura única</td>
              </tr>
              <tr>
                <td>Fallas durante la demostración final</td>
                <td>Afectación de la presentación</td>
                <td>Realizar una prueba previa y disponer de capturas o evidencias de respaldo</td>
              </tr>
              <tr>
                <td>Cierre incompleto del proyecto</td>
                <td>Falta de trazabilidad sobre los resultados</td>
                <td>Usar checklist de cierre y verificar todos los entregables</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Lecciones Aprendidas -->
      <section class="shadow-card">
        <h3 class="section-title">Lecciones Aprendidas (C3)</h3>
        <p class="text-sm text-slate-700 mb-3">La actividad C3 debe documentar:</p>
        <ul class="list-disc pl-5 text-sm text-slate-600 space-y-1">
          <li>Qué funcionó correctamente.</li>
          <li>Qué actividades tuvieron mayor incertidumbre.</li>
          <li>Qué riesgos se materializaron.</li>
          <li>Qué decisiones permitieron evitar retrasos.</li>
          <li>Qué problemas de coordinación se presentaron.</li>
          <li>Qué mejoras se recomiendan para futuros proyectos.</li>
          <li>Qué conocimientos técnicos y de gestión fueron adquiridos.</li>
        </ul>
      </section>

      <!-- Entregables -->
      <section class="shadow-card">
        <h3 class="section-title">Entregables y Criterios de Aceptación — Sprint 4</h3>
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
                <td><strong>1. Documento de KPIs de éxito del proyecto</strong></td>
                <td>Indicadores seleccionados, con nombre, propósito, fórmula, fuente, frecuencia y responsable</td>
              </tr>
              <tr>
                <td><strong>2. Documento de responsables de soporte post-entrega</strong></td>
                <td>Documento que asigna funciones post-entrega y es aprobado por la propietaria</td>
              </tr>
              <tr>
                <td><strong>3. Procedimiento ante fallas o caídas de conexión</strong></td>
                <td>Incluye pasos de diagnóstico, comunicación, respaldo manual, recuperación y validación</td>
              </tr>
              <tr>
                <td><strong>4. Informe de integración de los cinco pilares</strong></td>
                <td>Existe una matriz o informe que relaciona los entregables de los cinco pilares</td>
              </tr>
              <tr>
                <td><strong>5. Evaluación final del proyecto</strong></td>
                <td>Se documenta el cumplimiento de entregables y criterios de aceptación</td>
              </tr>
              <tr>
                <td><strong>6. Acta o evidencia de validación de la propietaria</strong></td>
                <td>Existe evidencia de revisión, aprobación u observaciones registradas</td>
              </tr>
              <tr>
                <td><strong>7. Registro de lecciones aprendidas</strong></td>
                <td>Documento que registra aspectos positivos, problemas y recomendaciones</td>
              </tr>
              <tr>
                <td><strong>8. Presentación final del proyecto</strong></td>
                <td>Resume problema, solución, cinco pilares, resultados esperados, cronograma y sostenibilidad</td>
              </tr>
              <tr>
                <td><strong>9. Cierre formal y consolidación de evidencias</strong></td>
                <td>Todos los entregables y evidencias están consolidados y el proyecto cuenta con un hito formal de cierre</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-4 bg-indigo-50 border border-indigo-300 p-3 rounded-xl text-xs text-indigo-900">
          <strong>Todos los entregables están en estado: Planificado.</strong> No se muestran como completados debido a que aún no hay datos reales de ejecución.
        </div>
      </section>
      
      <!-- Resumen Cuantitativo del Proyecto -->
      <section class="shadow-card bg-slate-800 text-white border-0">
        <h3 class="text-lg font-bold text-slate-200 border-b border-slate-700 pb-2 mb-4">Resumen Cuantitativo del Proyecto</h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div>
            <div class="text-xs text-slate-400 uppercase tracking-widest">Sprint 1</div>
            <div class="text-2xl font-black text-teal-400">19</div>
            <div class="text-[10px] text-slate-500">actividades</div>
          </div>
          <div>
            <div class="text-xs text-slate-400 uppercase tracking-widest">Sprint 2</div>
            <div class="text-2xl font-black text-teal-400">21</div>
            <div class="text-[10px] text-slate-500">actividades</div>
          </div>
          <div>
            <div class="text-xs text-slate-400 uppercase tracking-widest">Sprint 3</div>
            <div class="text-2xl font-black text-teal-400">17</div>
            <div class="text-[10px] text-slate-500">actividades</div>
          </div>
          <div>
            <div class="text-xs text-slate-400 uppercase tracking-widest">Sprint 4</div>
            <div class="text-2xl font-black text-indigo-400">8</div>
            <div class="text-[10px] text-slate-500">actividades</div>
          </div>
          <div class="col-span-2 md:col-span-1 border-l-0 md:border-l border-slate-700 pt-4 md:pt-0">
            <div class="text-xs text-slate-300 uppercase tracking-widest font-bold">Total Cronograma</div>
            <div class="text-3xl font-black text-white">65</div>
            <div class="text-[10px] text-slate-400">actividades planificadas</div>
          </div>
        </div>
        <div class="mt-4 bg-slate-900/50 p-3 rounded text-xs text-slate-400">
          El total incluye actividades derivadas de la EDT y actividades adicionales de integración, validación, gestión y cierre necesarias para ejecutar el proyecto.
        </div>
      </section>

    </div>

    <!-- Conclusión Final -->
    <div *ngIf="activeSprint === 4" class="mt-8 border-t-2 border-slate-200 pt-8">
      <h3 class="text-xl font-black text-slate-800 mb-4 text-center uppercase tracking-wider">Conclusión de la Línea Base del Cronograma</h3>
      <div class="max-w-4xl mx-auto text-center space-y-4">
        <p class="text-sm text-slate-600 leading-relaxed">
          La línea base del cronograma de la Transformación Digital Integral de la Florería Adonai organiza la ejecución del proyecto en cuatro sprints comprendidos entre el 1 de septiembre y el 15 de diciembre de 2026. La planificación integra el desarrollo del sistema web, la presencia digital, los procesos operativos, la gestión del cambio y la analítica, estableciendo actividades, dependencias, hitos y rutas críticas para controlar el avance del proyecto.
        </p>
        <div class="inline-block bg-amber-100 text-amber-900 px-4 py-2 rounded-full text-xs font-bold border border-amber-300">
          Una vez aprobada, esta línea base solo podrá modificarse mediante un procedimiento formal de control de cambios.
        </div>
      </div>
    </div>
"""

content = re.sub(
    r"<!-- ════════════════════════════════════════════════════════════════════\n         SPRINT 4 — PLACEHOLDER.*?</div>",
    sprint4_html,
    content,
    flags=re.DOTALL
)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(content)
