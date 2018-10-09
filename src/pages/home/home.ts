import { FlightsPage } from './../flights/flights';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isAllowed: boolean;

  constructor(public navCtrl: NavController) {

  }

  checkPermision(allowed) {
    this.isAllowed = allowed;
    if(this.isAllowed) {
      this.navCtrl.push(FlightsPage);
    }
  }

}
