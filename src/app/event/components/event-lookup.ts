import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {InfoBox} from '../../widget/core';
import {RegularTable} from '../../widget/table/regular-table';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {EventService} from '../services/EventService';
// import {PatientSearch} from './patient-search';
console.log('table', RegularTable);
console.log('info', InfoBox);

@Component({
    selector: 'patient-lookup',
    // template: 'awesome'
    directives: [RegularTable, ROUTER_DIRECTIVES],
    providers: [EventService],
    template: require('../templates/event-lookup.html')
})
export class EventLookup implements OnInit {

    tblContent: any;
    searched: boolean;

    constructor(
        private _service: EventService
    ) {
        this.tblContent = {};
        this.searched = false;
    }

    search(term) {
        this.searched = true;
        // this._service.loadPatients(term);
    }

    ngOnInit() {
        // this._service.patients$.subscribe((data)=>{
        //     this.tblContent = {
        //         'columns' : ['Name', 'Email', 'Home Phone', 'Mobile Phone', 'Status'],
        //         'contents' : data.contents,
        //         'actions': data.actions,
        //         'hideID': true, 
        //         'callbacks': {
        //             'status': function(value){
        //                 let result = value ? 'active' : 'inactive';
        //                 return result;
        //             }
        //         }
        //     }
        // });
    }
}
