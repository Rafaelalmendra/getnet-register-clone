import { CommonModule, NgIf, isPlatformServer } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  Inject,
  OnInit,
  Component,
  PLATFORM_ID,
  TransferState,
  makeStateKey,
} from '@angular/core';

import { GetOfferingsService } from './services';

import type { Offering } from './types';

import {
  HeroComponent,
  OffersComponent,
  MachinesComponent,
} from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    RouterOutlet,

    HeroComponent,
    OffersComponent,
    MachinesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
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
    }, 500);
  }
}
