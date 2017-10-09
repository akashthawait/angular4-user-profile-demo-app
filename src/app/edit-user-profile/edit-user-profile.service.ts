import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()
export class EditUserProfileService {
    private getApiUrl = 'http://localhost:5000/api/getUser';  // URL to web api
    private postApiUrl = 'http://localhost:5000/api/updateUser';  // URL to web api    
    constructor(private http: Http) { }
    getUserProfile(cb) {
        this.getDataFromDb().subscribe((response) => {
            cb(response)
        });
    }

    getDataFromDb() {
        return this.http.get(this.getApiUrl)
            .map(result => {
                return result.json()
            })
    }

    updateUserProfile(updateParams, cb) {
        this.updateUser(updateParams).subscribe((data)=>{
            console.log("Data: ",data);
            cb(data);
        })
    }

    updateUser(updateParams){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.postApiUrl, updateParams,options)
        .map((data)=>{
            return data.json()
        })
    }
}