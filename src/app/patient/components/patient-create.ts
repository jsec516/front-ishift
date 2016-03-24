import {Component, OnInit, Injector, Directive, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouteParams, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Patient} from '../../models';
import {PatientForm} from './patient-form';
import {PatientService} from '../services/PatientService';


@Component({
    selector: 'treat-create',
    providers: [PatientService],
    directives: [ROUTER_DIRECTIVES, PatientForm],
    template: require('../templates/patient-create.html')
})
export class PatientCreate implements OnInit {

    constructor(
        public _auth: AuthService,
        public _params: RouteParams
    ) {

    }

    ngOnInit() {
    }
}
