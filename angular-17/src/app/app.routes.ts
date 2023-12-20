import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'users',
        loadComponent: () => import('./users/users.component').then(m => m.UsersComponent),
    },
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
];
