import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';

/**
 * Generated class for the FlightsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flights',
  templateUrl: 'flights.html',
})
export class FlightsPage {
  @ViewChild(Navbar) navbar: Navbar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlightsPage');
    this.navbar.hideBackButton = true;
  }

}
