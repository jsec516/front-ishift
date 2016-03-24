import {Component, OnInit, Injector, Directive, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouteParams, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Treatment} from '../../models';
import {TreatmentForm} from './treatment-form';
import {TreatmentService} from '../services/TreatmentService';


@Component({
    selector: 'treat-create',
    providers: [TreatmentService],
    directives: [ROUTER_DIRECTIVES, TreatmentForm],
    template: require('../templates/treatment-create.html')
})
export class TreatmentCreate implements OnInit {

    treatType: string;

    constructor(
        public _auth: AuthService,
        public _params: RouteParams
    ) {

    }

    ngOnInit() {
        this.treatType = this._params.get('type');
    }
}
