import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'EasyWeb';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: PLATFORM.moduleName('./modules/common/welcome'),      nav: true, title: 'Welcome' },
      // { route: 'users',         name: 'users',        moduleId: PLATFORM.moduleName('./modules/users/users'),        nav: true, title: 'Github Users' },
      { route: 'sample',         name: 'sample',        moduleId: PLATFORM.moduleName('./modules/samples/sample'),        nav: true, title: 'Case Study' },
      // { route: 'child-router',  name: 'child-router', moduleId: PLATFORM.moduleName('./modules/common/child-router'), nav: true, title: 'Child Router' },
    ]);

    this.router = router;
  }
}
