import { Component } from '@angular/core';

import { OfferCardComponent } from '../offer-card/offer-card.component';
import { SelectFilterComponent } from '../select-filter/select-filter.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [OfferCardComponent, SelectFilterComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent {}
