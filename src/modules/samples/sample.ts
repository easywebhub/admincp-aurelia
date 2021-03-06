import { format } from "url";
import { Router, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";


export class Sample {
    router: Router;

    heading = 'Sample';

    configureRouter(config: RouterConfiguration, router: Router) {
        config.map([
            // { route: ['', 'welcome'], name: 'welcome', moduleId: PLATFORM.moduleName('./welcome'), nav: true, title: 'Welcome' },
            { route: ['','datetime'], name: 'datetime', moduleId: PLATFORM.moduleName('./datetime'), nav: true, title: 'DateTimePicker' },
            { route: 'ew-select', name: 'ew-select', moduleId: PLATFORM.moduleName('./select'), nav: true, title: 'Select' },
            { route: 'ew-editor', name: 'ew-editor', moduleId: PLATFORM.moduleName('./editor'), nav: true, title: 'Editor' },
            // { route: 'ew-dialog', name: 'ew-dialog', moduleId: PLATFORM.moduleName('./dialog'), nav: true, title: 'Dialog(Modal)' },
            { route: 'listUser', name: 'listUser', moduleId: PLATFORM.moduleName('./users/listUser'), nav: true, title: 'EasyWeb Users' },
            { route: 'tree', name: 'ew-tree', moduleId: PLATFORM.moduleName('./tree'), nav: true, title: 'Tree View' },
        ]);

        this.router = router;
    }
   
}
