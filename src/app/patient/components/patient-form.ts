import {Component, OnInit, AfterViewInit, Injector, ElementRef, Directive, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Patient} from '../../models';
import {PatientService} from '../services/PatientService';

declare var $: any;

// custom color picker
@Component({
    selector: 'patient-form',
    providers: [PatientService],
    directives: [ROUTER_DIRECTIVES],
    template: require('../templates/patient-form.html')
})
export class PatientForm implements OnInit, AfterViewInit {
    public type: string;
    constructor(
        public _auth: AuthService,
        public _treat: PatientService,
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
        $('.dob').datetimepicker({
            format: 'DD/MM/YYYY',
            viewMode: 'years'
        });
        $('.color').colorpicker();
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        });
    }
}
