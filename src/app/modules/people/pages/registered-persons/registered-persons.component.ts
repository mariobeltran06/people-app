import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResponsePeople } from '../../interfaces/response-people.interface';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-registered-persons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registered-persons.component.html',
  styleUrls: ['./registered-persons.component.scss']
})
export class RegisteredPersonsComponent {
  constructor(private personService: PersonService){}

  ngOnInit(): void{
    this.personService.getRegistreredPersons().subscribe((data: ResponsePeople) => {
      console.log(data);
    });
  }
}
