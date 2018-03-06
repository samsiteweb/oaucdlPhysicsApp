import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Topic } from '../../../www/data/topics';
import {Questions } from '../../../www/data/data.interface';
import {Energy, Mechanics, Newton, Waves, Electricity, Equilibrium, Heat, Atomic} from '../../../www/data/data'
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

getTopic: Topic;
getQuestions: Questions[]
number = 1;
energy = Energy

  constructor(public navCtrl: NavController, public navParams: NavParams, public alert: AlertController) {

    this.getTopic = this.navParams.get('topic')
  }

  ionViewWillLoad() {
    // this.getQuestions = this.getTopic.title;
    switch(this.getTopic.title) { 
      case "Energy": { 
        this.getQuestions = Energy
         break; 
      } 
      case "Mechanics": { 
        this.getQuestions = Mechanics
         break; 
      } 
      case "Newton’s law of motion": { 
        this.getQuestions = Newton
         break; 
      } 
      case "Waves": { 
        this.getQuestions = Waves
         break; 
      } 
      case "Electricity": { 
        this.getQuestions = Electricity
         break; 
      } 
      case "Equilibrium of forces": { 
        this.getQuestions = Equilibrium
         break; 
      } 
      case "Heat Energy": { 
        this.getQuestions = Heat
         break; 
      } 
      case "Atomic and Nuclear Physics": { 
        this.getQuestions = Atomic
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   } 
  }

  showAns(questions){
    let alert = this.alert.create({
      title: 'Answer',
      message: questions.answer,
      buttons: [
        {
          text: 'ok',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    alert.present();
  }

}
