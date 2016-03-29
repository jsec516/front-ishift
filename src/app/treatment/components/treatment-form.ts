import {Component, OnInit, AfterViewInit, Injector, ElementRef, Directive, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Control} from 'angular2/common';
import {AuthService, ProtectedDirective} from '../../auth/core';
import {Treatment} from '../../models';
import {TreatmentService} from '../services/TreatmentService';

declare var $: any;

// custom color picker
@Component({
    selector: 'treat-form',
    providers: [TreatmentService],
    directives: [ROUTER_DIRECTIVES],
    inputs: ['type'],
    template: require('../templates/treatment-form.html')
})
export class TreatmentForm implements OnInit, AfterViewInit {
    public type: string;
    public treatForm: ControlGroup;

    constructor(
        public _auth: AuthService,
        public _treat: TreatmentService,
        public _el: ElementRef,
        fb: FormBuilder
    ) {
        this.treatForm = fb.group({
            'name': ['ABC123'],
            'description': [''],
            'durationH': [''],
            'durationM': [''],
            'color': [''],
            'sortw': ['0'],
            'allowM': [false],
            'public': [false],
            'ei': [''],
            'status': [true]
        });
    }

    showNext(event, target) {
        event.preventDefault();
        $(target).click();
    }

    onSubmit(value: string){
        console.log('you submitted value: ', value);
    }

    ngOnInit() {
    }

    updateFieldValue(field: string, value: any) {
        (<Control>this.treatForm.controls[field]).updateValue(value);
    }

    ngAfterViewInit() {
        $(".select2").select2().on("select2:select", (e) => { 
            (<Control>this.treatForm.controls['durationM']).updateValue(e.target.value);
        });
        $('.color').colorpicker().on('changeColor.colorpicker', (e) => {
          this.updateFieldValue('color', e.color.toHex());
        });
        $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
            checkboxClass: 'icheckbox_minimal-blue',
            radioClass: 'iradio_minimal-blue'
        }).on('ifChecked', (e) => {
            this.updateFieldValue($(e.target).attr('id'), true);
        }).on('ifUnchecked', (e) => {
            this.updateFieldValue($(e.target).attr('id'), false);
        });
    }
}
