import { Input, Inject, Component, PLATFORM_ID } from '@angular/core';
import { NgIf, NgFor, isPlatformBrowser } from '@angular/common';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import type { Offering } from 'types';

import { DrawerComponent } from '../drawer/drawer.component';
import { OfferCardComponent } from '../offer-card/offer-card.component';
import { SelectFilterComponent } from '../select-filter/select-filter.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    SlickCarouselModule,

    DrawerComponent,
    OfferCardComponent,
    SelectFilterComponent,
  ],

  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss',
})
export class OffersComponent {
  @Input({
    required: true,
  })
  offerings: Offering[] = [];

  carouselConfig = {
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

  openDetails: boolean = false;
  activeOffer: Offering | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.platformId = platformId;
  }

  handleOpenDetails(offer: Offering): void {
    this.activeOffer = offer;
    this.openDetails = true;

    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('no-scroll');
    }
  }

  handleCloseDetails(): void {
    this.openDetails = false;
    this.activeOffer = null;

    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('no-scroll');
    }
  }
}
