import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {StaffForm} from './staff-form';
import {StaffService} from '../services/StaffService';

@Component({
    selector: 'staff-edit',
    providers: [StaffService],
    directives: [ROUTER_DIRECTIVES, StaffForm],
    template: require('../templates/staff-edit.html')
})
export class StaffEdit implements OnInit {

    constructor(
        public _auth: AuthService
    ) {

    }

    ngOnInit() {
    }
}
