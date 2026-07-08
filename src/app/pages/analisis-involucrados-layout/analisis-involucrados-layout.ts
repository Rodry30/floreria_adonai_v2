import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-analisis-involucrados-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="mb-8">
      <h1 class="text-4xl font-black text-teal-950 tracking-tight mb-2">Análisis de involucrados</h1>
      <p class="text-slate-500 text-lg font-medium">Gestión y evaluación de interesados del proyecto (PMBOK).</p>
    </div>

    <!-- Sub-navigation tabs -->
    <div class="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-px">
      <a routerLink="entradas" routerLinkActive="bg-teal-600 text-white border-teal-600 hover:bg-teal-700" class="px-5 py-2.5 rounded-t-lg font-bold text-sm text-slate-600 hover:text-teal-700 hover:bg-teal-50 border border-transparent transition-colors">
        Entradas
      </a>
      <a routerLink="herramientas" routerLinkActive="bg-teal-600 text-white border-teal-600 hover:bg-teal-700" class="px-5 py-2.5 rounded-t-lg font-bold text-sm text-slate-600 hover:text-teal-700 hover:bg-teal-50 border border-transparent transition-colors">
        Herramientas
      </a>
      <a routerLink="analisis" routerLinkActive="bg-teal-600 text-white border-teal-600 hover:bg-teal-700" class="px-5 py-2.5 rounded-t-lg font-bold text-sm text-slate-600 hover:text-teal-700 hover:bg-teal-50 border border-transparent transition-colors">
        Análisis
      </a>
      <a routerLink="representacion" routerLinkActive="bg-teal-600 text-white border-teal-600 hover:bg-teal-700" class="px-5 py-2.5 rounded-t-lg font-bold text-sm text-slate-600 hover:text-teal-700 hover:bg-teal-50 border border-transparent transition-colors">
        Representación
      </a>
      <a routerLink="salidas" routerLinkActive="bg-teal-600 text-white border-teal-600 hover:bg-teal-700" class="px-5 py-2.5 rounded-t-lg font-bold text-sm text-slate-600 hover:text-teal-700 hover:bg-teal-50 border border-transparent transition-colors">
        Salidas
      </a>
    </div>

    <!-- Child Routes Content -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AnalisisInvolucradosLayoutComponent {}
