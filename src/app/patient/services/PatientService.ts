import {Injectable, Inject} from "angular2/core";
import {Observable, Subject, BehaviorSubject} from 'rxjs';
import {Http, Headers} from 'angular2/http'
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {AuthService} from '../../auth/core';
import {Patient} from '../../models';
import {Config} from '../../config';

@Injectable()
export class PatientService {
    // latest events
    patients$: Observable<any>;
    
    private _patientsObserver: any;
    
    constructor(
        private _router: Router,
        private _auth: AuthService,
        private _http: Http
    ) {
        // create practitioners observable
         this.patients$ = new Observable(observer => 
            this._patientsObserver = observer).share();
    }
    
    loadPatients(data){
        let options = { "headers": new Headers({ 
            "Authorization": "Bearer " + this._auth.getToken(),
            "Content-Type": "application/json"  
        }) };
        
        // console.log("sent options : ", options);
        
        this._http.get(Config.reqDomain + '/api/patient/search', options)
        .map(response => response.json()).subscribe(data => {
            // console.log('event response : ', data);
            if(Boolean(data.success)===true){
                // console.log(data.message);
                this._patientsObserver.next(data.message);   
            }
        }, error => console.log('Could not load patients.'));
    }
}
