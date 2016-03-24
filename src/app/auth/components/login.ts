/*
 * Angular 2 decorators and services
 */
import {Component, OnInit, Injector} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {
FormBuilder,
Validators,
Control,
ControlGroup,
FORM_PROVIDERS,
FORM_DIRECTIVES} from 'angular2/common';

// local snippets
import {LoginForm} from '../forms/login.form';
import {AuthService} from '../services/auth.service';

declare var $: any;
/*
 * Login Component
 */
@Component({
    selector: 'login',
    host: { '[class.login-page]': 'loginPage' },
    providers: [...FORM_PROVIDERS],
    directives: [ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    pipes: [],
    styles: [`
    
  `],
    template: `
  <div class="login-box">
      <div class="login-logo">
        <a href=""><b>Q</b>clinic</a>
      </div><!-- /.login-logo -->
      <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <form action="#" (ngSubmit)="onSubmit()" #loginForm="ngForm" method="post">
          <div class="form-group has-feedback">
            <input type="email" class="form-control" placeholder="Email" 
            required [(ngModel)]="model.email" ngControl="email" #spy
            #email="ngForm" autofocus>
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Password" 
            required [(ngModel)]="model.password" ngControl="password">
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div class="row">
            <div class="col-xs-8">
            </div><!-- /.col -->
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
            </div><!-- /.col -->
          </div>
        </form>

        <a href="#">I forgot my password</a><br>
        <a href="{{injector.get('BASE_URL')}}" class="text-center">Register a new membership</a>

      </div><!-- /.login-box-body -->
    </div><!-- /.login-box -->
  `
})
export class Login implements OnInit {
    // local states
    user: string = '';
    password: string = '';
    model: LoginForm;
    loginPage: boolean;
    constructor(
        public injector: Injector,
        private _router: Router,
        private authService: AuthService
    ) {
        this.authService.loginError = '';
        this.model = new LoginForm('', '');
        this.loginPage = true;
    }

    // whether login request contains an error or not
    // when user submit a request for login to server
    get hasError() {
        return this.authService.loginError;
    }

    // retrieve the list of error so that it can beforeEach 
    // accessible in template
    get error() {
        return this.authService.loginError;
    }

    // submit the login form with proper credentials
    onSubmit() {
        this.authService.doLogin(this.model.email, this.model.password);
    }

    ngOnInit() {
  
        // $('body').addClass('login-page');
    }
}
