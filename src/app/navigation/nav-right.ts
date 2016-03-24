/*
 * Angular 2 decorators and services
 */
import {Component, OnInit, Injector} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';

import {AuthService} from '../auth/core';

declare var $: any;
/*
 * Login Component
 */
@Component({
    selector: 'nav-right',
    providers: [...FORM_PROVIDERS],
    directives: [],
    pipes: [],
    styles: [`
  `],
    template: require('./nav-right.html')
})
export class NavRight implements OnInit {
    constructor(public auth: AuthService) {

    }

    ngOnInit() {
    }
}
