import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {StaffService} from '../services/StaffService';

@Component({
    selector: 'staff-list',
    // template: 'awesome'
    directives: [RegularTable, ROUTER_DIRECTIVES],
    providers: [StaffService],
    template: require('../templates/staff-list.html')
})
export class StaffList implements OnInit {

    tblContent: any;

    constructor(
        private _staff: StaffService
    ) {
        this.tblContent = {};

    }

    ngOnInit() {
        this._staff.staffs$.subscribe((data) => {
            console.log(data);
            this.tblContent = {
                'columns': ['ID', 'Name', 'Email', 'Security Role', 'Status'],
                'contents': data.contents,
                'actions': data.actions,
                'callbacks': {
                    'status': function(value) {
                        let result = value ? 'active' : 'inactive';
                        return result;
                    }
                }
            }
        });
        this._staff.loadStaffs();
    }
}
