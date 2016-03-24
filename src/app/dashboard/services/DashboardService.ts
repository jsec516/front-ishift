import {Injectable, Inject, EventEmitter} from "angular2/core";
import {Subject, BehaviorSubject, Observable} from 'rxjs';

export class Box {
    constructor(
        public title: string,
        public icon: string,
        public stats: number,
        public cssClass: string
    ) { }
}

let BOXES: Box[] = [
    new Box('New Appointments', 'ion-ios-gear-outline', 26, 'bg-aqua'),
    new Box('New Patient', 'ion-ios-gear-outline', 26, 'bg-red'),
    new Box('New Waitings', 'ion-ios-gear-outline', 26, 'bg-green'),
    new Box('Staffs', 'ion-ios-gear-outline', 26, 'bg-yellow')
];

@Injectable()
export class DashboardService {


    constructor() {
    }

    getBoxes() {
        return Promise.resolve(BOXES);
    }

}
