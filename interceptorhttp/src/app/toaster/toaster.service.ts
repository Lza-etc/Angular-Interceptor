import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  private toasterSubject = new Subject<any>();
  toasterState = this.toasterSubject.asObservable();

  constructor() {}

  showSuccess(message: string) {
    this.toasterSubject.next({ type: 'success', message });
  }

  showError(message: string) {
    this.toasterSubject.next({ type: 'error', message });
  }
}
