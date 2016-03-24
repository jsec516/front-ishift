import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {TreatmentForm} from './treatment-form';
import {TreatmentService} from '../services/TreatmentService';

@Component({
    selector: 'treat-edit',
    providers: [TreatmentService],
    directives: [ROUTER_DIRECTIVES, TreatmentForm],
    template: require('../templates/treatment-edit.html')
})
export class TreatmentEdit implements OnInit {

    constructor(
        public _auth: AuthService
    ) {

    }

    ngOnInit() {
    }
}
