import { RouterModule, Routes } from '@angular/router';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';
import { C3Component } from './components/c3/c3.component';

export const routes: Routes = [
        {
            path:'c1',
            component:C1Component
        },
        {
            path:'c2',
            loadComponent:() => import('./components/c2/c2.component').then((c)=>c.C2Component)
            
        },
        {
            path:'c3',
            component:C3Component
        }
    
];


