import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    },
    {
        path: 'experience',
        loadComponent: () => import('./pages/experience/experience.component').then(m => m.ExperienceComponent),
    },
    {
        path: 'education',
        loadComponent: () => import('./pages/education/education.component').then(m => m.EducationComponent),
    },
    {
        path: 'project',
        loadComponent: () => import('./pages/project/project.component').then(m => m.ProjectComponent),
    },
    {
        path: 'skill',
        loadComponent: () => import('./pages/skill/skill.component').then(m => m.SkillComponent),
    },
    {
        path: '**',
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    }
];
