import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackbarAlertComponent } from '../../shared/components/snackbar-alert/snackbar-alert.component';
import { DataSnackbarAlert } from '../../shared/interfaces/data-snackbar-alert.interface';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(error => this.errorHandler(error)));
  }

  private errorHandler(error: HttpErrorResponse): Observable<never> {
    let errorMessageConsole = '';
    let errorMessageToast = '';
    if (error instanceof HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        errorMessageToast = error.message;
      } else {
        switch (error.status) {
          case 400:
            errorMessageToast =
              'Solicitud incorrecta: el servidor no pudo interpretar la solicitud debido a una sintaxis no válida';
            break;
          case 403:
            errorMessageToast =
              'El cliente no tiene los permisos necesarios para ciertos contenidos';
            break;
          case 404:
            errorMessageToast =
              'El servidor no pudo encontrar el contenido solicitado';
            break;
        }
      }
      errorMessageConsole = `Client Error -> Code: ${error.status} - ${error.message}`;
    } else {
      errorMessageConsole = `Server Error ${
        (error as HttpErrorResponse).status
      }`;
      errorMessageToast = 'Error de Servidor';
    }
    this.snackBar.openFromComponent(SnackbarAlertComponent, {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: 5000,
      data: {
        message: errorMessageToast,
        type: 'error',
      } as DataSnackbarAlert,
    });
    return throwError(() => errorMessageConsole);
  }
}
