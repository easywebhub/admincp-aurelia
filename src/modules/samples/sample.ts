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
            { route: 'monacoeditor', name: 'monacoeditor', moduleId: PLATFORM.moduleName('./monacoeditor'), nav: true, title: 'Monaco Editor'},
            { route: 'ew-editor', name: 'ew-editor', moduleId: PLATFORM.moduleName('./editor'), nav: true, title: 'Editor', settings: {
              nav: [
                { href: '/sample/datetime', title: 'DateTimePicker' },
              ]}
            },
            { route: 'ew-dialog', name: 'ew-dialog', moduleId: PLATFORM.moduleName('./dialog'), nav: true, title: 'Dialog(Modal)' },
            { route: 'listUser', name: 'listUser', moduleId: PLATFORM.moduleName('./users/listUser'), nav: true, title: 'EasyWeb Users' },
            { route: 'gmaps', name: 'gmaps', moduleId: PLATFORM.moduleName('./googlemaps'), nav: true, title: 'Google Maps' },
            { route: 'tree', name: 'ew-tree', moduleId: PLATFORM.moduleName('./tree'), nav: true, title: 'Tree View' },
            { route: 'timeline2', name: 'timeline2', moduleId: PLATFORM.moduleName('./timeline2'), nav: true, title: 'Timeline 2' },
            { route: 'basic-calendar', name: 'basic-calendar', moduleId: PLATFORM.moduleName('./calendars/basic'), nav: true, title: 'Basic Calendar' },
        ]);

        this.router = router;
    }
   
}
