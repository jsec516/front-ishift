import {Injectable, Inject, Injector, EventEmitter} from "angular2/core";
import {Observable, Subject, BehaviorSubject} from 'rxjs';
import {Http, Headers} from 'angular2/http'
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {AuthService} from '../../auth/core';
import {Event} from '../../models';
import {Config} from '../../config';

@Injectable()
export class EventService { 
    
    // latest events
    latestEvents$: Observable<Event[]>;
    barChartData$: Observable<any>;
    
    private _eventsObserver: any;
    private _statsObserver: any;
    
    constructor(
        private _router: Router,
        private _auth: AuthService,
        private _http: Http
    ) {
        // TODO: get the user token
        // create latestEvents observable
         this.latestEvents$ = new Observable(observer => 
            this._eventsObserver = observer).share();
        // create barChartData observable
         this.barChartData$ = new Observable(observer => 
            this._statsObserver = observer).share();
    }
    
    loadEvents(){
        let options = { "headers": new Headers({ 
            "Authorization": "Bearer " + this._auth.getToken(),
            "Content-Type": "application/json"  
        }) };
        
        // console.log("sent options : ", options);
        
        this._http.get(Config.reqDomain + Config.reqApiPoint + '/events/', options).map(response => response.json()).subscribe(data => {
            // console.log('event response : ', data);
            if(Boolean(data.success)===true){
                // console.log(data.message);
                this._eventsObserver.next(data.message);   
            }
        }, error => console.log('Could not load events.'));
    }
    
    loadStats(){
        let options = { "headers": new Headers({ 
            "Authorization": "Bearer " + this._auth.getToken(),
            "Content-Type": "application/json"  
        }) };
        
        // console.log("sent options : ", options);
        
        this._http.get(Config.reqDomain + Config.reqApiPoint + '/events/stats', options).map(response => response.json()).subscribe(data => {
            // console.log('event response : ', data);
            if(Boolean(data.success)===true){
                // console.log(data.message);
                this._statsObserver.next(data.message);   
            }
        }, error => console.log('Could not load statistics data.'));
    }
    
    pushNewChart(){
        let bar_data = {
            data: [["January", 20], ["February", 28], ["March", 4], ["April", 13], ["May", 17], ["June", 9]],
            color: "#3c8dbc"
        };
        this._statsObserver.next(bar_data);   
    }
    
}
