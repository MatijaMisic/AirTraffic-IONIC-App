import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlightsPage } from './flights';

@NgModule({
  declarations: [
    FlightsPage,
  ],
  imports: [
    IonicPageModule.forChild(FlightsPage),
  ],
})
export class FlightsPageModule {}
