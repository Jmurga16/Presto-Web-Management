import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CgLoadingService {
  isLoading$: Subject<boolean>;
  desactivar: boolean = false;

  constructor() {
    this.isLoading$ = new Subject<boolean>();
  }

  show(): void {
    this.isLoading$.next(true);
  }

  hide(): void {
    this.isLoading$.next(false);
  }

  fndesactivar(): void {
    this.desactivar = true;
  }
}
