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
            { route: 'ew-select', name: 'ew-select', moduleId: PLATFORM.moduleName('./select'), nav: true, title: 'Select' }
        ]);

        this.router = router;
    }
   
}
