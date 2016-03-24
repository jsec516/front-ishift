import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {PatientForm} from './patient-form';
import {PatientService} from '../services/PatientService';

@Component({
    selector: 'patient-edit',
    providers: [PatientService],
    directives: [ROUTER_DIRECTIVES, PatientForm],
    template: require('../templates/patient-edit.html')
})
export class PatientEdit implements OnInit {

    constructor(
        public _auth: AuthService
    ) {

    }

    ngOnInit() {
    }
}
