import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {
  getDeadline(): Observable<{ secondsLeft: number }> {
    return of({ secondsLeft: 60 }).pipe(delay(500));
  }
}
