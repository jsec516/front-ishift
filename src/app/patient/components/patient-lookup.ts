import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {PatientService} from '../services/PatientService';
import {PatientSearch} from './patient-search';

@Component({
    selector: 'patient-lookup',
    // template: 'awesome'
    directives: [RegularTable, PatientSearch, ROUTER_DIRECTIVES],
    providers: [PatientService],
    template: require('../templates/patient-lookup.html')
})
export class PatientLookup implements OnInit {

    tblContent: any;
    searched: boolean;

    constructor(
        private _service: PatientService
    ) {
        this.tblContent = {};
        this.searched = false;
    }

    search(term) {
        this.searched = true;
        this._service.loadPatients(term);
    }

    ngOnInit() {
        this._service.patients$.subscribe((data) => {
            this.tblContent = {
                'columns': ['Name', 'Email', 'Home Phone', 'Mobile Phone', 'Status'],
                'contents': data.contents,
                'actions': data.actions,
                'hideID': true,
                'callbacks': {
                    'status': function(value) {
                        let result = value ? 'active' : 'inactive';
                        return result;
                    }
                }
            }
        });
    }
}
