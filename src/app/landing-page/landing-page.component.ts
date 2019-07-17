import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  visitorsList:any = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService
      .listVisitors()
      .subscribe(data => this.visitorsList = data)
  }
}
