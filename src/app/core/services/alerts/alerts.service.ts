import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertsService {
  private subject = new Subject<any>();

  constructor() {}

  success(message: string) {
    this.subject.next({ type: 'success', text: message });
    setTimeout(() => {
      this.subject.next();
    }, 5000);
  }

  error(message: string) {
    this.subject.next({ type: 'error', text: message });
    setTimeout(() => {
      this.subject.next();
    }, 5000);
  }
  destroyAlert(){
    this.subject.next()
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
