import {Component, ElementRef, OnInit, AfterViewInit, Input} from 'angular2/core';

declare var $: any;
// local snippet

@Component({
    selector: 'schedule',
    template: `
            <div class="row" *ngFor="#day of days">
                <div class="col-md-3">
                    <strong>{{day}}</strong> - From:
                </div>
                <div class="col-md-3">
                     <div class="form-group">
                        <div class='input-group date dtpicker' >
                            <input type='text' class="form-control " />
                            <span class="input-group-addon">
                                <span class="glyphicon glyphicon-time"></span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    To: 
                </div>
                <div class="col-md-3">
                     <div class="form-group">
                        <div class='input-group date dtpicker' >
                            <input type='text' class="form-control " />
                            <span class="input-group-addon">
                                <span class="glyphicon glyphicon-time"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    `
})
export class Schedule implements OnInit, AfterViewInit {
    _elem: ElementRef;
    days: Array<any>;
    constructor(
        elementRef: ElementRef
    ) {
        this._elem = elementRef;
        this.days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        //Initialize Select2 Elements
        $(this._elem.nativeElement).find(".dtpicker").datetimepicker({
            format: 'LT'
        });
    }
}
