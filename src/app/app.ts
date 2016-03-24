/*
 * Angular 2 decorators and services
 */
import {Component, AfterViewInit, OnInit} from 'angular2/core';
import {RouteConfig, Router, AsyncRoute, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
// import {ResourceCmp} from './resource/core';
import {Login, AuthService} from './auth/core';
// import {DashboardCmp} from './dashboard/core';
// import {PatientCmp} from './patient/core';
// import {StaffCmp} from './staff/core';
// import {VacationCmp} from './vacation/core';
// import {CalendarCmp} from './calendar/core';
// import {TreatmentCmp} from './treatment/core';
// import {EventCmp} from './event/core';
// import {ClinicConfig} from './clinic/core';
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

@RouteConfig([
    { path: '/', name: 'Default', component: Login, useAsDefault: true },
    { path: '/login', name: 'Login', component: Login },
    new AsyncRoute({
        path: '/dashboard',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        // loader: () => require('./dashboard/core').then(m => m.DashboardCmp),
        name: 'Dashboard'
    }),
    // { path: '/dashboard', name: 'Dashboard', component: DashboardCmp },
    new AsyncRoute({
        path: '/patient/...',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./patient/core'], require => resolve(require('./patient/core').PatientCmp));
        }),
        name: 'Patient'
    }),
    // { path: '/patient/...', name: 'Patient', component: PatientCmp },
    new AsyncRoute({
        path: '/staff/...',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./staff/core'], require => resolve(require('./staff/core').StaffCmp));
        }),
        name: 'Staff'
    }),
    // { path: '/staff/...', name: 'Staff', component: StaffCmp },
    new AsyncRoute({
        path: '/appt/...',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./event/core'], require => resolve(require('./event/core').EventCmp));
        }),
        name: 'Event'
    }),
    // { path: '/appt/...', name: 'Event', component: EventCmp },
    new AsyncRoute({
        path: '/calendar',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./calendar/core'], require => resolve(require('./calendar/core').CalendarCmp));
        }),
        name: 'Calendar'
    }),
    // { path: '/calendar', name: 'Calendar', component: CalendarCmp },
    new AsyncRoute({
        path: '/list/upcoming',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        name: 'Upcoming'
    }),
    // { path: '/list/upcoming', name: 'Upcoming', component: DashboardCmp },
    new AsyncRoute({
        path: '/list/completed',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        name: 'Completed'
    }),
    // { path: '/list/completed', name: 'Completed', component: DashboardCmp },
    new AsyncRoute({
        path: '/list/cancelled',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        name: 'Cancelled'
    }),
    // { path: '/list/cancelled', name: 'Cancelled', component: DashboardCmp },
    new AsyncRoute({
        path: '/list/wait',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        name: 'WaitList'
    }),
    // { path: '/list/wait', name: 'WaitList', component: DashboardCmp },
    new AsyncRoute({
        path: '/service/...',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./treatment/core'], require => resolve(require('./treatment/core').TreatmentCmp));
        }),
        name: 'Service'
    }),
    // { path: '/service/...', name: 'Service', component: TreatmentCmp },
    new AsyncRoute({
        path: '/vacation/...',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./vacation/core'], require => resolve(require('./vacation/core').VacationCmp));
        }),
        name: 'Vacation'
    }),
    // { path: '/vacation/...', name: 'Vacation', component: VacationCmp },
    new AsyncRoute({
        path: '/reminder',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        name: 'Reminder'
    }),
    // { path: '/reminder', name: 'Reminder', component: DashboardCmp },
    new AsyncRoute({
        path: '/resource/...',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./resource/core'], require => resolve(require('./resource/core').ResourceCmp));
        }),
        name: 'Resource'
    }),
    // { path: '/resource/...', name: 'Resource', component: ResourceCmp },
    new AsyncRoute({
        path: '/config/clinic',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./clinic/core'], require => resolve(require('./clinic/core').ClinicConfig));
        }),
        name: 'ClinicConfig'
    }),
    // { path: '/config/clinic', name: 'ClinicConfig', component: ClinicConfig },
    new AsyncRoute({
        path: '/config/site',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        name: 'SiteConfig'
    }),
    // { path: '/config/site', name: 'SiteConfig', component: DashboardCmp },
    new AsyncRoute({
        path: '/et/client',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        name: 'ClientText'
    }),
    // { path: '/et/client', name: 'ClientText', component: DashboardCmp },
    new AsyncRoute({
        path: '/et/staff',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        name: 'StaffText'
    }),
    // { path: '/et/staff', name: 'StaffText', component: DashboardCmp },
    new AsyncRoute({
        path: '/gcal',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        name: 'GoogleCalendar'
    }),
    // { path: '/gcal', name: 'GoogleCalendar', component: DashboardCmp },
    new AsyncRoute({
        path: '/site',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        name: 'SitePromotion'
    }),
    // { path: '/site', name: 'SitePromotion', component: DashboardCmp },
    new AsyncRoute({
        path: '/myaccount',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        name: 'MyAccount'
    }),
    // { path: '/myaccount', name: 'MyAccount', component: DashboardCmp },
    new AsyncRoute({
        path: '/billing',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        name: 'Billing'
    }),
    // { path: '/billing', name: 'Billing', component: DashboardCmp },
    new AsyncRoute({
        path: '/cancel',
        loader: () => new Promise(resolve => {
            (<any>require).ensure(['./dashboard/core'], require => resolve(require('./dashboard/core').DashboardCmp));
        }),
        name: 'CancelAccount'
    })
    // { path: '/cancel', name: 'CancelAccount', component: DashboardCmp }
])

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
