import { Routes } from '@angular/router';
import { RegisterPersonComponent } from './modules/people/pages/register-person/register-person.component';
import { RegisteredPersonsComponent } from './modules/people/pages/registered-persons/registered-persons.component';

export const routes: Routes = [
    {
        path: '',
        component: RegisterPersonComponent
    },
    {
        path: 'registered-persons',
        component: RegisteredPersonsComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
