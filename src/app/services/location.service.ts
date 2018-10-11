import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../models/flight';

@Injectable()
export class LocationService {
  lat: number;
  long: number;
  flights: Flight[] = [];

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
    return response.then((res: any) => {
      this.flights = res.acList.map((flight) => {
        let direction:string = (flight.CNum % 2 === 0) ? "W" : "E";
        let altitude: number = Math.round(flight.Alt * 0.304);

         return new Flight(flight.Id, altitude, flight.Call, direction, flight.Man, flight.Mdl, flight.From, flight.To, flight.Op)
      })
    })
  }

  getFlights() {
    return this.flights.slice();
  }
}
