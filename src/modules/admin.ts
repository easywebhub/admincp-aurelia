import { Aurelia } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class Admin {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'EasyWeb';
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: PLATFORM.moduleName('./common/welcome'), nav:true, title: 'Dashboard' },
      { route: 'users',         name: 'users',  moduleId: PLATFORM.moduleName('./users/users'),   nav: true, title: 'Users' },
      {
        route: 'sample', name: 'sample', moduleId: PLATFORM.moduleName('./samples/sample'), nav: true, title: 'Sample', settings: {
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

    loadJs('assets/vendors/base/vendors.bundle.js').then(() => {
      loadJs('assets/demo/demo2/base/scripts.bundle.js').then(() => {
        loadJs('assets/vendors/custom/fullcalendar/fullcalendar.bundle.js').then(() => {
          loadJs('assets/app/js/dashboard.js').then(() => {
            loadJs('assets/demo/default/custom/components/calendar/basic.js').then(() => {}); //JS for basic calendar  
          });
        });
      });
    });
    //loadJs('assets/snippets/pages/user/login.js'); 
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
