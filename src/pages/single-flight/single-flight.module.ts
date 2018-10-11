import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleFlightPage } from './single-flight';

@NgModule({
  declarations: [
    SingleFlightPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleFlightPage),
  ],
})
export class SingleFlightPageModule {}
