import { Component } from '@angular/core';

@Component({
  selector: 'app-design-thinking',
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
    .postit-mesh {
      background-color: #fafaf9;
      background-image: radial-gradient(#e7e5e4 1px, transparent 1px);
      background-size: 16px 16px;
    }
  `],
  template: `
    <div class="space-y-12">
      <!-- SECCIÓN 0 — Encabezado y Contexto -->
      <section>
        <div class="mb-8 flex items-center gap-4">
          <div class="p-4 bg-teal-100 rounded-2xl">
            <svg class="w-10 h-10 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-3xl font-black text-teal-950 tracking-tight">Informe Integrado de Design Thinking</h2>
            <p class="text-teal-600 font-bold text-lg">Florería Adonai</p>
          </div>
        </div>
        
        <p class="text-slate-650 leading-relaxed text-lg mb-8">
          El presente informe unifica los entregables desarrollados para la aplicación de la metodología de <strong>Design Thinking</strong> al caso de la <strong>Florería Adonai</strong>, una microempresa local ubicada en Villa El Salvador, Lima, Perú. El problema central identificado es la gestión operativa y comercial ineficiente debido al uso de procesos manuales, baja digitalización, atención comercial poco organizada y limitada presencia digital.
        </p>

        <!-- Diagrama del Flujo Metodológico Trabajado -->
        <div class="bg-gradient-to-br from-slate-50 to-teal-50/30 p-8 rounded-3xl border border-slate-200/80 mb-6 relative overflow-hidden shadow-xs">
          <div class="absolute -right-20 -bottom-20 w-60 h-60 bg-teal-100/30 rounded-full blur-3xl"></div>
          <h4 class="font-extrabold text-teal-950 mb-8 text-center uppercase tracking-widest text-xs">Organización de las Etapas Desarrolladas</h4>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <!-- Línea de conexión horizontal (solo en pantallas grandes) -->
            <div class="hidden md:block absolute top-[43px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-200 via-violet-200 to-rose-200 z-0"></div>

            <!-- Etapa 1 -->
            <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center relative z-10 hover:shadow-md hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 group">
              <div class="w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4 border-4 border-teal-100 shadow-sm group-hover:scale-110 transition-transform duration-300">1</div>
              <h5 class="font-black text-slate-800 text-base mb-1">EMPATIZAR</h5>
              <p class="text-xs text-slate-500 leading-relaxed">Entender al cliente ideal (Rosa Martínez) y su entorno.</p>
              <div class="mt-3 text-[10px] font-bold text-teal-650 bg-teal-50 py-1 px-2.5 rounded-full inline-block">Mapa + Buyer Persona</div>
            </div>

            <!-- Etapa 2 -->
            <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center relative z-10 hover:shadow-md hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 group">
              <div class="w-14 h-14 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4 border-4 border-violet-100 shadow-sm group-hover:scale-110 transition-transform duration-300">2</div>
              <h5 class="font-black text-slate-800 text-base mb-1">DEFINIR</h5>
              <p class="text-xs text-slate-500 leading-relaxed">Agrupar ideas y priorizar las causas raíz del problema.</p>
              <div class="mt-3 text-[10px] font-bold text-violet-650 bg-violet-50 py-1 px-2.5 rounded-full inline-block">Diagrama de afinidad</div>
            </div>

            <!-- Etapa 3 -->
            <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center relative z-10 hover:shadow-md hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 group">
              <div class="w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4 border-4 border-amber-100 shadow-sm group-hover:scale-110 transition-transform duration-300">3</div>
              <h5 class="font-black text-slate-800 text-base mb-1">IDEAR</h5>
              <p class="text-xs text-slate-500 leading-relaxed">Diseñar propuestas comerciales de bajo costo.</p>
              <div class="mt-3 text-[10px] font-bold text-amber-650 bg-amber-50 py-1 px-2.5 rounded-full inline-block">Análisis SCAMPER</div>
            </div>

            <!-- Etapa 4 -->
            <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center relative z-10 hover:shadow-md hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 group">
              <div class="w-14 h-14 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-lg mx-auto mb-4 border-4 border-rose-100 shadow-sm group-hover:scale-110 transition-transform duration-300">4</div>
              <h5 class="font-black text-slate-800 text-base mb-1">PROTOTIPAR</h5>
              <p class="text-xs text-slate-500 leading-relaxed">Simular recorridos y validar flujos antes de construir.</p>
              <div class="mt-3 text-[10px] font-bold text-rose-650 bg-rose-50 py-1 px-2.5 rounded-full inline-block">Storyboards de validación</div>
            </div>

          </div>
        </div>
      </section>

      <!-- SECCIÓN 1 — Empatizar: Mapa de Empatía -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3">
          <span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg text-lg">1</span>
          Empatizar: Mapa de empatía de Rosa Martínez
        </h3>
        <p class="text-slate-655 leading-relaxed text-lg mb-8">
          Rosa Martínez representa a la cliente ideal de la Florería Adonai. Es una clienta local que compra flores y detalles para fechas especiales, valora la rapidez de respuesta, la claridad en precios y la confianza en que el arreglo floral coincida con lo ofrecido.
        </p>

        <!-- Gráfico del Mapa de Empatía Mejorado -->
        <div class="bg-slate-100 p-6 sm:p-8 rounded-3xl border border-slate-200/80 mb-8 shadow-inner relative overflow-hidden">
          <div class="absolute -right-20 -top-20 w-48 h-48 bg-sky-200/20 rounded-full blur-2xl"></div>
          <div class="absolute -left-20 -bottom-20 w-48 h-48 bg-emerald-200/20 rounded-full blur-2xl"></div>
          
          <h4 class="text-center font-extrabold text-teal-950 mb-8 uppercase tracking-widest text-xs">MAPA DE EMPATÍA - ROSA MARTÍNEZ</h4>
          
          <!-- Tablero del Mapa de Empatía -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
            
            <!-- Bloque OYE -->
            <div class="bg-white border-2 border-sky-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 relative group flex flex-col justify-between">
              <div class="absolute top-0 right-0 w-8 h-8 bg-sky-500/10 rounded-bl-2xl rounded-tr-xl flex items-center justify-center group-hover:bg-sky-500/25 transition-colors duration-300">
                <svg class="w-4 h-4 text-sky-650" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75V21m-3-10.5h.01M9 16.5h.01M9 12H5a2 2 0 00-2 2v4a2 2 0 002 2h4M9 12V8a6 6 0 0112 0v4H9z"></path>
                </svg>
              </div>
              <div>
                <h5 class="text-sky-850 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">¿Qué Oye?</h5>
                <ul class="space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0"></div>
                    <span>Familiares comentan fechas de cumpleaños y celebraciones.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0"></div>
                    <span>Amigos recomiendan negocios florales por WhatsApp o redes sociales.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0"></div>
                    <span>Compañeros piden detalles para aniversarios o fechas especiales de oficina.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0"></div>
                    <span>Escucha que otros negocios responden rápido y cuentan con catálogo digital.</span>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Bloque Central: PIENSA Y SIENTE (arriba) + CLIENTE CENTRAL (centro) + DICE Y HACE (abajo) -->
            <div class="space-y-6 flex flex-col justify-between">
              
              <!-- Qué piensa y siente -->
              <div class="bg-white border-2 border-indigo-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-300 relative group flex-1">
                <div class="absolute top-0 right-0 w-8 h-8 bg-indigo-500/10 rounded-bl-2xl rounded-tr-xl flex items-center justify-center group-hover:bg-indigo-500/25 transition-colors duration-300">
                  <svg class="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h5 class="text-indigo-850 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">¿Qué Piensa y Siente?</h5>
                <ul class="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></div>
                    <span>Quiere regalar algo verdaderamente bonito y significativo.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></div>
                    <span>Le preocupa comprar tarde o no encontrar disponibilidad.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></div>
                    <span>Busca cuidar su presupuesto y desea confiar en que el arreglo real será igual al de la foto.</span>
                  </li>
                </ul>
              </div>

              <!-- Cliente central Rosa Martínez -->
              <div class="bg-teal-900 border-2 border-teal-500 rounded-3xl p-6 text-center text-white relative overflow-hidden shadow-md group hover:scale-[1.02] transition-transform duration-300">
                <div class="absolute -right-12 -top-12 w-28 h-28 bg-teal-850 rounded-full blur-2xl opacity-40"></div>
                <div class="absolute -left-12 -bottom-12 w-28 h-28 bg-teal-800 rounded-full blur-2xl opacity-40"></div>
                <div class="relative z-10 flex flex-col items-center">
                  <div class="w-16 h-16 bg-teal-800 rounded-full border border-teal-400 flex items-center justify-center text-teal-300 shadow-sm mb-3">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <span class="block text-[9px] uppercase font-extrabold text-teal-300 tracking-widest mb-1">Cliente Central</span>
                  <h5 class="text-xl font-black tracking-tight">ROSA MARTÍNEZ</h5>
                  <p class="text-xs text-teal-200 mt-2 font-medium leading-relaxed">
                    Mujer de 35 años, vive en Villa El Salvador. Usa el celular todos los días y prefiere coordinar sus compras por WhatsApp.
                  </p>
                </div>
              </div>

              <!-- Qué dice y hace -->
              <div class="bg-white border-2 border-emerald-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 relative group flex-1">
                <div class="absolute top-0 right-0 w-8 h-8 bg-emerald-500/10 rounded-bl-2xl rounded-tr-xl flex items-center justify-center group-hover:bg-emerald-500/25 transition-colors duration-300">
                  <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
                <h5 class="text-emerald-850 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">¿Qué Dice y Hace?</h5>
                <ul class="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></div>
                    <span>Escribe por WhatsApp para consultar precios, stock y delivery.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></div>
                    <span>Pide fotos reales, compara opciones y compra en fechas especiales.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></div>
                    <span>Puede cambiar de florería de inmediato si demoran en responder.</span>
                  </li>
                </ul>
              </div>

            </div>

            <!-- Bloque VE -->
            <div class="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 relative group flex flex-col justify-between">
              <div class="absolute top-0 right-0 w-8 h-8 bg-amber-500/10 rounded-bl-2xl rounded-tr-xl flex items-center justify-center group-hover:bg-amber-500/25 transition-colors duration-300">
                <svg class="w-4 h-4 text-amber-650" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <div>
                <h5 class="text-amber-850 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">¿Qué Ve?</h5>
                <ul class="space-y-3.5 text-xs sm:text-sm text-slate-600">
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                    <span>Estados de WhatsApp con ofertas y promociones florales.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                    <span>Publicaciones de florerías competidoras en Facebook e Instagram.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                    <span>Fotos reales de arreglos florales compartidas por sus conocidos.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></div>
                    <span>Opciones muy variadas, pero sin información clara de precios referenciales.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <!-- Puntos de Dolor y Resultados en la parte inferior -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            <!-- Esfuerzos / Puntos de dolor -->
            <div class="bg-gradient-to-br from-rose-50 to-white border border-rose-200 rounded-2xl p-6 shadow-xs relative overflow-hidden group">
              <div class="absolute -right-8 -bottom-8 w-20 h-20 bg-rose-200/20 rounded-full blur-xl"></div>
              <h5 class="text-rose-850 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                ESFUERZOS / PUNTOS DE DOLOR
              </h5>
              <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></div><span>No encontrar un catálogo actualizado al momento de la compra.</span></li>
                <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></div><span>Tener que preguntar por mensaje privado uno por uno los precios de los arreglos.</span></li>
                <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></div><span>Demora excesiva en la atención comercial por WhatsApp.</span></li>
                <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></div><span>Dudar si el producto final será igual a la foto de referencia.</span></li>
                <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-400 flex-shrink-0"></div><span>Tener poco tiempo para comprar y buscar algo bonito con presupuesto limitado.</span></li>
              </ul>
            </div>

            <!-- Resultados / Ganancias -->
            <div class="bg-gradient-to-br from-teal-50 to-white border border-teal-200 rounded-2xl p-6 shadow-xs relative overflow-hidden group">
              <div class="absolute -right-8 -bottom-8 w-20 h-20 bg-teal-200/20 rounded-full blur-xl"></div>
              <h5 class="text-teal-850 font-bold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-teal-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                RESULTADOS / GANANCIAS
              </h5>
              <ul class="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-450 flex-shrink-0"></div><span>Elegir un arreglo floral adecuado cómodamente desde su celular.</span></li>
                <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-450 flex-shrink-0"></div><span>Recibir respuesta rápida, ver fotos reales, precios claros y opciones listas.</span></li>
                <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-450 flex-shrink-0"></div><span>Confirmar stock, horarios, entrega y formas de pago rápidamente.</span></li>
                <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-450 flex-shrink-0"></div><span>Sentir absoluta confianza de que el pedido llegará en perfectas condiciones.</span></li>
                <li class="flex items-start gap-2"><div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-450 flex-shrink-0"></div><span>Ahorrar tiempo y quedar excelente con la persona agasajada.</span></li>
              </ul>
            </div>

          </div>

        </div>

        <h4 class="font-bold text-teal-800 mb-4 flex items-center gap-2 text-base">
          <svg class="w-5 h-5 text-teal-650" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
          </svg>
          Síntesis del Mapa
        </h4>
        
        <div class="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm mb-6">
          <div class="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
            
            <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center md:col-span-2">
              <span class="text-[10px] font-black text-teal-600 uppercase block mb-1">Rosa Martínez</span>
              <p class="text-xs text-slate-500 font-semibold leading-relaxed">Trabajadora local, madre y compradora recurrente.</p>
            </div>

            <div class="text-teal-400 text-center rotate-90 md:rotate-0 flex justify-center"><svg class="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div>

            <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center md:col-span-2">
              <span class="text-[10px] font-black text-teal-600 uppercase block mb-1">Deseo Primario</span>
              <p class="text-xs text-slate-500 font-semibold leading-relaxed">Regalar flores de forma rápida, hermosa y confiable.</p>
            </div>

            <div class="text-teal-400 text-center rotate-90 md:rotate-0 flex justify-center"><svg class="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div>

            <div class="bg-teal-50 p-4 rounded-xl border border-teal-100 text-center md:col-span-2">
              <span class="text-[10px] font-black text-teal-700 uppercase block mb-1">Acción Requerida</span>
              <p class="text-xs text-teal-900 font-bold leading-relaxed">Catálogo dinámico, precios claros y atención simple vía WhatsApp.</p>
            </div>

          </div>
        </div>
      </section>

      <!-- SECCIÓN 2 — Empatizar: Buyer Persona -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3">
          <span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg text-lg">2</span>
          Empatizar: Buyer Persona de Rosa Martínez
        </h3>
        <p class="text-slate-655 leading-relaxed text-lg mb-8">
          El Buyer Persona permite convertir la información del mapa de empatía en un perfil más concreto de cliente ideal. Rosa Martínez no busca una experiencia compleja, sino una compra fácil, rápida y confiable desde su celular.
        </p>

        <!-- Ficha Premium del Buyer Persona -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          <!-- Lado Izquierdo: Perfil Visual y Canales -->
          <div class="bg-gradient-to-b from-teal-950 to-slate-900 text-white rounded-3xl p-6 flex flex-col justify-between items-center text-center relative overflow-hidden shadow-md">
            <div class="absolute -right-10 -top-10 w-32 h-32 bg-teal-800/30 rounded-full blur-2xl"></div>
            
            <div class="relative z-10 w-full flex flex-col items-center">
              <div class="w-24 h-24 bg-teal-850 rounded-full flex items-center justify-center text-teal-300 border-2 border-teal-500 shadow-inner mb-4">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h4 class="text-2xl font-black tracking-tight">Rosa Martínez</h4>
              <p class="text-teal-400 font-bold text-xs uppercase tracking-widest mt-1">Cliente Ideal / 35 Años</p>
              
              <div class="w-full border-t border-slate-800 my-4 pt-4 text-left space-y-3 text-xs text-slate-350">
                <div class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-teal-400 rounded-full"></span> <span><strong>Ubicación:</strong> Villa El Salvador, Lima</span></div>
                <div class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-teal-400 rounded-full"></span> <span><strong>Ocupación:</strong> Trabajadora administrativa</span></div>
                <div class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-teal-400 rounded-full"></span> <span><strong>Nivel digital:</strong> Alto en WhatsApp y Redes</span></div>
                <div class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-teal-400 rounded-full"></span> <span><strong>Hábitos:</strong> Compra en fechas importantes</span></div>
              </div>
            </div>

            <div class="w-full bg-teal-900/50 border border-teal-800 rounded-2xl p-4 text-xs mt-4">
              <span class="block font-black text-teal-300 uppercase tracking-widest text-[9px] mb-1">Canal de Contacto Preferido</span>
              <div class="flex items-center justify-center gap-2 font-bold text-teal-100">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                WhatsApp Business Comercial
              </div>
            </div>
          </div>

          <!-- Lado Derecho: Ficha Detallada de Dimensiones -->
          <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <!-- Retos -->
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-teal-300 transition-colors duration-300">
              <h5 class="font-extrabold text-teal-950 text-xs uppercase tracking-widest mb-3 flex items-center gap-2 text-teal-800">
                <svg class="w-4 h-4 text-teal-650" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                Retos Operativos
              </h5>
              <ul class="space-y-2 text-xs text-slate-600 list-disc list-inside">
                <li>Comprar de forma rápida desde su celular y sin ir a tienda.</li>
                <li>Encontrar opciones muy bien decoradas dentro del presupuesto.</li>
                <li>Confirmar de manera fiable stock de flores antes de transferir.</li>
              </ul>
            </div>

            <!-- Frustraciones -->
            <div class="bg-rose-50/50 p-5 rounded-2xl border border-rose-250/55 shadow-xs hover:border-rose-300 transition-colors duration-300">
              <h5 class="font-extrabold text-rose-950 text-xs uppercase tracking-widest mb-3 flex items-center gap-2 text-rose-800">
                <svg class="w-4 h-4 text-rose-650" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                Frustraciones Diarias
              </h5>
              <ul class="space-y-2 text-xs text-slate-700 list-disc list-inside">
                <li>Inexistencia de un catálogo digital estructurado de flores.</li>
                <li>Precios poco claros en redes que obligan a preguntar por chat.</li>
                <li>Demoras extremas de respuesta al consultar stock.</li>
              </ul>
            </div>

            <!-- Objetivos -->
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-teal-300 transition-colors duration-300">
              <h5 class="font-extrabold text-teal-950 text-xs uppercase tracking-widest mb-3 flex items-center gap-2 text-teal-800">
                <svg class="w-4 h-4 text-teal-650" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                Objetivos de Rosa
              </h5>
              <ul class="space-y-2 text-xs text-slate-600 list-disc list-inside">
                <li>Elegir arreglos desde su celular y ahorrar tiempo.</li>
                <li>Hacer un regalo emotivo sin complicaciones logísticas.</li>
                <li>Confiar en que el pedido coincidirá con la foto pactada.</li>
              </ul>
            </div>

            <!-- Criterios de Decisión -->
            <div class="bg-teal-50/40 p-5 rounded-2xl border border-teal-200 shadow-xs hover:border-teal-300 transition-colors duration-300">
              <h5 class="font-extrabold text-teal-950 text-xs uppercase tracking-widest mb-3 flex items-center gap-2 text-teal-900">
                <svg class="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                Promesa de Valor
              </h5>
              <p class="text-xs text-slate-700 leading-relaxed">
                Florería Adonai ofrece arreglos florales bonitos y de rápida consulta por catálogo en WhatsApp Business, con fotos reales, precios claros y trato cercano.
              </p>
            </div>

          </div>
        </div>

        <!-- Tabla Resumida de Ficha -->
        <div class="mb-10">
          <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table class="w-full text-left border-collapse text-sm">
              <thead>
                <tr class="bg-slate-100 border-b border-slate-200 text-teal-900">
                  <th class="p-4 font-bold w-1/4">Dimensión</th>
                  <th class="p-4 font-bold">Detalle Operativo del Negocio</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50">
                  <td class="p-4 font-bold text-slate-800">Criterio de Decisión</td>
                  <td class="p-4 text-slate-600">Precio accesible, buena presentación, rapidez de respuesta y absoluta confianza en la entrega.</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 font-bold text-slate-800">Frustraciones</td>
                  <td class="p-4 text-slate-600">Falta de catálogo, precios poco claros, demora en respuestas de chat e incertidumbre sobre el producto final.</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 font-bold text-slate-800">Estrategia de Atracción</td>
                  <td class="p-4 text-slate-600">Catálogo estructurado con fotos reales, precios claros de referencia, WhatsApp Business activo y promociones por campaña.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- SECCIÓN 3 — Definir: Diagrama de Afinidad -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3">
          <span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg text-lg">3</span>
          Definir: Diagrama de afinidad por causas
        </h3>
        <p class="text-slate-655 leading-relaxed text-lg mb-6">
          En esta etapa se ordenan las ideas surgidas de la lluvia de ideas con stakeholders. Como el problema central ya está identificado, las ideas se agrupan según las causas directas que ayudan a resolver.
        </p>

        <!-- Pizarra de Post-its Premium -->
        <div class="postit-mesh border border-stone-200 p-8 rounded-3xl shadow-inner mb-10 relative">
          <div class="absolute top-4 right-6 bg-stone-300/40 text-stone-700 text-[10px] font-extrabold uppercase px-2 py-1 rounded-md tracking-wider">Tablero de Stakeholders</div>
          <h4 class="font-extrabold text-stone-800 mb-8 flex items-center gap-2 text-sm uppercase tracking-wider">
            <span class="w-3 h-3 rounded-full bg-yellow-500 shadow-sm animate-pulse"></span>
            Lluvia de Ideas: Notas Adhesivas de Soluciones
          </h4>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            
            <!-- Post-it 1 -->
            <div class="relative bg-yellow-100 border border-yellow-200 text-yellow-950 p-5 rounded-lg shadow-md transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col justify-between h-40 group">
              <!-- Cinta Adhesiva simulada -->
              <div class="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-12 h-4 bg-white/40 border border-white/10 shadow-xs rotate-[-3deg] group-hover:rotate-0 transition-transform"></div>
              <span class="text-xs font-semibold leading-snug">Google Sheets para gestión de inventarios</span>
              <span class="text-[9px] uppercase font-black text-yellow-600 block border-t border-yellow-200/50 pt-2 mt-2">Propuso: Equipo TI + prop.</span>
            </div>

            <!-- Post-it 2 -->
            <div class="relative bg-emerald-100 border border-emerald-200 text-emerald-950 p-5 rounded-lg shadow-md transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col justify-between h-40 group">
              <div class="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-12 h-4 bg-white/40 border border-white/10 shadow-xs rotate-[2deg] group-hover:rotate-0 transition-transform"></div>
              <span class="text-xs font-semibold leading-snug">Configuración de WhatsApp Business</span>
              <span class="text-[9px] uppercase font-black text-emerald-600 block border-t border-emerald-200/50 pt-2 mt-2">Propuso: propietaria + cl.</span>
            </div>

            <!-- Post-it 3 -->
            <div class="relative bg-pink-100 border border-pink-200 text-pink-950 p-5 rounded-lg shadow-md transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col justify-between h-40 group">
              <div class="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-12 h-4 bg-white/40 border border-white/10 shadow-xs rotate-[-2deg] group-hover:rotate-0 transition-transform"></div>
              <span class="text-xs font-semibold leading-snug">Publicaciones periódicas en Instagram / FB</span>
              <span class="text-[9px] uppercase font-black text-pink-600 block border-t border-pink-200/50 pt-2 mt-2">Propuso: clientes + Equipo TI</span>
            </div>

            <!-- Post-it 4 -->
            <div class="relative bg-blue-100 border border-blue-200 text-blue-950 p-5 rounded-lg shadow-md transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col justify-between h-40 group">
              <div class="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-12 h-4 bg-white/40 border border-white/10 shadow-xs rotate-[1deg] group-hover:rotate-0 transition-transform"></div>
              <span class="text-xs font-semibold leading-snug">Google Forms para registrar datos de clientes</span>
              <span class="text-[9px] uppercase font-black text-blue-600 block border-t border-blue-200/50 pt-2 mt-2">Propuso: equipo TI</span>
            </div>

            <!-- Post-it 5 -->
            <div class="relative bg-purple-100 border border-purple-200 text-purple-950 p-5 rounded-lg shadow-md transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col justify-between h-40 group">
              <div class="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-12 h-4 bg-white/40 border border-white/10 shadow-xs rotate-[-2deg] group-hover:rotate-0 transition-transform"></div>
              <span class="text-xs font-semibold leading-snug">Diseño en Canva para folletos y post</span>
              <span class="text-[9px] uppercase font-black text-purple-600 block border-t border-purple-200/50 pt-2 mt-2">Propuso: equipo TI</span>
            </div>

            <!-- Post-it 6 -->
            <div class="relative bg-rose-100 border border-rose-200 text-rose-950 p-5 rounded-lg shadow-md transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col justify-between h-40 group">
              <div class="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-12 h-4 bg-white/40 border border-white/10 shadow-xs rotate-[3deg] group-hover:rotate-0 transition-transform"></div>
              <span class="text-xs font-semibold leading-snug">Trello para organizar tareas y entregas</span>
              <span class="text-[9px] uppercase font-black text-rose-600 block border-t border-rose-200/50 pt-2 mt-2">Propuso: equipo TI</span>
            </div>

            <!-- Post-it 7 -->
            <div class="relative bg-amber-100 border border-amber-200 text-amber-950 p-5 rounded-lg shadow-md transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col justify-between h-40 group">
              <div class="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-12 h-4 bg-white/40 border border-white/10 shadow-xs rotate-[-1deg] group-hover:rotate-0 transition-transform"></div>
              <span class="text-xs font-semibold leading-snug">Google Calendar para planificar campañas</span>
              <span class="text-[9px] uppercase font-black text-amber-600 block border-t border-amber-200/50 pt-2 mt-2">Propuso: equipo TI + prop.</span>
            </div>

            <!-- Post-it 8 -->
            <div class="relative bg-teal-100 border border-teal-200 text-teal-950 p-5 rounded-lg shadow-md transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col justify-between h-40 group">
              <div class="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-12 h-4 bg-white/40 border border-white/10 shadow-xs rotate-[2deg] group-hover:rotate-0 transition-transform"></div>
              <span class="text-xs font-semibold leading-snug">Código QR físico para consulta de catálogo</span>
              <span class="text-[9px] uppercase font-black text-teal-600 block border-t border-teal-200/50 pt-2 mt-2">Propuso: equipo TI + clientes</span>
            </div>

            <!-- Post-it 9 -->
            <div class="relative bg-yellow-100 border border-yellow-200 text-yellow-950 p-5 rounded-lg shadow-md transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col justify-between h-40 group">
              <div class="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-12 h-4 bg-white/40 border border-white/10 shadow-xs rotate-[-3deg] group-hover:rotate-0 transition-transform"></div>
              <span class="text-xs font-semibold leading-snug">Lista digital estructurada de precios</span>
              <span class="text-[9px] uppercase font-black text-yellow-600 block border-t border-yellow-200/50 pt-2 mt-2">Propuso: vendedora + cl.</span>
            </div>

            <!-- Post-it 10 -->
            <div class="relative bg-sky-100 border border-sky-200 text-sky-950 p-5 rounded-lg shadow-md transform -rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 flex flex-col justify-between h-40 group">
              <div class="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-12 h-4 bg-white/40 border border-white/10 shadow-xs rotate-[1deg] group-hover:rotate-0 transition-transform"></div>
              <span class="text-xs font-semibold leading-snug">Plantilla de registro diario de ventas</span>
              <span class="text-[9px] uppercase font-black text-sky-600 block border-t border-sky-200/50 pt-2 mt-2">Propuso: propietaria</span>
            </div>

          </div>
        </div>

        <!-- Categorización detallada por causas -->
        <div class="space-y-6 mb-10">
          <h4 class="font-bold text-teal-800 mb-4 text-base">Agrupación Temática por Causas</h4>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- Causa 1 -->
            <div class="bg-white border-l-4 border-teal-600 rounded-r-2xl p-5 shadow-sm border-y border-r border-slate-200 hover:shadow transition-shadow">
              <span class="text-teal-700 font-extrabold text-[10px] uppercase tracking-wider block mb-1">Causa 1</span>
              <h5 class="font-bold text-slate-800 text-sm mb-2">Control de Inventario Informal</h5>
              <p class="text-xs text-slate-650 leading-relaxed mb-4">
                Google Sheets de inventario por categorías (flores, peluches, globos, chocolates), registro de entradas/salidas y stock real con alertas manuales y formato para pedidos al proveedor.
              </p>
              <span class="bg-slate-100 text-slate-500 font-bold px-2 py-0.5 rounded text-[10px]">Relacionados: Propietaria, Vendedora, Proveedor</span>
            </div>

            <!-- Causa 2 -->
            <div class="bg-white border-l-4 border-violet-600 rounded-r-2xl p-5 shadow-sm border-y border-r border-slate-200 hover:shadow transition-shadow">
              <span class="text-violet-700 font-extrabold text-[10px] uppercase tracking-wider block mb-1">Causa 2</span>
              <h5 class="font-bold text-slate-800 text-sm mb-2">Registro de Ventas Manual e Incompleto</h5>
              <p class="text-xs text-slate-650 leading-relaxed mb-4">
                Plantilla en Google Sheets para ventas diarias (fecha, cantidad, precio, canal de venta), reporte semanal, ventas de prueba y organización con Trello.
              </p>
              <span class="bg-slate-100 text-slate-500 font-bold px-2 py-0.5 rounded text-[10px]">Relacionados: Propietaria, Vendedora, Equipo TI</span>
            </div>

            <!-- Causa 3 -->
            <div class="bg-white border-l-4 border-amber-600 rounded-r-2xl p-5 shadow-sm border-y border-r border-slate-200 hover:shadow transition-shadow">
              <span class="text-amber-700 font-extrabold text-[10px] uppercase tracking-wider block mb-1">Causa 3</span>
              <h5 class="font-bold text-slate-800 text-sm mb-2">Gestión Desordenada de Clientes</h5>
              <p class="text-xs text-slate-650 leading-relaxed mb-4">
                Google Forms de registro de clientes frecuentes, base de datos básica con preferencias, encuestas breves y promociones por WhatsApp.
              </p>
              <span class="bg-slate-100 text-slate-500 font-bold px-2 py-0.5 rounded text-[10px]">Relacionados: Propietaria, Clientes</span>
            </div>

            <!-- Causa 4 -->
            <div class="bg-white border-l-4 border-rose-600 rounded-r-2xl p-5 shadow-sm border-y border-r border-slate-200 hover:shadow transition-shadow">
              <span class="text-rose-700 font-extrabold text-[10px] uppercase tracking-wider block mb-1">Causa 4</span>
              <h5 class="font-bold text-slate-800 text-sm mb-2">Atención Comercial Poco Organizada</h5>
              <p class="text-xs text-slate-650 leading-relaxed mb-4">
                WhatsApp Business, respuestas rápidas de atención comercial, lista digital de precios para vendedora, QR para catálogo físico y guía para familiares.
              </p>
              <span class="bg-slate-100 text-slate-500 font-bold px-2 py-0.5 rounded text-[10px]">Relacionados: Propietaria, Vendedora, Clientes</span>
            </div>

          </div>
        </div>
      </section>

      <!-- SECCIÓN 4 — Idear: Diagrama SCAMPER -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3">
          <span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg text-lg">4</span>
          Idear: Diagrama SCAMPER
        </h3>
        <p class="text-slate-655 leading-relaxed text-lg mb-6">
          SCAMPER se utiliza para generar ideas de solución a partir del problema existente. En este caso, las propuestas son planteadas por el integrante experto del equipo: un desarrollador web con conocimiento en transformación digital y soluciones digitales de bajo costo.
        </p>

        <!-- SCAMPER Cards Mejoradas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          
          <!-- S -->
          <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div class="bg-gradient-to-r from-rose-500 to-rose-600 text-white p-4 flex items-center gap-3">
              <span class="text-3xl font-black">S</span>
              <div>
                <h5 class="font-extrabold text-sm tracking-widest uppercase">Sustituir</h5>
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Sustituir el cuaderno de ventas y el control visual del inventario por plantillas en Google Sheets; cambiar WhatsApp personal por WhatsApp Business.</p>
              <span class="bg-rose-50 text-rose-700 text-[10px] font-bold py-1 px-2.5 rounded-full inline-block">Atiende: inventario informal y ventas manuales</span>
            </div>
          </div>

          <!-- C -->
          <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div class="bg-gradient-to-r from-orange-500 to-orange-655 text-white p-4 flex items-center gap-3">
              <span class="text-3xl font-black">C</span>
              <div>
                <h5 class="font-extrabold text-sm tracking-widest uppercase">Combinar</h5>
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Combinar WhatsApp Business, catálogo digital, lista de precios y formularios de pedido en un solo flujo comercial estructurado.</p>
              <span class="bg-orange-50 text-orange-700 text-[10px] font-bold py-1 px-2.5 rounded-full inline-block">Atiende: clientes desordenados y atención lenta</span>
            </div>
          </div>

          <!-- A -->
          <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div class="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-4 flex items-center gap-3">
              <span class="text-3xl font-black">A</span>
              <div>
                <h5 class="font-extrabold text-sm tracking-widest uppercase">Adaptar</h5>
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Adaptar prácticas comerciales simples de tiendas digitales de bajo costo a la florería, tales como fotos reales y respuestas predefinidas.</p>
              <span class="bg-amber-50 text-amber-800 text-[10px] font-bold py-1 px-2.5 rounded-full inline-block">Atiende: baja digitalización y falta de catálogo</span>
            </div>
          </div>

          <!-- M -->
          <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div class="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-4 flex items-center gap-3">
              <span class="text-3xl font-black">M</span>
              <div>
                <h5 class="font-extrabold text-sm tracking-widest uppercase">Modificar</h5>
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Modificar el catálogo para presentar los productos como "paquetes por ocasión" listos para llevar (cumpleaños, aniversarios, etc.).</p>
              <span class="bg-emerald-50 text-emerald-700 text-[10px] font-bold py-1 px-2.5 rounded-full inline-block">Atiende: presentación comercial poco atractiva</span>
            </div>
          </div>

          <!-- P -->
          <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div class="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 flex items-center gap-3">
              <span class="text-3xl font-black">P</span>
              <div>
                <h5 class="font-extrabold text-sm tracking-widest uppercase">Poner otro uso</h5>
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Usar estados diarios de WhatsApp como vitrina de ofertas, fotos antiguas como base del catálogo y códigos QR impresos en tienda.</p>
              <span class="bg-teal-50 text-teal-700 text-[10px] font-bold py-1 px-2.5 rounded-full inline-block">Atiende: contactos dispersos y bajo alcance</span>
            </div>
          </div>

          <!-- E -->
          <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div class="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-4 flex items-center gap-3">
              <span class="text-3xl font-black">E</span>
              <div>
                <h5 class="font-extrabold text-sm tracking-widest uppercase">Eliminar</h5>
              </div>
            </div>
            <div class="p-5 flex-1 flex flex-col justify-between">
              <p class="text-xs text-slate-600 leading-relaxed mb-4">Eliminar llamadas de consulta de precios a la dueña, registros duplicados, mensajes personales mezclados en chat y campos de planilla complejos.</p>
              <span class="bg-indigo-50 text-indigo-700 text-[10px] font-bold py-1 px-2.5 rounded-full inline-block">Atiende: demoras y dependencia operativa de dueña</span>
            </div>
          </div>

        </div>

        <!-- Flujo comercial optimizado por experto -->
        <div class="bg-slate-100/50 p-6 sm:p-8 rounded-3xl border border-slate-200 mb-8 relative">
          <h4 class="font-extrabold text-teal-950 mb-8 text-center uppercase tracking-widest text-xs">Flujo Comercial Optimizado Propuesto por el Experto</h4>
          
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
            
            <!-- Step 1 -->
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center relative hover:scale-105 hover:shadow-md transition-all duration-300">
              <span class="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-black text-sm mx-auto mb-3 border-4 border-teal-100 shadow-sm">1</span>
              <h5 class="text-xs font-black text-slate-800 uppercase mb-1">Catálogo</h5>
              <p class="text-[11px] text-slate-500 leading-normal">Cliente ve catálogo con fotos reales y precios.</p>
            </div>

            <!-- Step 2 -->
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center relative hover:scale-105 hover:shadow-md transition-all duration-300">
              <span class="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-black text-sm mx-auto mb-3 border-4 border-teal-100 shadow-sm">2</span>
              <h5 class="text-xs font-black text-slate-800 uppercase mb-1">Consulta</h5>
              <p class="text-[11px] text-slate-500 leading-normal">Consulta directa al WhatsApp Business.</p>
            </div>

            <!-- Step 3 -->
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center relative hover:scale-105 hover:shadow-md transition-all duration-300">
              <span class="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-black text-sm mx-auto mb-3 border-4 border-teal-100 shadow-sm">3</span>
              <h5 class="text-xs font-black text-slate-800 uppercase mb-1">Stock</h5>
              <p class="text-[11px] text-slate-500 leading-normal">Vendedora confirma precios y stock en Google Sheets.</p>
            </div>

            <!-- Step 4 -->
            <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm text-center relative hover:scale-105 hover:shadow-md transition-all duration-300">
              <span class="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-black text-sm mx-auto mb-3 border-4 border-teal-100 shadow-sm">4</span>
              <h5 class="text-xs font-black text-slate-800 uppercase mb-1">Confirmación</h5>
              <p class="text-[11px] text-slate-500 leading-normal">Se pacta producto, precio, abono y delivery.</p>
            </div>

            <!-- Step 5 -->
            <div class="bg-teal-900 text-white p-5 rounded-2xl border border-teal-800 shadow-md text-center relative hover:scale-105 transition-all duration-300">
              <span class="w-10 h-10 rounded-full bg-teal-300 text-teal-950 flex items-center justify-center font-black text-sm mx-auto mb-3 border-4 border-teal-850 shadow-sm">5</span>
              <h5 class="text-xs font-black uppercase mb-1">Registro</h5>
              <p class="text-[11px] text-teal-200 leading-normal">Venta en Sheets y datos del cliente guardados.</p>
            </div>

          </div>
        </div>
      </section>

      <!-- SECCIÓN 5 — Prototipar: Storyboards -->
      <section class="border-t border-slate-100 pt-10">
        <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3">
          <span class="bg-rose-100 text-rose-700 px-3 py-1 rounded-lg text-lg">5</span>
          Prototipar: Storyboards de validación
        </h3>
        <p class="text-slate-655 leading-relaxed text-lg mb-6">
          La fase Prototipar convierte las ideas seleccionadas en representaciones visuales que permiten revisar el funcionamiento de la solución antes de implementarla. Para este caso, los prototipos se presentan como tres storyboards de seis escenas, centrados en la experiencia de compra, la atención interna y la campaña digital.
        </p>

        <!-- Detalles de Storyboards Contexto -->
        <div class="space-y-8 mb-10">
          
          <!-- Storyboard 1 Detalle -->
          <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6">
            <h4 class="font-bold text-slate-800 text-lg mb-2">Storyboard 1: Pedido digital de Rosa Martínez</h4>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
              Este storyboard representa el recorrido de Rosa Martínez, cliente ideal de la Florería Adonai, desde que recuerda una fecha especial hasta que recibe la confirmación del arreglo floral.
            </p>

            <!-- Imagen del Storyboard -->
            <div class="bg-white p-2 border border-slate-200 rounded-2xl mb-6 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-200">
              <img src="/storyboard1.jpeg" alt="Storyboard 1: Pedido digital de Rosa Martínez" class="w-full h-auto rounded-xl object-contain max-h-[500px] mx-auto">
            </div>

            <div class="overflow-x-auto rounded-xl border border-slate-200">
              <table class="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr class="bg-slate-100 border-b border-slate-200 text-teal-900">
                    <th class="p-3.5 font-bold w-1/3">Elemento</th>
                    <th class="p-3.5 font-bold">Descripción</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr>
                    <td class="p-3.5 font-bold text-slate-800">Tipo de prototipo</td>
                    <td class="p-3.5 text-slate-600">Storyboard de experiencia del cliente.</td>
                  </tr>
                  <tr>
                    <td class="p-3.5 font-bold text-slate-800">Objetivo</td>
                    <td class="p-3.5 text-slate-600">Validar si el proceso de compra por WhatsApp Business resulta claro, rápido y confiable para Rosa Martínez.</td>
                  </tr>
                  <tr>
                    <td class="p-3.5 font-bold text-slate-800">Solución representada</td>
                    <td class="p-3.5 text-slate-600">Catálogo digital, WhatsApp Business, precios visibles y confirmación de entrega.</td>
                  </tr>
                  <tr>
                    <td class="p-3.5 font-bold text-slate-800">Indicador de validación</td>
                    <td class="p-3.5 text-slate-600">El recorrido se entiende sin explicación adicional y no contiene pasos innecesarios para el cliente.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Storyboard 2 Detalle -->
          <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6">
            <h4 class="font-bold text-slate-800 text-lg mb-2">Storyboard 2: Atención interna con lista de precios e inventario</h4>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
              Este storyboard muestra cómo la vendedora puede atender mejor usando una lista digital de precios y una plantilla de inventario, reduciendo notablemente la dependencia de la memoria de la propietaria.
            </p>

            <!-- Imagen del Storyboard -->
            <div class="bg-white p-2 border border-slate-200 rounded-2xl mb-6 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-200">
              <img src="/storyboard2.jpeg" alt="Storyboard 2: Atención interna con lista de precios e inventario" class="w-full h-auto rounded-xl object-contain max-h-[500px] mx-auto">
            </div>

            <div class="overflow-x-auto rounded-xl border border-slate-200">
              <table class="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr class="bg-slate-100 border-b border-slate-200 text-teal-900">
                    <th class="p-3.5 font-bold w-1/3">Elemento</th>
                    <th class="p-3.5 font-bold">Descripción</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr>
                    <td class="p-3.5 font-bold text-slate-800">Tipo de prototipo</td>
                    <td class="p-3.5 text-slate-600">Storyboard de proceso interno del negocio.</td>
                  </tr>
                  <tr>
                    <td class="p-3.5 font-bold text-slate-800">Objetivo</td>
                    <td class="p-3.5 text-slate-600">Validar si la lista de precios y el inventario digital facilitan de manera concreta la atención diaria de la vendedora.</td>
                  </tr>
                  <tr>
                    <td class="p-3.5 font-bold text-slate-800">Solución representada</td>
                    <td class="p-3.5 text-slate-600">Google Sheets para precios, control de stock y registro rápido de ventas.</td>
                  </tr>
                  <tr>
                    <td class="p-3.5 font-bold text-slate-800">Indicador de validación</td>
                    <td class="p-3.5 text-slate-600">La vendedora puede confirmar el precio y la disponibilidad al cliente sin tener que llamar repetidamente a la propietaria.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Storyboard 3 Detalle -->
          <div class="bg-slate-50 border border-slate-200 rounded-3xl p-6">
            <h4 class="font-bold text-slate-800 text-lg mb-2">Storyboard 3: Campaña digital y fidelización</h4>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
              Este storyboard representa cómo la Florería Adonai puede preparar una campaña sencilla en redes sociales y convertir las consultas entrantes en clientes frecuentes del negocio.
            </p>

            <!-- Imagen del Storyboard -->
            <div class="bg-white p-2 border border-slate-200 rounded-2xl mb-6 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-200">
              <img src="/storyboard3.jpeg" alt="Storyboard 3: Campaña digital y fidelización" class="w-full h-auto rounded-xl object-contain max-h-[500px] mx-auto">
            </div>

            <div class="overflow-x-auto rounded-xl border border-slate-200">
              <table class="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr class="bg-slate-100 border-b border-slate-200 text-teal-900">
                    <th class="p-3.5 font-bold w-1/3">Elemento</th>
                    <th class="p-3.5 font-bold">Descripción</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  <tr>
                    <td class="p-3.5 font-bold text-slate-800">Tipo de prototipo</td>
                    <td class="p-3.5 text-slate-600">Storyboard de comunicación comercial externa.</td>
                  </tr>
                  <tr>
                    <td class="p-3.5 font-bold text-slate-800">Objetivo</td>
                    <td class="p-3.5 text-slate-655">Validar si una campaña digital simple en redes puede atraer consultas reales y alimentar la base de clientes.</td>
                  </tr>
                  <tr>
                    <td class="p-3.5 font-bold text-slate-800">Solución representada</td>
                    <td class="p-3.5 text-slate-655">Diseños en Canva, publicaciones, WhatsApp Business y base de datos de clientes frecuentes.</td>
                  </tr>
                  <tr>
                    <td class="p-3.5 font-bold text-slate-800">Indicador de validación</td>
                    <td class="p-3.5 text-slate-655">La publicación comunica de manera sumamente clara el producto, su precio referencial y el canal rápido de atención.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <!-- Validación rápida de los storyboards -->
        <div>
          <h4 class="font-bold text-teal-800 mb-4 text-base">Validación rápida de los storyboards</h4>
          <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table class="w-full text-left border-collapse text-sm">
              <thead>
                <tr class="bg-slate-100 border-b border-slate-200 text-teal-900">
                  <th class="p-4 font-bold w-1/3">Storyboard</th>
                  <th class="p-4 font-bold w-5/12">Pregunta de validación</th>
                  <th class="p-4 font-bold">A quién se consulta</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="hover:bg-slate-50">
                  <td class="p-4 font-bold text-slate-800">Pedido digital de Rosa Martínez</td>
                  <td class="p-4 text-slate-600">¿El recorrido de compra se entiende de inicio a fin?</td>
                  <td class="p-4 text-slate-600 font-semibold">Clientes actuales o familiares con perfil de consumo similar.</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 font-bold text-slate-800">Atención interna con lista e inventario</td>
                  <td class="p-4 text-slate-600">¿La vendedora entiende qué debe revisar antes de confirmar un pedido?</td>
                  <td class="p-4 text-slate-600 font-semibold">Vendedora y propietaria del negocio.</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-4 font-bold text-slate-800">Campaña digital y fidelización</td>
                  <td class="p-4 text-slate-600">¿La promoción comunica claramente qué se vende y cómo solicitarlo?</td>
                  <td class="p-4 text-slate-600 font-semibold">Propietaria, clientes actuales de la tienda y el equipo estudiantil.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- CIERRE INTEGRADOR -->
      <section class="border-t border-slate-100 pt-10">
        <div class="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 border border-teal-100 shadow-sm">
          <h3 class="text-2xl font-black text-teal-900 mb-4 flex items-center gap-3">
            <svg class="w-7 h-7 text-teal-650" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            Cierre integrador
          </h3>
          <p class="text-slate-650 leading-relaxed text-lg mb-4">
            El desarrollo de Design Thinking aplicado a la Florería Adonai permite pasar de la comprensión del usuario a la representación visual de soluciones concretas. El mapa de empatía y el Buyer Persona muestran que Rosa Martínez necesita una compra rápida, clara y confiable. El diagrama de afinidad organiza las ideas de solución según las causas reales del problema. SCAMPER transforma esas necesidades en propuestas viables, simples y de bajo costo para una microempresa. Finalmente, los storyboards permiten prototipar los recorridos principales antes de implementar las herramientas.
          </p>
          <p class="text-slate-655 leading-relaxed text-lg font-medium text-teal-950">
            La propuesta prioriza herramientas accesibles como WhatsApp Business, Google Sheets, catálogo digital, lista de precios, base de clientes frecuentes, publicaciones en redes sociales, planificación básica de campañas y validación visual mediante storyboards.
          </p>
        </div>
      </section>
    </div>
  `
})
export class DesignThinkingComponent {}
