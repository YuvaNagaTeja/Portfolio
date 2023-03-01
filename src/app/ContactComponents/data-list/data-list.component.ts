import { Component, OnInit } from '@angular/core';
import { faFaceMeh, faSmile, } from '@fortawesome/free-solid-svg-icons';
import { Contact } from 'src/app/models/ContactData';
import { ContactsDataService } from 'src/app/services/contacts-data.service';



@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  faFaceMeh=faFaceMeh;


  contact: Contact[] = [];
  constructor(private contactsDataService: ContactsDataService) { }

  ngOnInit(): void {
    this.contactsDataService.getAllData()
    .subscribe({
      next:(contact)=>{
        this.contact = contact;
      },
      error:(Response)=>{
        console.log(Response)
      },

    })
    // this.contact.push()

  }

}
