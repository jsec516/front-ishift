// Polyfills
import 'es6-shim';
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)
import 'es6-promise';
import 'zone.js/lib/browser/zone-microtask';

if ('production' === process.env.ENV) {

    // RxJS
    // In development manually include the operators you use

    require('rxjs/add/operator/map');

} else {
    // Reflect Polyfill
    require('es7-reflect-metadata/src/global/browser');

    // In production Reflect with es7-reflect-metadata/reflect-metadata is added
    // by webpack.prod.config ProvidePlugin
    Error['stackTraceLimit'] = Infinity;
    Zone['longStackTraceZone'] = require('zone.js/lib/zones/long-stack-trace.js');

    // RxJS
    // In production manually include the operators you use
    require('rxjs/add/operator/map');

    // Observable
    require('rxjs/add/observable/fromEvent');

    // Observable Operators
    require('rxjs/add/operator/buffer');
}
// import 'rxjs';
// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module

let adminLtePath = './assets/bower_components/AdminLTE/';
let bootstrapPath = './assets/bower_components/bootstrap/';
let fwPath = './assets/bower_components/font-awesome/';
let ionPath = './assets/bower_components/Ionicons/';
let datetimePath = './assets/bower_components/datetimepicker/';
let momentPath = './assets/bower_components/moment/';
// declare var $:any;
// window['jQuery'] = $;
// vendors css
require(`${bootstrapPath}css/bootstrap.min.css`);
require(`${fwPath}css/font-awesome.min.css`);
require(`${ionPath}css/ionicons.min.css`);
require(`${adminLtePath}plugins/iCheck/all.css`);
require(`${adminLtePath}plugins/select2/select2.min.css`);
require(`${adminLtePath}plugins/fullcalendar/fullcalendar.min.css`);
//? how to add media print in require
// require(`${adminLtePath}plugins/fullcalendar/fullcalendar.print.css`);
require(`${adminLtePath}dist/css/AdminLTE.min.css`);
require(`${adminLtePath}dist/css/skins/skin-blue.min.css`);
require(`${adminLtePath}plugins/iCheck/flat/blue.css`);
require(`${adminLtePath}plugins/colorpicker/bootstrap-colorpicker.css`);
require(`${adminLtePath}plugins/datepicker/datepicker3.css`);
require(`${datetimePath}build/css/bootstrap-datetimepicker.min.css`);
require(`${adminLtePath}plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css`);
require('./assets/css/custom.css');


// <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
// <script src="dist/js/pages/dashboard2.js"></script>
// <!-- AdminLTE for demo purposes -->
// <script src="dist/js/demo.js"></script>
// vendors js
// require('jquery');
require(`${adminLtePath}plugins/jQuery/jQuery-2.1.4.min.js`);
// Bootstrap 3.3.5
require(`${adminLtePath}bootstrap/js/bootstrap.min.js`);
require(`${adminLtePath}plugins/fastclick/fastclick.js`);
//  AdminLTE App

// Sparkline
require(`${adminLtePath}plugins/sparkline/jquery.sparkline.min.js`);
// jvectormap
// require(`${adminLtePath}plugins/jvectormap/jquery-jvectormap-1.2.2.min.js`);
// require(`${adminLtePath}plugins/jvectormap/jquery-jvectormap-world-mill-en.js`);
// SlimScroll 1.3.0
require(`${adminLtePath}plugins/slimScroll/jquery.slimscroll.min.js`);
// ChartJS 1.0.1
require(`${adminLtePath}plugins/chartjs/Chart.min.js`);
// iCheck
require(`${adminLtePath}plugins/iCheck/icheck.js`);
// select2
require(`${adminLtePath}plugins/select2/select2.full.js`);
// colorpicker
require(`${adminLtePath}plugins/colorpicker/bootstrap-colorpicker.js`);
// FLOT CHARTS
require(`admin-lte/plugins/flot/jquery.flot.min.js`);
// require(`imports?jQuery=jquery!./assets/bower_components/AdminLTE/plugins/flot/jquery.flot.min.js`);
// FLOT RESIZE PLUGIN - allows the chart to redraw when the window is resized 
// ** need to add but for now it's creating exception, need to find solution t.settimeout issue
// require(`imports?jQuery=jquery!admin-lte/plugins/flot/jquery.flot.resize.min.js`);
require(`${adminLtePath}plugins/flot/jquery.flot.cresize.min.js`);
// FLOT CATEGORIES PLUGIN - Used to draw bar charts
require(`${adminLtePath}plugins/flot/jquery.flot.categories.min.js`);
// fullcalendar
// require(`${momentPath}moment.js`);
require('moment');
require(`${adminLtePath}plugins/fullcalendar/fullcalendar.js`);
// Editor
// require('bootstrap3-wysihtml5-commonjs/src/bootstrap3-wysihtml5.js');
// window['CKEDITOR_BASEPATH'] = 'server/ckeditor/';
// require('script!ckeditor');
// require(`./assets/bower_components/AdminLTE/plugins/knob/jquery.knob.js`);
// require(`./assets/bower_components/moment/moment.js`);
require(`${datetimePath}src/js/bootstrap-datetimepicker.js`);
// require(`imports?jQuery=jquery!./assets/bower_components/AdminLTE/plugins/slimScroll/jquery.slimscroll.min.js`);
// require(`./assets/bower_components/AdminLTE/plugins/fastclick/fastclick.js`);
// require(`imports?jQuery=jquery!./assets/bower_components/metisMenu/dist/metisMenu.min.js`);

// require(`${adminLtePath}dist/js/pages/dashboard2.js`);
