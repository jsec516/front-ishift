import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {VacationService} from '../services/VacationService';

@Component({
    selector: 'vacation-list',
    // template: 'awesome'
    directives: [RegularTable, ROUTER_DIRECTIVES],
    providers: [VacationService],
    template: require('../templates/vacation-list.html')
})
export class VacationList implements OnInit {

    tblContent: any;

    constructor(
        private _vaca: VacationService
    ) {
        this.tblContent = {};

    }

    ngOnInit() {
        this._vaca.vacations$.subscribe((data) => {
            // console.log(data.actions);
            this.tblContent = {
                'columns': ['Staff', 'Start Date', 'End Date', 'Reason', 'Comments'],
                'contents': data.contents,
                'actions': data.actions,
                'hideID': true,
                'callbacks': {
                }
            }
        });
        this._vaca.loadVacations();
    }
}
