import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SingleFlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-flight',
  templateUrl: 'single-flight.html',
})
export class SingleFlightPage {
  logo: string;
  origin: string;
  destination: string;
  model: string;
  altitude: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.logo = this.getParams('logo');
    this.origin = this.getParams('origin');
    this.destination = this.getParams('destination');
    this.model = this.getParams('model');
    this.altitude = this.getParams('altitude');
  }

  getParams(data: string) {
    return this.navParams.get(data)
  }

}
