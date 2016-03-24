import {Component, OnInit, Injector, ElementRef, Directive, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {RegularTable, Schedule} from '../../widget/core';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Staff} from '../../models';
import {StaffService} from '../services/StaffService';

declare var $: any;


// require('https://cdn.ckeditor.com/4.4.3/standard/ckeditor.js');
// declare var CKEDITOR:any;
// console.log(window['CKEDITOR']);


@Component({
    selector: 'staff-form',
    providers: [StaffService],
    directives: [ROUTER_DIRECTIVES, Schedule],
    template: require('../templates/staff-form.html')
})
export class StaffForm implements OnInit {
    ckeditorContent: any;
    constructor(
        public _auth: AuthService,
        public _rsource: StaffService,
        public _el: ElementRef
    ) {
        this.ckeditorContent = `<p>My HTML</p>`;
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
        // select2
        $(".select2").select2();
        // window['CKEDITOR'].replace('etemp');
    }
}
