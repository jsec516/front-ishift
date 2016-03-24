import {Injectable, Inject} from "angular2/core";
import {Observable, Subject, BehaviorSubject} from 'rxjs';
import {Http, Headers} from 'angular2/http'
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {AuthService} from '../../auth/core';
import {Resource} from '../../models';
import {Config} from '../../config';

@Injectable()
export class ResourceService {
    // latest events
    resources$: Observable<any>;
    
    private _resourcesObserver: any;
    
    constructor(
        private _router: Router,
        private _auth: AuthService,
        private _http: Http
    ) {
        // create resources observable
         this.resources$ = new Observable(observer => 
            this._resourcesObserver = observer).share();
    }
    
    loadResources(){
        let options = { "headers": new Headers({ 
            "Authorization": "Bearer " + this._auth.getToken(),
            "Content-Type": "application/json"  
        }) };
        
        // console.log("sent options : ", options);
        
        this._http.get(Config.reqDomain + '/api/rsource/', options)
        .map(response => response.json()).subscribe(data => {
            // console.log('event response : ', data);
            if(Boolean(data.success)===true){
                // console.log(data.message);
                this._resourcesObserver.next(data.message);   
            }
        }, error => console.log('Could not load resources.'));
    }
}
