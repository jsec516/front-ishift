/*
 * Angular 2 decorators and services
 */
import {Component, OnInit, Injector, EventEmitter} from 'angular2/core';
import {FORM_PROVIDERS} from 'angular2/common';

import {AuthService} from '../auth/core';

declare var $: any;
/*
 * Login Component
 */
@Component({
    selector: 'nav-top',
    providers: [...FORM_PROVIDERS],
    outputs: ['onLogout'],
    directives: [],
    pipes: [],
    styles: [`
  `],
    template: require('./nav-top.html')
})
export class NavTop implements OnInit {

    onLogout: EventEmitter<any>;

    constructor(public auth: AuthService) {
        this.onLogout = new EventEmitter();
    }

    logout(event) {
        event.preventDefault();
        this.auth.doLogout();
        // this.onLogout.emit('logout request');
    }

    ngOnInit() {
    }
}
