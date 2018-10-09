import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LocationService {
  lat: number;
  long: number;


  constructor(private gelocation: Geolocation, private http: HttpClient) {

  }



  getPermisions() {
    return this.gelocation.getCurrentPosition()
    .then((response) => {
      this.lat = response.coords.latitude,
      this.long = response.coords.longitude;
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getLocation() {
    return {
      lat: this.lat,
      long: this.long
    }
  }

  fetchFlights() {
    const url = `http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?lat=${this.lat}&lng=${this.long}&fDstL=0&fDstU=100`;
    const response = this.http.get(url).toPromise();
    response.then((res) => {
      console.log(res);

    })
  }
}
