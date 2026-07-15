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
        <div class="mt-1 text-[10px] text-teal-300 italic">25–27 Nov: Contingencia</div>
      </div>
      <div class="bg-amber-100 border border-amber-300 p-4 rounded-2xl">
        <div class="text-xs font-bold uppercase tracking-wide text-amber-700 mb-1">1–15 Dic 2026</div>
        <div class="font-black text-sm text-amber-900 mb-1">Sprint 4</div>
        <p class="text-[11px] text-amber-800">Analítica, sostenibilidad, integración y cierre</p>
        <div class="mt-2 text-[10px] bg-amber-200 px-2 py-1 rounded text-amber-900">🕐 Pendiente de detalle</div>
      </div>
    </div>
    <p class="text-[11px] text-slate-500 mt-3">
      Las fechas detalladas del Sprint 4 serán incorporadas cuando se complete su planificación.
    </p>"""

content = re.sub(
    r"<!-- Calendario visual -->.*?Las fechas detalladas de los Sprints 2, 3 y 4 serán incorporadas cuando se complete su planificación.\n    </p>",
    new_calendar_html,
    content,
    flags=re.DOTALL
)

with open(html_path, "w", encoding="utf-8") as f:
    f.write(content)
