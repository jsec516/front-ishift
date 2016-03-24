import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {TreatmentList} from './components/treatment-list';
import {TreatmentEdit} from './components/treatment-edit';
import {TreatmentCreate} from './components/treatment-create';
import {AuthService, ProtectedDirective} from '../auth/core';
// console.log('list', ResourceList);
@Component({
    selector: 'treatment',
    directives: [ROUTER_DIRECTIVES, ProtectedDirective, RouterOutlet],
    template: `
    <router-outlet protected></router-outlet>
    `
})
@RouteConfig([
    { path: '/', name: 'Service', component: TreatmentList, useAsDefault: true },
    { path: '/edit/:id', name: 'ServiceCreate', component: TreatmentEdit },
    { path: '/create/:type', name: 'ServiceCreate', component: TreatmentCreate }
])
export class TreatmentCmp implements OnInit {

    constructor(
        public _auth: AuthService
    ) {

    }

    ngOnInit() {
    }
}
