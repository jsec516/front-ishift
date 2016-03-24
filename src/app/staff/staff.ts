import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {StaffList} from './components/staff-list';
import {StaffEdit} from './components/staff-edit';
import {StaffCreate} from './components/staff-create';
import {AuthService, ProtectedDirective} from '../auth/core';
// console.log('list', ResourceList);
@Component({
    selector: 'resource',
    directives: [ROUTER_DIRECTIVES, ProtectedDirective, RouterOutlet],
    template: `
    <router-outlet protected></router-outlet>
    `
})
@RouteConfig([
    { path: '/', name: 'Staff', component: StaffList, useAsDefault: true },
    { path: '/edit/:id', name: 'StaffEdit', component: StaffEdit },
    { path: '/create', name: 'StaffCreate', component: StaffCreate }
])
export class StaffCmp implements OnInit {

    constructor(
        public _auth: AuthService
    ) {

    }

    ngOnInit() {
    }
}
