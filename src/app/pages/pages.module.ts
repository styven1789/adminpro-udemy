import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

// Modulos
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesRoutingModule } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }
