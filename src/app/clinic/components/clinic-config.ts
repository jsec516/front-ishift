import {Component, OnInit, Injector, Directive, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Schedule} from '../../models';
import {ClinicService} from '../services/ClinicService';
import {ClinicForm} from './clinic-form';

@Component({
    selector: 'clinic-config',
    providers: [ClinicService],
    directives: [ROUTER_DIRECTIVES, ClinicForm],
    template: require('../templates/clinic-config.html')
})
export class ClinicConfig implements OnInit {

    constructor(
        public _auth: AuthService
    ) {
    }

    ngOnInit() {
    }
}
