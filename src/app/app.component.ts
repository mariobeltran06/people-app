import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterOutlet } from '@angular/router';
import { LoadingService } from './modules/core/services/loading.service';
import { ToolbarComponent } from './modules/shared/components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToolbarComponent, MatProgressBarModule],
  providers: [LoadingService],
  template: `
    <app-toolbar></app-toolbar>
    <mat-progress-bar
      *ngIf="loading$ | async"
      color="accent"
      mode="indeterminate"></mat-progress-bar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  loading$ = this.loader.loading$;
  constructor(private loader: LoadingService) {}
}
