import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  subject: Subject<boolean> = new Subject()
  constructor() { }

  startSpinner(){
    this.subject.next(true)
  }
  stopSpinner(){
    this.subject.next(false)
  }

  getStatus(){
    return this.subject.asObservable()
  }

}
