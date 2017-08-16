import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EventsListPage } from "../events-list/events-list"

@IonicPage()
@Component({
  selector: 'ede-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login () {
    this.navCtrl.push(EventsListPage);
  }

}
