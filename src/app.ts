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
  attached() {
    var script = document.createElement("script");
    script.src = "assets/vendors/base/vendors.bundle.js";
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);

    var s2 = document.createElement("script");
    s2.src = "assets/demo/demo2/base/scripts.bundle.js";
    s2.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(s2);
    
    var s3 = document.createElement("script");
    s3.src = "assets/vendors/custom/fullcalendar/fullcalendar.bundle.js";
    s3.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(s3);
    
    var s4 = document.createElement("script");
    s4.src = "assets/app/js/dashboard.js";
    s4.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(s4);
    
      // <!--begin::Base Scripts -->
      // <script src="assets/vendors/base/vendors.bundle.js" type="text/javascript"></script>
      // <script src="assets/demo/demo2/base/scripts.bundle.js" type="text/javascript"></script>
      // <!--end::Base Scripts -->
      // <!--begin::Page Vendors -->
      // <script src="assets/vendors/custom/fullcalendar/fullcalendar.bundle.js" type="text/javascript"></script>
      // <!--end::Page Vendors -->
      // <!--begin::Page Snippets -->
      // <script src="assets/app/js/dashboard.js" type="text/javascript"></script>
  }
}
