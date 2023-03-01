import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscriber } from 'rxjs';
import { subscribers } from '../models/subscribers.model';
import { SubscribersService } from '../services/subscribers.service';




@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  email = "yuva@g.com"

  AddSubscriberRequest:subscribers = {
    email: '',
  };
  constructor(private subscribersService: SubscribersService, private router: Router) { }


  ngOnInit(): void {
  }

  addSubscriber() {
    if (this.AddSubscriberRequest.email == this.email) {
      this.router.navigate(['contacts_data'])

    }
    else {
      this.subscribersService.addSubscriber(this.AddSubscriberRequest)
        .subscribe({
          next: (subscriber) => {
            console.log(subscriber);
            if(confirm("success")){
            }
          }
        });

    }

  }


}
