import { InjectionToken } from '@angular/core';

export const localStorageToken: any = new InjectionToken<any>('local Storage', {
  providedIn: 'root',
  factory() {
    return localStorageToken;
  },
});
