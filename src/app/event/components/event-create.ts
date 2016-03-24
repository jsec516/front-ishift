import {Component, OnInit, Injector, Directive, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouteParams, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Event} from '../../models';
import {EventForm} from './event-form';
import {EventTime} from './event-time';
import {EventService} from '../services/EventService';


@Component({
    selector: 'event-create',
    providers: [EventService],
    directives: [ROUTER_DIRECTIVES, EventForm, EventTime],
    template: require('../templates/event-create.html')
})
export class EventCreate implements OnInit {

    eventData: any;
    showForm: boolean = false;

    constructor(
        public _auth: AuthService,
        public _params: RouteParams
    ) {
        this.eventData = {};
    }

    loadClient(event) {
        this.eventData = event;
        this.showForm = true;
        // console.log(event);
    }

    ngOnInit() {

    }
}
