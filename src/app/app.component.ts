import { Component } from '@angular/core';
import { DeadlineComponent } from './deadline/deadline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DeadlineComponent],
  template: `<app-deadline></app-deadline>`
})
export class AppComponent {}
