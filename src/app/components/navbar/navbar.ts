import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="bg-white shadow-sm border-b border-teal-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <a routerLink="/resumen" class="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
            <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            <span class="font-bold text-xl text-teal-800 tracking-tight">Florería Adonai</span>
          </a>

          <!-- Botón menú móvil -->
          <button (click)="toggleMobileMenu()" class="lg:hidden p-2 text-teal-800 hover:text-teal-600 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path *ngIf="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path *ngIf="isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Menú Desktop -->
          <div class="hidden lg:flex h-full items-center gap-6 text-sm font-medium text-slate-600">

            <!-- FASE 1 -->
            <div class="relative h-full flex items-center">
              <button
                (click)="toggleMenu('fase1')"
                class="h-full px-3 hover:text-teal-600 transition-colors flex items-center gap-1 font-bold text-teal-800 cursor-pointer">
                Fase 1 — Diagnóstico
                <svg class="w-4 h-4 transition-transform duration-200" [class.rotate-180]="openMenu === 'fase1'" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div *ngIf="openMenu === 'fase1'" class="absolute left-0 top-full w-64 bg-white border border-teal-100 shadow-lg rounded-b-xl overflow-hidden">
                <a routerLink="/analisis" routerLinkActive="text-teal-700 border-l-4 border-teal-600 bg-teal-50" (click)="closeMenu()" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Análisis de involucrados</a>
                <a routerLink="/analisis-problemas" routerLinkActive="text-teal-700 border-l-4 border-teal-600 bg-teal-50" (click)="closeMenu()" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Análisis de problemas</a>
                <a routerLink="/analisis-objetivos" routerLinkActive="text-teal-700 border-l-4 border-teal-600 bg-teal-50" (click)="closeMenu()" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Análisis de objetivos</a>
              </div>
            </div>

            <!-- FASE 2 -->
            <div class="relative h-full flex items-center">
              <button
                (click)="toggleMenu('fase2')"
                class="h-full px-3 hover:text-teal-600 transition-colors flex items-center gap-1 font-bold text-teal-800 cursor-pointer">
                Fase 2 — Proyecto
                <svg class="w-4 h-4 transition-transform duration-200" [class.rotate-180]="openMenu === 'fase2'" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div *ngIf="openMenu === 'fase2'" class="absolute left-0 top-full w-72 bg-white border border-teal-100 shadow-lg rounded-b-xl overflow-hidden">
                <!-- Cabecera del subgrupo -->
                <div class="px-4 py-2 text-xs font-bold text-teal-700 uppercase tracking-wider bg-teal-50 border-b border-teal-100">
                  Análisis de alternativas
                </div>
                <a routerLink="/analisis-alternativas" routerLinkActive="text-teal-700 border-l-4 border-teal-600 bg-teal-50" (click)="closeMenu()" class="flex items-center gap-2 pl-6 pr-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">
                  <svg class="w-3.5 h-3.5 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                  Alternativas de solución
                </a>
                <a routerLink="/design-thinking" routerLinkActive="text-teal-700 border-l-4 border-teal-600 bg-teal-50" (click)="closeMenu()" class="flex items-center gap-2 pl-6 pr-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">
                  <svg class="w-3.5 h-3.5 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                  Iteración 1
                </a>
                <a routerLink="/fase2/design-thinking/iteracion-2" routerLinkActive="text-teal-700 border-l-4 border-teal-600 bg-teal-50" (click)="closeMenu()" class="flex items-center gap-2 pl-6 pr-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">
                  <svg class="w-3.5 h-3.5 text-teal-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                  Iteración 2
                </a>
              </div>
            </div>

            <!-- FASE 3 -->
            <div class="relative h-full flex items-center">
              <button
                (click)="toggleMenu('fase3')"
                class="h-full px-3 hover:text-teal-600 transition-colors flex items-center gap-1 font-bold text-teal-800 cursor-pointer">
                Fase 3 — Resumen
                <svg class="w-4 h-4 transition-transform duration-200" [class.rotate-180]="openMenu === 'fase3'" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div *ngIf="openMenu === 'fase3'" class="absolute right-0 top-full w-64 bg-white border border-teal-100 shadow-lg rounded-b-xl overflow-hidden">
                <a routerLink="/matriz-marco-logico" routerLinkActive="text-teal-700 border-l-4 border-teal-600 bg-teal-50" (click)="closeMenu()" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Matriz de Marco Lógico</a>
                <a routerLink="/fase3/gestion-alcance" routerLinkActive="text-teal-700 border-l-4 border-teal-600 bg-teal-50" (click)="closeMenu()" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Gestión del Alcance del Proyecto</a>
                <a routerLink="/fase3/linea-base-cronograma" routerLinkActive="text-teal-700 border-l-4 border-teal-600 bg-teal-50" (click)="closeMenu()" class="block px-4 py-3 hover:text-teal-600 hover:bg-teal-50/50 transition-colors">Línea Base del Cronograma</a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Menú Móvil -->
      <div *ngIf="isMobileMenuOpen" class="lg:hidden border-t border-teal-100 bg-white">
        <div class="px-4 pt-2 pb-4 space-y-1 max-h-[80vh] overflow-y-auto">

          <!-- FASE 1 móvil -->
          <button (click)="toggleMobileSection('fase1')" class="w-full flex justify-between items-center font-bold text-teal-800 px-3 py-2 uppercase text-xs tracking-wider hover:bg-teal-50 rounded-md">
            Fase 1 — Diagnóstico
            <svg class="w-3.5 h-3.5 transition-transform duration-200" [class.rotate-180]="openMobileSection === 'fase1'" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div *ngIf="openMobileSection === 'fase1'">
            <a (click)="closeMobileMenu()" routerLink="/analisis" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Análisis de involucrados</a>
            <a (click)="closeMobileMenu()" routerLink="/analisis-problemas" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Análisis de problemas</a>
            <a (click)="closeMobileMenu()" routerLink="/analisis-objetivos" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Análisis de objetivos</a>
          </div>

          <!-- FASE 2 móvil -->
          <button (click)="toggleMobileSection('fase2')" class="w-full flex justify-between items-center font-bold text-teal-800 px-3 py-2 mt-2 uppercase text-xs tracking-wider border-t border-slate-100 pt-4 hover:bg-teal-50 rounded-md">
            Fase 2 — Proyecto
            <svg class="w-3.5 h-3.5 transition-transform duration-200" [class.rotate-180]="openMobileSection === 'fase2'" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div *ngIf="openMobileSection === 'fase2'">
            <div class="pl-6 pr-4 py-1 text-xs font-semibold text-teal-600 uppercase tracking-wider">Análisis de alternativas</div>
            <a (click)="closeMobileMenu()" routerLink="/analisis-alternativas" routerLinkActive="text-teal-700 bg-teal-50" class="flex items-center gap-2 pl-8 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">
              <svg class="w-3 h-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              Alternativas de solución
            </a>
            <a (click)="closeMobileMenu()" routerLink="/design-thinking" routerLinkActive="text-teal-700 bg-teal-50" class="flex items-center gap-2 pl-8 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">
              <svg class="w-3 h-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              Iteración 1
            </a>
            <a (click)="closeMobileMenu()" routerLink="/fase2/design-thinking/iteracion-2" routerLinkActive="text-teal-700 bg-teal-50" class="flex items-center gap-2 pl-8 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">
              <svg class="w-3 h-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              Iteración 2
            </a>
          </div>

          <!-- FASE 3 móvil -->
          <button (click)="toggleMobileSection('fase3')" class="w-full flex justify-between items-center font-bold text-teal-800 px-3 py-2 mt-2 uppercase text-xs tracking-wider border-t border-slate-100 pt-4 hover:bg-teal-50 rounded-md">
            Fase 3 — Resumen
            <svg class="w-3.5 h-3.5 transition-transform duration-200" [class.rotate-180]="openMobileSection === 'fase3'" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div *ngIf="openMobileSection === 'fase3'">
            <a (click)="closeMobileMenu()" routerLink="/matriz-marco-logico" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Matriz de Marco Lógico</a>
            <a (click)="closeMobileMenu()" routerLink="/fase3/gestion-alcance" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Gestión del Alcance del Proyecto</a>
            <a (click)="closeMobileMenu()" routerLink="/fase3/linea-base-cronograma" routerLinkActive="text-teal-700 bg-teal-50" class="block pl-6 pr-4 py-2 text-sm text-slate-600 hover:bg-teal-50 rounded-md">Línea Base del Cronograma</a>
          </div>

        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  isMobileMenuOpen = false;
  openMenu: string | null = null;
  openMobileSection: string | null = null;

  toggleMenu(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }

  closeMenu() {
    this.openMenu = null;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.openMobileSection = null;
    }
  }

  toggleMobileSection(section: string) {
    this.openMobileSection = this.openMobileSection === section ? null : section;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.openMobileSection = null;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('nav')) {
      this.openMenu = null;
    }
  }
}
