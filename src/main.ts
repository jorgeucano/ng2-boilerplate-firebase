import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Ng2BoilerplateRouterAppComponent, environment } from './app/';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2BoilerplateRouterAppComponent,
   [
     FIREBASE_PROVIDERS,
     defaultFirebase('https://ng2fire.firebaseio.com')
   ]
);
