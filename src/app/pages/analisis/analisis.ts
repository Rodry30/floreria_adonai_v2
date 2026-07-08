import { Component } from '@angular/core';

@Component({
  selector: 'app-analisis',
  standalone: true,
  template: `
    <div class="mb-10 flex items-center gap-4">
      <div class="p-4 bg-teal-100 rounded-2xl">
        <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
      </div>
      <div>
        <h1 class="text-4xl font-black text-teal-950 tracking-tight">Análisis de Stakeholders</h1>
        <p class="text-slate-500 mt-1 text-lg font-medium">Evaluación detallada de los interesados y sus expectativas.</p>
      </div>
    </div>

    <!-- AI Generated Image -->
    <div class="w-full bg-rose-950 rounded-3xl overflow-hidden shadow-2xl mb-12 flex flex-col md:flex-row group border border-rose-900">
      <div class="md:w-1/2 relative">
        <img src="/stakeholders_meeting.png" alt="Stakeholders Meeting" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
        <div class="absolute inset-0 bg-gradient-to-l from-rose-950 to-transparent w-24 right-0 hidden md:block"></div>
      </div>
      <div class="p-10 md:w-1/2 flex flex-col justify-center relative overflow-hidden">
        <div class="absolute -bottom-24 -right-24 w-48 h-48 bg-rose-800 rounded-full blur-3xl opacity-50"></div>
        <div class="relative z-10">
          <span class="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 text-teal-300 font-bold tracking-wider text-xs uppercase mb-4 rounded-full border border-teal-500/30">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            Colaboración Activa
          </span>
          <h3 class="text-3xl font-black text-white mb-4 tracking-tight">Interacción de Interesados</h3>
          <p class="text-rose-100/80 leading-relaxed text-lg">
            El éxito de la transformación digital recae en la comprensión profunda de las expectativas y la comunicación efectiva entre la propietaria, la vendedora, el equipo técnico y los clientes de la florería.
          </p>
        </div>
      </div>
    </div>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden" open>
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">3.1</span> Identificación de Interesados</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed overflow-x-auto">
        <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm whitespace-nowrap">
          <thead class="bg-teal-900 text-teal-50 text-sm tracking-wider uppercase">
            <tr><th class="p-4 font-bold">ID</th><th class="p-4 font-bold">Nombre / Grupo</th><th class="p-4 font-bold">Rol</th><th class="p-4 font-bold">Interés Principal</th><th class="p-4 font-bold">Influencia</th><th class="p-4 font-bold">Expectativas</th><th class="p-4 font-bold">Conocimiento TI</th></tr>
          </thead>
          <tbody class="text-sm">
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-01</td><td class="p-4 font-bold text-slate-800">Propietaria (Ana)</td><td class="p-4">Patrocinadora / Usuaria</td><td class="p-4">Mejorar rentabilidad y control</td><td class="p-4"><span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-bold text-xs">Muy Alta</span></td><td class="p-4">Reducir tiempo admin.; + ventas</td><td class="p-4">Básico</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-02</td><td class="p-4 font-bold text-slate-800">Vendedora (Maria)</td><td class="p-4">Usuaria operativa</td><td class="p-4">Facilitar su trabajo diario</td><td class="p-4"><span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold text-xs">Media</span></td><td class="p-4">Herramientas simples</td><td class="p-4">Muy básico</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-03</td><td class="p-4 font-bold text-slate-800">Analista TI</td><td class="p-4">Director del Proyecto</td><td class="p-4">Éxito del proyecto; aprendizaje</td><td class="p-4"><span class="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-bold text-xs">Alta</span></td><td class="p-4">Colaboración de propietaria</td><td class="p-4">Avanzado</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-04</td><td class="p-4 font-bold text-slate-800">Clientes actuales</td><td class="p-4">Beneficiarios directos</td><td class="p-4">Mejor servicio, catálogo, delivery</td><td class="p-4"><span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold text-xs">Media</span></td><td class="p-4">Facilidad de pedido, precios claros</td><td class="p-4">Variable</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-05</td><td class="p-4 font-bold text-slate-800">Clientes potenciales</td><td class="p-4">Beneficiarios futuros</td><td class="p-4">Conocer la florería y productos</td><td class="p-4"><span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold text-xs">Baja</span></td><td class="p-4">Presencia en redes con buena imagen</td><td class="p-4">Variable</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-06</td><td class="p-4 font-bold text-slate-800">Proveedor flores</td><td class="p-4">Proveedor clave</td><td class="p-4">Mantener pedidos y pagos</td><td class="p-4"><span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold text-xs">Media</span></td><td class="p-4">Órdenes organizadas y predictibles</td><td class="p-4">Bajo</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-07</td><td class="p-4 font-bold text-slate-800">Prov. peluches/globos</td><td class="p-4">Proveedor secundario</td><td class="p-4">Continuidad de relación comercial</td><td class="p-4"><span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold text-xs">Baja</span></td><td class="p-4">Pedidos regulares y fluidez</td><td class="p-4">Bajo</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-08</td><td class="p-4 font-bold text-slate-800">Proveedor internet</td><td class="p-4">Soporte técnico</td><td class="p-4">Fidelizar al cliente</td><td class="p-4"><span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold text-xs">Baja</span></td><td class="p-4">No aplica directamente</td><td class="p-4">Alto</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-09</td><td class="p-4 font-bold text-slate-800">Plataformas digitales</td><td class="p-4">Infraestructura digital</td><td class="p-4">Expansión del uso de herramientas</td><td class="p-4"><span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold text-xs">Baja</span></td><td class="p-4">No aplica directamente</td><td class="p-4">N/A</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-4 font-medium text-slate-500">S-10</td><td class="p-4 font-bold text-slate-800">Municipalidad local</td><td class="p-4">Ente regulador</td><td class="p-4">Cumplimiento normativo</td><td class="p-4"><span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold text-xs">Media</span></td><td class="p-4">No aplica directamente</td><td class="p-4">N/A</td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">3.2</span> Clasificación por Impacto</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed overflow-x-auto">
        <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm whitespace-nowrap">
          <thead class="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider">
            <tr><th class="p-4 border-b">Stakeholder</th><th class="p-4 border-b text-center">Poder</th><th class="p-4 border-b text-center">Interés</th><th class="p-4 border-b">Estrategia</th><th class="p-4 border-b">Prioridad</th></tr>
          </thead>
          <tbody class="text-sm">
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Propietaria (Ana)</td><td class="p-4 text-center font-black text-rose-600">5</td><td class="p-4 text-center font-black text-rose-600">5</td><td class="p-4"><span class="text-rose-600 font-bold">Gestionar de Cerca</span></td><td class="p-4"><span class="bg-rose-600 text-white px-2 py-1 rounded text-xs font-bold">CRÍTICA</span></td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Analista TI</td><td class="p-4 text-center font-black text-rose-500">4</td><td class="p-4 text-center font-black text-rose-600">5</td><td class="p-4"><span class="text-rose-600 font-bold">Gestionar de Cerca</span></td><td class="p-4"><span class="bg-rose-600 text-white px-2 py-1 rounded text-xs font-bold">CRÍTICA</span></td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Vendedora (Maria)</td><td class="p-4 text-center font-black text-amber-500">2</td><td class="p-4 text-center font-black text-blue-500">4</td><td class="p-4"><span class="text-blue-600 font-bold">Mantener Informados</span></td><td class="p-4"><span class="bg-amber-500 text-white px-2 py-1 rounded text-xs font-bold">ALTA</span></td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Clientes actuales</td><td class="p-4 text-center font-black text-amber-500">2</td><td class="p-4 text-center font-black text-blue-500">4</td><td class="p-4"><span class="text-blue-600 font-bold">Mantener Informados</span></td><td class="p-4"><span class="bg-amber-500 text-white px-2 py-1 rounded text-xs font-bold">ALTA</span></td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Proveedor de flores</td><td class="p-4 text-center font-black text-emerald-500">3</td><td class="p-4 text-center font-black text-amber-500">2</td><td class="p-4"><span class="text-emerald-600 font-bold">Mantener Satisfechos</span></td><td class="p-4"><span class="bg-emerald-500 text-white px-2 py-1 rounded text-xs font-bold">MEDIA</span></td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Clientes potenciales</td><td class="p-4 text-center font-black text-slate-400">1</td><td class="p-4 text-center font-black text-emerald-500">3</td><td class="p-4"><span class="text-blue-600 font-bold">Mantener Informados</span></td><td class="p-4"><span class="bg-emerald-500 text-white px-2 py-1 rounded text-xs font-bold">MEDIA</span></td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Prov. peluches/globos</td><td class="p-4 text-center font-black text-amber-500">2</td><td class="p-4 text-center font-black text-amber-500">2</td><td class="p-4"><span class="text-slate-500 font-bold">Monitorear</span></td><td class="p-4"><span class="bg-slate-400 text-white px-2 py-1 rounded text-xs font-bold">BAJA</span></td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Proveedor de internet</td><td class="p-4 text-center font-black text-slate-400">1</td><td class="p-4 text-center font-black text-slate-400">1</td><td class="p-4"><span class="text-slate-500 font-bold">Monitorear</span></td><td class="p-4"><span class="bg-slate-400 text-white px-2 py-1 rounded text-xs font-bold">BAJA</span></td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Plataformas digitales</td><td class="p-4 text-center font-black text-slate-400">1</td><td class="p-4 text-center font-black text-slate-400">1</td><td class="p-4"><span class="text-slate-500 font-bold">Monitorear</span></td><td class="p-4"><span class="bg-slate-400 text-white px-2 py-1 rounded text-xs font-bold">BAJA</span></td></tr>
            <tr class="hover:bg-slate-50"><td class="p-4 font-bold text-slate-800">Municipalidad</td><td class="p-4 text-center font-black text-emerald-500">3</td><td class="p-4 text-center font-black text-slate-400">1</td><td class="p-4"><span class="text-emerald-600 font-bold">Mantener Satisfechos</span></td><td class="p-4"><span class="bg-slate-400 text-white px-2 py-1 rounded text-xs font-bold">BAJA</span></td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">3.3</span> Evaluación de Influencia y Reacción</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed overflow-x-auto">
        <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm min-w-[800px]">
          <thead class="bg-slate-100 text-slate-700 text-sm uppercase tracking-wider">
            <tr><th class="p-4 border-b w-1/4">Stakeholder</th><th class="p-4 border-b w-1/4">Cómo puede influir</th><th class="p-4 border-b w-1/4">Reacción esperada</th><th class="p-4 border-b w-1/4">Estrategia recomendada</th></tr>
          </thead>
          <tbody class="text-sm">
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800 align-top">Propietaria (Ana)</td><td class="p-4 text-slate-500 align-top">Puede aprobar o rechazar herramientas; controla presupuesto y tiempo.</td><td class="p-4 font-medium text-emerald-600 align-top">Positiva si ve beneficios rápidos.</td><td class="p-4 font-medium text-teal-800 align-top">Iniciar con herramientas gratuitas y de impacto inmediato visible.</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800 align-top">Vendedora (Maria)</td><td class="p-4 text-slate-500 align-top">Puede facilitar o sabotear el uso diario del sistema.</td><td class="p-4 font-medium text-amber-600 align-top">Inicialmente resistente, luego adaptable.</td><td class="p-4 font-medium text-teal-800 align-top">Sesiones de capacitación práctica; demostrar utilidad.</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800 align-top">Clientes actuales</td><td class="p-4 text-slate-500 align-top">Si adoptan el catálogo generan ventas, si no, impacto será menor.</td><td class="p-4 font-medium text-emerald-600 align-top">Positiva: la mayoría ya usan WhatsApp/redes.</td><td class="p-4 font-medium text-teal-800 align-top">Lanzar catálogo atractivo; ofrecer descuentos.</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-4 font-bold text-slate-800 align-top">Proveedor de flores</td><td class="p-4 text-slate-500 align-top">Puede retrasar o acelerar el abastecimiento.</td><td class="p-4 font-medium text-emerald-600 align-top">Neutra a positiva si pedidos son organizados.</td><td class="p-4 font-medium text-teal-800 align-top">Comunicarle cambios con anticipación.</td></tr>
          </tbody>
        </table>
      </div>
    </details>
  `
})
export class AnalisisComponent {}
