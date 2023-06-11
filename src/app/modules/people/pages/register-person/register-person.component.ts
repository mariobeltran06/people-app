import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PersonFormComponent } from '../../components/person-form/person-form.component';

@Component({
  selector: 'app-register-person',
  standalone: true,
  imports: [CommonModule, MatCardModule, PersonFormComponent],
  templateUrl: './register-person.component.html',
  styleUrls: ['./register-person.component.scss'],
})
export class RegisterPersonComponent {}
