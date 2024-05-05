import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { GetOfferingsService } from './services';

import { HeroComponent, OffersComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroComponent, OffersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private offeringsService: GetOfferingsService) {}

  ngOnInit() {
    // this.offeringsService.getOfferings();
  }
}
