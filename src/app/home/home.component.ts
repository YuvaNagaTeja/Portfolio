import { Component, OnInit } from '@angular/core';
import{faYoutube, faTwitter, faLinkedin}from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight, faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faYoutube=faYoutube;
  faTwitter=faTwitter;
  faLinkedin=faLinkedin;
  faArrowAltCircleRight=faArrowAltCircleRight;
  faArrowAltCircleDown=faArrowAltCircleDown;



}
