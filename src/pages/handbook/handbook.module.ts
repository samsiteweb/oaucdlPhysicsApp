import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HandbookPage } from './handbook';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@NgModule({
  declarations: [
    HandbookPage,
  ],
  imports: [
    IonicPageModule.forChild(HandbookPage),
  ],

  providers: [
    PhotoViewer
  ]
})
export class HandbookPageModule {}
