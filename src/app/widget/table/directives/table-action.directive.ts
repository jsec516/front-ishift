import {Directive, OnDestroy, OnInit, Input, OnChanges, SimpleChange} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location} from "angular2/router";

@Directive({
    selector: '[table-action]'
})
export class TableActionDirective implements OnChanges, OnInit, OnDestroy {
    @Input('table-action') actions: any;

    constructor(
    ) {

    }

    ngOnDestroy() {
    }

    ngOnInit() {
        console.log(this.actions);
    }

    ngOnChanges() {

    }
}
