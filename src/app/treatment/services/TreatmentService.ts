import {Injectable, Inject} from "angular2/core";
import {Observable, Subject, BehaviorSubject} from 'rxjs';
import {Http, Headers} from 'angular2/http'
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {AuthService} from '../../auth/core';
import {Treatment} from '../../models';
import {Config} from '../../config';

@Injectable()
export class TreatmentService {
    // latest events
    treatments$: Observable<any>;
    msg$: Subject<any> = new BehaviorSubject<any>('');

    private _treatsObserver: any;

    constructor(
        private _router: Router,
        private _auth: AuthService,
        private _http: Http
    ) {
        // create practitioners observable
         this.treatments$ = new Observable(observer => 
            this._treatsObserver = observer).share();
    }
    
    loadTreatments(){
        let options = { "headers": new Headers({ 
            "Authorization": "Bearer " + this._auth.getToken(),
            "Content-Type": "application/json"  
        }) };
        
        // console.log("sent options : ", options);
        
        this._http.get(Config.reqDomain + Config.reqApiPoint + '/service/?page=1&item=10', options)
            .map(response => response.json()).subscribe(data => {
            // console.log('event response : ', data);
            if(Boolean(data.success)===true){
                // console.log(data.message);
                this._treatsObserver.next(data.message);   
            }
        }, error => console.log('Could not load treatments.'));
    }

    save(formData:any): void{
        // TODO: make loading effect enabled
        // TODO: display success message with effect 
        // this.loading = true;
        let options = { "headers": new Headers({ 
            "Authorization": "Bearer " + this._auth.getToken(),
            "Content-Type": "application/json"  
        }) };
        this._http.post(
            Config.reqDomain + Config.reqApiPoint + '/service',
            JSON.stringify({ services: [formData] }),
            options
        ).map(response => response.json()).subscribe((res) => {
            // TODO: handle post response
            // {success:true, message: {contents: 'Service Added Successfully'}}
            if(res.success) {
                this.msg$.next({ type: 'success', content: res.message.contents });   
            } else {
                this.msg$.next({ type: 'error', content: res.message.contents }); 
            }
            
            // this.loading = false;
            }, error => this.msg$.next({ type: 'error', content: 'Could not post new service' }));
    }
}
