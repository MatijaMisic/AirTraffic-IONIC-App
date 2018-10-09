import { Geolocation } from '@ionic-native/geolocation';
import { Injectable } from '@angular/core';

@Injectable()
export class LocationService {

  constructor(private gelocation: Geolocation) {

  }



  getLocation() {
    return this.gelocation.getCurrentPosition()
  }

}
