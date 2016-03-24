import {Component, OnInit, Injector, ElementRef, Directive, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Vacation} from '../../models';
import {VacationService} from '../services/VacationService';

declare var $: any;

// custom color picker
@Component({
    selector: 'vaca-form',
    providers: [VacationService],
    directives: [ROUTER_DIRECTIVES],
    inputs: ['type'],
    template: require('../templates/vacation-form.html')
})
export class VacationForm implements OnInit {
    public type: string;
    constructor(
        public _auth: AuthService,
        public _treat: VacationService,
        public _el: ElementRef
    ) {
    }

    showNext(event, target) {
        event.preventDefault();
        $(target).click();
    }

    ngOnInit() {
        $(".select2").select2();
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        });
    }
}
