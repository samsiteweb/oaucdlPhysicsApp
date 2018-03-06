import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@IonicPage()
@Component({
  selector: 'page-handbook',
  templateUrl: 'handbook.html',
})
export class HandbookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private photoViewer: PhotoViewer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HandbookPage');
  }

  showFormular(){
    this.photoViewer.show('img/formula1.jpg');
  }
}
