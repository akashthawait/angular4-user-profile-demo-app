import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProfileService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiUrl = 'http://locahost:5000/api/getUser';  // URL to web api

    constructor(private http: Http) { }

    getUserProfile(){
       return this.http.get(this.apiUrl).map((response)=>response.json()).subscribe(
            (response)=> console.log(response)
        )
    }
}
