import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './modules/shared/components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, MatProgressBarModule],
  template: `
    <app-toolbar></app-toolbar>
    <mat-progress-bar color="accent" mode="indeterminate"></mat-progress-bar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
