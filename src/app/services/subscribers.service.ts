import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { subscribers } from '../models/subscribers.model';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  ApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllSubscribers(): Observable<subscribers[]> {
    return this.http.get<subscribers[]>(this.ApiUrl + '/api/subscriber');

  }

  addSubscriber(AddSubscriberRequest: subscribers): Observable<subscribers>{
    return this.http.post<subscribers>(this.ApiUrl + '/api/subscriber',AddSubscriberRequest);
  }


}
