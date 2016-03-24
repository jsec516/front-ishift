/*
 * Angular 2 decorators and services
 */
import {Component, AfterViewInit, OnInit} from 'angular2/core';
import {RouteConfig, Router, AsyncRoute, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {ResourceCmp} from './resource/core';
import {Login, AuthService} from './auth/core';
import {DashboardCmp} from './dashboard/core';
import {PatientCmp} from './patient/core';
import {StaffCmp} from './staff/core';
import {VacationCmp} from './vacation/core';
import {CalendarCmp} from './calendar/core';
import {TreatmentCmp} from './treatment/core';
import {EventCmp} from './event/core';
import {ClinicConfig} from './clinic/core';
import {NavTop, NavLeft, NavRight} from './navigation/core';

declare var $: any;
// declare var System: any;

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'body',
    providers: [...FORM_PROVIDERS],
    directives: [...ROUTER_DIRECTIVES, NavTop, NavLeft, NavRight],
    pipes: [],
    styles: [`
  `],
    template: `
    <div [class]="loggedIn ? 'wrapper': 'login-wrapper'" >
        <nav-top [hidden]="!loggedIn"></nav-top>
        <nav-left [hidden]="!loggedIn"></nav-left>
        <div [class.content-wrapper]="loggedIn">
            <router-outlet></router-outlet>
        </div>
        <footer [id]="!loggedIn ? 'footer': ''" [class]="loggedIn ? 'main-footer': 'main-footer no-left-margin abs'">
        <div class="pull-right hidden-xs">
          <b>Version</b> 0.0.0
        </div>
        <strong>Copyright &copy; 2013-2016 <a href="http://jahid.me">Somykoron</a>.</strong> All rights reserved.
      </footer>
        <nav-right [hidden]="!loggedIn"></nav-right>
    </div>
  `
})
// TODO: routing data can be retrieved from another function so that it doesn't look clutter
// TODO: async routing for optimization
@RouteConfig([
    { path: '/', name: 'Default', component: Login, useAsDefault: true },
    { path: '/login', name: 'Login', component: Login },
    { path: '/dashboard', name: 'Dashboard', component: DashboardCmp },
    { path: '/patient/...', name: 'Patient', component: PatientCmp },
    { path: '/staff/...', name: 'Staff', component: StaffCmp },
    { path: '/appt/...', name: 'Event', component: EventCmp },
    { path: '/calendar', name: 'Calendar', component: CalendarCmp },
    { path: '/list/upcoming', name: 'Upcoming', component: DashboardCmp },
    { path: '/list/completed', name: 'Completed', component: DashboardCmp },
    { path: '/list/cancelled', name: 'Cancelled', component: DashboardCmp },
    { path: '/list/wait', name: 'WaitList', component: DashboardCmp },
    { path: '/service/...', name: 'Service', component: TreatmentCmp },
    { path: '/vacation/...', name: 'Vacation', component: VacationCmp },
    { path: '/reminder', name: 'Reminder', component: DashboardCmp },
    { path: '/resource/...', name: 'Resource', component: ResourceCmp },
    { path: '/config/clinic', name: 'ClinicConfig', component: ClinicConfig },
    { path: '/config/site', name: 'SiteConfig', component: DashboardCmp },
    { path: '/et/client', name: 'ClientText', component: DashboardCmp },
    { path: '/et/staff', name: 'StaffText', component: DashboardCmp },
    { path: '/gcal', name: 'GoogleCalendar', component: DashboardCmp },
    { path: '/site', name: 'SitePromotion', component: DashboardCmp },
    { path: '/myaccount', name: 'MyAccount', component: DashboardCmp },
    { path: '/billing', name: 'Billing', component: DashboardCmp },
    { path: '/cancel', name: 'CancelAccount', component: DashboardCmp }
])

// TODO: for performance optimization routes should be asyncrhonous
// new AsyncRoute({
//         path: '/dashboard',
//         loader: () => new Promise(resolve => {
//             (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
//         }),
//         // loader: () => require('./dashboard/core').then(m => m.DashboardCmp),
//         name: 'Dashboard'
//     }),
export class App implements AfterViewInit, OnInit {
    auth: AuthService;
    loggedIn: Boolean = true;

    constructor(authService: AuthService) {
        this.auth = authService;
    }

    // get loggedIn()
    // {
    //     return this.auth.isAuthenticated();
    // }

    // logout(event){
    //     console.log(event);
    //     this.auth.doLogout();
    // }

    ngOnInit() {
        // $('.sidebar-menu').metisMenu();

        // TODO: logged in state
        // logged in flag from behaviorsubject
        // initial will be on subject creation not here
        console.log(this.auth.authenticated);
        this.auth.authenticated.subscribe((authStatus: boolean) => {
            this.loggedIn = authStatus;
        });

    }

    ngAfterViewInit() {
        require(`imports?jQuery=jquery,$=jquery!../assets/bower_components/AdminLTE/dist/js/app.min.js`);
    }
}
