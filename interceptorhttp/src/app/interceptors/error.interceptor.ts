import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToasterService } from '../toaster/toaster.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toasterService: ToasterService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.toasterService.showSuccess('API Call Success');
        }
      }),
      catchError((error: HttpErrorResponse) => {
        this.toasterService.showError('API Call Failed');
        if (error.status === 401) {
          console.log('Unauthorized access handled!');
          this.toasterService.showError('Unauthorized access');
        } else if (error.status === 404) {
          console.log('Page Not Found handled!');
          this.toasterService.showError('Page Not Found');
        } else {
          console.error('An error occurred:', error.message);
          this.toasterService.showError('Error Occured');
        }
        throw error;
      })
    );
  }
}
