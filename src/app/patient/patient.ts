/*
 * Angular 2 decorators and services
 */
import {Component, OnInit, Injector, AfterViewInit, ChangeDetectionStrategy} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
// local snippet
import {AuthService, ProtectedDirective} from '../auth/core';
import {PatientLookup} from './components/patient-lookup';
import {PatientEdit} from './components/patient-edit';
import {PatientCreate} from './components/patient-create';

declare var $: any;
/*
 * Patient Component
 */
@Component({
    selector: 'patient',
    providers: [...FORM_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, ProtectedDirective, RouterOutlet],
    // changeDetection: ChangeDetectionStrategy.OnPushObserve,
    pipes: [],
    styles: [`
  `],
    template: `
  <router-outlet protected></router-outlet>
  `
})
@RouteConfig([
    { path: '/', name: 'Patient', component: PatientLookup, useAsDefault: true },
    { path: '/edit/:id', name: 'PatientEdit', component: PatientEdit },
    { path: '/create/', name: 'PatientCreate', component: PatientCreate }
])
export class PatientCmp implements OnInit, AfterViewInit {

    constructor(
    ) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }
}
