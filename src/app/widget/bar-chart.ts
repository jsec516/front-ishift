import {Component, ElementRef, OnInit, Input} from 'angular2/core';

// local snippet
import {EventService} from '../event/core';

declare var $: any;

@Component({
    selector: 'bar-chart',
    providers: [EventService],
    inputs: [
        'appts:appts-stats'
    ],
    template: `
            <!-- Bar chart -->
              <div class="box box-primary">
                <div class="box-header with-border">
                  <i class="fa fa-bar-chart-o"></i>
                  <h3 class="box-title">Bar Chart</h3>
                  <div class="box-tools pull-right">
                    <button class="btn btn-box-tool" (click)="pushNewValue($event)"><i class="fa fa-refresh"></i></button>
                    <button class="btn btn-box-tool"  data-widget="collapse"><i class="fa fa-minus"></i></button>
                    <button class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
                  </div>
                </div>
                <div class="box-body">
                  <div id="bar-chart" style="height: 300px;"></div>
                </div><!-- /.box-body-->
    `
})

export class BarChart implements OnInit {
    barData: any;
    elementRef: ElementRef;
    // panel: any;
    // injeting dependencies
    // @Input('panel-info') panel: Panel;
    
    constructor(
        public _event: EventService,
        elementRef: ElementRef
    ) {
        this.elementRef = elementRef;
    }

    pushNewValue(event) {
        event.preventDefault();
        console.log('called event');
        this._event.pushNewChart();
    }

    ngOnInit() {

        this._event.barChartData$.subscribe(data=> {
            console.log('generating barchart');
            $.plot("#bar-chart", [data], {
                grid: {
                    borderWidth: 1,
                    borderColor: "#f3f3f3",
                    tickColor: "#f3f3f3"
                },
                series: {
                    bars: {
                        show: true,
                        barWidth: 0.5,
                        align: "center"
                    }
                },
                xaxis: {
                    mode: "categories",
                    tickLength: 0
                }
            });
        })
        this._event.loadStats();
        // let bar_data = {
        //     data: [["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9]],
        //     color: "#3c8dbc"
        // };


    }
}
