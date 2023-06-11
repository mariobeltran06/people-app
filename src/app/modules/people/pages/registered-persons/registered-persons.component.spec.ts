import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatCardHarness } from '@angular/material/card/testing';
import { PersonService } from '../../services/person.service';
import { RegisteredPersonsComponent } from './registered-persons.component';

describe('RegisteredPersonsComponent', () => {
  let component: RegisteredPersonsComponent;
  let fixture: ComponentFixture<RegisteredPersonsComponent>;
  let loader: HarnessLoader;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RegisteredPersonsComponent,
        HttpClientTestingModule,
        MatCardModule,
      ],
      providers: [PersonService],
    });
    fixture = TestBed.createComponent(RegisteredPersonsComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find card with text', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness);
    expect(cards.length).toBe(1);
    expect(await cards[0].getTitleText()).toBe('Lista de Personas Registradas');
  });
});
