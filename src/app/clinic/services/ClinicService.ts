import {Injectable, Inject} from "angular2/core";
import {Observable, Subject, BehaviorSubject} from 'rxjs';
import {Http, Headers} from 'angular2/http'
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {AuthService} from '../../auth/core';
import {Staff} from '../../models';
import {Config} from '../../config';

@Injectable()
export class ClinicService {
    // latest events
    latestSchedule$: Observable<any>;
    
    private _scheduleObserver: any;
    
    constructor(
        private _auth: AuthService,
        private _http: Http
    ) {
        // create practitioners observable
         this.latestSchedule$ = new Observable(observer => 
            this._scheduleObserver = observer).share();
    }
    
    loadSchedule(){
        let options = { "headers": new Headers({ 
            "Authorization": "Bearer " + this._auth.getToken(),
            "Content-Type": "application/json"  
        }) };
        
        // console.log("sent options : ", options);
        
        this._http.get(Config.reqDomain + '/api/clinic/schedule', options)
        .map(response => response.json()).subscribe(data => {
            // console.log('event response : ', data);
            if(Boolean(data.success)===true){
                // console.log(data.message);
                this._scheduleObserver.next(data.message);   
            }
        }, error => console.log('Could not load clinic schedules.'));
    }
}
