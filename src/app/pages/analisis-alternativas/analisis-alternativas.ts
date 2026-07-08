import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analisis-alternativas',
  standalone: true,
  imports: [CommonModule],
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
      <!-- SECCIÓN 0 — Encabezado y Ficha de Proyecto -->
      <section class="relative bg-teal-900 text-white overflow-hidden rounded-3xl p-8 shadow-xl border border-teal-800">
        <div class="absolute -right-20 -top-20 w-60 h-60 bg-teal-850/40 rounded-full blur-3xl"></div>
        <div class="absolute -left-20 -bottom-20 w-60 h-60 bg-teal-800/40 rounded-full blur-3xl"></div>
        
        <div class="relative z-10 space-y-6">
          <span class="inline-block px-4 py-1.5 bg-teal-950/50 text-teal-300 font-bold tracking-wider text-xs uppercase rounded-full w-max border border-teal-700/50 backdrop-blur-sm shadow-sm">
            Fase 2 — Alternativas de Solución
          </span>
          <h1 class="text-3xl md:text-5xl font-black leading-tight tracking-tight">
            Análisis de Alternativas de Solución
          </h1>
          <p class="text-teal-250/90 text-sm max-w-2xl font-medium">
            Identificación, clasificación y evaluación ponderada de las acciones y alternativas tecnológicas para la transformación digital de la Florería Adonai.
          </p>

          <!-- Ficha de Proyecto -->
          <div class="border-t border-teal-800/80 pt-6 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div class="space-y-1">
              <span class="text-teal-400 font-bold uppercase tracking-wider text-[10px]">Proyecto</span>
              <p class="font-bold text-white">Transformación Digital Básica – Florería Adonai</p>
            </div>
            <div class="space-y-1">
              <span class="text-teal-400 font-bold uppercase tracking-wider text-[10px]">Ubicación</span>
              <p class="font-bold text-white">Villa El Salvador, Lima, Perú</p>
            </div>
            <div class="space-y-1">
              <span class="text-teal-400 font-bold uppercase tracking-wider text-[10px]">Asignatura</span>
              <p class="font-bold text-white">Formulación y Evaluación de Proyectos de TI</p>
            </div>
            <div class="space-y-1">
              <span class="text-teal-400 font-bold uppercase tracking-wider text-[10px]">Equipo</span>
              <p class="font-bold text-white">Estudiantes de Ingeniería de Sistemas – 8.° ciclo</p>
            </div>
            <div class="space-y-1">
              <span class="text-teal-400 font-bold uppercase tracking-wider text-[10px]">Docente Asesor</span>
              <p class="font-bold text-white">Arqque Pantigozo Antonio</p>
            </div>
            <div class="space-y-1">
              <span class="text-teal-400 font-bold uppercase tracking-wider text-[10px]">Año</span>
              <p class="font-bold text-white">2026</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECCIÓN 1 — Identificación de Acciones Necesarias -->
      <section class="border-t border-slate-100 pt-10">
        <div class="mb-8 flex items-center gap-4">
          <div class="p-4 bg-teal-100 rounded-2xl">
            <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-3xl font-black text-teal-950 tracking-tight">1. Identificación de Acciones Necesarias</h2>
            <p class="text-teal-600 font-bold text-sm">¿Cómo lograr la situación deseada a partir de los objetivos?</p>
          </div>
        </div>
        
        <p class="text-slate-600 leading-relaxed text-lg mb-8">
          A partir del árbol de objetivos del proyecto, se identificaron tres medios fundamentales que articulan la situación positiva deseada para la Florería Adonai. Por cada medio se listaron las acciones posibles y necesarias respondiendo a la pregunta: <strong>¿Cómo / qué hacemos para lograr cada situación positiva deseada?</strong>
        </p>

        <!-- Árbol de Medios Renderizado (Responsive Wrapper) -->
        <div class="w-full overflow-x-auto pb-10 custom-scrollbar mb-12">
          <div class="flex flex-col items-center min-w-[1050px] py-4">
            
            <!-- Nivel 1: Objetivo Central -->
            <div class="relative flex flex-col items-center">
              <div class="bg-teal-900 text-white p-5 rounded-2xl shadow-lg w-[500px] text-center z-10 border-4 border-teal-600">
                <span class="block text-teal-300 text-[10px] uppercase font-bold tracking-wider mb-2">Objetivo Central</span>
                <span class="font-black text-sm leading-tight">Gestión operativa y comercial eficiente de la Florería Adonai mediante herramientas digitales básicas, gratuitas o de bajo costo</span>
              </div>
              <!-- Conector vertical hacia abajo -->
              <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
            </div>
            
            <!-- Nivel 2: Medios -->
            <div class="relative flex gap-8 mt-8 justify-center w-full max-w-[1000px]">
              <!-- Conector horizontal superior -->
              <div class="absolute -top-8 left-[16.6%] right-[16.6%] h-px bg-slate-400"></div>
              
              <!-- Medio 1 -->
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-teal-50 text-teal-900 p-4 rounded-xl shadow-sm border border-teal-200 h-full w-full flex flex-col items-center justify-center font-bold">
                  <span class="block text-teal-600 text-[10px] uppercase mb-1">Medio 1</span>
                  Control de inventario y productos
                </div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              
              <!-- Medio 2 -->
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-teal-50 text-teal-900 p-4 rounded-xl shadow-sm border border-teal-200 h-full w-full flex flex-col items-center justify-center font-bold">
                  <span class="block text-teal-600 text-[10px] uppercase mb-1">Medio 2</span>
                  Registro y seguimiento de ventas y clientes
                </div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
              
              <!-- Medio 3 -->
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-teal-50 text-teal-900 p-4 rounded-xl shadow-sm border border-teal-200 h-full w-full flex flex-col items-center justify-center font-bold">
                  <span class="block text-teal-600 text-[10px] uppercase mb-1">Medio 3</span>
                  Atención digital al cliente
                </div>
                <div class="w-px h-8 bg-slate-400 absolute -bottom-8"></div>
              </div>
            </div>

            <!-- Nivel 3: Medios Fundamentales -->
            <div class="relative flex gap-8 mt-8 justify-center w-full max-w-[1000px]">
              <!-- Medio Fundamental 1 -->
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-emerald-800 text-white p-4 rounded-xl shadow-md border-2 border-emerald-600 h-full w-full flex flex-col items-center justify-center font-bold">
                  <span class="block text-emerald-300 text-[9px] uppercase font-bold tracking-wider mb-1">Medio Fundamental</span>
                  Inventario digital con alertas de stock
                </div>
              </div>

              <!-- Medio Fundamental 2 -->
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-emerald-800 text-white p-4 rounded-xl shadow-md border-2 border-emerald-600 h-full w-full flex flex-col items-center justify-center font-bold">
                  <span class="block text-emerald-300 text-[9px] uppercase font-bold tracking-wider mb-1">Medio Fundamental</span>
                  Base de datos de ventas y clientes organizada
                </div>
              </div>

              <!-- Medio Fundamental 3 -->
              <div class="relative flex flex-col items-center flex-1 text-center text-sm">
                <div class="w-px h-8 bg-slate-400 absolute -top-8"></div>
                <div class="bg-emerald-800 text-white p-4 rounded-xl shadow-md border-2 border-emerald-600 h-full w-full flex flex-col items-center justify-center font-bold">
                  <span class="block text-emerald-300 text-[9px] uppercase font-bold tracking-wider mb-1">Medio Fundamental</span>
                  Catálogo digital y canal de atención estructurado
                </div>
              </div>
            </div>

          </div>
        </div>

        <h3 class="text-xl font-bold text-teal-900 mb-6">Acciones identificadas por componente de solución</h3>
        
        <!-- Acciones identificadas por componente -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Componente 1 -->
          <div class="bg-white border-t-4 border-teal-600 rounded-2xl p-6 shadow-sm border-x border-b border-slate-200 hover:shadow-md transition-all duration-300">
            <span class="text-teal-600 font-extrabold text-[10px] uppercase tracking-wider block mb-1">Componente 1</span>
            <h4 class="font-extrabold text-slate-900 text-lg mb-3">Control de Inventario</h4>
            <div class="bg-teal-50/50 text-teal-800 text-xs px-3 py-2 rounded-lg font-medium mb-4">
              <strong>Medio fundamental:</strong> Inventario digital con alertas de stock
            </div>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="bg-teal-100 text-teal-800 font-black text-xs px-2.5 py-1 rounded-md mt-0.5 flex-shrink-0">A1.1a</span>
                <span class="text-xs text-slate-600 leading-relaxed">
                  <strong>Implementar plantilla en Google Sheets:</strong> Solución gratuita y accesible en tiempo real desde el celular de la propietaria o la vendedora.
                </span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-slate-100 text-slate-650 font-black text-xs px-2.5 py-1 rounded-md mt-0.5 flex-shrink-0">A1.1b</span>
                <span class="text-xs text-slate-600 leading-relaxed">
                  <strong>Implementar software especializado (Odoo, Zoho Inventory):</strong> Requiere licenciamiento, configuración de servidores y mantenimiento continuo.
                </span>
              </li>
            </ul>
          </div>

          <!-- Componente 2 -->
          <div class="bg-white border-t-4 border-violet-600 rounded-2xl p-6 shadow-sm border-x border-b border-slate-200 hover:shadow-md transition-all duration-300">
            <span class="text-violet-600 font-extrabold text-[10px] uppercase tracking-wider block mb-1">Componente 2</span>
            <h4 class="font-extrabold text-slate-900 text-lg mb-3">Ventas y Clientes</h4>
            <div class="bg-violet-50/50 text-violet-850 text-xs px-3 py-2 rounded-lg font-medium mb-4">
              <strong>Medio fundamental:</strong> Base de datos de ventas y clientes organizada
            </div>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="bg-violet-100 text-violet-800 font-black text-xs px-2.5 py-1 rounded-md mt-0.5 flex-shrink-0">A2.1</span>
                <span class="text-xs text-slate-600 leading-relaxed">
                  <strong>Formulario de registro de ventas:</strong> Diseñar formularios sencillos estructurados por canal de venta.
                </span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-violet-100 text-violet-800 font-black text-xs px-2.5 py-1 rounded-md mt-0.5 flex-shrink-0">A2.2</span>
                <span class="text-xs text-slate-600 leading-relaxed">
                  <strong>Base de datos de clientes:</strong> Construir un registro unificado para clientes frecuentes de la florería.
                </span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-violet-100 text-violet-800 font-black text-xs px-2.5 py-1 rounded-md mt-0.5 flex-shrink-0">A2.3</span>
                <span class="text-xs text-slate-600 leading-relaxed">
                  <strong>Seguimiento de pedidos:</strong> Configurar un panel sencillo con los estados de las entregas diarias.
                </span>
              </li>
            </ul>
          </div>

          <!-- Componente 3 -->
          <div class="bg-white border-t-4 border-amber-600 rounded-2xl p-6 shadow-sm border-x border-b border-slate-200 hover:shadow-md transition-all duration-300">
            <span class="text-amber-600 font-extrabold text-[10px] uppercase tracking-wider block mb-1">Componente 3</span>
            <h4 class="font-extrabold text-slate-900 text-lg mb-3">Atención Digital</h4>
            <div class="bg-amber-50/50 text-amber-850 text-xs px-3 py-2 rounded-lg font-medium mb-4">
              <strong>Medio fundamental:</strong> Catálogo digital y canal estructurado
            </div>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="bg-amber-100 text-amber-800 font-black text-xs px-2.5 py-1 rounded-md mt-0.5 flex-shrink-0">A3.1a</span>
                <span class="text-xs text-slate-600 leading-relaxed">
                  <strong>Crear catálogo en PDF/Imagen:</strong> Archivos interactivos y ligeros compartibles directamente mediante mensajería rápida.
                </span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-slate-100 text-slate-650 font-black text-xs px-2.5 py-1 rounded-md mt-0.5 flex-shrink-0">A3.1b</span>
                <span class="text-xs text-slate-600 leading-relaxed">
                  <strong>Tienda virtual en e-commerce (Shopify, MercadoShops):</strong> Solución robusta de carrito web, pero con costo recurrente e ineficiente para el flujo del negocio.
                </span>
              </li>
              <li class="flex items-start gap-3">
                <span class="bg-amber-100 text-amber-800 font-black text-xs px-2.5 py-1 rounded-md mt-0.5 flex-shrink-0">A3.2</span>
                <span class="text-xs text-slate-600 leading-relaxed">
                  <strong>Configurar WhatsApp Business:</strong> Perfil del negocio con etiquetas de seguimiento y respuestas de chat automatizadas.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      <!-- SECCIÓN 2 — Organización de las Acciones en Soluciones Alternativas -->
      <section class="border-t border-slate-100 pt-10">
        <div class="mb-8 flex items-center gap-4">
          <div class="p-4 bg-teal-100 rounded-2xl">
            <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-3xl font-black text-teal-950 tracking-tight">2. Organización de Soluciones Alternativas</h2>
            <p class="text-teal-600 font-bold text-sm">Clasificación y combinación de acciones viables</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <!-- Callout Excluyentes -->
          <div class="bg-rose-50/50 border-l-4 border-rose-500 p-6 rounded-r-xl shadow-xs">
            <h4 class="font-bold text-rose-800 text-base mb-2 flex items-center gap-2">
              <svg class="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
              Acciones Mutuamente Excluyentes
            </h4>
            <p class="text-xs text-rose-950/80 leading-relaxed mb-4">
              Elegir una acción descarta a la otra por representar caminos diferentes para alcanzar el mismo objetivo.
            </p>
            <ul class="space-y-2 text-xs text-rose-900">
              <li><strong>A1.1a vs. A1.1b:</strong> Plantilla en Google Sheets (Gratuita) vs. Software de Inventario comercial (De costo).</li>
              <li><strong>A3.1a vs. A3.1b:</strong> Catálogo PDF/Imagen interactivo vs. Tienda e-commerce web (Shopify/MercadoShops).</li>
            </ul>
          </div>

          <!-- Callout Complementarias -->
          <div class="bg-emerald-50/50 border-l-4 border-emerald-500 p-6 rounded-r-xl shadow-xs">
            <h4 class="font-bold text-emerald-800 text-base mb-2 flex items-center gap-2">
              <svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Acciones Complementarias
            </h4>
            <p class="text-xs text-emerald-950/80 leading-relaxed mb-4">
              Deben implementarse de forma conjunta, pues se potencian mutuamente para brindar valor al negocio.
            </p>
            <ul class="space-y-2 text-xs text-emerald-900">
              <li><strong>A2.1 + A2.2 + A2.3:</strong> Toda la suite de control de ventas y clientes operará unificada en las hojas de cálculo.</li>
              <li><strong>A3.2:</strong> WhatsApp Business sirve de soporte comercial y potencia cualquiera de las dos alternativas de catálogo.</li>
            </ul>
          </div>
        </div>

        <h3 class="text-xl font-bold text-teal-900 mb-6">Alternativas de solución estructuradas</h3>

        <!-- Soluciones Alternativas Visual cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          <!-- Solución 1 Card -->
          <div class="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-300 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-emerald-100/40 rounded-full blur-xl"></div>
            <div>
              <div class="flex items-center justify-between mb-4 border-b border-emerald-200/50 pb-3">
                <h4 class="font-extrabold text-emerald-950 text-base flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  Solución Alternativa N° 1
                </h4>
                <span class="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Herramientas Gratuitas</span>
              </div>
              <p class="text-xs text-slate-500 mb-4 leading-relaxed">
                Enfoque de digitalización ágil y de costo cero en software. Orientado a la simplicidad, permitiendo el uso óptimo y la administración del negocio directo desde dispositivos móviles.
              </p>
            </div>
            <div class="space-y-2">
              <div class="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-150">
                <span class="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-100 flex-shrink-0">A1.1a</span>
                <span class="text-xs text-slate-700 font-medium">Plantilla de Inventario básica (Google Sheets)</span>
              </div>
              <div class="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-150">
                <span class="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-100 flex-shrink-0">A2.1-3</span>
                <span class="text-xs text-slate-700 font-medium">Formularios de ventas, base de clientes y seguimiento</span>
              </div>
              <div class="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-150">
                <span class="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-100 flex-shrink-0">A3.1a</span>
                <span class="text-xs text-slate-700 font-medium">Catálogo interactivo en formato PDF o imágenes</span>
              </div>
              <div class="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-150">
                <span class="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-100 flex-shrink-0">A3.2</span>
                <span class="text-xs text-slate-700 font-medium">WhatsApp Business configurado para atención comercial</span>
              </div>
            </div>
          </div>

          <!-- Solución 2 Card -->
          <div class="bg-gradient-to-br from-slate-50 to-white border border-slate-300 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-slate-200/40 rounded-full blur-xl"></div>
            <div>
              <div class="flex items-center justify-between mb-4 border-b border-slate-200 pb-3">
                <h4 class="font-extrabold text-slate-800 text-base flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                  Solución Alternativa N° 2
                </h4>
                <span class="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Software Especializado</span>
              </div>
              <p class="text-xs text-slate-500 mb-4 leading-relaxed">
                Esquema de alto nivel de integración técnica y corporativa. Ofrece mayor automatización de catálogo y procesamiento web, pero introduce dependencias de licenciamiento, soporte TI y costos.
              </p>
            </div>
            <div class="space-y-2">
              <div class="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-150">
                <span class="bg-slate-50 text-slate-750 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 flex-shrink-0">A1.1b</span>
                <span class="text-xs text-slate-655 font-medium">Software especializado de inventario (Zoho/Odoo)</span>
              </div>
              <div class="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-150">
                <span class="bg-slate-50 text-slate-750 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 flex-shrink-0">A2.1-3</span>
                <span class="text-xs text-slate-655 font-medium">Formularios de ventas, base de clientes y seguimiento</span>
              </div>
              <div class="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-150">
                <span class="bg-slate-50 text-slate-750 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 flex-shrink-0">A3.1b</span>
                <span class="text-xs text-slate-655 font-medium">Tienda virtual e-commerce con pasarela (Shopify)</span>
              </div>
              <div class="flex items-center gap-2 bg-white p-2 rounded-lg border border-slate-150">
                <span class="bg-slate-50 text-slate-750 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 flex-shrink-0">A3.2</span>
                <span class="text-xs text-slate-655 font-medium">WhatsApp Business configurado para atención comercial</span>
              </div>
            </div>
          </div>

        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <thead class="bg-teal-900 text-teal-50 text-xs uppercase tracking-wider">
              <tr>
                <th class="p-4 font-bold w-1/4">Componente</th>
                <th class="p-4 font-bold">Solución Alternativa N° 1 (Elegida)</th>
                <th class="p-4 font-bold">Solución Alternativa N° 2</th>
              </tr>
            </thead>
            <tbody class="text-sm text-slate-700 divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold bg-slate-50/50">C1: Control de inventario</td>
                <td class="p-4 text-emerald-850 font-medium bg-emerald-50/10">Plantilla en Google Sheets con alertas de stock (A1.1a)</td>
                <td class="p-4 text-slate-600">Software de inventario especializado como Odoo o Zoho (A1.1b)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold bg-slate-50/50">C2: Gestión de ventas y clientes</td>
                <td class="p-4 text-emerald-850 font-medium bg-emerald-50/10">Formulario de ventas + Base de clientes + Seguimiento de pedidos en Google Sheets (A2.1 + A2.2 + A2.3)</td>
                <td class="p-4 text-slate-600">Formulario de ventas + Base de clientes + Seguimiento de pedidos en Google Sheets (A2.1 + A2.2 + A2.3)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold bg-slate-50/50">C3: Atención digital al cliente</td>
                <td class="p-4 text-emerald-850 font-medium bg-emerald-50/10">Catálogo digital en PDF/imagen compartible por WhatsApp + WhatsApp Business configurado (A3.1a + A3.2)</td>
                <td class="p-4 text-slate-600">Tienda virtual en plataforma e-commerce + WhatsApp Business configurado (A3.1b + A3.2)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECCIÓN 3 — Evaluación de las Soluciones Alternativas -->
      <section class="border-t border-slate-100 pt-10">
        <div class="mb-8 flex items-center gap-4">
          <div class="p-4 bg-teal-100 rounded-2xl">
            <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-3xl font-black text-teal-950 tracking-tight">3. Evaluación de las Soluciones Alternativas</h2>
            <p class="text-teal-600 font-bold text-sm">Ponderación con Juicio de Expertos</p>
          </div>
        </div>

        <p class="text-slate-600 leading-relaxed text-lg mb-6">
          Se aplica el método de <strong>Juicio de Expertos</strong> con criterios ponderados, considerando las características reales de la Florería Adonai: microempresa, sin personal técnico, uso exclusivo desde celular y sin presupuesto para software especializado.
        </p>

        <h4 class="text-xl font-bold text-teal-900 mb-4">Criterios y escala de evaluación</h4>
        
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <thead class="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider border-b border-slate-200">
              <tr>
                <th class="p-4 font-bold w-1/4">Criterio</th>
                <th class="p-4 font-bold">Descripción</th>
                <th class="p-4 font-bold">Escala</th>
                <th class="p-4 font-bold w-24">Puntaje</th>
              </tr>
            </thead>
            <tbody class="text-sm text-slate-600 divide-y divide-slate-100">
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold text-slate-800">Viabilidad técnica</td>
                <td class="p-4">¿Puede implementarse con los recursos disponibles de la florería?</td>
                <td class="p-4 font-medium text-slate-500">Alta / Media / Baja</td>
                <td class="p-4 font-mono font-bold text-teal-700">3 / 2 / 1</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold text-slate-800">Costo de implementación</td>
                <td class="p-4">¿Qué tan accesible es económicamente para una microempresa?</td>
                <td class="p-4 font-medium text-slate-500">Bajo / Medio / Alto</td>
                <td class="p-4 font-mono font-bold text-teal-700">3 / 2 / 1</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold text-slate-800">Facilidad de uso</td>
                <td class="p-4">¿Puede ser operado sin conocimientos técnicos, desde el celular?</td>
                <td class="p-4 font-medium text-slate-500">Alta / Media / Baja</td>
                <td class="p-4 font-mono font-bold text-teal-700">3 / 2 / 1</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold text-slate-800">Tiempo de implementación</td>
                <td class="p-4">¿Cuánto tiempo toma dejarlo operativo para la propietaria?</td>
                <td class="p-4 font-medium text-slate-500">Corto / Medio / Largo</td>
                <td class="p-4 font-mono font-bold text-teal-700">3 / 2 / 1</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold text-slate-800">Sostenibilidad</td>
                <td class="p-4">¿Puede mantenerse activo sin soporte técnico continuo?</td>
                <td class="p-4 font-medium text-slate-500">Alta / Media / Baja</td>
                <td class="p-4 font-mono font-bold text-teal-700">3 / 2 / 1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 class="text-xl font-bold text-teal-900 mb-4 mt-10">Matriz de evaluación ponderada</h4>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <thead class="bg-teal-900 text-teal-50 text-xs uppercase tracking-wider">
              <tr>
                <th class="p-4 font-bold">Criterio de Evaluación</th>
                <th class="p-4 font-bold w-32">Ponderación</th>
                <th class="p-4 font-bold">SA N° 1 – Herramientas Gratuitas</th>
                <th class="p-4 font-bold">SA N° 2 – Software Especializado</th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-slate-100 text-slate-700">
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-semibold text-slate-800">Viabilidad técnica</td>
                <td class="p-4 font-bold text-slate-600">25%</td>
                <td class="p-4"><span class="bg-emerald-50 text-emerald-800 font-bold px-2 py-1 rounded text-xs">Alta (3)</span></td>
                <td class="p-4"><span class="bg-rose-50 text-rose-800 font-bold px-2 py-1 rounded text-xs">Baja (1)</span></td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-semibold text-slate-800">Costo de implementación</td>
                <td class="p-4 font-bold text-slate-600">25%</td>
                <td class="p-4"><span class="bg-emerald-50 text-emerald-800 font-bold px-2 py-1 rounded text-xs">Bajo (3)</span></td>
                <td class="p-4"><span class="bg-rose-50 text-rose-800 font-bold px-2 py-1 rounded text-xs">Alto (1)</span></td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-semibold text-slate-800">Facilidad de uso</td>
                <td class="p-4 font-bold text-slate-600">20%</td>
                <td class="p-4"><span class="bg-emerald-50 text-emerald-800 font-bold px-2 py-1 rounded text-xs">Alta (3)</span></td>
                <td class="p-4"><span class="bg-amber-50 text-amber-800 font-bold px-2 py-1 rounded text-xs">Media (2)</span></td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-semibold text-slate-800">Tiempo de implementación</td>
                <td class="p-4 font-bold text-slate-600">15%</td>
                <td class="p-4"><span class="bg-emerald-50 text-emerald-800 font-bold px-2 py-1 rounded text-xs">Corto (3)</span></td>
                <td class="p-4"><span class="bg-rose-50 text-rose-800 font-bold px-2 py-1 rounded text-xs">Largo (1)</span></td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-semibold text-slate-800">Sostenibilidad</td>
                <td class="p-4 font-bold text-slate-600">15%</td>
                <td class="p-4"><span class="bg-emerald-50 text-emerald-800 font-bold px-2 py-1 rounded text-xs">Alta (3)</span></td>
                <td class="p-4"><span class="bg-rose-50 text-rose-800 font-bold px-2 py-1 rounded text-xs">Baja (1)</span></td>
              </tr>
              <!-- Totales -->
              <tr class="bg-slate-50 font-bold border-t-2 border-slate-200">
                <td class="p-4 text-slate-800 uppercase tracking-wider text-xs">Puntaje Total Ponderado</td>
                <td class="p-4 text-slate-800">100%</td>
                <td class="p-4 text-emerald-700 text-lg font-black font-mono">3.00</td>
                <td class="p-4 text-rose-700 text-lg font-black font-mono">1.20</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Fórmulas y Cálculos en alerta -->
        <div class="mt-4 bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col md:flex-row gap-6 text-xs text-slate-500 justify-between">
          <div>
            <span class="font-bold text-slate-700 block mb-1">Cálculo SA N° 1:</span>
            <span class="font-mono">(3×0.25) + (3×0.25) + (3×0.20) + (3×0.15) + (3×0.15) = 3.00</span>
          </div>
          <div>
            <span class="font-bold text-slate-700 block mb-1">Cálculo SA N° 2:</span>
            <span class="font-mono">(1×0.25) + (1×0.25) + (2×0.20) + (1×0.15) + (1×0.15) = 1.20</span>
          </div>
        </div>

        <h4 class="text-xl font-bold text-teal-900 mb-4 mt-10">Resultado de la evaluación</h4>

        <!-- Resultado de la evaluación visual scorecard -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- SA 1 ELEGIDA -->
          <div class="bg-gradient-to-br from-teal-50 to-white border-2 border-teal-500 rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-teal-100/40 rounded-full blur-xl"></div>
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="bg-teal-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                  ELEGIDA (SA N° 1)
                </span>
                <span class="text-3xl font-black text-teal-800 font-mono">3.00</span>
              </div>
              <h5 class="font-extrabold text-slate-900 text-base mb-2">Herramientas Gratuitas e Integradas</h5>
              <p class="text-sm text-slate-600 leading-relaxed">
                Google Sheets + Catálogo PDF + WhatsApp Business. Es <strong>viable, gratuita, operable desde el celular y sostenible</strong> en el mediano plazo sin requerir soporte técnico externo continuo.
              </p>
            </div>
          </div>

          <!-- SA 2 DESCARTADA -->
          <div class="bg-gradient-to-br from-rose-50 to-white border border-rose-200 rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div class="absolute -right-8 -bottom-8 w-24 h-24 bg-rose-100/40 rounded-full blur-xl"></div>
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                  DESCARTADA (SA N° 2)
                </span>
                <span class="text-3xl font-black text-rose-800 font-mono">1.20</span>
              </div>
              <h5 class="font-extrabold text-slate-900 text-base mb-2">Software Comercial Especializado</h5>
              <p class="text-sm text-slate-650 leading-relaxed">
                Odoo/Zoho + Tienda virtual e-commerce + WhatsApp Business. <strong>Descartada</strong> porque requiere presupuesto mensual, administración web técnica compleja y mantenimiento continuo fuera del alcance de la microempresa.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- SECCIÓN 4 — Solución Alternativa Seleccionada -->
      <section class="border-t border-slate-100 pt-10">
        <div class="mb-8 flex items-center gap-4">
          <div class="p-4 bg-teal-100 rounded-2xl">
            <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-3xl font-black text-teal-950 tracking-tight">4. Solución Alternativa Seleccionada</h2>
            <p class="text-teal-600 font-bold text-sm">Transformación digital básica mediante herramientas gratuitas y accesibles</p>
          </div>
        </div>

        <p class="text-slate-600 leading-relaxed text-lg mb-8">
          La solución elegida responde a las condiciones reales de la Florería Adonai: opera como microempresa local sin presupuesto para software, el personal no tiene formación técnica y toda la gestión operativa y de ventas se realiza desde el celular.
        </p>

        <!-- Tabla de la solución seleccionada -->
        <div class="overflow-x-auto mb-8">
          <table class="w-full text-left border-collapse bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <thead class="bg-teal-950 text-white text-xs uppercase tracking-wider">
              <tr>
                <th class="p-4 font-bold w-1/4">Componente</th>
                <th class="p-4 font-bold">Acción Seleccionada en el Proyecto</th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-slate-100 text-slate-700">
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold bg-slate-50/50">Control de inventario</td>
                <td class="p-4 text-slate-600">Plantilla en Google Sheets con categorías de flores frescas, secas, complementos y temporada; con alertas visuales de stock mínimo (A1.1a)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold bg-slate-50/50">Gestión de ventas</td>
                <td class="p-4 text-slate-600">Formulario de ventas con campos: fecha, producto, cantidad, precio y canal (presencial / WhatsApp); vista diferenciada por canal (A2.1 + A2.2 + A2.3)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold bg-slate-50/50">Base de clientes</td>
                <td class="p-4 text-slate-600">Registro de clientes frecuentes con nombre, contacto, preferencias e historial básico (A2.2)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold bg-slate-50/50">Catálogo digital</td>
                <td class="p-4 text-slate-600">Catálogo en PDF/imagen con fotos reales, nombre y precio de cada producto; compartible directamente por WhatsApp (A3.1a)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold bg-slate-50/50">Atención digital</td>
                <td class="p-4 text-slate-600">WhatsApp Business con perfil del negocio, etiquetas de pedidos y respuestas rápidas para las consultas más frecuentes (A3.2)</td>
              </tr>
              <tr class="hover:bg-slate-50">
                <td class="p-4 font-bold bg-slate-50/50">Guía de uso</td>
                <td class="p-4 text-slate-600">Manual práctico y sesión de demostración y entrenamiento para la propietaria y la vendedora del negocio</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 border border-teal-100 shadow-sm mt-8">
          <h3 class="text-xl font-bold text-teal-900 mb-3 flex items-center gap-2">
            <svg class="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            Impacto de la Solución Elegida
          </h3>
          <p class="text-slate-600 leading-relaxed text-sm">
            Esta solución permite a la <strong>Florería Adonai</strong> realizar una transición exitosa desde su situación actual —caracterizada por registros manuales en cuadernos físicos, control de inventario estimado de forma visual y un WhatsApp de uso personal saturado con pedidos— hacia un ecosistema de gestión digital básico. Todo esto de forma ordenada, sostenible en el tiempo y sin generar costos operativos adicionales para la microempresa.
          </p>
        </div>
      </section>
    </div>
  `
})
export class AnalisisAlternativasComponent {}
