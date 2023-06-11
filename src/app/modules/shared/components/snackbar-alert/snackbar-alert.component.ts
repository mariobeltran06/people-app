import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { DataSnackbarAlert } from '../../interfaces/data-snackbar-alert.interface';

@Component({
  selector: 'app-snackbar-alert',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatSnackBarModule],
  templateUrl: './snackbar-alert.component.html',
  styleUrls: ['./snackbar-alert.component.scss'],
})
export class SnackbarAlertComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: DataSnackbarAlert) {}
}
