import { Routes } from '@angular/router';
import { ResumenComponent } from './pages/resumen/resumen';
import { EntradasComponent } from './pages/entradas/entradas';
import { HerramientasComponent } from './pages/herramientas/herramientas';
import { AnalisisComponent } from './pages/analisis/analisis';
import { RepresentacionComponent } from './pages/representacion/representacion';
import { SalidasComponent } from './pages/salidas/salidas';

import { AnalisisProblemasComponent } from './pages/analisis-problemas/analisis-problemas';
import { AnalisisObjetivosComponent } from './pages/analisis-objetivos/analisis-objetivos';
import { AnalisisAlternativasComponent } from './pages/analisis-alternativas/analisis-alternativas';
import { MatrizMarcoLogicoComponent } from './pages/matriz-marco-logico/matriz-marco-logico';
import { AnalisisInvolucradosLayoutComponent } from './pages/analisis-involucrados-layout/analisis-involucrados-layout';
import { DesignThinkingComponent } from './pages/design-thinking/design-thinking';
import { IteracionDosComponent } from './pages/iteracion-dos/iteracion-dos.component';
import { GestionAlcanceComponent } from './pages/gestion-alcance/gestion-alcance.component';
import { LineaBaseCronogramaComponent } from './pages/linea-base-cronograma/linea-base-cronograma.component';
import { LineaBaseCostosComponent } from './pages/linea-base-costos/linea-base-costos';

export const routes: Routes = [
  { path: '', redirectTo: 'resumen', pathMatch: 'full' },
  { path: 'resumen', component: ResumenComponent },
  { 
    path: 'analisis', 
    component: AnalisisInvolucradosLayoutComponent,
    children: [
      { path: '', redirectTo: 'entradas', pathMatch: 'full' },
      { path: 'entradas', component: EntradasComponent },
      { path: 'herramientas', component: HerramientasComponent },
      { path: 'analisis', component: AnalisisComponent },
      { path: 'representacion', component: RepresentacionComponent },
      { path: 'salidas', component: SalidasComponent }
    ]
  },
  { path: 'analisis-problemas', component: AnalisisProblemasComponent },
  { path: 'analisis-objetivos', component: AnalisisObjetivosComponent },
  { path: 'analisis-alternativas', component: AnalisisAlternativasComponent },
  { path: 'design-thinking', component: DesignThinkingComponent },
  { path: 'fase2/design-thinking/iteracion-2', component: IteracionDosComponent },
  { path: 'matriz-marco-logico', component: MatrizMarcoLogicoComponent },
  { path: 'fase3/gestion-alcance', component: GestionAlcanceComponent },
  { path: 'fase3/linea-base-cronograma', component: LineaBaseCronogramaComponent },
  { path: 'fase3/linea-base-costos', component: LineaBaseCostosComponent },
  { path: '**', redirectTo: 'resumen' }
];
