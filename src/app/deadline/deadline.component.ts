import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { DeadlineService } from './deadline.service';
import { CountdownService } from './countdown.service';

@Component({
  selector: 'app-deadline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      Seconds left to deadline:
      <strong>{{ secondsLeft$ | async }}</strong>
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeadlineComponent implements OnInit {

  secondsLeft$!: Observable<number>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private deadlineService: DeadlineService,
    private countdownService: CountdownService
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.deadlineService.getDeadline().subscribe(res => {
        this.countdownService.startCountdown(res.secondsLeft);
      });

      this.secondsLeft$ = this.countdownService.getSecondsLeft();
    }
  }
}
