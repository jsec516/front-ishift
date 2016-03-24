import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {VacationList} from './components/vacation-list';
import {VacationEdit} from './components/vacation-edit';
import {VacationCreate} from './components/vacation-create';
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
    { path: '/', name: 'Vacation', component: VacationList, useAsDefault: true },
    { path: '/edit/:id', name: 'VacationCreate', component: VacationEdit },
    { path: '/create/:type', name: 'VacationCreate', component: VacationCreate }
])
export class VacationCmp implements OnInit {

    constructor(
        public _auth: AuthService
    ) {

    }

    ngOnInit() {
    }
}
