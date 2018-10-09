import { FlightsPage } from './../flights/flights';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isAllowed: boolean;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }

  checkPermision(allowed) {
    this.isAllowed = allowed;
    if(this.isAllowed) {
      this.navCtrl.push(FlightsPage);
      this.getLocation();
    }
  }

  getLocation() {
    this.geolocation.getCurrentPosition()
    .then((res) => {
      console.log(res.coords.latitude, res.coords.longitude);
    })
  }

}
