import {Component, OnInit, Injector, Directive, ElementRef, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Staff} from '../../models';
import {StaffForm} from './staff-form';
import {StaffService} from '../services/StaffService';


@Component({
    selector: 'staff-create',
    providers: [StaffService],
    directives: [ROUTER_DIRECTIVES, StaffForm],
    template: require('../templates/staff-create.html')
})
export class StaffCreate implements OnInit {

    constructor(
        public _auth: AuthService
    ) {

    }

    ngOnInit() {
        //    var editor = CKEDITOR.replace('etemp', {
        //     on: {
        //         instanceReady: function(event) {
        //         editor.resize('100%',editor.element.getParent().$.clientHeight);
        //         window.addEventListener('resize', function(event) {
        //             editor.resize('100%',editor.element.getParent().$.clientHeight);
        //         });
        //         }
        //     }
        //     });
    }
}
