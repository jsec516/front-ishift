import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {ResourceService} from '../services/ResourceService';

@Component({
    selector: 'resources-list',
    // template: 'awesome'
    directives: [RegularTable, ROUTER_DIRECTIVES],
    providers: [ResourceService],
    template: require('../templates/resource-list.html')
})
export class ResourceList implements OnInit {

    tblContent: any;

    constructor(
        private _resource: ResourceService
    ) {
        this.tblContent = {};

    }

    ngOnInit() {
        this._resource.resources$.subscribe((data) => {
            console.log(data);
            this.tblContent = {
                'columns': ['ID', 'Title', 'Status'],
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
        this._resource.loadResources();
        
        // setTimeout(()=>{
        //     console.log('called');
        //     this.tblContent = {
        //     'columns' : ['ID', 'Title', 'Status'],
        //     , 
        //     'callbacks': {
        //         'status': function(value){
        //             let result = value ? 'active' : 'inactive';
        //             return result;
        //         }
        //     }
        // };
        // }, 3000);
    }
}
// console.log('list :', ResourceList);
