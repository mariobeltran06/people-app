import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ListPeopleComponent } from '../../components/list-people/list-people.component';
import { NoDataPeopleComponent } from '../../components/no-data-people/no-data-people.component';
import { Person } from '../../interfaces/person.interface';
import { ResponsePeople } from '../../interfaces/response-people.interface';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-registered-persons',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    NoDataPeopleComponent,
    ListPeopleComponent,
  ],
  templateUrl: './registered-persons.component.html',
  styleUrls: ['./registered-persons.component.scss'],
})
export class RegisteredPersonsComponent {
  dataPeople: Person[] = [];
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getRegistreredPersons().subscribe({
      next: (data: ResponsePeople) => {
        this.dataPeople = data.people;
      },
      error: () => (this.dataPeople = []),
    });
  }
}
