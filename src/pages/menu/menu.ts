import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Topic, topics } from '../../../www/data/topics';

export interface pageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage  {
rootPage = 'TabsPage';


topic: Topic[];

@ViewChild(Nav) nav: Nav;



pages: pageInterface[] = [
  {
    title: "Home", pageName: 'TabsPage',  tabComponent: HomePage, index: 0, icon: 'home'
  },
  {
    title: "Help Forum", pageName: 'TabsPage', tabComponent: 'ForumPage', index: 1, icon: 'contacts'
  },
  {
    title: "About", pageName: 'TabsPage', tabComponent: 'AboutUsPage', index: 2, icon: 'contact'
    
  },
  
  

  // {
  //   title: "Channels", pageName: 'TabsPage', tabComponent: 'MyChannelGenPage', index: 3, icon: 'contacts'
  // },
]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.topic = topics
  }

  Action(topic: Topic){
    // this.nav.pop()
    this.navCtrl.push('DetailsPage', {topic})
     
    }

  gotoPage(page: pageInterface) {
    let params ={};

    if (page.index) {
      params = {tabIndex: page.index}

    if (this.nav.getActiveChildNav() && page.index !== undefined) {
    //  this.nav.setRoot(page.pageName, params);
      this.nav.getActiveChildNav().select(page.index);
    } 

    }else {
      // page.index == 0;
      this.nav.setRoot(page.pageName, params);
     
    }

  }

  isActive(page: pageInterface){

      let childNav = this.nav.getActiveChildNav();

      if(childNav){
        if(childNav.getSelected() && childNav.getSelected().root == page.tabComponent)
        return 'primary'
      }

      
  }

  
}
