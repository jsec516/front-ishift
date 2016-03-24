import {Component, OnInit, Injector, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Resource} from '../../models';
import {ResourceService} from '../services/ResourceService';

declare var $: any;

@Component({
    selector: 'resource-form',
    providers: [ResourceService],
    directives: [ROUTER_DIRECTIVES],
    template: require('../templates/resource-form.html')
})
export class ResourceForm implements OnInit {

    constructor(
        public _auth: AuthService,
        public _rsource: ResourceService,
        public _el: ElementRef
    ) {

    }

    showNext(event, target) {
        event.preventDefault();
        $(target).click();
    }
    ngOnInit() {
        //iCheck for checkbox and radio inputs
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        });
    }
}
