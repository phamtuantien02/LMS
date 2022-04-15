import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatMap, finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoadingSpinnerService {
    private loadingSubject = new BehaviorSubject<boolean>(false);
    loading$: Observable<boolean> = this.loadingSubject.asObservable();

    /********************************************************************************/
    spinnerOn() {
        this.loadingSubject.next(true);
    }

    /********************************************************************************/
    spinnerOff() {
        this.loadingSubject.next(false);
    }

    /********************************************************************************/
    showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
        return of(null)
            .pipe(
                tap(() => this.spinnerOn()),
                concatMap(() => obs$),
                finalize(() => this.spinnerOff())
            );
    }
}
