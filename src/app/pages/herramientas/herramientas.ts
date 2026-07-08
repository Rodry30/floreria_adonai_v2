import { Component } from '@angular/core';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  template: `
    <div class="mb-10 flex items-center gap-4">
      <div class="p-4 bg-teal-100 rounded-2xl">
        <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
      </div>
      <div>
        <h1 class="text-4xl font-black text-teal-950 tracking-tight">Herramientas y Técnicas</h1>
        <p class="text-slate-500 mt-1 text-lg font-medium">Metodología PMBOK empleada en la fase de identificación.</p>
      </div>
    </div>

    <!-- AI Generated Mockup for Tech Tools -->
    <div class="w-full bg-teal-950 rounded-3xl overflow-hidden shadow-2xl mb-12 flex flex-col md:flex-row group border border-teal-800">
      <div class="p-10 md:w-1/2 flex flex-col justify-center relative overflow-hidden">
        <div class="absolute -top-24 -left-24 w-48 h-48 bg-teal-800 rounded-full blur-3xl opacity-50"></div>
        <div class="relative z-10">
          <span class="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/20 text-rose-300 font-bold tracking-wider text-xs uppercase mb-4 rounded-full border border-rose-500/30">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path></svg>
            Visión Tecnológica
          </span>
          <h3 class="text-3xl font-black text-white mb-4 tracking-tight">Prototipo de Sistema Digital</h3>
          <p class="text-teal-100/80 leading-relaxed text-lg">
            Para abordar los problemas de inventario y gestión de ventas de la florería, se evaluaron soluciones tecnológicas visuales y precisas para optimizar los recursos.
          </p>
        </div>
      </div>
      <div class="md:w-1/2 bg-slate-900 relative">
        <img src="/dashboard_mockup.png" alt="Dashboard Mockup" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
        <div class="absolute inset-0 bg-gradient-to-r from-teal-950 to-transparent w-24"></div>
      </div>
    </div>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden" open>
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">2.2</span> Entrevistas</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed text-lg">
        <p class="mb-6">Las entrevistas realizadas tuvieron un carácter exploratorio e improvisado, característico de la fase inicial de levantamiento de información en microempresas.</p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ul class="lg:col-span-1 list-none space-y-3 bg-slate-50 p-6 rounded-xl border border-slate-100 h-max">
            <li class="flex items-center gap-3"><svg class="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <strong>Tipo:</strong> No estructurada</li>
            <li class="flex items-center gap-3"><svg class="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <strong>Duración:</strong> 45 minutos</li>
            <li class="flex items-center gap-3"><svg class="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg> <strong>Entrevistada:</strong> Propietaria (Ana)</li>
            <li class="flex items-center gap-3"><svg class="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <strong>Lugar:</strong> Local comercial</li>
          </ul>
          
          <div class="lg:col-span-2 overflow-x-auto">
            <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
              <thead class="bg-teal-900 text-teal-50 text-sm tracking-wider uppercase">
                <tr><th class="p-4 font-bold text-center w-12">N.°</th><th class="p-4 font-bold">Pregunta Mejorada</th><th class="p-4 font-bold">Objetivo de la Pregunta</th></tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-b border-slate-100 hover:bg-slate-50"><td class="p-4 text-center font-bold text-slate-400">1</td><td class="p-4 font-bold text-slate-800">¿Cuántas unidades de cada producto vende por semana y cómo varía en fechas festivas?</td><td class="p-4 text-slate-500">Cuantificar estacionalidad y volúmenes para el inventario.</td></tr>
                <tr class="border-b border-slate-100 hover:bg-slate-50"><td class="p-4 text-center font-bold text-slate-400">2</td><td class="p-4 font-bold text-slate-800">¿Cuántos clientes habituales identifica actualmente y cómo los contacta?</td><td class="p-4 text-slate-500">Evaluar el estado actual de la relación con clientes (CRM).</td></tr>
                <tr class="border-b border-slate-100 hover:bg-slate-50"><td class="p-4 text-center font-bold text-slate-400">3</td><td class="p-4 font-bold text-slate-800">¿Qué tan cómoda se siente usando apps en su celular y cuáles usa más?</td><td class="p-4 text-slate-500">Determinar nivel de alfabetización digital.</td></tr>
                <tr class="border-b border-slate-100 hover:bg-slate-50"><td class="p-4 text-center font-bold text-slate-400">4</td><td class="p-4 font-bold text-slate-800">¿Con cuántos proveedores trabaja y con qué frecuencia realiza pedidos?</td><td class="p-4 text-slate-500">Mapear la cadena de abastecimiento para compras.</td></tr>
                <tr class="border-b border-slate-100 hover:bg-slate-50"><td class="p-4 text-center font-bold text-slate-400">5</td><td class="p-4 font-bold text-slate-800">¿Ha perdido clientes por no tener stock o no poder comunicarse a tiempo?</td><td class="p-4 text-slate-500">Evidenciar impacto económico de la falta de gestión.</td></tr>
                <tr class="border-b border-slate-100 hover:bg-slate-50"><td class="p-4 text-center font-bold text-slate-400">6</td><td class="p-4 font-bold text-slate-800">¿Cuánto tiempo diario dedica a tareas administrativas como inventario?</td><td class="p-4 text-slate-500">Medir la carga operativa actual.</td></tr>
                <tr class="hover:bg-slate-50"><td class="p-4 text-center font-bold text-slate-400">7</td><td class="p-4 font-bold text-slate-800">Si tuviera una app que le avisara cuando el stock está por agotarse, ¿la usaría?</td><td class="p-4 text-slate-500">Identificar disposición al cambio tecnológico.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </details>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">2.3</span> Observación Directa</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed text-lg">
        <p class="mb-4">La observación directa consiste en presenciar el funcionamiento real del negocio para identificar problemas que los interesados no mencionan explícitamente.</p>
        <ul class="list-disc pl-6 space-y-2 marker:text-rose-400">
          <li>El cuaderno de registro de ventas mostraba entradas incompletas: algunas con precio, otras sin cantidad.</li>
          <li>El inventario físico era estimado visualmente por la propietaria sin un conteo sistemático.</li>
          <li>Los mensajes de WhatsApp mezclaban consultas de clientes con comunicaciones personales.</li>
          <li>La vendedora debía consultar a la propietaria por teléfono para confirmar precios.</li>
        </ul>
      </div>
    </details>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">2.4</span> Tormenta de Ideas (Brainstorming)</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed text-lg">
        <div class="mb-6">
          <strong class="text-teal-800 flex items-center gap-2 mb-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> INTERESADOS IDENTIFICADOS:</strong> 
          <p class="bg-slate-50 p-4 rounded-xl border border-slate-100">Propietaria, vendedora, clientes actuales, clientes potenciales, proveedores de flores, proveedores de materiales, proveedor de globos, proveedores de peluches, proveedor de internet, plataformas digitales (Meta, Google), competencia local, municipalidad, familiares.</p>
        </div>
        <div>
          <strong class="text-teal-800 flex items-center gap-2 mb-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> SOLUCIONES PROPUESTAS:</strong> 
          <p class="bg-teal-50 p-4 rounded-xl border border-teal-100 text-teal-900">Google Sheets para inventario; WhatsApp Business para atención al cliente; Instagram/Facebook para catálogo; Google Forms para registro de clientes; Canva para diseño; Trello para gestión de tareas; Google Calendar para programar campañas; QR codes.</p>
        </div>
      </div>
    </details>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">2.6</span> Análisis de Datos</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed text-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 class="font-black text-teal-900 mb-4 flex items-center gap-2"><div class="w-2 h-6 bg-rose-400 rounded-full"></div> 2.6.1 Análisis de Interesados</h4>
          <ul class="space-y-3">
            <li class="bg-white border border-slate-200 shadow-sm p-4 rounded-xl"><strong class="text-teal-700 block mb-1">GRUPO A (Alta influencia):</strong> Propietaria y Analista TI. Su alineación es crítica.</li>
            <li class="bg-white border border-slate-200 shadow-sm p-4 rounded-xl"><strong class="text-teal-700 block mb-1">GRUPO B (Influencia media):</strong> Vendedora. Su adopción determinará el éxito operativo.</li>
            <li class="bg-white border border-slate-200 shadow-sm p-4 rounded-xl"><strong class="text-teal-700 block mb-1">GRUPO C (Externos):</strong> Clientes, proveedores y plataformas. Determinan el impacto.</li>
          </ul>
        </div>
        <div>
          <h4 class="font-black text-teal-900 mb-4 flex items-center gap-2"><div class="w-2 h-6 bg-teal-400 rounded-full"></div> 2.6.2 Análisis de Documentos</h4>
          <ul class="list-disc pl-6 space-y-3 marker:text-teal-500">
            <li><strong>Cuaderno de registro:</strong> reveló inconsistencias y falta de datos.</li>
            <li><strong>Conversaciones de WhatsApp:</strong> mostraron volumen real de consultas.</li>
            <li><strong>Recibos de proveedores:</strong> permitieron mapear los principales proveedores.</li>
          </ul>
        </div>
      </div>
    </details>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">2.7</span> Matriz Poder – Interés</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-rose-50 to-white border border-rose-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-black text-rose-900 mb-4 flex items-center justify-between">
              <span>ALTO PODER / ALTO INTERÉS</span>
              <span class="bg-rose-600 text-white text-xs px-2 py-1 rounded-md tracking-wider">Gestionar de Cerca</span>
            </h4>
            <ul class="list-disc pl-5 text-rose-900 font-medium marker:text-rose-400"><li>Propietaria (Ana)</li><li>Analista TI</li></ul>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-white border border-blue-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-black text-blue-900 mb-4 flex items-center justify-between">
              <span>BAJO PODER / ALTO INTERÉS</span>
              <span class="bg-blue-600 text-white text-xs px-2 py-1 rounded-md tracking-wider">Mantener Informados</span>
            </h4>
            <ul class="list-disc pl-5 text-blue-900 font-medium marker:text-blue-400"><li>Clientes actuales</li><li>Vendedora (Maria)</li></ul>
          </div>
          <div class="bg-gradient-to-br from-amber-50 to-white border border-amber-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-black text-amber-900 mb-4 flex items-center justify-between">
              <span>ALTO PODER / BAJO INTERÉS</span>
              <span class="bg-amber-600 text-white text-xs px-2 py-1 rounded-md tracking-wider">Mantener Satisfechos</span>
            </h4>
            <ul class="list-disc pl-5 text-amber-900 font-medium marker:text-amber-400"><li>Proveedor de flores</li><li>Proveedor de peluches/globos</li></ul>
          </div>
          <div class="bg-gradient-to-br from-slate-50 to-white border border-slate-300 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-black text-slate-800 mb-4 flex items-center justify-between">
              <span>BAJO PODER / BAJO INTERÉS</span>
              <span class="bg-slate-600 text-white text-xs px-2 py-1 rounded-md tracking-wider">Monitorear</span>
            </h4>
            <ul class="list-disc pl-5 text-slate-700 font-medium marker:text-slate-400"><li>Proveedor de internet</li><li>Plataformas digitales</li></ul>
          </div>
        </div>
      </div>
    </details>
  `
})
export class HerramientasComponent {}
