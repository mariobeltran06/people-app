import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../interfaces/person.interface';
import { ResponsePeople } from '../interfaces/response-people.interface';
import { ResponsePerson } from '../interfaces/response-person.interface';

@Injectable()
export class PersonService {
  readonly url: string = environment.urlBackend;

  constructor(private http: HttpClient) {}

  registerPerson(person: Person): Observable<ResponsePerson> {
    return this.http.post<ResponsePerson>(`${this.url}/people`, person);
  }

  getRegistreredPersons(): Observable<ResponsePeople> {
    return this.http.get<ResponsePeople>(`${this.url}/people`);
  }
}
