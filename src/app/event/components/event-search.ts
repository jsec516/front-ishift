import {Component, Output, OnInit, EventEmitter, AfterViewInit, Injector, ElementRef, Directive, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Event} from '../../models';
import {EventService} from '../services/EventService';

declare var $: any;

@Component({
    selector: 'event-search',
    providers: [EventService],
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        form{ padding: 0px 15px;}
    `],
    template: require('../templates/event-search.html')
})
export class EventSearch implements OnInit, AfterViewInit {
    @Output() term: EventEmitter<any> = new EventEmitter();
    public type: string;

    constructor(
        public _auth: AuthService,
        public _service: EventService,
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
