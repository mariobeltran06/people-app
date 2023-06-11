import { HarnessLoader, parallel } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatIconHarness } from '@angular/material/icon/testing';
import { NoDataPeopleComponent } from './no-data-people.component';

describe('NoDataPeopleComponent', () => {
  let component: NoDataPeopleComponent;
  let fixture: ComponentFixture<NoDataPeopleComponent>;
  let loader: HarnessLoader;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoDataPeopleComponent, MatIconModule]
    });
    fixture = TestBed.createComponent(NoDataPeopleComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load one icon harnesses', async () => {
    const icons = await loader.getAllHarnesses(MatIconHarness);
    expect(icons.length).toBe(1);
  });

  it('should get the name of an icon no data', async () => {
    const icons = await loader.getAllHarnesses(MatIconHarness);
    const names = await parallel(() => icons.map(icon => icon.getName()));
    expect(names).toEqual(['cloud_off']);
  });

  it('should render message "No hay datos por el momento..."', () => {
    const message = fixture.nativeElement.querySelector('h3');
    expect(message.textContent).toBe('No hay datos por el momento...');
  });
});
