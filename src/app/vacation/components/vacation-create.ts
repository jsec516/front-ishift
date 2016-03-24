import {Component, OnInit, Injector, Directive, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouteParams, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Vacation} from '../../models';
import {VacationForm} from './vacation-form';
import {VacationService} from '../services/VacationService';


@Component({
    selector: 'vacation-create',
    providers: [VacationService],
    directives: [ROUTER_DIRECTIVES, VacationForm],
    template: require('../templates/vacation-create.html')
})
export class VacationCreate implements OnInit {

    type: string;

    constructor(
        public _auth: AuthService,
        public _params: RouteParams
    ) {

    }

    ngOnInit() {
        this.type = this._params.get('type');
    }
}
