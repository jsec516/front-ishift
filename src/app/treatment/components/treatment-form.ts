import {Component, OnInit, AfterViewInit, Injector, ElementRef, Directive, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Treatment} from '../../models';
import {TreatmentService} from '../services/TreatmentService';

declare var $: any;

// custom color picker
@Component({
    selector: 'treat-form',
    providers: [TreatmentService],
    directives: [ROUTER_DIRECTIVES],
    inputs: ['type'],
    template: require('../templates/treatment-form.html')
})
export class TreatmentForm implements OnInit, AfterViewInit {
    public type: string;
    constructor(
        public _auth: AuthService,
        public _treat: TreatmentService,
        public _el: ElementRef
    ) {
    }

    showNext(event, target) {
        event.preventDefault();
        $(target).click();
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        $(".select2").select2();
        $('.color').colorpicker();
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        });
    }
}
