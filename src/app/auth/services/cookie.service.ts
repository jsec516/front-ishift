import {Injectable} from "angular2/core";

// get global variable Cookies into the context
declare var Cookies: any;

@Injectable()
export class CookieService {
    cookies: any = Cookies; // Cookies is a global scope object

    constructor() {
    }

    getCookie(cookieName) {
        return this.cookies.get(cookieName);
    }

    getAllCookies() {
        return this.cookies.get();
    }

    setCookie(name: string, value: string, path: string = '/', domain: string, expiresInDays: any = 0) {
        var options: any = {};
        options.path = path;
        if (domain) {
            options.domain = domain;
        }
        if (expiresInDays) {
            options.expires = expiresInDays;
        }
        // console.log('options: ', options);

        this.cookies.set(name, value, options);
    }

    removeCookie(name: string) {
        this.cookies.remove(name);
    }
}
