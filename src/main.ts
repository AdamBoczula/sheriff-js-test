import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

import {shared} from './app/shared/ui/shared-ui';
import {authDataAccessService} from './app/auth/data/data-access.service';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

console.log('app started,', shared(), authDataAccessService);
