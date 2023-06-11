import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PATTERN_NOT_SPACES_START } from 'src/app/modules/core/utils/patterns';
import { SnackbarAlertComponent } from 'src/app/modules/shared/components/snackbar-alert/snackbar-alert.component';
import { DataSnackbarAlert } from 'src/app/modules/shared/interfaces/data-snackbar-alert.interface';
import { Person } from '../../interfaces/person.interface';
import { ResponsePerson } from '../../interfaces/response-person.interface';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent {
  formPerson: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.formPerson = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
          Validators.pattern(PATTERN_NOT_SPACES_START),
        ],
      ],
      last_name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(40),
          Validators.pattern(PATTERN_NOT_SPACES_START),
        ],
      ],
      age: [18, [Validators.required, Validators.min(18), Validators.max(120)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(150)],
      ],
      address: ['', [Validators.maxLength(150)]],
    });
  }

  control(fieldName: string): AbstractControl {
    return this.formPerson.get(fieldName) as AbstractControl;
  }

  sendPerson(): void {
    if (this.formPerson.valid) {
      const { address } = this.formPerson.value;
      const person: Person = {
        ...this.formPerson.value,
        address: address.trim() === '' ? null : address.trim(),
      };
      this.personService
        .registerPerson(person)
        .subscribe((response: ResponsePerson) => {
          this.snackBar.openFromComponent(SnackbarAlertComponent, {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 5000,
            data: {
              message: response.message,
              type: 'success',
            } as DataSnackbarAlert,
          });
          this.router.navigate(['registered-persons']);
        });
    }
  }
}
