/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
// we want font-awesome to load as soon as possible to show the fa-spinner
import '../static/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Aurelia } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import * as Bluebird from 'bluebird';
import {LogManager} from "aurelia-framework";
import {ConsoleAppender} from "aurelia-logging-console";

// remove out if you don't want a Promise polyfill (remove also from webpack.config.js)
Bluebird.config({ warnings: { wForgottenReturn: false } });

export async function configure(aurelia: Aurelia) {
  aurelia.use
  .standardConfiguration() 
  // .plugin(PLATFORM.moduleName('ag-grid-aurelia'))
  .plugin(PLATFORM.moduleName('aurelia-configuration'), config => {
    config.setEnvironment('development'); // Environment changes to development
  })
  .plugin(PLATFORM.moduleName('aurelia-validation'))
  .plugin(PLATFORM.moduleName('aurelia-bootstrap-datetimepicker'))
  .plugin(PLATFORM.moduleName('aurelia-dialog'), config => {
    config.useDefaults();
    config.settings.lock = true;
    config.settings.centerHorizontalOnly = false;
    config.settings.startingZIndex = 9999;
    config.settings.enableEscClose = true;
  })
  .feature(PLATFORM.moduleName('resources/index'))
  //   .plugin('aurelia-configuration', config => {
    //     config.setEnvironments({
      //         development: ['localhost', 'dev.local'],
      //         staging: ['staging.website.com', 'test.staging.website.com'],
      //         production: ['website.com']
      //     });
      // });
      
      // Uncomment the line below to enable animation.
      // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
      // if the css animator is enabled, add swap-order="after" to all router-view elements
      
      // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
      // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));
      
  .developmentLogging();

  LogManager.addAppender(new ConsoleAppender());
  LogManager.setLevel(LogManager.logLevel.debug);

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
