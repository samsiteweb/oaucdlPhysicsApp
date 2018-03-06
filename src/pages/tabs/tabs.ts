import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot= HomePage;
  aboutRoot='AboutUsPage';
  forumRoot='LoginPage';
  welcomeRoot= 'WelcomePage';
  myIndex: number;


  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;

    if (this.myIndex===1) {
      this.navCtrl.setRoot('LoginPage')
    }
   
  }

  clicked(event){
    console.log('cl');
  }

}
