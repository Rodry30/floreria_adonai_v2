import { Component } from '@angular/core';

@Component({
  selector: 'app-analisis-problemas',
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
    <div class="space-y-12">
      <!-- SECCIÓN 0 — Encabezado conceptual -->
      <section>
        <div class="mb-8 flex items-center gap-4">
          <div class="p-4 bg-teal-100 rounded-2xl">
            <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          </div>
          <div>
            <h2 class="text-3xl font-black text-teal-950 tracking-tight">Análisis del problema</h2>
          </div>
        </div>
        
        <p class="text-slate-600 leading-relaxed text-lg mb-6">
          Es un proceso de recopilación, organización y análisis de datos e información cuantitativa y cualitativa para establecer de manera clara, objetiva y concreta la situación negativa que origina o motiva la formulación del proyecto. Al formular un proyecto, es necesario identificar el problema que se desea analizar, así como sus causas y sus efectos. El análisis de problemas permite identificar los obstáculos importantes y prioritarios para los interesados o implicados.
        </p>

        <h3 class="text-xl font-bold text-teal-900 mb-4">¿Para qué se utiliza el análisis del problema?</h3>
        <ul class="list-none space-y-3">
          <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0"></div><span class="text-slate-600">Identificar el problema central o problema principal de la situación negativa.</span></li>
          <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0"></div><span class="text-slate-600">Describir la gravedad, magnitud y complejidad de la situación negativa.</span></li>
          <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0"></div><span class="text-slate-600">Explicar la relación causal de la situación negativa.</span></li>
          <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0"></div><span class="text-slate-600">Predecir los efectos de la situación negativa.</span></li>
          <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-teal-500 flex-shrink-0"></div><span class="text-slate-600">Visualizar las relaciones causa-efecto.</span></li>
        </ul>
      </section>

      <!-- SECCIÓN 1 — Paso a) -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg text-lg">a)</span> Recojo de información primaria y secundaria</h3>
        <p class="text-slate-600 leading-relaxed text-lg mb-6">
          En un primer momento se realiza un trabajo de gabinete con la finalidad de recoger información referente a la problemática. En un segundo momento se realiza un trabajo de campo en el propio ambiente de los involucrados.
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h4 class="font-bold text-teal-800 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Trabajo de gabinete (información secundaria)
            </h4>
            <ul class="space-y-3 text-sm text-slate-600">
              <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></div><span><strong>Análisis del cuaderno de registro de ventas:</strong> se identificaron entradas incompletas, sin cantidad ni categoría estandarizada.</span></li>
              <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></div><span><strong>Revisión de recibos de proveedores:</strong> permitió mapear categorías de productos y frecuencia de compra aproximada.</span></li>
              <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></div><span><strong>Análisis de conversaciones de WhatsApp</strong> (con autorización de la propietaria): reveló volumen real de consultas y tipos de pedidos más frecuentes.</span></li>
            </ul>
          </div>

          <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h4 class="font-bold text-teal-800 mb-4 flex items-center gap-2">
              <svg class="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              Trabajo de campo (información primaria)
            </h4>
            <ul class="space-y-3 text-sm text-slate-600">
              <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></div><span><strong>Entrevista inicial a la propietaria Karina Canchari:</strong> se identificaron los principales dolores operativos del negocio.</span></li>
              <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></div><span><strong>Observación directa en el local:</strong> se constató que el inventario se estima visualmente, los productos no tienen etiquetas de precio, y los mensajes de clientes se mezclan con comunicaciones personales en el mismo WhatsApp.</span></li>
              <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></div><span><strong>Lluvia de ideas con la propietaria y el analista TI:</strong> se listaron todos los problemas percibidos antes de priorizar el problema central.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECCIÓN 2 — Paso b) -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg text-lg">b)</span> Identificación del problema central</h3>
        <p class="text-slate-600 leading-relaxed text-lg mb-6">
          A partir de la lluvia de ideas se identificaron los siguientes problemas preliminares, que luego fueron filtrados aplicando criterios de prioridad, centralidad y alcance:
        </p>
        
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          <li class="bg-rose-50 text-rose-800 px-4 py-3 rounded-lg flex items-center gap-3"><svg class="w-5 h-5 flex-shrink-0 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> Pérdida de flores por compras desorganizadas.</li>
          <li class="bg-rose-50 text-rose-800 px-4 py-3 rounded-lg flex items-center gap-3"><svg class="w-5 h-5 flex-shrink-0 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> Clientes que no regresan por falta de seguimiento.</li>
          <li class="bg-rose-50 text-rose-800 px-4 py-3 rounded-lg flex items-center gap-3"><svg class="w-5 h-5 flex-shrink-0 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> Vendedora que no puede confirmar precios sin llamar a la propietaria.</li>
          <li class="bg-rose-50 text-rose-800 px-4 py-3 rounded-lg flex items-center gap-3"><svg class="w-5 h-5 flex-shrink-0 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> Sin registro histórico de ventas para tomar decisiones.</li>
          <li class="bg-rose-50 text-rose-800 px-4 py-3 rounded-lg flex items-center gap-3"><svg class="w-5 h-5 flex-shrink-0 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> Nula presencia en redes sociales frente a competidores locales.</li>
        </ul>
        
        <p class="text-slate-600 leading-relaxed text-lg mb-6">
          Todos estos problemas convergen en una causa raíz común: la gestión operativa y comercial de la Florería Adonai opera íntegramente de forma manual y sin herramientas digitales, lo que genera ineficiencias en todas las áreas del negocio.
        </p>

        <div class="bg-teal-900 rounded-3xl p-8 relative overflow-hidden shadow-xl border border-teal-800 text-center">
          <div class="absolute -right-10 -top-10 w-40 h-40 bg-teal-800 rounded-full blur-3xl opacity-50"></div>
          <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-teal-800 rounded-full blur-3xl opacity-50"></div>
          <h4 class="text-teal-200 font-bold uppercase tracking-widest text-sm mb-4 relative z-10">Problema Central</h4>
          <p class="text-2xl md:text-3xl font-black text-white leading-tight relative z-10">
            Gestión operativa y comercial ineficiente en la Florería Adonai debido al uso de procesos manuales y escasa digitalización.
          </p>
          <p class="text-teal-400/80 text-sm mt-6 italic relative z-10">
            * Se descartó formularlo como 'ausencia de sistema digital' porque eso describe la carencia, no la situación negativa que produce.
          </p>
        </div>
      </section>

      <!-- SECCIÓN 3 — Paso c) -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-6 flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg text-lg">c)</span> Identificación de las causas</h3>
        <div class="grid md:grid-cols-2 gap-8">
          <div>
            <h4 class="font-bold text-teal-800 mb-4 px-4 py-2 bg-slate-100 rounded-lg inline-block">Causas directas</h4>
            <ul class="space-y-4">
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></div><span class="text-slate-600"><strong>Control de inventario informal:</strong> sin conteo sistemático ni registro estandarizado de entradas y salidas.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></div><span class="text-slate-600"><strong>Registro de ventas manual e incompleto:</strong> uso de cuadernos sin formato, con datos faltantes que impiden análisis posteriores.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></div><span class="text-slate-600"><strong>Gestión desordenada de clientes:</strong> contactos dispersos en WhatsApp personal sin segmentación ni historial.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></div><span class="text-slate-600"><strong>Atención comercial poco organizada:</strong> la vendedora depende del conocimiento memorístico de la propietaria para operar.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-slate-400 flex-shrink-0"></div><span class="text-slate-600"><strong>Baja presencia digital:</strong> sin perfiles activos en redes sociales ni catálogo de productos accesible.</span></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-teal-800 mb-4 px-4 py-2 bg-slate-100 rounded-lg inline-block">Causas indirectas</h4>
            <ul class="space-y-4">
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-slate-300 flex-shrink-0"></div><span class="text-slate-600">Stock estimado visualmente sin metodología de conteo.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-slate-300 flex-shrink-0"></div><span class="text-slate-600">Cuadernos de registro sin formato ni categorías estándar.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-slate-300 flex-shrink-0"></div><span class="text-slate-600">Contactos de clientes dispersos sin datos de historial o preferencias.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-slate-300 flex-shrink-0"></div><span class="text-slate-600">Inexistencia de catálogo formal físico o digital.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-slate-300 flex-shrink-0"></div><span class="text-slate-600">Ausencia de publicaciones regulares de productos en redes sociales.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECCIÓN 4 — Paso d) -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg text-lg">d)</span> Identificación de los efectos</h3>
        <p class="text-slate-600 leading-relaxed text-lg mb-8">
          Los efectos se organizan en dos niveles: directos (corto plazo) e indirectos (mediano plazo), culminando en un efecto final que representa la consecuencia de mayor alcance.
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 class="font-bold text-rose-800 mb-4 px-4 py-2 bg-rose-50 rounded-lg inline-block">Efectos directos</h4>
            <ul class="space-y-4">
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-rose-400 flex-shrink-0"></div><span class="text-slate-600">Desabastecimiento o exceso de flores y materiales por compras no planificadas.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-rose-400 flex-shrink-0"></div><span class="text-slate-600">Atención lenta o poco uniforme cuando la propietaria no está presente.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-rose-400 flex-shrink-0"></div><span class="text-slate-600">Pérdida de información sobre ventas históricas que impide proyecciones.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-rose-400 flex-shrink-0"></div><span class="text-slate-600">Poca comunicación con clientes frecuentes por ausencia de base de datos.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-rose-400 flex-shrink-0"></div><span class="text-slate-600">Bajo alcance digital que limita el acceso a nuevos segmentos de mercado.</span></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-rose-800 mb-4 px-4 py-2 bg-rose-50 rounded-lg inline-block">Efectos indirectos</h4>
            <ul class="space-y-4">
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-rose-300 flex-shrink-0"></div><span class="text-slate-600">Pérdida de ventas potenciales o aumento de merma por flores que vencen sin venderse.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-rose-300 flex-shrink-0"></div><span class="text-slate-600">Menor satisfacción de clientes por tiempos de respuesta lentos o falta de disponibilidad.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-rose-300 flex-shrink-0"></div><span class="text-slate-600">Decisiones de compra y operación basadas solo en la memoria de la propietaria, sin datos.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-rose-300 flex-shrink-0"></div><span class="text-slate-600">Baja fidelización de clientes por ausencia de seguimiento postventa.</span></li>
              <li class="flex items-start gap-3"><div class="mt-1.5 w-2 h-2 rounded-full bg-rose-300 flex-shrink-0"></div><span class="text-slate-600">Menor competitividad frente a florerías que sí cuentan con presencia digital.</span></li>
            </ul>
          </div>
        </div>

        <div class="bg-rose-900 rounded-2xl p-8 relative shadow-lg text-center border border-rose-800">
          <h4 class="text-rose-200 font-bold uppercase tracking-widest text-sm mb-3">Efecto Final</h4>
          <p class="text-xl md:text-2xl font-black text-white leading-tight">
            Menor competitividad y sostenibilidad comercial de la Florería Adonai frente a negocios similares con mayor organización y presencia digital.
          </p>
        </div>
      </section>

      <!-- SECCIÓN 5 — Paso e) -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg text-lg">e)</span> Verificar los elementos del árbol de problemas</h3>
        <p class="text-slate-600 leading-relaxed text-lg mb-6">
          Se verificó la coherencia del árbol revisando las relaciones entre cada nivel:
        </p>
        
        <div class="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-6">
          <ul class="space-y-4">
            <li class="flex items-start gap-3"><svg class="w-6 h-6 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Cada causa indirecta explica y origina su causa directa correspondiente: el stock estimado visualmente genera un control de inventario informal; los cuadernos sin formato generan un registro de ventas incompleto; los contactos dispersos en WhatsApp generan una gestión desordenada de clientes.</span></li>
            <li class="flex items-start gap-3"><svg class="w-6 h-6 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Cada causa directa contribuye al problema central de forma independiente y verificable mediante observación directa o entrevista.</span></li>
            <li class="flex items-start gap-3"><svg class="w-6 h-6 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Cada efecto directo se deriva lógicamente del problema central y fue confirmado durante la visita al negocio o la entrevista con la propietaria.</span></li>
            <li class="flex items-start gap-3"><svg class="w-6 h-6 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">Cada efecto indirecto es consecuencia acumulada de uno o más efectos directos, y tiene sustento en la realidad observada del negocio.</span></li>
            <li class="flex items-start gap-3"><svg class="w-6 h-6 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span class="text-slate-600">El efecto final representa la consecuencia de mayor alcance y es consistente con todos los niveles anteriores del árbol.</span></li>
          </ul>
        </div>
        
        <p class="text-teal-800 font-medium bg-teal-50 px-6 py-4 rounded-xl border border-teal-100 italic">
          El esquema fue validado con la propietaria durante la sesión de trabajo, quien confirmó que los elementos identificados reflejan con precisión la situación actual del negocio.
        </p>
      </section>

      <!-- SECCIÓN 6 — Árbol de problemas -->
      <section class="border-t border-slate-100 pt-10">
        <div class="mb-8 flex items-center gap-4">
          <div class="p-4 bg-teal-100 rounded-2xl">
            <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21V10a2 2 0 012-2h6a2 2 0 012 2v11M3 21h18M12 3v5M9 8l3-5 3 5"></path></svg>
          </div>
          <div>
            <h2 class="text-3xl font-black text-teal-950 tracking-tight">Árbol de problemas</h2>
          </div>
        </div>
        
        <p class="text-slate-600 leading-relaxed text-lg mb-10">
          El análisis se presenta en forma gráfica a través del árbol de problemas, técnica participativa que organiza las relaciones causales. Los efectos se ubican en la parte superior y las causas en la parte inferior.
        </p>

        <!-- Árbol de problemas Renderizado (Responsive Wrapper) -->
        <div class="w-full overflow-x-auto pb-10 custom-scrollbar">
          <div class="flex flex-col items-center min-w-[1050px] py-4">
            
            <!-- Nivel 1: Efecto Final -->
            <div class="relative flex flex-col items-center">
              <div class="bg-rose-900 text-white p-4 rounded-xl shadow-md w-72 text-center z-10 border-2 border-rose-700 font-bold">
                <span class="block text-rose-300 text-[10px] uppercase mb-1">Efecto Final</span>
                Menor competitividad y sostenibilidad comercial de la Florería Adonai
              </div>
              <!-- Conector vertical hacia abajo -->
              <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
            </div>

            <!-- Nivel 2: Efectos Indirectos -->
            <div class="relative flex gap-4 mt-8 justify-center w-full max-w-[1000px]">
              <!-- Conector horizontal superior -->
              <div class="absolute -top-8 left-[10%] right-[10%] h-px bg-slate-400"></div>
              
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-rose-100 text-rose-900 p-3 rounded-lg shadow-sm border border-rose-300 h-full w-full flex items-center justify-center font-medium">Pérdida de ventas o aumento de merma</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-rose-100 text-rose-900 p-3 rounded-lg shadow-sm border border-rose-300 h-full w-full flex items-center justify-center font-medium">Menor satisfacción de clientes</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-rose-100 text-rose-900 p-3 rounded-lg shadow-sm border border-rose-300 h-full w-full flex items-center justify-center font-medium">Decisiones basadas solo en memoria</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-rose-100 text-rose-900 p-3 rounded-lg shadow-sm border border-rose-300 h-full w-full flex items-center justify-center font-medium">Baja fidelización</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-rose-100 text-rose-900 p-3 rounded-lg shadow-sm border border-rose-300 h-full w-full flex items-center justify-center font-medium">Menor competitividad frente a florerías digitales</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
            </div>

            <!-- Nivel 3: Efectos Directos -->
            <div class="relative flex gap-4 mt-8 justify-center w-full max-w-[1000px]">
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-rose-50 text-rose-800 p-3 rounded-lg shadow-sm border border-rose-200 h-full w-full flex items-center justify-center">Desabastecimiento o exceso de flores</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-rose-50 text-rose-800 p-3 rounded-lg shadow-sm border border-rose-200 h-full w-full flex items-center justify-center">Atención lenta o poco uniforme</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-rose-50 text-rose-800 p-3 rounded-lg shadow-sm border border-rose-200 h-full w-full flex items-center justify-center">Pérdida de información sobre ventas</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-rose-50 text-rose-800 p-3 rounded-lg shadow-sm border border-rose-200 h-full w-full flex items-center justify-center">Poca comunicación con clientes</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-rose-50 text-rose-800 p-3 rounded-lg shadow-sm border border-rose-200 h-full w-full flex items-center justify-center">Bajo alcance digital</div>
              </div>
            </div>

            <!-- Conector Efectos Directos -> Problema Central -->
            <div class="relative flex justify-center w-full mt-8 max-w-[1000px]">
              <div class="absolute -top-8 left-[10%] right-[10%] h-px bg-slate-400"></div>
              <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
            </div>

            <!-- Nivel 4: Problema Central -->
            <div class="relative flex flex-col items-center">
              <div class="bg-teal-900 text-white p-5 rounded-2xl shadow-lg w-[500px] text-center z-10 border-4 border-teal-600">
                <span class="block text-teal-300 text-[10px] uppercase font-bold tracking-wider mb-2">Problema Central</span>
                <span class="font-black text-lg leading-tight">Gestión operativa y comercial ineficiente en la Florería Adonai debido al uso de procesos manuales y escasa digitalización</span>
              </div>
              <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
            </div>

            <!-- Nivel 5: Causas Directas -->
            <div class="relative flex gap-4 mt-8 justify-center w-full max-w-[1000px]">
              <!-- Conector horizontal superior para repartir la línea central -->
              <div class="absolute -top-8 left-[10%] right-[10%] h-px bg-slate-400"></div>

              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-slate-200 text-slate-800 p-3 rounded-lg shadow-sm border border-slate-300 h-full w-full flex items-center justify-center font-medium">Control de inventario informal</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-slate-200 text-slate-800 p-3 rounded-lg shadow-sm border border-slate-300 h-full w-full flex items-center justify-center font-medium">Registro de ventas manual e incompleto</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-slate-200 text-slate-800 p-3 rounded-lg shadow-sm border border-slate-300 h-full w-full flex items-center justify-center font-medium">Gestión desordenada de clientes</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-slate-200 text-slate-800 p-3 rounded-lg shadow-sm border border-slate-300 h-full w-full flex items-center justify-center font-medium">Atención comercial poco organizada</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-slate-200 text-slate-800 p-3 rounded-lg shadow-sm border border-slate-300 h-full w-full flex items-center justify-center font-medium">Baja presencia digital</div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
            </div>

            <!-- Nivel 6: Causas Indirectas -->
            <div class="relative flex gap-4 mt-8 justify-center w-full max-w-[1000px]">
              <!-- Conexiones 1 a 1 hacia abajo, no requieren línea horizontal -->
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="bg-slate-50 text-slate-600 p-3 rounded-lg shadow-sm border border-slate-200 h-full w-full flex items-center justify-center">Stock estimado visualmente</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="bg-slate-50 text-slate-600 p-3 rounded-lg shadow-sm border border-slate-200 h-full w-full flex items-center justify-center">Cuadernos sin formato estándar</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="bg-slate-50 text-slate-600 p-3 rounded-lg shadow-sm border border-slate-200 h-full w-full flex items-center justify-center">Contactos dispersos en WhatsApp</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="bg-slate-50 text-slate-600 p-3 rounded-lg shadow-sm border border-slate-200 h-full w-full flex items-center justify-center">Sin catálogo formal</div>
              </div>
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="bg-slate-50 text-slate-600 p-3 rounded-lg shadow-sm border border-slate-200 h-full w-full flex items-center justify-center">Sin publicaciones en redes</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- SECCIÓN 7 — Conclusión del análisis -->
      <section class="border-t border-slate-100 pt-10">
        <div class="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 border border-teal-100 shadow-sm">
          <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3">
            <svg class="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            Conclusión del análisis del problema
          </h3>
          <p class="text-slate-600 leading-relaxed text-lg">
            El análisis evidencia que la Florería Adonai enfrenta una situación de ineficiencia operativa originada por la ausencia total de herramientas digitales en sus procesos. Las cinco causas directas identificadas se refuerzan mutuamente, generando un ciclo donde la falta de datos impide mejorar la gestión, y la gestión deficiente impide generar datos útiles. Sin intervención, el efecto final proyectado es la pérdida progresiva de competitividad frente a negocios similares que sí han adoptado herramientas digitales básicas.
          </p>
        </div>
      </section>
    </div>
  `
})
export class AnalisisProblemasComponent {}
