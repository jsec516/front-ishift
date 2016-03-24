import {Component, ElementRef, OnInit, AfterViewInit, Input} from 'angular2/core';

declare var $: any;
// local snippet

@Component({
    selector: 'schedule',
    template: `
            <a href="#" data-toggle="modal" data-target="#wchModal">Select Schedule</a>
            <div class="modal fade" tabindex="-1" role="dialog" id="wchModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">Add Schedule</h4>
                        </div>
                        <div class="modal-body">
                            <ul class="list-unstyled">
                                <li>Select Time: </li>
                                <li>    
                                    <span class="from">From : <input type="text" class="form-control w90" /></span>
                                </li>
                                <li>    
                                    <span class="to">To : <input type="text" class="form-control w90" /></span>
                                </li>
                                <li>
                                    <span *ngFor="#day of days"><input class="minimal" type="checkbox"  /> {{day}}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->
            
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
        // console.log($(this._elem.nativeElement).html());
        $(this._elem.nativeElement).find('input[type="checkbox"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        });
    }
}
