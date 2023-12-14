import { Inject, Injectable } from '@angular/core';
import { RouteConfigToken } from './routeConfig.service';
import { routeConfig } from './routeConfig';

@Injectable({
  providedIn: 'any' //'any' provides one instance globally on first reload but creates a new instance if components are lazy-loaded and using that particular service
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configToken:routeConfig) { 
    console.log('Config Service initialized');
    console.log(this.configToken);
  }
}
