import { Component } from '@angular/core';

@Component({
  selector: 'app-salidas',
  standalone: true,
  template: `
    <div class="mb-10 flex items-center gap-4">
      <div class="p-4 bg-teal-100 rounded-2xl">
        <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
      </div>
      <div>
        <h1 class="text-4xl font-black text-teal-950 tracking-tight">Salidas del Proceso</h1>
        <p class="text-slate-500 mt-1 text-lg font-medium">Registro final de stakeholders del proyecto.</p>
      </div>
    </div>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-6 overflow-hidden" open>
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-slate-50 to-white hover:bg-teal-50/50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3"><span class="bg-rose-100 text-rose-700 px-2 py-0.5 rounded text-sm font-black">5.1</span> Registro Completo de Stakeholders</div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed overflow-x-auto">
        <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm whitespace-nowrap">
          <thead class="bg-teal-900 text-teal-50 text-sm tracking-wider uppercase">
            <tr><th class="p-4 font-bold">ID</th><th class="p-4 font-bold">Nombre</th><th class="p-4 font-bold">Organización</th><th class="p-4 font-bold">Rol PMBOK</th><th class="p-4 font-bold">Requisitos Clave</th><th class="p-4 font-bold">Expectativas</th><th class="p-4 font-bold">Influencia</th><th class="p-4 font-bold">Estrategia</th></tr>
          </thead>
          <tbody class="text-sm">
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-01</td><td class="p-4 font-bold text-slate-800">Ana (Propietaria)</td><td class="p-4">Florería Local</td><td class="p-4">Patrocinadora</td><td class="p-4">Control de inventario; más ventas</td><td class="p-4">ROI rápido; simplicidad</td><td class="p-4"><span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-bold text-xs">MUY ALTA</span></td><td class="p-4 font-bold text-rose-700">Gestionar de Cerca</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-02</td><td class="p-4 font-bold text-slate-800">Maria (Vendedora)</td><td class="p-4">Florería Local</td><td class="p-4">Usuaria operativa</td><td class="p-4">Sistema fácil de usar</td><td class="p-4">No perder empleo; trabajar mejor</td><td class="p-4"><span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold text-xs">MEDIA</span></td><td class="p-4 font-bold text-blue-700">Mantener Informada</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-03</td><td class="p-4 font-bold text-slate-800">Analista TI</td><td class="p-4">Universidad / Equipo</td><td class="p-4">Director Proyecto</td><td class="p-4">Cooperación de todos</td><td class="p-4">Éxito del proyecto; nota académica</td><td class="p-4"><span class="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-bold text-xs">ALTA</span></td><td class="p-4 font-bold text-rose-700">Gestionar de Cerca</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-04</td><td class="p-4 font-bold text-slate-800">Clientes (habituales)</td><td class="p-4">Comunidad local</td><td class="p-4">Usuarios beneficiarios</td><td class="p-4">Catálogo digital; delivery</td><td class="p-4">Mejor servicio y comunicación</td><td class="p-4"><span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold text-xs">MEDIA</span></td><td class="p-4 font-bold text-blue-700">Mantener Informados</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-05</td><td class="p-4 font-bold text-slate-800">Clientes potenciales</td><td class="p-4">Comunidad local</td><td class="p-4">Audiencia objetivo</td><td class="p-4">Conocer la florería</td><td class="p-4">Acceso fácil y precios claros</td><td class="p-4"><span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold text-xs">BAJA</span></td><td class="p-4 font-bold text-slate-600">Monitorear</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-06</td><td class="p-4 font-bold text-slate-800">Proveedor flores</td><td class="p-4">Mercado mayorista</td><td class="p-4">Proveedor clave</td><td class="p-4">Pedidos organizados</td><td class="p-4">Pagos puntuales y pedidos claros</td><td class="p-4"><span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold text-xs">MEDIA</span></td><td class="p-4 font-bold text-amber-700">Mantener Satisfecho</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-07</td><td class="p-4 font-bold text-slate-800">Prov. peluches/globos</td><td class="p-4">Distribuidor</td><td class="p-4">Proveedor secundario</td><td class="p-4">Continuidad de pedidos</td><td class="p-4">Relación comercial estable</td><td class="p-4"><span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold text-xs">BAJA</span></td><td class="p-4 font-bold text-slate-600">Monitorear</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-08</td><td class="p-4 font-bold text-slate-800">Proveedor Internet</td><td class="p-4">Empresa telecom.</td><td class="p-4">Proveedor servicio TI</td><td class="p-4">Conexión estable</td><td class="p-4">Fidelizar al cliente</td><td class="p-4"><span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold text-xs">BAJA</span></td><td class="p-4 font-bold text-slate-600">Monitorear</td></tr>
            <tr class="hover:bg-slate-50 border-b border-slate-100"><td class="p-4 font-medium text-slate-500">S-09</td><td class="p-4 font-bold text-slate-800">Meta / Google</td><td class="p-4">Corporación TI</td><td class="p-4">Plataforma digital</td><td class="p-4">Cumplir políticas de uso</td><td class="p-4">Expansion de base de usuarios</td><td class="p-4"><span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold text-xs">BAJA</span></td><td class="p-4 font-bold text-slate-600">Monitorear</td></tr>
            <tr class="hover:bg-slate-50"><td class="p-4 font-medium text-slate-500">S-10</td><td class="p-4 font-bold text-slate-800">Municipalidad</td><td class="p-4">Gobierno local</td><td class="p-4">Ente regulador</td><td class="p-4">Cumplimiento normativo</td><td class="p-4">Formalización del negocio</td><td class="p-4"><span class="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-bold text-xs">MEDIA</span></td><td class="p-4 font-bold text-amber-700">Mantener Satisfecha</td></tr>
          </tbody>
        </table>
      </div>
    </details>
  `
})
export class SalidasComponent {}
