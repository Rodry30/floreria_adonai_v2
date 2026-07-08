import { Component } from '@angular/core';

@Component({
  selector: 'app-analisis-objetivos',
  standalone: true,
  styles: [`
    .custom-scrollbar::-webkit-scrollbar {
      height: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: #f1f5f9;
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #cbd5e1;
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #94a3b8;
    }
  `],
  template: `
    <div class="space-y-12 pb-12">
      <!-- SECCIÓN 0 — Encabezado conceptual -->
      <section>
        <div class="mb-8 flex items-center gap-4">
          <div class="p-4 bg-teal-100 rounded-2xl">
            <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div>
            <h2 class="text-3xl font-black text-teal-950 tracking-tight">Análisis de objetivos</h2>
          </div>
        </div>
        
        <p class="text-slate-600 leading-relaxed text-lg mb-6">
          Los objetivos son una imagen anticipada de la realidad que se espera construir y que resuelve las carencias, los déficits y las necesidades definidas en el diagnóstico. El objetivo permite establecer el contexto en el que el proyecto encaja y describir el impacto de lo que se espera contribuir a largo plazo.
        </p>

        <h3 class="text-xl font-bold text-teal-900 mb-4">¿Qué atributos principales debe contener un objetivo?</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm mb-6">
            <thead class="bg-teal-900 text-teal-50 text-sm uppercase tracking-wider">
              <tr>
                <th class="p-4 font-bold">Acción</th>
                <th class="p-4 font-bold">Medio</th>
                <th class="p-4 font-bold">Resultado</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <tr class="hover:bg-slate-50 border-b border-slate-100">
                <td class="p-4 text-slate-700 font-medium">Indica la acción específica utilizando un infinitivo verbal.</td>
                <td class="p-4 text-slate-700 font-medium">Indica la estrategia creativa e innovadora y las condiciones necesarias para su ejecución.</td>
                <td class="p-4 text-slate-700 font-medium">Hace referencia a competencias, capacidades, actitudes o desempeños en los beneficiarios.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECCIÓN 1 — Paso a) -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3"><span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-lg">a)</span> Identificación del objetivo general</h3>
        <p class="text-slate-600 leading-relaxed text-lg mb-6">
          El objetivo general se desprende estrictamente del problema central identificado en el diagnóstico. El problema central se convierte en objetivo general pasando de una situación negativa a una situación positiva esperada.
        </p>

        <div class="bg-teal-900 rounded-3xl p-8 relative overflow-hidden shadow-xl border border-teal-800 text-center mb-8">
          <div class="absolute -right-10 -top-10 w-40 h-40 bg-teal-800 rounded-full blur-3xl opacity-50"></div>
          <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-teal-800 rounded-full blur-3xl opacity-50"></div>
          <h4 class="text-teal-200 font-bold uppercase tracking-widest text-sm mb-4 relative z-10">Objetivo Central SMART</h4>
          <p class="text-2xl md:text-3xl font-black text-white leading-tight relative z-10">
            Mejorar la gestión operativa y comercial de la Florería Adonai mediante el diseño de herramientas digitales básicas, gratuitas o de bajo costo, en un periodo académico de 8 semanas, para ordenar el inventario, las ventas, los clientes y la atención comercial.
          </p>
        </div>

        <h4 class="text-xl font-bold text-teal-900 mb-4">Validación SMART</h4>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <thead class="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider">
              <tr>
                <th class="p-4 border-b">Criterio</th>
                <th class="p-4 border-b">Aplicación</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-emerald-700">Específico</td><td class="p-4 text-slate-700">Se enfoca en la gestión operativa y comercial de una florería local.</td></tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-emerald-700">Medible</td><td class="p-4 text-slate-700">Se puede verificar mediante plantillas, catálogo, registros y evidencias de campo.</td></tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-emerald-700">Alcanzable</td><td class="p-4 text-slate-700">Usa herramientas simples y gratuitas, adecuadas para estudiantes y microempresa.</td></tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-emerald-700">Relevante</td><td class="p-4 text-slate-700">Atiende problemas reales de inventario, ventas, clientes y atención.</td></tr>
              <tr class="hover:bg-slate-50"><td class="p-4 font-bold text-emerald-700">Temporal</td><td class="p-4 text-slate-700">Se plantea dentro de un periodo académico de 8 semanas.</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECCIÓN 2 — Paso b) -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3"><span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-lg">b)</span> Identificación de medios</h3>
        <p class="text-slate-600 leading-relaxed text-lg mb-6">
          Las causas del árbol de problemas se convierten en medios, pasando de una situación negativa a una situación positiva esperada.
        </p>

        <div class="overflow-x-auto mb-6">
          <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <thead class="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider">
              <tr>
                <th class="p-4 border-b w-1/2">Causa directa (situación negativa)</th>
                <th class="p-4 border-b w-1/2">Medio correspondiente (situación positiva)</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 text-rose-700 font-medium">Control de inventario informal</td><td class="p-4 font-bold text-emerald-700">Inventario digital básico por categorías</td></tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 text-rose-700 font-medium">Registro de ventas manual e incompleto</td><td class="p-4 font-bold text-emerald-700">Plantilla simple de ventas diarias</td></tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 text-rose-700 font-medium">Gestión desordenada de clientes</td><td class="p-4 font-bold text-emerald-700">Base básica de clientes frecuentes</td></tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 text-rose-700 font-medium">Atención comercial poco organizada</td><td class="p-4 font-bold text-emerald-700">WhatsApp Business y lista digital de precios</td></tr>
              <tr class="hover:bg-slate-50"><td class="p-4 text-rose-700 font-medium">Baja presencia digital</td><td class="p-4 font-bold text-emerald-700">Catálogo digital inicial con fotos reales</td></tr>
            </tbody>
          </table>
        </div>

        <p class="text-slate-600 leading-relaxed text-lg mb-4">
          Las causas indirectas se convierten en medios indirectos que sostienen a los anteriores:
        </p>
        <ul class="space-y-3">
          <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></div><span class="text-slate-700">Conteo periódico de productos</span></li>
          <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></div><span class="text-slate-700">Formato estándar de registro</span></li>
          <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></div><span class="text-slate-700">Organización de contactos de clientes</span></li>
          <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></div><span class="text-slate-700">Separación entre mensajes personales y comerciales</span></li>
          <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></div><span class="text-slate-700">Publicación ordenada de productos en canales digitales</span></li>
        </ul>
      </section>

      <!-- SECCIÓN 3 — Paso c) -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3"><span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-lg">c)</span> Identificación de fines</h3>
        <p class="text-slate-600 leading-relaxed text-lg mb-6">
          Los efectos del árbol de problemas se convierten en fines, que describen el impacto esperado una vez alcanzado el objetivo central.
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 class="font-bold text-emerald-800 mb-4 px-4 py-2 bg-emerald-50 rounded-lg inline-block">Fines directos</h4>
            <ul class="space-y-4">
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></div><span class="text-slate-600">Mejor planificación de compras y stock, reduciendo desabastecimiento y merma.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></div><span class="text-slate-600">Atención más rápida y clara, independiente de la presencia de la propietaria.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></div><span class="text-slate-600">Información básica disponible para la toma de decisiones operativas.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></div><span class="text-slate-600">Mayor seguimiento a clientes frecuentes mediante una base de datos organizada.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></div><span class="text-slate-600">Mayor alcance digital mediante un catálogo accesible y publicaciones básicas.</span></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-emerald-800 mb-4 px-4 py-2 bg-emerald-50 rounded-lg inline-block">Fines indirectos</h4>
            <ul class="space-y-4">
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-300 flex-shrink-0"></div><span class="text-slate-600">Menor pérdida de ventas y reducción de merma por mejor planificación.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-300 flex-shrink-0"></div><span class="text-slate-600">Mayor satisfacción de clientes por tiempos de respuesta más rápidos.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-300 flex-shrink-0"></div><span class="text-slate-600">Decisiones apoyadas en información básica y no solo en memoria.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-300 flex-shrink-0"></div><span class="text-slate-600">Mayor fidelización por seguimiento postventa estructurado.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-emerald-300 flex-shrink-0"></div><span class="text-slate-600">Mejor posición frente a florerías con presencia digital activa.</span></li>
            </ul>
          </div>
        </div>

        <div class="bg-emerald-900 rounded-2xl p-8 relative shadow-lg text-center border border-emerald-800">
          <h4 class="text-emerald-200 font-bold uppercase tracking-widest text-sm mb-3">Fin Final</h4>
          <p class="text-xl md:text-2xl font-black text-white leading-tight">
            Mayor competitividad y sostenibilidad comercial de la Florería Adonai.
          </p>
        </div>
      </section>

      <!-- SECCIÓN 4 — Paso d) -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3"><span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-lg">d)</span> Verificar los elementos del árbol de objetivos</h3>
        
        <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-6">
          <ul class="space-y-4">
            <li class="flex items-start gap-3"><svg class="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Cada medio indirecto sostiene y hace viable su medio directo: el conteo periódico hace posible el inventario digital; el formato estándar hace posible la plantilla de ventas; la organización de contactos hace posible la base de clientes.</span></li>
            <li class="flex items-start gap-3"><svg class="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Cada medio directo contribuye de forma independiente al objetivo central y es ejecutable con herramientas gratuitas disponibles para un equipo estudiantil.</span></li>
            <li class="flex items-start gap-3"><svg class="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Cada fin directo se deriva lógicamente del objetivo central y representa una mejora verificable mediante evidencias de campo.</span></li>
            <li class="flex items-start gap-3"><svg class="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Cada fin indirecto es consecuencia acumulada de uno o más fines directos y representa el impacto de mediano plazo.</span></li>
            <li class="flex items-start gap-3"><svg class="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">El árbol de objetivos es el espejo positivo exacto del árbol de problemas: cada elemento negativo tiene su contraparte positiva, garantizando que el proyecto ataca directamente las causas identificadas en el diagnóstico.</span></li>
          </ul>
        </div>
        
        <p class="text-teal-800 font-medium bg-teal-50 px-6 py-4 rounded-xl border border-teal-100 italic">
          El esquema fue validado con la propietaria, quien confirmó que los medios propuestos son factibles dentro de sus posibilidades operativas y de aprendizaje.
        </p>
      </section>

      <!-- SECCIÓN 5 — Árbol de objetivos -->
      <section class="border-t border-slate-100 pt-10">
        <div class="mb-8 flex items-center gap-4">
          <div class="p-4 bg-teal-100 rounded-2xl">
            <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21V10a2 2 0 012-2h6a2 2 0 012 2v11M3 21h18M12 3v5M9 8l3-5 3 5"></path></svg>
          </div>
          <div>
            <h2 class="text-3xl font-black text-teal-950 tracking-tight">Árbol de objetivos</h2>
          </div>
        </div>
        
        <p class="text-slate-600 leading-relaxed text-lg mb-10">
          El árbol de objetivos es la imagen positiva del árbol de problemas. Los efectos se convierten en fines (parte superior) y las causas en medios (parte inferior).
        </p>

        <!-- Árbol de objetivos Renderizado (Responsive Wrapper) -->
        <div class="w-full overflow-x-auto pb-10 custom-scrollbar">
          <div class="flex flex-col items-center min-w-[1050px] py-4">
            
            <!-- Nivel 1: Fin Final -->
            <div class="relative flex flex-col items-center">
              <div class="bg-emerald-900 text-white p-4 rounded-xl shadow-md w-72 text-center z-10 border-2 border-emerald-700 font-bold">
                <span class="block text-emerald-300 text-[10px] uppercase mb-1">Fin Final</span>
                Mayor competitividad y sostenibilidad comercial de la Florería Adonai
              </div>
              <!-- Conector vertical hacia abajo -->
              <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
            </div>

            <!-- Nivel 2: Fines Indirectos -->
            <div class="relative flex gap-4 mt-8 justify-center w-full max-w-[1000px]">
              <!-- Conector horizontal superior -->
              <div class="absolute -top-8 left-[10%] right-[10%] h-px bg-slate-400"></div>
              
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-emerald-100 text-emerald-900 p-3 rounded-lg shadow-sm border border-emerald-300 h-full w-full flex items-center justify-center font-medium">Menor pérdida de ventas y reducción de merma</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-emerald-100 text-emerald-900 p-3 rounded-lg shadow-sm border border-emerald-300 h-full w-full flex items-center justify-center font-medium">Mayor satisfacción de clientes</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-emerald-100 text-emerald-900 p-3 rounded-lg shadow-sm border border-emerald-300 h-full w-full flex items-center justify-center font-medium">Decisiones apoyadas en información básica</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-emerald-100 text-emerald-900 p-3 rounded-lg shadow-sm border border-emerald-300 h-full w-full flex items-center justify-center font-medium">Mayor fidelización</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-emerald-100 text-emerald-900 p-3 rounded-lg shadow-sm border border-emerald-300 h-full w-full flex items-center justify-center font-medium">Mejor posición frente a florerías digitales</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
            </div>

            <!-- Nivel 3: Fines Directos -->
            <div class="relative flex gap-4 mt-8 justify-center w-full max-w-[1000px]">
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-emerald-50 text-emerald-800 p-3 rounded-lg shadow-sm border border-emerald-200 h-full w-full flex items-center justify-center">Mejor planificación de compras y stock</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-emerald-50 text-emerald-800 p-3 rounded-lg shadow-sm border border-emerald-200 h-full w-full flex items-center justify-center">Atención más rápida y clara</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-emerald-50 text-emerald-800 p-3 rounded-lg shadow-sm border border-emerald-200 h-full w-full flex items-center justify-center">Información básica para decisiones</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-emerald-50 text-emerald-800 p-3 rounded-lg shadow-sm border border-emerald-200 h-full w-full flex items-center justify-center">Mayor seguimiento a clientes frecuentes</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-emerald-50 text-emerald-800 p-3 rounded-lg shadow-sm border border-emerald-200 h-full w-full flex items-center justify-center">Mayor alcance digital</div>
              </div>
            </div>

            <!-- Conector Fines Directos -> Objetivo Central -->
            <div class="relative flex justify-center w-full mt-8 max-w-[1000px]">
              <div class="absolute -top-8 left-[10%] right-[10%] h-px bg-slate-400"></div>
              <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
            </div>

            <!-- Nivel 4: Objetivo Central -->
            <div class="relative flex flex-col items-center">
              <div class="bg-teal-900 text-white p-5 rounded-2xl shadow-lg w-[500px] text-center z-10 border-4 border-teal-600">
                <span class="block text-teal-300 text-[10px] uppercase font-bold tracking-wider mb-2">Objetivo Central</span>
                <span class="font-black text-lg leading-tight">Mejorar la gestión operativa y comercial de la Florería Adonai mediante el diseño de herramientas digitales básicas, gratuitas o de bajo costo, en un periodo académico de 8 semanas</span>
              </div>
              <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
            </div>

            <!-- Nivel 5: Medios Directos -->
            <div class="relative flex gap-4 mt-8 justify-center w-full max-w-[1000px]">
              <!-- Conector horizontal superior para repartir la línea central -->
              <div class="absolute -top-8 left-[10%] right-[10%] h-px bg-slate-400"></div>

              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-slate-200 text-slate-800 p-3 rounded-lg shadow-sm border border-slate-300 h-full w-full flex items-center justify-center font-medium">Inventario digital básico por categorías</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-slate-200 text-slate-800 p-3 rounded-lg shadow-sm border border-slate-300 h-full w-full flex items-center justify-center font-medium">Plantilla simple de ventas diarias</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-slate-200 text-slate-800 p-3 rounded-lg shadow-sm border border-slate-300 h-full w-full flex items-center justify-center font-medium">Base básica de clientes frecuentes</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-slate-200 text-slate-800 p-3 rounded-lg shadow-sm border border-slate-300 h-full w-full flex items-center justify-center font-medium">WhatsApp Business y lista digital de precios</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-slate-200 text-slate-800 p-3 rounded-lg shadow-sm border border-slate-300 h-full w-full flex items-center justify-center font-medium">Catálogo digital inicial con fotos reales</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
            </div>

            <!-- Nivel 6: Medios Indirectos -->
            <div class="relative flex gap-4 mt-8 justify-center w-full max-w-[1000px]">
              <!-- Conexiones 1 a 1 hacia abajo, no requieren línea horizontal -->
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="bg-slate-50 text-slate-600 p-3 rounded-lg shadow-sm border border-slate-200 h-full w-full flex items-center justify-center">Conteo periódico de productos</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="bg-slate-50 text-slate-600 p-3 rounded-lg shadow-sm border border-slate-200 h-full w-full flex items-center justify-center">Formato estándar de registro</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="bg-slate-50 text-slate-600 p-3 rounded-lg shadow-sm border border-slate-200 h-full w-full flex items-center justify-center">Organización de contactos de clientes</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="bg-slate-50 text-slate-600 p-3 rounded-lg shadow-sm border border-slate-200 h-full w-full flex items-center justify-center">Separación mensajes personales y comerciales</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="bg-slate-50 text-slate-600 p-3 rounded-lg shadow-sm border border-slate-200 h-full w-full flex items-center justify-center">Publicación ordenada en canales digitales</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- SECCIÓN 6 — Tabla de conversión -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4">Conversión problema → objetivo</h3>
        <p class="text-slate-600 leading-relaxed text-lg mb-6">
          Cada situación negativa identificada en el diagnóstico se transforma en su contraparte positiva en el proyecto:
        </p>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <thead class="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider">
              <tr>
                <th class="p-4 border-b">Situación negativa</th>
                <th class="p-4 border-b">Situación positiva</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 text-rose-700 font-medium">Gestión operativa y comercial ineficiente</td><td class="p-4 text-emerald-700 font-bold">Gestión operativa y comercial mejorada</td></tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 text-rose-700 font-medium">Inventario informal</td><td class="p-4 text-emerald-700 font-bold">Inventario digital básico</td></tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 text-rose-700 font-medium">Ventas registradas manualmente y sin formato</td><td class="p-4 text-emerald-700 font-bold">Plantilla de ventas con campos mínimos</td></tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 text-rose-700 font-medium">Clientes desordenados o dispersos</td><td class="p-4 text-emerald-700 font-bold">Base básica de clientes frecuentes</td></tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 text-rose-700 font-medium">WhatsApp personal mezclado con pedidos</td><td class="p-4 text-emerald-700 font-bold">Canal comercial separado mediante WhatsApp Business</td></tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 text-rose-700 font-medium">Baja presencia digital</td><td class="p-4 text-emerald-700 font-bold">Catálogo digital inicial y publicaciones básicas</td></tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 text-rose-700 font-medium">Atención lenta o dependiente de la propietaria</td><td class="p-4 text-emerald-700 font-bold">Información de precios y productos más accesible</td></tr>
              <tr class="hover:bg-slate-50"><td class="p-4 text-rose-700 font-medium">Menor competitividad</td><td class="p-4 text-emerald-700 font-bold">Mayor orden y presencia comercial</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECCIÓN 7 — Objetivos específicos SMART -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4">Objetivos específicos SMART</h3>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <thead class="bg-teal-900 text-teal-50 text-sm uppercase tracking-wider">
              <tr>
                <th class="p-4 font-bold w-20">ID</th>
                <th class="p-4 font-bold">Objetivo específico</th>
                <th class="p-4 font-bold">Indicador</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <tr class="hover:bg-slate-50 border-b border-slate-100">
                <td class="p-4 font-bold text-teal-700">OE-01</td>
                <td class="p-4 text-slate-700 font-medium">Diseñar una plantilla de inventario en Google Sheets para registrar flores y productos complementarios.</td>
                <td class="p-4 text-slate-700">Plantilla con al menos 4 categorías de productos.</td>
              </tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100">
                <td class="p-4 font-bold text-teal-700">OE-02</td>
                <td class="p-4 text-slate-700 font-medium">Diseñar una plantilla de ventas diarias con campos mínimos.</td>
                <td class="p-4 text-slate-700">Campos: fecha, producto, cantidad, precio y canal de venta.</td>
              </tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100">
                <td class="p-4 font-bold text-teal-700">OE-03</td>
                <td class="p-4 text-slate-700 font-medium">Diseñar una base inicial de clientes frecuentes.</td>
                <td class="p-4 text-slate-700">Estructura con nombre, teléfono, preferencia e historial básico.</td>
              </tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100">
                <td class="p-4 font-bold text-teal-700">OE-04</td>
                <td class="p-4 text-slate-700 font-medium">Proponer el uso de WhatsApp Business para separar pedidos del WhatsApp personal.</td>
                <td class="p-4 text-slate-700">Perfil comercial y respuestas rápidas definidas.</td>
              </tr>
              <tr class="hover:bg-slate-50 border-b border-slate-100">
                <td class="p-4 font-bold text-teal-700">OE-05</td>
                <td class="p-4 text-slate-700 font-medium">Diseñar un catálogo digital inicial con productos reales.</td>
                <td class="p-4 text-slate-700">Catálogo con al menos 10 productos, foto y precio referencial.</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold text-teal-700">OE-06</td>
                <td class="p-4 text-slate-700 font-medium">Plantear una capacitación breve para propietaria y vendedora.</td>
                <td class="p-4 text-slate-700">Guía práctica o sesión documentada con evidencia.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `
})
export class AnalisisObjetivosComponent {}

