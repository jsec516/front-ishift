import {Directive, OnDestroy, OnInit} from 'angular2/core';
import {AuthService} from '../services/auth.service';
import {ROUTER_DIRECTIVES, Router, Location} from "angular2/router";
import {Subject, Observable} from 'rxjs';

@Directive({
    selector: '[protected]'
})
export class ProtectedDirective implements OnInit, OnDestroy {
    private sub: any = null;

    constructor(
        private _auth: AuthService,
        private _router: Router,
        private _location: Location
    ) {

    }

    ngOnDestroy() {
        if (this.sub != null) {
            this.sub.unsubscribe();
        }
    }

    ngOnInit() {
        if (!this._auth.getToken()) {
            let counter = 0;
            this.sub = this._auth.authenticated
                .subscribe((loggedIn) => {
                    if (!loggedIn) {
                        if (!counter) {
                            counter++;
                            this._location.replaceState('/'); // clears browser history so they can't navigate with back button
                            this._auth.doLogout();
                        }
                    }
                });
        }
        
        // need to change auth.service in order to implement it
        // this._auth.authenticated
        //     .takeWhile((loggedIn:boolean) => loggedIn)
        //     .concat(Observable.defer(() => {
        //         this._location.replaceState('/');
        //         this._auth.doLogout(); // <-- this should really return its own Observable
        //         // rather than writing to the authenticated Subject
        //         return Observable.empty();
        //     }))
        //     .repeat()
        //     .subscribe((data:any) => console.log('firing for ', data));
    }
}
