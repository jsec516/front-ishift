import {Component, OnInit, AfterViewInit, Injector, ElementRef, Directive, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Event} from '../../models';
import {EventService} from '../services/EventService';

declare var $: any;

// custom color picker
@Component({
    selector: 'event-form',
    providers: [EventService],
    directives: [ROUTER_DIRECTIVES],
    inputs: ['data'],
    template: require('../templates/event-form.html')
})
export class EventForm implements OnInit, AfterViewInit {

    public data: string;
    patients: any;

    constructor(
        public _auth: AuthService,
        public _treat: EventService,
        public _el: ElementRef
    ) {
        this.patients = [];
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
