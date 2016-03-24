/*
 * Angular 2 decorators and services
 */
import {Component, OnInit, Injector} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';
import {
ROUTER_DIRECTIVES,
RouteConfig,
ROUTER_PROVIDERS,
RouterOutlet} from 'angular2/router';

import {AuthService} from '../auth/core';

declare var $: any;
/*
 * Login Component
 */
@Component({
    selector: 'nav-left',
    providers: [...FORM_PROVIDERS],
    directives: [ROUTER_DIRECTIVES],
    pipes: [],
    styles: [`
  `],
    template: require('./nav-left.html')
})
export class NavLeft implements OnInit {
    constructor(public auth: AuthService) {

    }

    ngOnInit() {
    }
}
