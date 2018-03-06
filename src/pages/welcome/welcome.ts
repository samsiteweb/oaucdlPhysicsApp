import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  pushQuestion(){
    this.navCtrl.push(HomePage)
  }
  pushHelp(){
    this.navCtrl.push('ForumPage')
  }
  pushAbout(){
    this.navCtrl.push('AboutUsPage')
  }
  pushFormula(){
    this.navCtrl.push('HandbookPage')
  }
}
