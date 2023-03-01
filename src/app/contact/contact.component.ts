import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEnvelope, faMap } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Contact } from '../models/ContactData';
import { ContactsDataService } from '../services/contacts-data.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  addContactRequest: Contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
  constructor(private contactdataService: ContactsDataService, private router:Router) { }

  ngOnInit(): void {
  }
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMap = faMap;
  faPaperPlane = faPaperPlane;

  addContact() {
    this.contactdataService.addContact(this.addContactRequest)
      .subscribe({
        next: (contact) => {
          this.router.navigate([''])
          // console.log(contact);
        }
      });
  }


}
