import {Component, ElementRef, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChange} from 'angular2/core';
import {TableActionDirective} from './directives/table-action.directive';
import {ObjValuesPipe} from './pipes/obj-values.pipe';
// local snippet

declare var $: any;

@Component({
    selector: 'regular-table',
    inputs: ['data'],
    pipes: [ObjValuesPipe],
    // directives: [TableActionDirective],
    changeDetection: ChangeDetectionStrategy.OnPushObserve,
    template: require('./regular-table.html')
})
export class RegularTable implements OnInit, OnChanges {
    elementRef: ElementRef;
    tblHeaders: any;
    tblContents: any;
    tblActions: any;
    tblContentsCb: any;
    tblHideID: boolean;
    data: any;
    // injeting dependencies
    // @Input('panel-info') panel: Panel;
    
    constructor(
        elementRef: ElementRef
    ) {
        this.elementRef = elementRef;
    }

    ngOnInit() {
        // console.log(this.data);
        // this.tblHeaders = this.data && this.data.columns || [];
        // this.tblContents = this.data && this.data.contents || [];
        // this.tblContentsCb = this.data && this.data.callbacks || [];
        // this.tblActions = this.data && this.data.actions || [];
    }

    ngOnChanges(changes: { [propName: string]: SimpleChange }) {
        // console.log('ngOnChanges - myProp = ' + changes['data'].currentValue);
        this.tblHeaders = this.data && this.data.columns || [];
        this.tblContents = this.data && this.data.contents || [];
        this.tblContentsCb = this.data && this.data.callbacks || [];
        this.tblActions = this.data && this.data.actions || {};
        this.tblHideID = this.data && this.data.hideID || false;
    }
}
