import { Routes } from '@angular/router';
import { RegisterPersonComponent } from './modules/people/pages/register-person/register-person.component';
import { RegisteredPersonsComponent } from './modules/people/pages/registered-persons/registered-persons.component';
import { PersonService } from './modules/people/services/person.service';

export const routes: Routes = [
    {
        path: '',
        component: RegisterPersonComponent,
        providers: [PersonService]
    },
    {
        path: 'registered-persons',
        component: RegisteredPersonsComponent,
        providers: [PersonService]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
