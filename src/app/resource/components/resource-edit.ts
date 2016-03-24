import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {ResourceForm} from './resource-form';
import {ResourceService} from '../services/ResourceService';

@Component({
    selector: 'resource-edit',
    providers: [ResourceService],
    directives: [ROUTER_DIRECTIVES, ResourceForm],
    template: require('../templates/resource-edit.html')
})
export class ResourceEdit implements OnInit {

    constructor(
        public _auth: AuthService
    ) {

    }

    ngOnInit() {
    }
}
