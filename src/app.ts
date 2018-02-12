import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'EasyWeb';
    // config.map([
    //   { route: ['', 'welcome'], name: 'welcome',      moduleId: PLATFORM.moduleName('./modules/common/welcome'),      nav: true, title: 'Dashboard' },
    //   // { route: 'users',         name: 'users',        moduleId: PLATFORM.moduleName('./modules/users/users'),        nav: true, title: 'Github Users' },
    //   { route: 'sample',         name: 'sample',        moduleId: PLATFORM.moduleName('./modules/samples/sample'),        nav: true, title: 'Case Study' },
    //   // { route: 'child-router',  name: 'child-router', moduleId: PLATFORM.moduleName('./modules/common/child-router'), nav: true, title: 'Child Router' },
    // ]);

    // this.router = router;
    
    config.map([
      {
        route: 'login', name: 'login', moduleId: PLATFORM.moduleName('./modules/login'), nav: true, title: 'Welcome',
        settings: { icon: 'pg-home' }
      },
      {
        route: ['admin', 'admin'], name: 'admin', moduleId: PLATFORM.moduleName('./modules/admin'), nav: true, title: 'admin',
        settings: { icon: 'pg-tables' }
      },

    ]);    
  }
  attached() {
    function loadJs(file) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = file;
        script.type = 'text/javascript';
        script.defer = true;
        document.getElementsByTagName('body').item(0).appendChild(script);

        script.onload = function () {
          resolve()
        }
        script.onerror = function () {
          reject()
        }
      })
    }

    // loadJs('assets/vendors/base/vendors.bundle.js').then(() => {
    //   loadJs('assets/demo/demo2/base/scripts.bundle.js').then(() => {
    //     loadJs('assets/vendors/custom/fullcalendar/fullcalendar.bundle.js').then(() => {
    //       loadJs('assets/app/js/dashboard.js').then(() => {
    //       });
    //     });
    //   });
    // });
    loadJs('assets/snippets/pages/user/login.js'); 
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
