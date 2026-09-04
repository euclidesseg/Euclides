import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'euclides',
        loadComponent: () =>import('./Euclides/layouts/layout-home.component/layout-home.component').then(m => m.LayoutHomeComponent),
        children: [
            {
                path: '',
                redirectTo: 'about',
                pathMatch: 'full'
            },
            {
                path: 'about',
                loadComponent: () => import('./Euclides/pages/about-page/about-page.component')
            },
            {
                path: 'projects',
                loadComponent: () => import('./Euclides/pages/project-page/project-page.component')
            },
            {
                path: 'certifications',
                loadComponent: () => import('./Euclides/pages/certifications-page/certifications-page.component')
            },
            {
                path: 'experience',
                loadComponent: () => import('./Euclides/pages/experience-page/experience-page.component')
            },
            {
                path: 'contact',
                loadComponent: () => import('./Euclides/pages/contact-page/contact-page.component')
            },
            {
                path: 'articles',
                loadComponent: () => import('./Euclides/pages/articles-page/articles-page.component')
            },
            {
                path: 'projects/:title',
                loadComponent: () => import('./Euclides/pages/project-detail/project-detail.component')
            }
        ],
    },
    {
        path: '**',
        redirectTo: 'euclides',
    },
];
