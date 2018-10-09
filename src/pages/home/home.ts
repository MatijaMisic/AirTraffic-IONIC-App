import { LocationService } from './../../app/services/location.service';
import { FlightsPage } from './../flights/flights';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isAllowed: boolean;
  coordinates: any;

  constructor(public navCtrl: NavController, private locationSv: LocationService) {

  }

  checkPermision(allowed) {
    this.isAllowed = allowed;
    if(this.isAllowed) {
      this.navCtrl.push(FlightsPage);
      this.locationSv.getLocation()
      .then((res) => {
        this.coordinates = {
          lat: res.coords.latitude,
          long: res.coords.longitude
        }
        console.log(this.coordinates);

      });
    }
  }
}
