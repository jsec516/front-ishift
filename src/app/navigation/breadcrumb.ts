import {Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from "angular2/router";
@Component({
    selector: 'breadcrumb',
    directives: [ROUTER_DIRECTIVES],
    inputs: ['breads'],
    template: `
        <ol class="breadcrumb">
            <li *ngFor="#bread of breads" [class.active]="bread.active">
                <a *ngIf="!bread.active" href="/#{{bread.route}}"><i class="fa fa-dashboard"></i> {{bread.name}}</a>
                <a *ngIf="bread.active"  href="#"><i class="fa fa-dashboard"></i> {{bread.name}}</a>
            </li>
        </ol>
    `
})
export class BreadCrumb {

}
