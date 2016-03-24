import {Component, Output, EventEmitter, OnInit, Injector, Directive, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouteParams, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Event} from '../../models';
import {EventService} from '../services/EventService';

declare var $: any;
declare var moment: any;

@Component({
    selector: 'event-time',
    providers: [EventService],
    directives: [ROUTER_DIRECTIVES],
    styles: [`
    span.dark-box{display:inline-block;width:10px;height:10px;background:#d2d6de;margin-left:5px;}
    span.green-box{display:inline-block;width:10px;height:10px;background:#00a65a;margin-left:5px;}
    `],
    template: require('../templates/event-time.html')
})
export class EventTime implements OnInit {
    @Output() time: EventEmitter<any> = new EventEmitter();
    data: any;

    constructor(
        public _auth: AuthService,
        public _params: RouteParams
    ) {
        this.data = {
            'staff': { id: '001', name: 'Rebecca Risk' },
            'service': { id: '2', name: 'Acupuncture' },
            'date': '12 Feb 2016'
        };
    }

    timeSelected(time: string) {
        this.data.time = time;
        this.time.emit(this.data);
    }

    ngOnInit() {
        $('.inline-date').datetimepicker({
            inline: true,
            format: 'MM/DD/YYYY',
            sideBySide: true,
            enabledDates: [
                moment("2016 02 13", "YYYY MM DD"),
                moment("2016 02 12", "YYYY MM DD"),
                new Date(2016, 3 - 1, 21)
            ]
        });
    }
}
