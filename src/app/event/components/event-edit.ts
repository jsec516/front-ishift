import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {EventForm} from './event-form';
import {EventService} from '../services/EventService';

@Component({
    selector: 'event-edit',
    providers: [EventService],
    directives: [ROUTER_DIRECTIVES, EventForm],
    template: require('../templates/event-edit.html')
})
export class EventEdit implements OnInit {

    constructor(
        public _auth: AuthService
    ) {

    }

    ngOnInit() {
    }
}
