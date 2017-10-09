import { Component } from '@angular/core';

import { Headers, Http, RequestOptions } from '@angular/http';

import { AgmCoreModule } from '@agm/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gyms = [];
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom = 12;
  constructor(private http: Http) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
      });
      console.log(this.lat, this.lng);
      this.getGymLocation((locations) => {
        this.gyms = locations;
        console.log("gym " + this.gyms)
        console.log("gym length " + this.gyms.length)
      });

    }
  }

  getGymLocation(cb) {
    this.getNearByGym().subscribe((data) => {
      console.log("sucess " + JSON.stringify(data))
      // cb(data.results)
    })
  }
  getNearByGym() {
    let apiUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
    let data = {
      key: 'AIzaSyBoO7rCO5c3z2CDAOcLiTf57oESEKs_DiM',
      location: this.lat + ',' + this.lng,
      radius: '10000',
      sensor: 'false',
      rankby: 'prominence',
      types: 'gym|gyms'
    };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // headers.append('Access-Control-Allow-Credentials', 'true');
    // headers.append('Access-Control-Allow-Methods', '*');
    // headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', '*');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
    let options = new RequestOptions({ headers: headers });
    // return this.http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.lat + ',' + this.lng + '&radius=5000&type=gym&sensor=false&key=AIzaSyBoO7rCO5c3z2CDAOcLiTf57oESEKs_DiM', options)
    //   .map((response) => {
    //     response.json()
    //   })
    return this.http.post(apiUrl, data, options)
      .map((data) => {
        return data.json()
      })

  }
}
