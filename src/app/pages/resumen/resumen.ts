import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

interface PdfDoc {
  title: string;
  filename: string;
  description: string;
  safeUrl?: SafeResourceUrl;
}

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    .pdf-modal-overlay {
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(0,0,0,0.85);
      display: flex; align-items: center; justify-content: center;
      animation: fadeIn 0.2s ease;
    }
    @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
    .pdf-modal-box {
      background: #1e293b; border-radius: 1.25rem;
      width: 92vw; height: 90vh;
      display: flex; flex-direction: column;
      box-shadow: 0 40px 80px rgba(0,0,0,0.6);
      overflow: hidden;
      animation: slideUp 0.25s ease;
    }
    @keyframes slideUp { from { transform: translateY(30px); opacity:0 } to { transform: translateY(0); opacity:1 } }
    .pdf-modal-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: 1rem 1.5rem;
      background: #0f172a; border-bottom: 1px solid #334155;
    }
    .pdf-modal-iframe { flex: 1; border: none; width: 100%; }
    .pdf-card-iframe { width: 100%; height: 420px; border: none; border-radius: 0 0 1rem 1rem; background:#f8fafc; }
  `],
  template: `
    <!-- Hero Section -->
    <section class="relative bg-teal-800 text-white overflow-hidden rounded-2xl mb-12 shadow-xl border border-teal-700">
      <div class="absolute inset-0 opacity-20">
        <div class="w-full h-full bg-gradient-to-r from-teal-900 to-teal-700"></div>
      </div>
      <div class="relative z-10 flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-12">
        <div class="lg:w-1/2 flex flex-col gap-6">
          <span class="inline-block px-4 py-1.5 bg-teal-900/50 text-teal-100 font-bold tracking-wider text-xs uppercase rounded-full w-max border border-teal-600/50 backdrop-blur-sm shadow-sm">
            Proyecto Académico - TI
          </span>
          <h1 class="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Transformación Digital <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-rose-400">Florería Adonai</span>
          </h1>
          <p class="text-lg text-teal-50 leading-relaxed opacity-90 max-w-xl font-medium">
            Un enfoque sistemático basado en PMBOK (7.ma Edición) para modernizar la gestión operativa y comercial de una microempresa floral mediante herramientas digitales accesibles.
          </p>
        </div>
        <div class="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 transform hover:-translate-y-2 transition-transform duration-500 w-full max-w-lg aspect-[4/3]">
            <img src="/evidencia2.jpeg" alt="Interior de la florería" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Resumen -->
    <div class="mb-8 flex items-center gap-4">
      <div class="p-3 bg-rose-100 rounded-xl">
        <svg class="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
      <h2 class="text-4xl font-extrabold text-teal-950 tracking-tight">Resumen Ejecutivo</h2>
    </div>

    <details class="group bg-white rounded-2xl shadow-sm border border-slate-200 mb-16 overflow-hidden" open>
      <summary class="cursor-pointer font-bold text-teal-900 p-6 bg-gradient-to-r from-teal-50/50 to-white hover:bg-teal-50 transition-colors flex justify-between items-center text-lg">
        <div class="flex items-center gap-3">
          <svg class="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          Contexto y Objetivos del Proyecto
        </div>
        <svg class="w-6 h-6 text-teal-600 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </summary>
      <div class="p-8 border-t border-slate-100 text-slate-600 leading-relaxed space-y-5 text-lg">
        <p>El presente informe académico documenta la formulación de un proyecto de transformación digital aplicado a la Florería Adonai, una microempresa familiar de Lima dedicada a la venta de arreglos florales, peluches, globos y chocolates. El negocio opera de forma enteramente manual: el inventario se estima visualmente, las ventas se registran en un cuaderno sin formato, los pedidos llegan por WhatsApp personal y el negocio no cuenta con presencia digital activa.</p>
        <p>La formulación sigue una metodología dual: el Marco Lógico como estructura general de diagnóstico y el PMBOK 7.ma edición — proceso 13.1 – Identificar a los Interesados — como herramienta de análisis de involucrados.</p>
        <div class="bg-rose-50/50 border-l-4 border-rose-500 p-6 rounded-r-xl mt-6 text-rose-900 shadow-sm">
          <strong class="text-rose-700 block mb-2 text-xl">🎯 Objetivo Principal:</strong>
          <p>El objetivo central es mejorar la gestión operativa y comercial de la florería mediante el diseño de herramientas digitales básicas, gratuitas o de bajo costo, ejecutables en un periodo académico de 8 semanas por un equipo de cuatro estudiantes.</p>
        </div>
      </div>
    </details>

    <!-- Galería de Evidencias -->
    <div class="mb-8 flex items-center gap-4">
      <div class="p-3 bg-teal-100 rounded-xl">
        <svg class="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      </div>
      <h2 class="text-4xl font-extrabold text-teal-950 tracking-tight">Galería de Evidencias</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <!-- Evidencias -->
      <ng-container *ngFor="let ev of evidencias">
        <div class="group relative rounded-3xl overflow-hidden bg-slate-200 aspect-square shadow-sm border border-slate-200">
          <img [src]="ev.src" [alt]="ev.label" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div [class]="'absolute inset-0 bg-gradient-to-t ' + ev.grad + ' opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8'">
            <span [class]="'text-white font-black text-2xl drop-shadow-lg tracking-tight mb-1'">{{ ev.label }}</span>
            <span [class]="'text-sm font-semibold ' + ev.textColor">📷 {{ ev.sub }}</span>
          </div>
        </div>
      </ng-container>
    </div>

    <!-- Documentos PDF -->
    <div class="mb-8 flex items-center gap-4">
      <div class="p-3 bg-rose-100 rounded-xl">
        <svg class="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
      </div>
      <h2 class="text-4xl font-extrabold text-teal-950 tracking-tight">Documentos PDF</h2>
    </div>

    <div class="flex flex-col gap-10 mb-16">
      <ng-container *ngFor="let doc of pdfs">
        <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <!-- Header del card -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border-b border-slate-100 bg-gradient-to-r from-rose-50/60 to-white">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 class="font-extrabold text-slate-800 text-lg leading-tight">{{ doc.title }}</h3>
                <p class="text-slate-500 text-sm mt-0.5">{{ doc.description }}</p>
              </div>
            </div>
            <!-- Botones -->
            <div class="flex items-center gap-3 flex-shrink-0">
              <button
                (click)="openModal(doc)"
                class="flex items-center gap-2 px-4 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5 text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                Pantalla completa
              </button>
              <a
                [href]="'/' + doc.filename"
                [download]="doc.filename"
                class="flex items-center gap-2 px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5 text-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Descargar
              </a>
            </div>
          </div>
          <!-- Visor inline -->
          <iframe
            [src]="doc.safeUrl"
            class="pdf-card-iframe"
            title="{{ doc.title }}">
          </iframe>
        </div>
      </ng-container>
    </div>

    <!-- Video Section -->
    <div class="mb-8 flex items-center gap-4 mt-16">
      <div class="p-3 bg-indigo-100 rounded-xl">
        <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
      </div>
      <h2 class="text-4xl font-extrabold text-teal-950 tracking-tight">Presentación del Proyecto</h2>
    </div>

    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-16">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 border-b border-slate-100 bg-gradient-to-r from-indigo-50/60 to-white">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div>
            <h3 class="font-extrabold text-slate-800 text-lg leading-tight">Video explicativo</h3>
            <p class="text-slate-500 text-sm mt-0.5">Sustentación del proyecto Florería Adonai</p>
          </div>
        </div>
        <div class="flex items-center gap-3 flex-shrink-0">
          <a
            href="https://drive.google.com/file/d/1NZjn9FwFlMHFfnHcqTyF0OXMFFJ28_5p/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all duration-200 shadow hover:shadow-md hover:-translate-y-0.5 text-sm">
            Ver Video Completo
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Modal pantalla completa -->
    <div class="pdf-modal-overlay" *ngIf="modalDoc" (click)="closeModal($event)">
      <div class="pdf-modal-box" (click)="$event.stopPropagation()">
        <div class="pdf-modal-header">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-rose-500/20 rounded-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <span class="text-white font-bold text-base">{{ modalDoc.title }}</span>
          </div>
          <div class="flex items-center gap-2">
            <a [href]="'/' + modalDoc.filename" [download]="modalDoc.filename"
              class="flex items-center gap-1.5 px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg text-sm transition-colors">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              Descargar
            </a>
            <button (click)="closeModalDirect()"
              class="flex items-center justify-center w-9 h-9 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white rounded-lg transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        </div>
        <iframe [src]="modalDoc.safeUrl" class="pdf-modal-iframe" [title]="modalDoc.title"></iframe>
      </div>
    </div>
  `
})
export class ResumenComponent {
  modalDoc: PdfDoc | null = null;

  evidencias = [
    { src: '/evidencia2.jpeg', label: 'Evidencia 2', sub: 'Entrevista con propietaria', grad: 'from-rose-950/90 via-rose-900/30 to-transparent',  textColor: 'text-rose-200'  },
    { src: '/evidencia3.jpeg', label: 'Evidencia 3', sub: 'Registro de ventas',  grad: 'from-teal-950/90 via-teal-900/30 to-transparent', textColor: 'text-teal-200' },
    { src: '/evidencia4.jpeg', label: 'Evidencia 4', sub: 'Detalle de producto',         grad: 'from-rose-950/90 via-rose-900/30 to-transparent',  textColor: 'text-rose-200'  },
    { src: '/evidencia5.jpeg', label: 'Evidencia 5', sub: 'Productos del negocio',      grad: 'from-teal-950/90 via-teal-900/30 to-transparent', textColor: 'text-teal-200' },
    { src: '/evidencia6.jpeg', label: 'Evidencia 6', sub: 'Catálogo de productos',         grad: 'from-rose-950/90 via-rose-900/30 to-transparent',  textColor: 'text-rose-200'  },
  ];

  pdfs: PdfDoc[];

  constructor(private sanitizer: DomSanitizer) {
    this.pdfs = [
      {
        title: 'Guía de Entrevista y Encuesta — Stakeholders',
        filename: 'guia_entrevista_encuesta_stakeholders.pdf',
        description: 'Instrumento aplicado para la identificación y análisis de los interesados del proyecto.',
      },
    ].map(doc => ({
      ...doc,
      safeUrl: this.sanitizer.bypassSecurityTrustResourceUrl('/' + doc.filename),
    }));
  }

  openModal(doc: PdfDoc) {
    this.modalDoc = doc;
    document.body.style.overflow = 'hidden';
  }

  closeModal(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('pdf-modal-overlay')) {
      this.closeModalDirect();
    }
  }

  closeModalDirect() {
    this.modalDoc = null;
    document.body.style.overflow = '';
  }
}
