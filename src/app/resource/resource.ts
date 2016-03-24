import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {FORM_PROVIDERS} from 'angular2/common';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import {ResourceList} from './components/resource-list';
import {ResourceEdit} from './components/resource-edit';
import {ResourceCreate} from './components/resource-create';
import {AuthService, ProtectedDirective} from '../auth/core';
// console.log('list', ResourceList);
@Component({
    selector: 'resource',
    directives: [ROUTER_DIRECTIVES, ProtectedDirective, RouterOutlet],
    template: require('./resource.html')
})
@RouteConfig([
    { path: '/', name: 'Resource', component: ResourceList, useAsDefault: true },
    { path: '/edit/:id', name: 'ResourceEdit', component: ResourceEdit },
    { path: '/create', name: 'ResourceCreate', component: ResourceCreate }
])
export class ResourceCmp implements OnInit {

    constructor(
        public _auth: AuthService
    ) {

    }

    ngOnInit() {
    }
}
