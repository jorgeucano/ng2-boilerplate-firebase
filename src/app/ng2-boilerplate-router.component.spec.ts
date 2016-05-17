import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2BoilerplateRouterAppComponent } from '../app/ng2-boilerplate-router.component';

beforeEachProviders(() => [Ng2BoilerplateRouterAppComponent]);

describe('App: Ng2BoilerplateRouter', () => {
  it('should create the app',
      inject([Ng2BoilerplateRouterAppComponent], (app: Ng2BoilerplateRouterAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-boilerplate-router works!\'',
      inject([Ng2BoilerplateRouterAppComponent], (app: Ng2BoilerplateRouterAppComponent) => {
    expect(app.title).toEqual('ng2-boilerplate-router works!');
  }));
});
