import { HarnessLoader, parallel } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatIconHarness } from '@angular/material/icon/testing';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { DataSnackbarAlert } from '../../interfaces/data-snackbar-alert.interface';
import { SnackbarAlertComponent } from './snackbar-alert.component';

describe('SnackbarAlertComponent', () => {
  let component: SnackbarAlertComponent;
  let fixture: ComponentFixture<SnackbarAlertComponent>;
  let loader: HarnessLoader;

  const mockSnackbarData: DataSnackbarAlert = {
    message: 'Hello',
    type: 'success',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SnackbarAlertComponent, MatSnackBarModule, MatIconModule],
      providers: [{ provide: MAT_SNACK_BAR_DATA, useValue: mockSnackbarData }],
    });
    fixture = TestBed.createComponent(SnackbarAlertComponent);
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

  it('should get the name of an icon success', async () => {
    const icons = await loader.getAllHarnesses(MatIconHarness);
    const names = await parallel(() => icons.map(icon => icon.getName()));
    expect(names).toEqual(['check_circle']);
  });

  it('should render message "Hello"', () => {
    const message = fixture.nativeElement.querySelector('p');
    expect(message.textContent).toBe('Hello');
  });
});
