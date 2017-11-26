declare var Wg: any;
declare var exports: any;

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

Wg.Widgets.AemNg4Example = function () {
  Wg.Widget.apply(this, arguments);
};

Wg.Widgets.AemNg4Example.prototype = new Wg.Widget();

Wg.Widgets.AemNg4Example.prototype.init = function () {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));
};

exports.inlet = Wg.Widgets.AemNg4Example;
