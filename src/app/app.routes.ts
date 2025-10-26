import { Routes } from '@angular/router';
import { ErrorPage } from './shared/error-page/error-page';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes').then(m => m.routes)
    },
    {
        path: 'heroes',
        loadChildren: () => import('./heroes/heroes.routes').then(m => m.routesHeroe)
    },
    {
        path:'404',
        component: ErrorPage
    },
    {
        path: '**',
        redirectTo: '404'
    },
    
];
