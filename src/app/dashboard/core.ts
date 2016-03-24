/*
 * Angular 2 decorators and services
 */
import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
import {FORM_PROVIDERS} from 'angular2/common';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import {AuthService, ProtectedDirective} from '../auth/core';
import {InfoBox, BarChart, RecentApptsBox} from '../widget/core';
import {DashboardService, Box} from './services/DashboardService';


declare var $: any;
/*
 * Login Component
 */
@Component({
    selector: 'dashboard',
    providers: [...FORM_PROVIDERS, DashboardService],
    directives: [InfoBox,
        BarChart,
        RecentApptsBox,
        ProtectedDirective,
        ROUTER_DIRECTIVES],
    // changeDetection: ChangeDetectionStrategy.OnPushObserve,
    pipes: [],
    styles: [`
  `],
    template: `
  <section class="content-header" protected>
          <h1>
            Dashboard
          </h1>
          <ol class="breadcrumb">
            <li><a [routerLink]="['Dashboard']" href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Dashboard</li>
          </ol>
        </section>
        <!-- Main content -->
        <section class="content">
          <!-- Info boxes -->
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12" *ngFor="#box of boxes">
                <info-box [box-info]="box"></info-box>
            </div>
          </div>
          <!-- report -->
          <div class="row">
            <div class="col-md-6">
                <bar-chart [stats]="apptsStat"></bar-chart>
            </div>
            <div class="col-md-6">
                <recent-appts-box></recent-appts-box>
            </div>
          </div>
        </section>
  `
})
export class DashboardCmp implements OnInit, AfterViewInit {
    boxes: Box[] = [];
    public apptsStat: any;

    constructor(
        public _auth: AuthService,
        public _dash: DashboardService
    ) {
    }

    ngOnInit() {
        this._dash.getBoxes().then(boxes => { this.boxes = boxes; console.log(boxes); });
    }

    ngAfterViewInit() {
    }
}
