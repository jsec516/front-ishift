import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {EventLookup} from './components/event-lookup';
import {EventEdit} from './components/event-edit';
import {EventCreate} from './components/event-create';
import {AuthService, ProtectedDirective} from '../auth/core';
// console.log('lookup', EventLookup);
@Component({
    selector: 'event',
    directives: [ROUTER_DIRECTIVES, ProtectedDirective, RouterOutlet],
    template: `
    <router-outlet protected></router-outlet>
    `
})
@RouteConfig([
    // { path: '/', name: 'Event', component: EventLookup, useAsDefault: true },
    { path: '/edit/:id', name: 'EventEdit', component: EventEdit },
    { path: '/create/', name: 'EventCreate', component: EventCreate, useAsDefault: true }
])
export class EventCmp implements OnInit {

    constructor(
        public _auth: AuthService
    ) {

    }

    ngOnInit() {
    }
}
