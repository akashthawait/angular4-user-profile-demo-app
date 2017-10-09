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
  zoom = 18;
  constructor(private http: Http) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 18;
        this.getGymLocation(this.lat, this.lng, (locations) => {
          this.gyms = locations.data.results;
          console.log(this.gyms);
        });
      });
    }
  }

  getGymLocation(lat, lng, cb) {
    this.getNearByGym(lat, lng).subscribe((data) => {
      // console.log("success " + JSON.stringify(data))
      cb(data);
    })
  }
  getNearByGym(lat, lng) {
    console.log("Lat: ", lat, " Lng: ", lng);
    let apiUrl = "http://localhost:5000/api/getNearByGym"
    return this.http.get(apiUrl + '?lat=' + lat + '&lng=' + lng + '&radius=500&type=gym')
      .map((response) => {
        return response.json()
      })
  }
}
