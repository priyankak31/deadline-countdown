import { Injectable } from '@angular/core';
import { BehaviorSubject, interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {

  private secondsLeftSubject = new BehaviorSubject<number>(0);

  startCountdown(seconds: number): void {
    this.secondsLeftSubject.next(seconds);

    interval(1000)
      .pipe(takeWhile(() => this.secondsLeftSubject.value > 0))
      .subscribe(() => {
        this.secondsLeftSubject.next(
          this.secondsLeftSubject.value - 1
        );
      });
  }

  getSecondsLeft() {
    return this.secondsLeftSubject.asObservable();
  }
}
