
import { RouterModule, Routes } from '@angular/router';

import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';


//asi definimos las rutas hijas, esto significa que dentro de un componente tenemos definido otras rutas
//es sirve para separar fisicamente dos template diferentes, ejemplo login y register que no son iguales al resto

const appRoutes: Routes = [
    { path: '',
      component: PagesComponent,
      children: [
        { path: 'dashboar', component: DashboardComponent},
        { path: 'progress', component: ProgressComponent},
        { path: 'graficas1', component: Graficas1Component},
        { path: '', redirectTo: '/dashboar', pathMatch: 'full'},
      ]
    },

    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot ( appRoutes, { useHash: true });