import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EventsProvider } from "../../providers/events/events";

@IonicPage()
@Component({
  selector: 'page-events-list',
  templateUrl: 'events-list.html',
})
export class EventsListPage {

  public data: object[];

  constructor (public navCtrl: NavController, 
              public navParams: NavParams,
              private eventsProvider: EventsProvider) {}

  ionViewDidLoad() {
    this.eventsProvider.getEvents().subscribe((data) => {
      this.data = data;
    })
  }

}
