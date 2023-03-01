import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/ContactData';

@Injectable({
  providedIn: 'root'
})

export class ContactsDataService {

  ApiUrl: string = environment.baseApiUrl;

  constructor( private http: HttpClient ) { }

  getAllData(): Observable<Contact[]>{
    return this.http.get<Contact[]> (this.ApiUrl + '/api/Contacts')
  }

  addContact(addContactRequest:Contact): Observable<Contact>{
    return this.http.post<Contact>(this.ApiUrl + '/api/Contacts', addContactRequest);
  } 
}
