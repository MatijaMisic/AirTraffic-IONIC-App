import { SingleFlightPage } from './../single-flight/single-flight';
import { Flight } from './../../app/models/flight';
import { LocationService } from './../../app/services/location.service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-flights',
  templateUrl: 'flights.html',
})
export class FlightsPage {
  @ViewChild(Navbar) navbar: Navbar;
  flights: Flight[] = [];
  interval: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private locationSv: LocationService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightsPage');
    this.navbar.hideBackButton = true;
    this.getFlights();
    this.interval = setInterval(() => {
      this.getFlights()
    }, 60000);

  }

  ionViewDidLeave(){

  }


  getFlights() {
    this.locationSv.fetchFlights()
    .then((res) => {
      this.flights = this.locationSv.getFlights().sort((a, b) => {
        return b.altitude - a.altitude
      });
      console.log(this.flights);
    })
  }

  singleFlightClicked(origin, destination, model, logo) {
    this.navCtrl.push(SingleFlightPage, {origin, destination, model, logo})
  }
}
