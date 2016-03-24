import {Component, Output, OnInit, EventEmitter, AfterViewInit, Injector, ElementRef, Directive, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Patient} from '../../models';
import {PatientService} from '../services/PatientService';

declare var $: any;

@Component({
    selector: 'patient-search',
    providers: [PatientService],
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        form{ padding: 0px 15px;}
    `],
    template: require('../templates/patient-search.html')
})
export class PatientSearch implements OnInit, AfterViewInit {
    @Output() term: EventEmitter<any> = new EventEmitter();
    public type: string;

    constructor(
        public _auth: AuthService,
        public _treat: PatientService,
        public _el: ElementRef
    ) {
    }

    doSearch(event) {
        event.preventDefault();
        this.term.emit('searched');
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
