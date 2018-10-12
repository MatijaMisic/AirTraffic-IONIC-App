import { SingleFlightPage } from './../single-flight/single-flight';
import { Flight } from './../../app/models/flight';
import { LocationService } from './../../app/services/location.service';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-flights',
  templateUrl: 'flights.html',
})
export class FlightsPage {
  @ViewChild(Navbar) navbar: Navbar;
  flights: Flight[] = [];
  interval: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private locationSv: LocationService, private loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightsPage');
    this.navbar.hideBackButton = true;

  }

  ionViewDidLeave(){
    clearInterval(this.interval);
  }

  ionViewWillEnter() {
    this.getFlights();
    this.interval = setInterval(() => {
      this.getFlights()
    }, 60000);

  }


  getFlights() {
    const loading = this.loadingCtrl.create({
      content: 'Getting flights...'
    })
    loading.present();
    this.locationSv.fetchFlights()
    .then((res) => {
      this.flights = this.locationSv.getFlights().sort((a, b) => {
        return b.altitude - a.altitude
      });
      loading.dismiss();
    })
  }

  singleFlightClicked(altitude, origin, destination, model, logo, ) {
    this.navCtrl.push(SingleFlightPage, {altitude, origin, destination, model, logo, })
  }
}
