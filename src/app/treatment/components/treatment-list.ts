import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {TreatmentService} from '../services/TreatmentService';

@Component({
    selector: 'treat-list',
    // template: 'awesome'
    directives: [RegularTable, ROUTER_DIRECTIVES],
    providers: [TreatmentService],
    template: require('../templates/treatment-list.html')
})
export class TreatmentList implements OnInit {

    tblContent: any;

    constructor(
        private _treat: TreatmentService
    ) {
        this.tblContent = {};

    }

    ngOnInit() {
        this._treat.treatments$.subscribe((data) => {
            this.tblContent = {
                'columns': ['Service', 'Type', 'Show on Scheduler', 'Duration', 'Buffers', 'Color', 'Status'],
                'contents': data.contents,
                'actions': data.actions,
                'hideID': true,
                'callbacks': {
                    'status': function(value) {
                        let result = value ? 'active' : 'inactive';
                        return result;
                    },
                    'color': function(value) {
                        let result = `<span class="service-color" style="background:${value}"></span>`;
                        return result;
                    }
                }
            }
        });
        this._treat.loadTreatments();
    }
}
