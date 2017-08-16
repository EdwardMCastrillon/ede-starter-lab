import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EventsProvider {

  constructor(public http: Http) {}

  public getEvents (): Observable<object[]> {
    const endpoint = "http://192.168.1.57:8000/api/events"
    return this.http.get(endpoint)
            .map(res => res.json())
            .catch((e) => {
              console.error("Error");
              return Observable.throw(e);
            });
  }
}
