import os

html_path = "src/app/pages/linea-base-costos/linea-base-costos.html"
ts_path = "src/app/pages/linea-base-costos/linea-base-costos.ts"

html_content = """<div class="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  
  <!-- Encabezado de la página -->
  <section class="mb-10 text-center">
    <div class="inline-block bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-teal-200">
      Fase 3 — Planificación
    </div>
    <h1 class="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-slate-800 mb-4">
      Línea Base de los Costos del Proyecto
    </h1>
    <h2 class="text-xl text-slate-600 font-medium mb-6">Gestión de los Costos — PMBOK 6.ª edición</h2>
    
    <div class="max-w-3xl mx-auto bg-slate-50 border border-slate-200 p-6 rounded-2xl text-slate-700 text-sm leading-relaxed shadow-sm">
      <p class="mb-3">
        La línea base de los costos representa la versión aprobada del presupuesto distribuido en el tiempo. Permite comparar los costos planificados con los costos reales, controlar variaciones, gestionar reservas y determinar si el proyecto puede completarse dentro del presupuesto autorizado.
      </p>
      <p class="font-bold text-teal-800">
        El presupuesto cubre los cinco pilares de la transformación digital: sistema web, presencia digital, procesos operativos, personas y gestión del cambio, y analítica y mejora continua.
      </p>
    </div>
  </section>

  <!-- Ficha técnica -->
  <section class="shadow-card">
    <h3 class="section-title">Ficha Técnica</h3>
    <div class="overflow-x-auto custom-scrollbar">
      <table class="custom-table">
        <tbody>
          <tr>
            <td class="font-bold w-1/3">Proyecto</td>
            <td>Transformación Digital Integral — Florería Adonai</td>
          </tr>
          <tr>
            <td class="font-bold">Documento</td>
            <td>Línea Base de los Costos del Proyecto</td>
          </tr>
          <tr>
            <td class="font-bold">Fase</td>
            <td>Fase 3 — Planificación</td>
          </tr>
          <tr>
            <td class="font-bold">Periodo</td>
            <td>1 septiembre — 15 diciembre 2026</td>
          </tr>
          <tr>
            <td class="font-bold">Moneda</td>
            <td>Sol peruano — S/</td>
          </tr>
          <tr>
            <td class="font-bold">Método principal</td>
            <td>Estimación ascendente o bottom-up</td>
          </tr>
          <tr>
            <td class="font-bold">Técnicas complementarias</td>
            <td>Estimación paramétrica, PERT de costos y análisis de reservas</td>
          </tr>
          <tr>
            <td class="font-bold">Estructura</td>
            <td>4 sprints y 5 pilares</td>
          </tr>
          <tr>
            <td class="font-bold">Línea base de costos</td>
            <td class="text-teal-700 font-black">S/ 24,190</td>
          </tr>
          <tr>
            <td class="font-bold">Presupuesto total autorizado</td>
            <td class="text-indigo-700 font-black">S/ 25,400</td>
          </tr>
          <tr>
            <td class="font-bold">Docente</td>
            <td>Mg. MBA Antonio Arqque Pantigozo</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <!-- Stepper metodológico -->
  <section class="mb-8 hidden md:block">
    <div class="flex items-center justify-between relative">
      <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-200 z-0"></div>
      
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mb-2 shadow-md">1</div>
        <div class="text-xs font-bold text-slate-700 text-center w-32">Planificar la Gestión de los Costos</div>
      </div>
      
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mb-2 shadow-md">2</div>
        <div class="text-xs font-bold text-slate-700 text-center w-32">Estimar los Costos</div>
      </div>
      
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center mb-2 shadow-md">3</div>
        <div class="text-xs font-bold text-slate-700 text-center w-32">Determinar el Presupuesto</div>
      </div>
      
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-10 h-10 rounded-full bg-slate-300 text-slate-600 font-bold flex items-center justify-center mb-2 shadow-md">4</div>
        <div class="text-xs font-bold text-slate-500 text-center w-32">Controlar los Costos</div>
      </div>
    </div>
  </section>

  <!-- Planificar la Gestión de los Costos -->
  <section class="shadow-card">
    <h3 class="section-title">1. Planificar la Gestión de los Costos</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-3 border-b border-slate-200 pb-2 flex items-center gap-2"><span class="text-lg">📥</span> Entradas</h4>
        <ul class="text-xs text-slate-600 space-y-2 list-disc pl-4">
          <li>Acta de constitución.</li>
          <li>Plan para la dirección del proyecto.</li>
          <li>Línea base del alcance.</li>
          <li>EDT y diccionario de la EDT.</li>
          <li>Línea base del cronograma.</li>
          <li>Registro de riesgos.</li>
          <li>Factores ambientales.</li>
          <li>Activos de los procesos de la organización.</li>
        </ul>
      </div>
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-3 border-b border-slate-200 pb-2 flex items-center gap-2"><span class="text-lg">🛠️</span> Herramientas y técnicas</h4>
        <ul class="text-xs text-slate-600 space-y-2 list-disc pl-4">
          <li>Juicio de expertos.</li>
          <li>Análisis de datos.</li>
          <li>Estimación ascendente.</li>
          <li>Estimación paramétrica.</li>
          <li>Estimación por tres valores.</li>
          <li>Análisis de reservas.</li>
          <li>Reuniones.</li>
          <li>Hoja de cálculo o herramienta presupuestaria.</li>
        </ul>
      </div>
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <h4 class="font-bold text-slate-800 mb-3 border-b border-slate-200 pb-2 flex items-center gap-2"><span class="text-lg">📤</span> Salidas</h4>
        <ul class="text-xs text-slate-600 space-y-2 list-disc pl-4">
          <li>Plan de Gestión de los Costos.</li>
          <li>Estimaciones de costos.</li>
          <li>Base de las estimaciones.</li>
          <li>Línea base de costos.</li>
          <li>Requisitos de financiamiento.</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- Método seleccionado y Supuestos -->
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="shadow-card">
      <h3 class="section-title">Método Principal: Estimación Ascendente</h3>
      <p class="text-sm text-slate-700 mb-4">
        Se estima el costo de cada actividad y paquete de trabajo de la EDT. Luego, los costos se consolidan por entregable, pilar, sprint y proyecto completo.
      </p>
      <div class="bg-teal-50 border-l-4 border-teal-500 p-3 mb-4">
        <code class="text-xs font-mono text-teal-900 block">Costo de la actividad = Horas estimadas × Tarifa por hora + Recursos directos</code>
      </div>
      <h4 class="font-bold text-sm text-slate-800 mb-2">Justificación:</h4>
      <ul class="text-xs text-slate-600 list-disc pl-5 space-y-1 mb-4">
        <li>Existe una EDT detallada.</li>
        <li>Las actividades están organizadas por sprint.</li>
        <li>Se conocen responsables, duraciones y entregables.</li>
        <li>Permite trazabilidad entre alcance, cronograma y presupuesto.</li>
      </ul>
      <h4 class="font-bold text-sm text-slate-800 mb-2">Técnicas complementarias:</h4>
      <div class="space-y-2">
        <div class="bg-slate-50 p-2 rounded text-xs border border-slate-100">
          <strong>Estimación paramétrica:</strong> <code class="text-slate-700 bg-white px-1">Costo = Cantidad × Tarifa</code>
        </div>
        <div class="bg-slate-50 p-2 rounded text-xs border border-slate-100">
          <strong>Estimación por tres valores:</strong> <code class="text-slate-700 bg-white px-1">te = (O + 4M + P) / 6</code>
        </div>
        <div class="bg-slate-50 p-2 rounded text-xs border border-slate-100">
          <strong>Análisis de reservas:</strong> Contingencia y Reserva de gestión.
        </div>
      </div>
    </div>
    
    <div class="shadow-card">
      <h3 class="section-title">Supuestos Presupuestarios</h3>
      <ul class="text-xs text-slate-700 space-y-2 list-disc pl-4">
        <li><strong>Moneda:</strong> soles peruanos.</li>
        <li><strong>Proyecto académico</strong> con valorización económica del trabajo. El trabajo del equipo se registra aunque no exista un pago efectivo.</li>
        <li>Las tarifas son referenciales.</li>
        <li>Se utilizará Google Business Profile sin costo y Canva Free.</li>
        <li>Se utilizarán herramientas gratuitas de versionado y documentación (GitHub, Google Drive).</li>
        <li>Se considera hosting para producción y dominio anual.</li>
        <li>Se considera internet y datos móviles.</li>
        <li><strong>No se incluye</strong> publicidad pagada, ERP, aplicación móvil nativa, pasarela real, ni facturación SUNAT.</li>
        <li>Los precios tecnológicos deben recotizarse antes de la compra.</li>
      </ul>
    </div>
  </section>

  <!-- Estructura de categorías -->
  <section class="shadow-card">
    <h3 class="section-title">Estructura de Categorías de Costos</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
        <span class="pill pill-id text-xs shrink-0">CP-01</span>
        <span class="text-xs font-medium text-slate-700">Mano de obra del equipo</span>
      </div>
      <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
        <span class="pill pill-id text-xs shrink-0">CP-02</span>
        <span class="text-xs font-medium text-slate-700">Participación de usuarias</span>
      </div>
      <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
        <span class="pill pill-id text-xs shrink-0">CP-03</span>
        <span class="text-xs font-medium text-slate-700">Implementación y campo</span>
      </div>
      <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
        <span class="pill pill-id text-xs shrink-0">CP-04</span>
        <span class="text-xs font-medium text-slate-700">Documentación y materiales</span>
      </div>
      <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
        <span class="pill pill-id text-xs shrink-0">CP-05</span>
        <span class="text-xs font-medium text-slate-700">Asesorías</span>
      </div>
      <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
        <span class="pill pill-id text-xs shrink-0">CP-06</span>
        <span class="text-xs font-medium text-slate-700">Costos tecnológicos</span>
      </div>
      <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
        <span class="pill pill-id text-xs shrink-0">CP-07</span>
        <span class="text-xs font-medium text-slate-700">Costos indirectos</span>
      </div>
      <div class="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
        <span class="pill pill-id bg-amber-200 text-amber-900 border-amber-300 text-xs shrink-0">CP-08</span>
        <span class="text-xs font-medium text-amber-900">Reserva para contingencias</span>
      </div>
      <div class="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
        <span class="pill pill-id bg-indigo-200 text-indigo-900 border-indigo-300 text-xs shrink-0">CP-09</span>
        <span class="text-xs font-medium text-indigo-900">Reserva de gestión</span>
      </div>
    </div>
  </section>

  <!-- Presupuesto de mano de obra -->
  <section class="shadow-card">
    <h3 class="section-title">Presupuesto de Mano de Obra</h3>
    
    <h4 class="subsection-title mt-6">Tarifas y horas del equipo del proyecto</h4>
    <div class="overflow-x-auto custom-scrollbar mb-6">
      <table class="custom-table text-sm">
        <thead>
          <tr>
            <th class="w-32">Integrante</th>
            <th>Rol</th>
            <th class="text-right w-24">Tarifa</th>
            <th class="text-right w-20">Sp 1</th>
            <th class="text-right w-20">Sp 2</th>
            <th class="text-right w-20">Sp 3</th>
            <th class="text-right w-20">Sp 4</th>
            <th class="text-right w-24">Total h.</th>
            <th class="text-right w-32 bg-slate-100">Costo Total</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let l of laborCosts">
            <td class="font-bold">{{ l.member }}</td>
            <td class="text-xs text-slate-600">{{ l.role }}</td>
            <td class="text-right">{{ l.hourlyRate | currency:'PEN':'symbol':'1.0-0' }}/h</td>
            <td class="text-right">{{ l.sprint1Hours }}</td>
            <td class="text-right">{{ l.sprint2Hours }}</td>
            <td class="text-right">{{ l.sprint3Hours }}</td>
            <td class="text-right">{{ l.sprint4Hours }}</td>
            <td class="text-right font-bold">{{ l.totalHours }}</td>
            <td class="text-right font-bold text-teal-700 bg-slate-50">{{ l.totalCost | currency:'PEN':'symbol':'1.0-0' }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="bg-slate-100 font-bold">
            <td colspan="3" class="text-right">TOTAL EQUIPO:</td>
            <td class="text-right">240</td>
            <td class="text-right">240</td>
            <td class="text-right">160</td>
            <td class="text-right">88</td>
            <td class="text-right">728</td>
            <td class="text-right text-teal-800">{{ 16188 | currency:'PEN':'symbol':'1.0-0' }}</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 class="subsection-title">Participación de usuarias</h4>
        <div class="overflow-x-auto custom-scrollbar">
          <table class="custom-table text-sm">
            <thead>
              <tr>
                <th>Participante</th>
                <th class="text-right">Horas</th>
                <th class="text-right">Tarifa</th>
                <th class="text-right">Costo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Propietaria</td>
                <td class="text-right">24</td>
                <td class="text-right">S/ 20/h</td>
                <td class="text-right font-bold">S/ 480</td>
              </tr>
              <tr>
                <td>Vendedora</td>
                <td class="text-right">12</td>
                <td class="text-right">S/ 15/h</td>
                <td class="text-right font-bold">S/ 180</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="bg-slate-100 font-bold">
                <td colspan="2" class="text-right">Total (36 h):</td>
                <td></td>
                <td class="text-right">S/ 660</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      
      <div class="flex items-center justify-center">
        <div class="bg-teal-50 border-2 border-teal-200 p-6 rounded-2xl text-center w-full max-w-sm">
          <div class="text-sm font-bold text-teal-900 uppercase tracking-widest mb-2">Total Mano de Obra</div>
          <div class="text-4xl font-black text-teal-700">{{ 16848 | currency:'PEN':'symbol':'1.0-0' }}</div>
          <div class="text-xs text-teal-600 mt-2">S/ 16,188 (Equipo) + S/ 660 (Usuarias)</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Presupuestos detallados -->
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    
    <!-- Implementación -->
    <div class="shadow-card">
      <h3 class="section-title">Presupuesto de Implementación</h3>
      <div class="overflow-x-auto custom-scrollbar mb-4">
        <table class="custom-table text-sm">
          <thead>
            <tr>
              <th>Concepto</th>
              <th>Base</th>
              <th class="text-right">Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of implementationCosts">
              <td class="font-medium">{{ item.category }}</td>
              <td class="text-xs text-slate-500">{{ item.basis }}</td>
              <td class="text-right font-bold">{{ item.amount | currency:'PEN':'symbol':'1.0-0' }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="bg-slate-100 font-bold text-slate-800">
              <td colspan="2" class="text-right">Total Implementación:</td>
              <td class="text-right">{{ getTotal(implementationCosts) | currency:'PEN':'symbol':'1.0-0' }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>

    <!-- Documentos -->
    <div class="shadow-card">
      <h3 class="section-title">Presupuesto de Documentos</h3>
      <div class="overflow-x-auto custom-scrollbar mb-4">
        <table class="custom-table text-sm">
          <thead>
            <tr>
              <th>Documento o material</th>
              <th class="text-right">Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of documentCosts">
              <td class="font-medium">{{ item.category }}</td>
              <td class="text-right font-bold">{{ item.amount | currency:'PEN':'symbol':'1.0-0' }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="bg-slate-100 font-bold text-slate-800">
              <td class="text-right">Total Documentos:</td>
              <td class="text-right">{{ getTotal(documentCosts) | currency:'PEN':'symbol':'1.0-0' }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
        <div class="text-[10px] font-bold text-slate-700 mb-1 uppercase">Documentos producidos:</div>
        <div class="text-[10px] text-slate-600 column-count-2">
          Gestión del alcance, EDT, Cronograma, Línea base de costos, Manual técnico, Manual de propietaria, Manual de vendedora, Protocolo de reposición, Checklist de pedidos, Roles y responsabilidades, Calendario editorial, Documento de KPIs, Plan de sostenibilidad, Procedimiento ante fallas, Lecciones aprendidas, Informe final.
        </div>
      </div>
    </div>

    <!-- Asesorías -->
    <div class="shadow-card">
      <h3 class="section-title">Presupuesto de Asesorías</h3>
      <div class="overflow-x-auto custom-scrollbar mb-4">
        <table class="custom-table text-sm">
          <thead>
            <tr>
              <th>Asesoría</th>
              <th class="text-right">Base</th>
              <th class="text-right">Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of consultingCosts">
              <td class="font-medium">{{ item.category }}</td>
              <td class="text-right text-xs text-slate-500">{{ item.basis }}</td>
              <td class="text-right font-bold">{{ item.amount | currency:'PEN':'symbol':'1.0-0' }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="bg-slate-100 font-bold text-slate-800">
              <td colspan="2" class="text-right">Total Asesorías:</td>
              <td class="text-right">{{ getTotal(consultingCosts) | currency:'PEN':'symbol':'1.0-0' }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <p class="text-xs text-slate-500 italic">
        * Las asesorías son referenciales y pueden representar apoyo docente, revisión externa, tiempo especializado valorizado, o validación técnica/metodológica.
      </p>
    </div>

    <!-- Tecnología -->
    <div class="shadow-card">
      <h3 class="section-title">Costos Tecnológicos</h3>
      <h4 class="text-xs font-bold text-slate-700 uppercase mb-2">Servicios con costo</h4>
      <div class="overflow-x-auto custom-scrollbar mb-4">
        <table class="custom-table text-sm">
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Cálculo</th>
              <th class="text-right">Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let item of technologyCosts">
              <td class="font-medium">{{ item.category }}</td>
              <td class="text-xs text-slate-500">{{ item.basis }}</td>
              <td class="text-right font-bold">{{ item.amount | currency:'PEN':'symbol':'1.0-0' }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="bg-slate-100 font-bold text-slate-800">
              <td colspan="2" class="text-right">Total Tecnología:</td>
              <td class="text-right">{{ getTotal(technologyCosts) | currency:'PEN':'symbol':'1.0-0' }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <h4 class="text-xs font-bold text-slate-700 uppercase mb-2">Herramientas gratuitas y Costos Posteriores</h4>
      <div class="grid grid-cols-2 gap-4">
        <ul class="text-[10px] text-slate-600 list-disc pl-4 space-y-1">
          <li>Google Business Profile (S/ 0)</li>
          <li>Canva Free (S/ 0)</li>
          <li>GitHub (S/ 0)</li>
          <li>Gmail / Google Drive (S/ 0)</li>
          <li>WhatsApp (S/ 0 adicional)</li>
        </ul>
        <div class="bg-slate-50 p-2 rounded text-[10px] text-slate-600 border border-slate-200">
          <strong>Costos recurrentes anuales (S/ 2,086):</strong><br>
          Hosting (S/ 456), Dominio (S/ 70), Internet (S/ 960), Mantenimiento (S/ 600).<br>
          <em class="text-slate-400">Este monto corresponde a operación posterior, no a la ejecución.</em>
        </div>
      </div>
      <div class="mt-3 bg-blue-50 text-blue-800 text-[10px] p-2 rounded">
        Una herramienta gratuita no implica costo de trabajo igual a cero. El esfuerzo de configuración, carga, mantenimiento y validación se incluye en la mano de obra.
      </div>
    </div>
  </section>

  <!-- Distribución por Sprint y Pilar -->
  <section class="shadow-card">
    <h3 class="section-title">Presupuesto Directo por Sprint</h3>
    <div class="overflow-x-auto custom-scrollbar mb-6">
      <table class="custom-table text-sm text-center">
        <thead>
          <tr>
            <th class="text-left">Sprint</th>
            <th class="text-right">Mano Obra</th>
            <th class="text-right">Usuarias</th>
            <th class="text-right">Implem.</th>
            <th class="text-right">Docs.</th>
            <th class="text-right">Asesorías</th>
            <th class="text-right">Tecnol.</th>
            <th class="text-right bg-slate-100 text-slate-800">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let s of sprintBudgets">
            <td class="font-bold text-left">{{ s.sprint }}</td>
            <td class="text-right">{{ s.labor | currency:'PEN':'symbol':'1.0-0' }}</td>
            <td class="text-right">{{ s.users | currency:'PEN':'symbol':'1.0-0' }}</td>
            <td class="text-right">{{ s.implementation | currency:'PEN':'symbol':'1.0-0' }}</td>
            <td class="text-right">{{ s.documents | currency:'PEN':'symbol':'1.0-0' }}</td>
            <td class="text-right">{{ s.consulting | currency:'PEN':'symbol':'1.0-0' }}</td>
            <td class="text-right">{{ s.technology | currency:'PEN':'symbol':'1.0-0' }}</td>
            <td class="text-right font-bold text-teal-700 bg-slate-50">{{ s.total | currency:'PEN':'symbol':'1.0-0' }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="bg-slate-100 font-bold text-slate-800">
            <td class="text-left">TOTAL</td>
            <td class="text-right">{{ 16188 | currency:'PEN':'symbol':'1.0-0' }}</td>
            <td class="text-right">{{ 660 | currency:'PEN':'symbol':'1.0-0' }}</td>
            <td class="text-right">{{ 1160 | currency:'PEN':'symbol':'1.0-0' }}</td>
            <td class="text-right">{{ 390 | currency:'PEN':'symbol':'1.0-0' }}</td>
            <td class="text-right">{{ 1620 | currency:'PEN':'symbol':'1.0-0' }}</td>
            <td class="text-right">{{ 926 | currency:'PEN':'symbol':'1.0-0' }}</td>
            <td class="text-right text-teal-900">{{ 20944 | currency:'PEN':'symbol':'1.0-0' }}</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <h3 class="section-title mt-8">Distribución por Pilar</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div class="space-y-4">
        <div *ngFor="let p of pilarDistribution" class="w-full">
          <div class="flex justify-between text-xs mb-1">
            <span class="font-bold text-slate-700">{{ p.name }}</span>
            <span class="text-slate-500 font-mono">{{ p.amount | currency:'PEN':'symbol':'1.0-0' }} ({{ p.percentage }}%)</span>
          </div>
          <div class="w-full bg-slate-200 rounded-full h-2">
            <div class="bg-teal-600 h-2 rounded-full" [style.width]="p.percentage + '%'"></div>
          </div>
        </div>
        <div class="flex justify-between text-sm font-bold text-slate-800 pt-2 border-t border-slate-200">
          <span>Total Directo</span>
          <span>{{ 20944 | currency:'PEN':'symbol':'1.0-0' }} (100%)</span>
        </div>
      </div>
      
      <div class="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
        <h4 class="font-bold text-slate-800 text-sm mb-3">Línea base distribuida en el tiempo</h4>
        <div class="overflow-x-auto custom-scrollbar">
          <table class="custom-table text-[11px] text-center">
            <thead>
              <tr>
                <th class="text-left">Mes (2026)</th>
                <th class="text-right">Directo</th>
                <th class="text-right">Indirecto (5%)</th>
                <th class="text-right">Conting. (10%)</th>
                <th class="text-right bg-slate-100">Acumulado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold text-left">Septiembre</td>
                <td class="text-right">S/ 6,352</td>
                <td class="text-right">S/ 318</td>
                <td class="text-right">S/ 667</td>
                <td class="text-right font-bold bg-slate-50">S/ 7,337</td>
              </tr>
              <tr>
                <td class="font-bold text-left">Octubre</td>
                <td class="text-right">S/ 6,804</td>
                <td class="text-right">S/ 340</td>
                <td class="text-right">S/ 714</td>
                <td class="text-right font-bold bg-slate-50">S/ 15,195</td>
              </tr>
              <tr>
                <td class="font-bold text-left">Noviembre</td>
                <td class="text-right">S/ 5,050</td>
                <td class="text-right">S/ 253</td>
                <td class="text-right">S/ 530</td>
                <td class="text-right font-bold bg-slate-50">S/ 21,028</td>
              </tr>
              <tr>
                <td class="font-bold text-left">Diciembre</td>
                <td class="text-right">S/ 2,738</td>
                <td class="text-right">S/ 136</td>
                <td class="text-right">S/ 288</td>
                <td class="text-right font-bold bg-teal-50 text-teal-800">S/ 24,190</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Curva S - Gráfico de línea base acumulada -->
  <section class="shadow-card">
    <h3 class="section-title">Curva S — Línea Base Acumulada de Costos</h3>
    <div class="custom-scrollbar overflow-x-auto flex justify-center">
      <div class="min-w-[600px] w-full max-w-4xl">
        <pre class="mermaid mermaid-scrollable">{{ diagramCurvaS }}</pre>
      </div>
    </div>
  </section>

  <!-- Construcción del Presupuesto Total -->
  <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div class="lg:col-span-2 shadow-card flex flex-col justify-between">
      <div>
        <h3 class="section-title">Resumen Presupuestario Principal</h3>
        <div class="overflow-x-auto mb-4">
          <table class="w-full text-sm">
            <tbody>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-2 font-medium text-slate-700">Costos directos</td>
                <td class="py-3 px-2 text-right font-mono">{{ budgetSummary.directCosts | currency:'PEN':'symbol':'1.0-0' }}</td>
              </tr>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-2 text-slate-600 text-xs">
                  <div class="font-medium text-slate-700 text-sm">Costos indirectos (5%)</div>
                  Energía, equipos, comunicaciones, adm, almacenamiento, coordinación.
                </td>
                <td class="py-3 px-2 text-right font-mono">{{ budgetSummary.indirectCosts | currency:'PEN':'symbol':'1.0-0' }}</td>
              </tr>
              <tr class="border-b-2 border-slate-200 bg-slate-50">
                <td class="py-3 px-2 font-bold text-slate-800">Estimación Base</td>
                <td class="py-3 px-2 text-right font-bold font-mono">{{ budgetSummary.baseEstimate | currency:'PEN':'symbol':'1.0-0' }}</td>
              </tr>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-2 text-slate-600 text-xs">
                  <div class="font-medium text-slate-700 text-sm">Reserva para contingencias (10%)</div>
                  Retrabajos, correcciones, fallas despliegue, capacitaciones, transporte adicional. Forma parte de la línea base.
                </td>
                <td class="py-3 px-2 text-right font-mono">{{ budgetSummary.contingency | currency:'PEN':'symbol':'1.0-0' }}</td>
              </tr>
              <tr class="border-b border-teal-200 bg-teal-50">
                <td class="py-4 px-2 font-black text-teal-900 text-lg uppercase tracking-wider">Línea Base de Costos</td>
                <td class="py-4 px-2 text-right font-black font-mono text-teal-800 text-xl">{{ budgetSummary.costBaseline | currency:'PEN':'symbol':'1.0-0' }}</td>
              </tr>
              <tr class="border-b border-slate-100">
                <td class="py-3 px-2 text-slate-600 text-xs">
                  <div class="font-medium text-slate-700 text-sm">Reserva de gestión (5%)</div>
                  Riesgos desconocidos, cambios de alcance. Su uso requiere aprobación formal. No forma parte de la línea base.
                </td>
                <td class="py-3 px-2 text-right font-mono">{{ budgetSummary.managementReserve | currency:'PEN':'symbol':'1.0-0' }}</td>
              </tr>
              <tr class="bg-slate-800 rounded-b-xl text-white">
                <td class="py-4 px-4 font-black text-lg uppercase tracking-wider rounded-bl-xl">Presupuesto Total Autorizado</td>
                <td class="py-4 px-4 text-right font-black font-mono text-xl text-indigo-300 rounded-br-xl">{{ budgetSummary.authorizedBudget | currency:'PEN':'symbol':'1.0-0' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <div class="shadow-card flex flex-col space-y-6">
      <div>
        <h3 class="font-black text-slate-800 mb-3 border-b border-slate-200 pb-2">Valor Económico vs Desembolso</h3>
        <p class="text-xs text-slate-600 mb-4">La diferencia corresponde principalmente al aporte valorizado de trabajo del equipo y de las usuarias.</p>
        
        <div class="bg-indigo-50 border border-indigo-200 p-4 rounded-xl mb-4 text-center">
          <div class="text-xs font-bold text-indigo-800 uppercase tracking-widest mb-1">Valor Económico Total</div>
          <div class="text-3xl font-black text-indigo-900">{{ 25400 | currency:'PEN':'symbol':'1.0-0' }}</div>
          <div class="text-[10px] text-indigo-700 mt-1">Incluye trabajo valorizado, usuarias, asesorías y reservas totales.</div>
        </div>
      </div>
      
      <div>
        <h4 class="font-bold text-sm text-slate-800 mb-2">Financiamiento Monetario</h4>
        <table class="w-full text-[11px] text-slate-700 border-collapse">
          <tbody>
            <tr class="border-b border-slate-100"><td class="py-1">Implementación</td><td class="text-right">S/ 1,160</td></tr>
            <tr class="border-b border-slate-100"><td class="py-1">Documentos</td><td class="text-right">S/ 390</td></tr>
            <tr class="border-b border-slate-100"><td class="py-1">Asesorías (real)</td><td class="text-right">S/ 1,620</td></tr>
            <tr class="border-b border-slate-100"><td class="py-1">Tecnología</td><td class="text-right">S/ 926</td></tr>
            <tr class="border-b border-slate-200 font-bold"><td class="py-1">Desembolso directo</td><td class="text-right">S/ 4,096</td></tr>
            <tr class="border-b border-slate-100"><td class="py-1 text-slate-500">Administración (5%)</td><td class="text-right text-slate-500">S/ 205</td></tr>
            <tr class="border-b border-slate-100"><td class="py-1 text-amber-700">Contingencia efectivo (10%)</td><td class="text-right text-amber-700">S/ 430</td></tr>
            <tr class="border-b border-slate-200"><td class="py-1 text-indigo-700">Reserva gestión efectivo (5%)</td><td class="text-right text-indigo-700">S/ 237</td></tr>
            <tr class="bg-teal-50 font-bold text-teal-900"><td class="py-2 px-2">Financiamiento recomendado</td><td class="text-right px-2 text-sm">S/ 4,968</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Control de Costos y EVM -->
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="shadow-card">
      <h3 class="section-title">Control Presupuestario</h3>
      <div class="space-y-4">
        <div>
          <h4 class="font-bold text-sm text-slate-800 mb-1">Frecuencia de control</h4>
          <ul class="text-xs text-slate-600 list-disc pl-5 column-count-2">
            <li>Semanal.</li>
            <li>Al cierre de cada sprint.</li>
            <li>Antes de utilizar reservas.</li>
            <li>En solicitud de cambios.</li>
            <li>Al cierre del proyecto.</li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-bold text-sm text-slate-800 mb-1">Umbrales de variación</h4>
          <table class="custom-table text-xs w-full">
            <thead>
              <tr><th>Variación</th><th>Acción Requerida</th></tr>
            </thead>
            <tbody>
              <tr><td class="font-medium text-green-700">Hasta 5 %</td><td>Seguimiento normal</td></tr>
              <tr><td class="font-medium text-amber-700">Más de 5 % hasta 10 %</td><td>Acción correctiva</td></tr>
              <tr><td class="font-medium text-red-700">Más de 10 %</td><td>Control formal de cambios</td></tr>
              <tr><td class="font-medium text-slate-700">Uso de contingencia</td><td>Autorización del responsable</td></tr>
              <tr><td class="font-medium text-slate-700">Uso de r. de gestión</td><td>Aprobación formal</td></tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4 class="font-bold text-sm text-slate-800 mb-1">Regla de reconocimiento</h4>
          <div class="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-700">
            Se utilizará la <strong>regla 0/100</strong>. Una actividad tendrá valor ganado únicamente cuando cumpla su criterio de aceptación (código, pruebas, actas, entregables desplegados).
          </div>
        </div>
      </div>
    </div>

    <div class="shadow-card">
      <h3 class="section-title">Gestión del Valor Ganado (EVM)</h3>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
        <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
          <div class="text-xs font-bold text-slate-500 mb-1">Planificado</div>
          <div class="font-black text-slate-800 text-lg">PV</div>
        </div>
        <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
          <div class="text-xs font-bold text-slate-500 mb-1">Ganado</div>
          <div class="font-black text-slate-800 text-lg">EV</div>
        </div>
        <div class="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
          <div class="text-xs font-bold text-slate-500 mb-1">Costo Real</div>
          <div class="font-black text-slate-800 text-lg">AC</div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div class="bg-white border border-slate-200 p-3 rounded-xl">
          <div class="text-xs font-bold text-slate-800 mb-1">Variación de Costo (CV)</div>
          <code class="text-teal-700 bg-teal-50 px-2 py-1 rounded block text-center font-bold">CV = EV - AC</code>
          <p class="text-[10px] text-slate-500 mt-2 text-center">CV positivo: ahorro. CV negativo: sobrecosto.</p>
        </div>
        <div class="bg-white border border-slate-200 p-3 rounded-xl">
          <div class="text-xs font-bold text-slate-800 mb-1">Índice Desempeño (CPI)</div>
          <code class="text-teal-700 bg-teal-50 px-2 py-1 rounded block text-center font-bold">CPI = EV / AC</code>
          <p class="text-[10px] text-slate-500 mt-2 text-center">CPI > 1: favorable. CPI < 1: desfavorable.</p>
        </div>
      </div>

      <div class="bg-teal-50 border border-teal-200 p-3 rounded-xl text-center">
        <div class="text-xs font-bold text-teal-800 mb-1">Estimación a la Conclusión (EAC)</div>
        <code class="text-teal-900 bg-teal-100/50 px-2 py-1 rounded inline-block font-bold mb-1">EAC = BAC / CPI</code>
        <div class="text-[10px] text-teal-700 mt-1">Presupuesto hasta la conclusión (BAC) = S/ 24,190</div>
        <div class="text-[9px] text-teal-600 mt-1 italic">La reserva de gestión no se incluye en el BAC.</div>
      </div>
    </div>
  </section>

  <!-- Riesgos y Control de Cambios -->
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div class="shadow-card">
      <h3 class="section-title">Riesgos Presupuestarios</h3>
      <div class="overflow-x-auto custom-scrollbar">
        <table class="custom-table text-[11px] w-full">
          <thead>
            <tr>
              <th>Riesgo</th>
              <th>Prob.</th>
              <th>Impacto</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="font-medium">Más horas de desarrollo</td>
              <td><span class="pill pill-low bg-amber-100 text-amber-800">Media</span></td>
              <td><span class="pill pill-high bg-red-100 text-red-800">Alto</span></td>
              <td>Contingencia</td>
            </tr>
            <tr>
              <td class="font-medium">Retrabajo de integración</td>
              <td><span class="pill pill-low bg-amber-100 text-amber-800">Media</span></td>
              <td><span class="pill pill-high bg-red-100 text-red-800">Alto</span></td>
              <td>Pruebas progresivas</td>
            </tr>
            <tr>
              <td class="font-medium">Fallas posteriores</td>
              <td><span class="pill pill-low bg-amber-100 text-amber-800">Media</span></td>
              <td><span class="pill pill-high bg-red-100 text-red-800">Alto</span></td>
              <td>Soporte y respaldo</td>
            </tr>
            <tr>
              <td class="font-medium">Observaciones tardías</td>
              <td><span class="pill pill-low bg-amber-100 text-amber-800">Media</span></td>
              <td><span class="pill pill-high bg-red-100 text-red-800">Alto</span></td>
              <td>Validación por sprint</td>
            </tr>
            <tr>
              <td class="font-medium">Variación de tipo de cambio</td>
              <td><span class="pill pill-low bg-amber-100 text-amber-800">Media</span></td>
              <td><span class="pill bg-amber-100 text-amber-800">Medio</span></td>
              <td>Margen tecnológico</td>
            </tr>
            <tr>
              <td class="font-medium">Cambio precio de hosting</td>
              <td><span class="pill pill-low bg-amber-100 text-amber-800">Media</span></td>
              <td><span class="pill bg-amber-100 text-amber-800">Medio</span></td>
              <td>Recotización</td>
            </tr>
            <tr>
              <td class="font-medium">Capacitaciones adicionales</td>
              <td><span class="pill pill-low bg-amber-100 text-amber-800">Media</span></td>
              <td><span class="pill bg-amber-100 text-amber-800">Medio</span></td>
              <td>Reserva</td>
            </tr>
            <tr>
              <td class="font-medium">Cambio de proveedor</td>
              <td><span class="pill pill-low bg-slate-100 text-slate-600">Baja</span></td>
              <td><span class="pill bg-amber-100 text-amber-800">Medio</span></td>
              <td>Reserva de gestión</td>
            </tr>
            <tr>
              <td class="font-medium">Reimpresión</td>
              <td><span class="pill pill-low bg-slate-100 text-slate-600">Baja</span></td>
              <td><span class="pill bg-slate-100 text-slate-600">Bajo</span></td>
              <td>Validación digital</td>
            </tr>
            <tr>
              <td class="font-medium">Transporte adicional</td>
              <td><span class="pill pill-low bg-amber-100 text-amber-800">Media</span></td>
              <td><span class="pill bg-slate-100 text-slate-600">Bajo</span></td>
              <td>Agrupar visitas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="shadow-card">
      <h3 class="section-title">Procedimiento de Control de Cambios</h3>
      <p class="text-[11px] text-slate-600 mb-4 bg-slate-50 p-2 border border-slate-200 rounded">
        <strong>Regla:</strong> La línea base no se modifica para ocultar desviaciones. Solo se actualiza cuando existe un cambio aprobado.
      </p>
      <div class="custom-scrollbar overflow-x-auto bg-slate-50 border border-slate-200 rounded-xl p-2 flex justify-center">
        <pre class="mermaid mermaid-scrollable">{{ diagramControlCambios }}</pre>
      </div>
    </div>
  </section>

  <!-- Resumen Ejecutivo Final -->
  <section class="shadow-card bg-gradient-to-br from-slate-800 to-slate-900 text-white border-0">
    <h3 class="text-xl font-black text-slate-200 border-b border-slate-700 pb-3 mb-6 flex items-center justify-between">
      <span>Conclusión Presupuestaria Final</span>
      <span class="text-xs bg-slate-700 px-3 py-1 rounded-full text-slate-300 font-medium">Estado: Planificado</span>
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
        <div class="text-xs text-slate-400 uppercase tracking-widest mb-1">Mano de Obra</div>
        <div class="text-2xl font-black text-teal-400 mb-1">S/ 16,848</div>
        <div class="text-[10px] text-slate-500">728h Equipo + 36h Usuarias</div>
      </div>
      
      <div class="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
        <div class="text-xs text-slate-400 uppercase tracking-widest mb-1">Costos Directos</div>
        <div class="text-2xl font-black text-teal-400 mb-1">S/ 20,944</div>
        <div class="text-[10px] text-slate-500">M.O., impl, docs, ases., tec.</div>
      </div>
      
      <div class="bg-teal-900/30 p-4 rounded-xl border border-teal-800">
        <div class="text-xs text-teal-300 font-bold uppercase tracking-widest mb-1">Línea Base</div>
        <div class="text-3xl font-black text-teal-400 mb-1">S/ 24,190</div>
        <div class="text-[10px] text-teal-500">Base S/ 21,991 + Contingencia S/ 2,199</div>
      </div>
      
      <div class="bg-indigo-900/30 p-4 rounded-xl border border-indigo-800 relative overflow-hidden">
        <div class="absolute right-0 top-0 w-12 h-12 bg-indigo-500/20 rounded-bl-full"></div>
        <div class="text-xs text-indigo-300 font-bold uppercase tracking-widest mb-1 relative z-10">Pto. Autorizado</div>
        <div class="text-3xl font-black text-indigo-400 mb-1 relative z-10">S/ 25,400</div>
        <div class="text-[10px] text-indigo-500 relative z-10">Línea Base + R. de Gestión S/ 1,210</div>
      </div>

    </div>
    
    <div class="mt-8 bg-slate-900/80 p-5 rounded-xl border-l-4 border-teal-500 text-sm text-slate-300 leading-relaxed shadow-inner">
      La línea base de costos de la Transformación Digital Integral de la Florería Adonai asciende a <strong>S/ 24,190</strong>. Al incorporar una reserva de gestión de S/ 1,210, el presupuesto total autorizado alcanza <strong>S/ 25,400</strong>. El financiamiento monetario recomendado es <strong>S/ 4,968</strong> y el monto restante corresponde principalmente al trabajo valorizado del equipo y las usuarias.
    </div>
  </section>

</div>
"""

ts_content = """import { Component, AfterViewInit, OnDestroy } from '@angular/core';
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
"""

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

with open(ts_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

# Update routing
routes_path = "src/app/app.routes.ts"
with open(routes_path, "r", encoding="utf-8") as f:
    routes_data = f.read()

import re

# Add import
if "LineaBaseCostosComponent" not in routes_data:
    routes_data = re.sub(
        r"import { LineaBaseCronogramaComponent } from './pages/linea-base-cronograma/linea-base-cronograma.component';",
        "import { LineaBaseCronogramaComponent } from './pages/linea-base-cronograma/linea-base-cronograma.component';\nimport { LineaBaseCostosComponent } from './pages/linea-base-costos/linea-base-costos';",
        routes_data
    )

# Add route
if "fase3/linea-base-costos" not in routes_data:
    routes_data = re.sub(
        r"{ path: 'fase3/linea-base-cronograma', component: LineaBaseCronogramaComponent },",
        "{ path: 'fase3/linea-base-cronograma', component: LineaBaseCronogramaComponent },\n  { path: 'fase3/linea-base-costos', component: LineaBaseCostosComponent },",
        routes_data
    )

with open(routes_path, "w", encoding="utf-8") as f:
    f.write(routes_data)

# Update menu
menu_path = "src/app/components/navbar/navbar.ts"
with open(menu_path, "r", encoding="utf-8") as f:
    menu_data = f.read()

# Replace desktop menu
desktop_menu = """<a routerLink="/fase3/linea-base-cronograma" routerLinkActive="text-teal-700 border-l-4 border-teal-600 bg-teal-50" (click)="closeMenu()" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Línea Base del Cronograma</a>"""
desktop_new = """<a routerLink="/fase3/linea-base-cronograma" routerLinkActive="text-teal-700 border-l-4 border-teal-600 bg-teal-50" (click)="closeMenu()" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Línea Base del Cronograma</a>
                <a routerLink="/fase3/linea-base-costos" routerLinkActive="text-teal-700 border-l-4 border-teal-600 bg-teal-50" (click)="closeMenu()" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Línea Base de los Costos del Proyecto</a>"""

if "fase3/linea-base-costos" not in menu_data:
    menu_data = menu_data.replace(desktop_menu, desktop_new)

# Replace mobile menu
mobile_menu = """<a (click)="closeMobileMenu()" routerLink="/fase3/linea-base-cronograma" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Línea Base del Cronograma</a>"""
mobile_new = """<a (click)="closeMobileMenu()" routerLink="/fase3/linea-base-cronograma" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Línea Base del Cronograma</a>
            <a (click)="closeMobileMenu()" routerLink="/fase3/linea-base-costos" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Línea Base de los Costos</a>"""

if "fase3/linea-base-costos" not in menu_data: # Just in case it wasn't replaced
    menu_data = menu_data.replace(mobile_menu, mobile_new)

with open(menu_path, "w", encoding="utf-8") as f:
    f.write(menu_data)
