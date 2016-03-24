import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {VacationForm} from './vacation-form';
import {VacationService} from '../services/VacationService';

@Component({
    selector: 'vacation-edit',
    providers: [VacationService],
    directives: [ROUTER_DIRECTIVES, VacationForm],
    template: require('../templates/vacation-edit.html')
})
export class VacationEdit implements OnInit {

    constructor(
        public _auth: AuthService
    ) {

    }

    ngOnInit() {
    }
}
