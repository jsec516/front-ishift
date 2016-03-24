import {Injectable, Inject, Injector, EventEmitter} from "angular2/core";
import {Subject, BehaviorSubject} from 'rxjs';
import {Http, Headers} from 'angular2/http'
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';

// local snippets
import {CookieService} from './cookie.service';
import {Config} from '../../config';

@Injectable()
export class AuthService { 
    
    // local states
    // hold user authentication state
    // private authenticated: boolean = false;
    authenticated: Subject<Boolean> = new BehaviorSubject<Boolean>(false);

    private token: string;
    private expires: any = 0;
    private tokenCookieName: string = Config.tokenCookieName;
    
    // public local states
    public jwt: string = "";
    public loginError: string = "";
    public registerError: string = "";
    public successMsg: string = "";
    
    // injecting dependencies through constructor
    // initiate jwt with existing token (if any)
    constructor(private router: Router, private cookies: CookieService, private http: Http, private injector: Injector) {
        this.jwt = this.getToken();
        if (this.jwt) {
            this.pushAuthenticated();
        }
    }

    pushAuthenticated() {
        // push new data to the authenticated state
        this.authenticated.next(true);
    }
    
    // Try to login user with given credentials
    // if credentials valid then store token
    // if wrong credentials display error
    public doLogin(user: string, password: string) {
        
        // clear the state
        this.loginError = '';
        this.jwt = ""; // erase first, so if error is thrown, user is logged out.
        
        // prepare the params for request
        let body = JSON.stringify({ "user": user, "password": password });
        let options = { "headers": new Headers({ "Content-Type": "application/json" }) };
        
        // send the request 
        console.log(this.injector.get('BASE_URL'));
        this.http.post(Config.reqDomain + "/jwt", body, options)
            .map((res) => res.json())
            .subscribe(
            data => { this.saveJwt(data) },
            err => { throw err; },
            () => console.log('Authentication Complete'));
    }

    saveJwt(response: any): void {
        if (response.success) {
            // set expire time
            let expireSeconds = response.message.expires;
            this.expires = new Date();
            // console.log('before: ', this.expires.toUTCString());
            this.expires.setSeconds(this.expires.getSeconds() + expireSeconds);
            // console.log('after: ', this.expires.toUTCString());
            
            // setup token obj
            // let tokenObj = {token: response.message.token}
            // console.log('token : ', response.message.token);
            this.cookies.setCookie(this.tokenCookieName, response.message.token, '/', '', this.expires);
            if (this.cookies.getCookie(this.tokenCookieName)) {
                this.jwt = response.message;
                // push new data to the authenticated state
                this.pushAuthenticated();
                console.log('redirecting...');
                this.router.navigate(['Dashboard']);
            }
        } else {
            this.jwt = "";
            this.loginError = response.message;
        }
    }
    
    // Try to register user with their information
    // if successful, show success message
    // if failed, show error message
    public doRegister(registerFormData) {
        
        // clear the states
        this.registerError = '';
        this.successMsg = '';
        
        // prepare the request params
        let body = JSON.stringify(registerFormData);
        let options = { "headers": new Headers({ "Content-Type": "application/json" }) };
        
        // submit the request
        this.http.post(Config.reqDomain + "/register", body, options)
            .map(res => res.json())
            .subscribe(data => { this.performRegister(data) },
            err => { throw err; },
            () => console.log('Registration Complete'));
    }

    performRegister(response: any) {
        if (response.success) {
            this.successMsg = response.message;
        } else {
            this.registerError = response.message;
        }
    }
    
    // clear existing cookie
    // use it before logout
    private clearCookie() {
        this.cookies.removeCookie(this.tokenCookieName);
    }

    // logout user
    public doLogout() {
        this.clearCookie();
        this.authenticated.next(false);
        this.router.navigate(['Default']);
    }

    // make sure user is authenticated
    public isAuthenticated() {
        // comment it later
        // return true;
        return this.cookies.getCookie(this.tokenCookieName);
    }

    toogleAuthenticate() {
        // this.authenticated = !this.authenticated;
    }

    // return user token (if any)    
    public getToken() {
        return this.cookies.getCookie(this.tokenCookieName);
    }
}
