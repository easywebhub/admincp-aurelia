import { Aurelia } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class Admin {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'EasyWeb';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: PLATFORM.moduleName('./common/welcome'), nav:true, title: 'Dashboard' },
      // { route: 'users',         name: 'users',        moduleId: PLATFORM.moduleName('./modules/users/users'),        nav: true, title: 'Github Users' },
      {
        route: 'sample', name: 'sample', moduleId: PLATFORM.moduleName('./samples/sample'), nav: true, title: 'Case Study', settings: {
          nav: [
            { href: 'admin/sample/datetime', title: 'DateTimePicker' },
            // { route: 'ew-select', name: 'ew-select', moduleId: PLATFORM.moduleName('./samples/select'), nav: true, title: 'Select' },
            // { route: 'ew-editor', name: 'ew-editor', moduleId: PLATFORM.moduleName('./samples/editor'), nav: true, title: 'Editor' },
            // { route: 'ew-dialog', name: 'ew-dialog', moduleId: PLATFORM.moduleName('./dialog'), nav: true, title: 'Dialog(Modal)' },
            // { route: 'listUser', name: 'listUser', moduleId: PLATFORM.moduleName('./samples/users/listUser'), nav: true, title: 'EasyWeb Users' },
            // { route: 'tree', name: 'ew-tree', moduleId: PLATFORM.moduleName('./samples/tree'), nav: true, title: 'Tree View' },
          ]
        }
      },
    ]);

    this.router = router;

  }

}  
