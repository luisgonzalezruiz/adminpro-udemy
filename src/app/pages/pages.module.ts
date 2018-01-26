
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { SharedModule } from './../shared/shared.module';

//rutas relacionadas a las paginas
import { PAGES_ROUTES } from './pages.routes';



@NgModule({
    declarations: [
      PagesComponent,
      DashboardComponent,
      ProgressComponent,
      Graficas1Component
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
  })
  export class PagesModule { }