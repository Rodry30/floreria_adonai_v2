import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-teal-950 text-teal-100 py-12 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex items-center gap-3">
          <svg class="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          <div>
            <h4 class="font-bold text-white tracking-wide">Formulación y Evaluación de Proyectos TI</h4>
            <p class="text-teal-400 text-sm mt-0.5">Transformación Digital - Florería Adonai</p>
          </div>
        </div>
        <div class="text-sm text-teal-500 font-medium text-right">
          <p class="mb-1 text-teal-400">Integrantes: Cabanillas, León, Ramos, Gamero</p>
          <p>&copy; 2026. Proyecto Académico.</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
