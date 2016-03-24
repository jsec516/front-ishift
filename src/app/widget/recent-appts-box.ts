import {Component, ElementRef, OnInit, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
// local snippet
import {Config} from '../config';
import {AuthService} from '../auth/core';
// load events
import {EventService} from '../event/core';
import {Event} from '../models';

declare var $: any;

@Component({
    selector: 'recent-appts-box',
    providers: [EventService],
    directives: [ROUTER_DIRECTIVES],
    // inputs: [
    //     'appts:appts-info'
    // ],
    template: `
            <!-- PRODUCT LIST -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Recently Added Appointments</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <ul class="products-list product-list-in-box">
                <!-- .item -->
                <li class="item" *ngFor="#event of latestEvents | async">
                  <div class="product-img">
                    <img [src]="event.patient.avatarUrl || defaultAvatar" alt="Patient Image">
                  </div>
                  <div class="product-info">
                    <a href="javascript::;" class="product-title">{{event.patient.name}}
                      <span class="label label-warning pull-right" [attr.style]="'background-color: '+event.service.color+'!important'">{{event.service.name}}</span></a>
                        <span class="product-description">
                          Appointment with: {{event.staff.name}} 
                        </span>
                  </div>
                </li>
                <!-- /.item -->
              </ul>
            </div>
            <!-- /.box-body -->
            <div class="box-footer text-center">
              <a [routerLink]="['Event']" href="#" class="uppercase">View All Appoinments</a>
            </div>
            <!-- /.box-footer -->
          </div>
          <!-- /.box -->
    `
})

export class RecentApptsBox implements OnInit {
    elementRef: ElementRef;
    defaultAvatar: string;
    // latestEvents: Event[] = [];
    latestEvents: any;

    constructor(
        private _auth: AuthService,
        public _event: EventService,
        elementRef: ElementRef
    ) {
        this.defaultAvatar = Config.defaultAvatar;
        this.elementRef = elementRef;
        this.latestEvents = this._event.latestEvents$;
    }

    setColor(color) {
        console.log(color);
        return color + ' !important';
    }

    ngOnInit() {
        // this._event.latestEvents$.subscribe((events)=>{this.latestEvents=events;});
        this._event.loadEvents();
    }
}
