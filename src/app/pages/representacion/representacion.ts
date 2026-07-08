import { Component } from '@angular/core';

@Component({
  selector: 'app-representacion',
  standalone: true,
  template: `
    <div class="mb-10 flex items-center gap-4">
      <div class="p-4 bg-teal-100 rounded-2xl">
        <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
      </div>
      <div>
        <h1 class="text-4xl font-black text-teal-950 tracking-tight">Representación de Datos Avanzada</h1>
        <p class="text-slate-500 mt-1 text-lg font-medium">Modelos analíticos de Prominencia y Multidimensional.</p>
      </div>
    </div>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden" open>
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">4.1</span> Modelo de Prominencia</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed overflow-x-auto">
        <p class="mb-6 text-lg text-slate-500">Clasifica a los interesados según Poder, Legitimidad y Urgencia.</p>
        <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm whitespace-nowrap">
          <thead class="bg-teal-900 text-teal-50 text-sm tracking-wider uppercase">
            <tr><th class="p-4 font-bold">Stakeholder</th><th class="p-4 font-bold text-center">Poder</th><th class="p-4 font-bold text-center">Legitimidad</th><th class="p-4 font-bold text-center">Urgencia</th><th class="p-4 font-bold">Tipo</th><th class="p-4 font-bold">Descripción Aplicada</th></tr>
          </thead>
          <tbody class="text-sm">
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-slate-800">Propietaria (Ana)</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4"><span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-bold text-xs">DEFINITIVO</span></td><td class="p-4">Interesada con los 3 atributos; máxima prioridad</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-slate-800">Analista TI</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4"><span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-bold text-xs">DEFINITIVO</span></td><td class="p-4">Rol legítimo, urgente y con poder</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-slate-800">Vendedora (Maria)</td><td class="p-4 text-rose-600 font-bold text-center">NO</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4"><span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold text-xs">DEPENDIENTE</span></td><td class="p-4">Demandas urgentes y legítimas sin poder real</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-slate-800">Clientes actuales</td><td class="p-4 text-rose-600 font-bold text-center">NO</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4"><span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold text-xs">DEPENDIENTE</span></td><td class="p-4">Necesidades válidas y urgentes, aunque no deciden</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-slate-800">Proveedor de flores</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4 text-rose-600 font-bold text-center">NO</td><td class="p-4"><span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold text-xs">DOMINANTE</span></td><td class="p-4">Poder e influencia pero demandas no urgentes</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-slate-800">Municipalidad</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4 text-rose-600 font-bold text-center">NO</td><td class="p-4"><span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold text-xs">DOMINANTE</span></td><td class="p-4">Autoridad regulatoria legítima</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-bold text-slate-800">Clientes potenciales</td><td class="p-4 text-rose-600 font-bold text-center">NO</td><td class="p-4 text-rose-600 font-bold text-center">NO</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4"><span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-bold text-xs">URGENTE</span></td><td class="p-4">Solo atributo de urgencia (oportunidad de mercado)</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-4 font-bold text-slate-800">Proveedor de internet</td><td class="p-4 text-rose-600 font-bold text-center">NO</td><td class="p-4 text-emerald-600 font-bold text-center">SI</td><td class="p-4 text-rose-600 font-bold text-center">NO</td><td class="p-4"><span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold text-xs">DISCRECIONAL</span></td><td class="p-4">Solo legitimidad; sin poder ni urgencia</td></tr>
          </tbody>
        </table>
      </div>
    </details>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden">
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">4.2</span> Clasificación de Stakeholders (Modelo Multidimensional)</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed overflow-x-auto">
        <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm whitespace-nowrap">
          <thead class="bg-slate-100 text-slate-700 text-sm tracking-wider uppercase">
            <tr><th class="p-4 border-b">Stakeholder</th><th class="p-4 border-b">Int/Ext</th><th class="p-4 border-b">Activo/Pasivo</th><th class="p-4 border-b">Apoyo/Neutro</th><th class="p-4 border-b text-center">Conoce el Proyecto</th><th class="p-4 border-b">Impacto</th><th class="p-4 border-b">Clasificación Final</th></tr>
          </thead>
          <tbody class="text-sm">
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Propietaria (Ana)</td><td class="p-4">Interno</td><td class="p-4 font-medium text-emerald-600">Activo</td><td class="p-4 font-bold text-emerald-600">Apoyo</td><td class="p-4 text-center font-bold text-emerald-600">Si</td><td class="p-4 font-bold text-rose-600">Crítico</td><td class="p-4 font-black text-rose-600">Aliado Clave</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Analista TI</td><td class="p-4">Interno</td><td class="p-4 font-medium text-emerald-600">Activo</td><td class="p-4 font-bold text-emerald-600">Apoyo</td><td class="p-4 text-center font-bold text-emerald-600">Si</td><td class="p-4 font-bold text-rose-600">Crítico</td><td class="p-4 font-black text-rose-600">Aliado Clave</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Vendedora (Maria)</td><td class="p-4">Interno</td><td class="p-4 font-medium text-slate-500">Pasivo</td><td class="p-4 font-bold text-rose-500">Neutro-Resistente</td><td class="p-4 text-center font-bold text-amber-500">Parcial</td><td class="p-4 font-bold text-amber-600">Alto</td><td class="p-4 font-black text-amber-600">Por Convertir</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Clientes actuales</td><td class="p-4">Externo</td><td class="p-4 font-medium text-emerald-600">Activo</td><td class="p-4 font-bold text-emerald-600">Apoyo</td><td class="p-4 text-center font-bold text-rose-500">No</td><td class="p-4 font-bold text-amber-600">Alto</td><td class="p-4 font-black text-blue-600">Beneficiario Activo</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Clientes potenciales</td><td class="p-4">Externo</td><td class="p-4 font-medium text-slate-500">Pasivo</td><td class="p-4 font-bold text-slate-500">Neutral</td><td class="p-4 text-center font-bold text-rose-500">No</td><td class="p-4 font-bold text-slate-600">Medio</td><td class="p-4 font-black text-slate-600">Audiencia Objetivo</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Proveedor de flores</td><td class="p-4">Externo</td><td class="p-4 font-medium text-slate-500">Pasivo</td><td class="p-4 font-bold text-slate-500">Neutral</td><td class="p-4 text-center font-bold text-rose-500">No</td><td class="p-4 font-bold text-slate-600">Medio</td><td class="p-4 font-black text-slate-600">Stakeholder de Soporte</td></tr>
            <tr class="hover:bg-slate-50 border-b"><td class="p-4 font-bold text-slate-800">Municipalidad</td><td class="p-4">Externo</td><td class="p-4 font-medium text-slate-500">Pasivo</td><td class="p-4 font-bold text-slate-500">Neutral</td><td class="p-4 text-center font-bold text-rose-500">No</td><td class="p-4 font-bold text-slate-500">Bajo-Regulatorio</td><td class="p-4 font-black text-slate-600">Ente Regulador</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-4 font-bold text-slate-800">Proveedor internet</td><td class="p-4">Externo</td><td class="p-4 font-medium text-slate-500">Pasivo</td><td class="p-4 font-bold text-slate-500">Neutral</td><td class="p-4 text-center font-bold text-rose-500">No</td><td class="p-4 font-bold text-slate-500">Bajo-Técnico</td><td class="p-4 font-black text-slate-600">Soporte Tecnico</td></tr>
          </tbody>
        </table>
      </div>
    </details>
  `
})
export class RepresentacionComponent {}
