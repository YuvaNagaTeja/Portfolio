import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { subscribers } from 'src/app/models/subscribers.model';
import { SubscribersService } from 'src/app/services/subscribers.service';

@Component({
  selector: 'app-subscribers-data',
  templateUrl: './subscribers-data.component.html',
  styleUrls: ['./subscribers-data.component.css']
})
export class SubscribersDataComponent implements OnInit {


  subscribers: subscribers[] = [];
  constructor(private subscribersService: SubscribersService) { }


  ngOnInit(): void {
    this.subscribersService.getAllSubscribers()
      .subscribe({
        next: (subscribe) => {
          this.subscribers = subscribe;
        },
        error: (Response) => {
          console.log(Response);
        }
      })


  }

}
