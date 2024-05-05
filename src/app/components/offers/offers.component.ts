import {
  Inject,
  OnInit,
  Component,
  PLATFORM_ID,
  makeStateKey,
  TransferState,
} from '@angular/core';
import { NgIf, NgFor, isPlatformServer } from '@angular/common';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { GetOfferingsService } from '../../services';

import type { Offering } from '../../types';

import { OfferCardComponent } from '../offer-card/offer-card.component';
import { SelectFilterComponent } from '../select-filter/select-filter.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [
    SlickCarouselModule,
    OfferCardComponent,
    SelectFilterComponent,
    NgFor,
    NgIf,
  ],

  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent implements OnInit {
  config = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  offerings: Offering[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private getOfferings: GetOfferingsService,
    private transferState: TransferState
  ) {
    this.platformId = platformId;
  }

  async ngOnInit(): Promise<void> {
    const offeringsKey = makeStateKey<Offering[]>('offerings');

    if (isPlatformServer(this.platformId)) {
      this.getOfferings.getOfferings().then((items) => {
        this.transferState.set(offeringsKey, items);
      });
    }

    setTimeout(() => {
      let recoveredOfferings = this.transferState.get(offeringsKey, []);
      this.offerings = recoveredOfferings;
    }, 300);
  }
}
