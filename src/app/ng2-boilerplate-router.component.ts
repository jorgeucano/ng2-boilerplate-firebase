import { Component } from '@angular/core';
import { RouterdashComponent } from './+routerdash';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'ng2-boilerplate-router-app',
  templateUrl: 'ng2-boilerplate-router.component.html',
  styleUrls: ['ng2-boilerplate-router.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  pipes: []
})
@Routes([
  {path: '/routerdash', component: RouterdashComponent}
])
export class Ng2BoilerplateRouterAppComponent {
  title = 'ng2-boilerplate-router works!';
  items: Observable<any[]>;
  contructor(af: AngularFire){
    this.items = af.list('/items');
  }
}
