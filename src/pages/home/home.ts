import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Topic } from '../../../www/data/topics'
import { topics } from '../../../www/data/topics' 




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  
  topic: Topic[];
 // img: "img/mechnics.png"

  constructor(public navCtrl: NavController) {
    
    this.topic = topics
  }

  Action(topic: Topic){

  this.navCtrl.setRoot('DetailsPage', {topic})
    console.log("action performed")
  }

}
