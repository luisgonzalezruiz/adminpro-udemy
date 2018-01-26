
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';



//asi definimos las rutas hijas, esto significa que dentro de un componente tenemos definido otras rutas
//es sirve para separar fisicamente dos template diferentes, ejemplo login y register que no son iguales al resto

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot ( appRoutes, { useHash: true });