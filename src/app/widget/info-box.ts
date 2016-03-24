import {Component, ElementRef, OnInit, Input} from 'angular2/core';

// local snippet
import {AuthService} from '../auth/core';

declare var $: any;

@Component({
    selector: 'info-box',
    inputs: [
        'box:box-info'
    ],
    template: `
            <div class="info-box">
                <span class="info-box-icon {{box.cssClass}}"><i class="ion {{box.icon}}"></i></span>
                <div class="info-box-content">
                  <span class="info-box-text">{{box.title}}</span>
                  <span class="info-box-number">{{box.stats}}<small></small></span>
                </div><!-- /.info-box-content -->
              </div><!-- /.info-box -->
    `
})

export class InfoBox implements OnInit {
    elementRef: ElementRef;
    // panel: any;
    // injeting dependencies
    // @Input('panel-info') panel: Panel;
    
    constructor(
        private authService: AuthService,
        elementRef: ElementRef
    ) {
        this.elementRef = elementRef;
    }

    ngOnInit() {
    }
}
