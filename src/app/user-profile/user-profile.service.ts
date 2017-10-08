import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserProfileService {
    // private headers = new Headers({ 'Content-Type': 'application/json' });
    private apiUrl = 'http://localhost:5000/api/getUser';  // URL to web api
    constructor(private http: Http) { }
    
    getUserProfile(cb) {
       this.getDataFromDb().subscribe((response)=>{
           cb(response)
       });
    }

    getDataFromDb() {
        return this.http.get(this.apiUrl)
            .map(result => {
                return result.json()
            })
    }
}
