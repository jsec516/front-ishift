import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Resource} from '../../models';
import {ResourceForm} from './resource-form';
import {ResourceService} from '../services/ResourceService';

@Component({
    selector: 'resource-create',
    providers: [ResourceService],
    directives: [ROUTER_DIRECTIVES, ResourceForm],
    template: require('../templates/resource-create.html')
})
export class ResourceCreate implements OnInit {

    constructor(
        public _auth: AuthService
    ) {

    }

    ngOnInit() {
    }
}
