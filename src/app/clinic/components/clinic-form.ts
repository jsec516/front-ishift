import {Component, OnInit, Injector, ElementRef, Directive, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {Schedule} from '../../widget/core';
import {AuthService} from '../../auth/core';

declare var $:any;

@Component({
    selector: 'clinic-form',
    directives: [ROUTER_DIRECTIVES, Schedule],
    template: require('../templates/clinic-form.html')
})
export class ClinicForm implements OnInit{
    
    constructor(
        public _auth: AuthService,
        public _el: ElementRef
    ){
    }
    
    showNext(event, target){
        event.preventDefault();
        $(target).click();
    }
    
    ngOnInit(){
    }
}
