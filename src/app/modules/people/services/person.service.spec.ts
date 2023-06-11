import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { Person } from '../interfaces/person.interface';
import { PersonService } from './person.service';

describe('PersonService', () => {
  let service: PersonService;
  let http: HttpTestingController;

  const mockPerson: Person = {
    name: 'John',
    last_name: 'Glue',
    age: 23,
    email: 'john@glue.com',
    address: null,
  };

  const mockPeople: Person[] = [mockPerson];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonService],
    });
    service = TestBed.inject(PersonService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post person from API', () => {
    service.registerPerson(mockPerson).subscribe();
    const httpRequest = http.expectOne(`${environment.urlBackend}/people`);

    expect(httpRequest.request.method).toBe('POST');
    expect(httpRequest.request.body).toEqual(mockPerson);
  });

  it('should get all people from API', () => {
    service
      .getRegistreredPersons()
      .subscribe(response => expect(response).toEqual({ people: mockPeople }));
    const httpRequest = http.expectOne(`${environment.urlBackend}/people`);
    expect(httpRequest.request.method).toBe('GET');
    httpRequest.flush({ people: mockPeople });
  });
});
